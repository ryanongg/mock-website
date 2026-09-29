import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  charge,
  MAX_RETRIES,
  RETRY_BACKOFF_SECONDS,
  SUPPORTED_METHODS,
  TIMEOUT_SECONDS,
  PaymentDeclinedError,
} from "@/lib/payment";
import type { ChargeAttempt } from "@/lib/payment";

export const CheckoutSimulator = () => {
  const [log, setLog] = useState<ChargeAttempt[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [failFirst, setFailFirst] = useState(2);

  const runSimulation = async () => {
    setRunning(true);
    setLog([]);
    setResult(null);

    try {
      const { result: charged } = await charge(
        "demo-order-001",
        4999,
        "card",
        async (attempt) => {
          const outcome = attempt <= failFirst ? "timeout" : "captured";
          await new Promise((r) => setTimeout(r, 400));
          const entry: ChargeAttempt = { attempt, outcome, waitedMs: 400 };
          setLog((prev) => [...prev, entry]);
          return entry;
        }
      );
      setResult(
        `Captured on attempt ${charged.attempts}/${MAX_RETRIES} — transaction ${charged.transactionId.slice(0, 8)}`
      );
    } catch (err) {
      if (err instanceof PaymentDeclinedError) {
        setResult(`Declined after ${MAX_RETRIES} attempts`);
      } else {
        setResult("Unexpected error");
      }
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Checkout Retry Simulator</CardTitle>
        <CardDescription>
          Simulates src/lib/payment.ts's charge() flow: up to{" "}
          {MAX_RETRIES} attempts, {RETRY_BACKOFF_SECONDS}s backoff,{" "}
          {TIMEOUT_SECONDS}s processor timeout.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {SUPPORTED_METHODS.map((m) => (
            <Badge key={m} variant="secondary">
              {m}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Simulate this many timeouts before success:</span>
          <input
            type="number"
            min={0}
            max={MAX_RETRIES}
            value={failFirst}
            onChange={(e) => setFailFirst(Number(e.target.value))}
            className="w-16 rounded border bg-background px-2 py-1"
          />
        </div>

        <Button onClick={runSimulation} disabled={running}>
          {running ? "Processing..." : "Simulate Payment"}
        </Button>

        <div className="space-y-1 text-sm">
          {log.map((entry) => (
            <div key={entry.attempt}>
              Attempt {entry.attempt}:{" "}
              <span
                className={
                  entry.outcome === "captured"
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                {entry.outcome}
              </span>
            </div>
          ))}
        </div>

        {result && <p className="font-medium">{result}</p>}
      </CardContent>
    </Card>
  );
};
