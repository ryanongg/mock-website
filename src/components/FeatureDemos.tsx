import { CheckoutSimulator } from "./CheckoutSimulator";
import { SearchPlayground } from "./SearchPlayground";
import { OrderTracker } from "./OrderTracker";

export const FeatureDemos = () => {
  return (
    <section id="demos" className="container py-24 sm:py-32 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Try{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Kartly's Features
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mt-4">
          Live, in-browser demos of payments, search, and order tracking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CheckoutSimulator />
        <SearchPlayground />
        <OrderTracker />
      </div>
    </section>
  );
};
