import { useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  searchProducts,
  INDEX_REFRESH_INTERVAL_SECONDS,
  MAX_RESULTS,
  RANKING_WEIGHTS,
  SYNONYM_EXPANSION_ENABLED,
  type Product,
} from "@/lib/search";

const CATALOG: Product[] = [
  { id: "1", name: "Trail Running Shoes", category: "Footwear", relevance: 0.9, popularity: 0.6, recency: 0.4, synonyms: ["sneakers", "running shoes"] },
  { id: "2", name: "Canvas Sneakers", category: "Footwear", relevance: 0.7, popularity: 0.9, recency: 0.8, synonyms: ["sneakers", "trainers"] },
  { id: "3", name: "Wireless Earbuds", category: "Electronics", relevance: 0.8, popularity: 0.95, recency: 0.9, synonyms: ["headphones", "earphones"] },
  { id: "4", name: "Over-Ear Headphones", category: "Electronics", relevance: 0.6, popularity: 0.5, recency: 0.3, synonyms: ["headphones", "earbuds"] },
  { id: "5", name: "Ultralight Laptop", category: "Electronics", relevance: 0.85, popularity: 0.7, recency: 0.95, synonyms: ["notebook", "computer"] },
  { id: "6", name: "Ceramic Coffee Mug", category: "Home", relevance: 0.4, popularity: 0.3, recency: 0.2, synonyms: [] },
  { id: "7", name: "Standing Desk", category: "Home", relevance: 0.5, popularity: 0.4, recency: 0.6, synonyms: [] },
];

export const SearchPlayground = () => {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchProducts(query, CATALOG), [query]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Search Playground</CardTitle>
        <CardDescription>
          Powered by src/lib/search.ts — index refreshes every{" "}
          {INDEX_REFRESH_INTERVAL_SECONDS}s, caps at {MAX_RESULTS} results,
          weights relevance {RANKING_WEIGHTS.relevance}, popularity{" "}
          {RANKING_WEIGHTS.popularity}, recency {RANKING_WEIGHTS.recency}.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Try “sneakers”, “headphones”, or “laptop”"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {SYNONYM_EXPANSION_ENABLED && (
          <Badge variant="secondary">Synonym expansion on</Badge>
        )}

        <div className="space-y-2">
          {results.length === 0 && query && (
            <p className="text-sm text-muted-foreground">No matches.</p>
          )}
          {results.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded border p-2 text-sm"
            >
              <span>{product.name}</span>
              <span className="text-muted-foreground">{product.category}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
