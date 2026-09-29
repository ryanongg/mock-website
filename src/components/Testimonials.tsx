import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "Maya Torres",
    userName: "@mayatorres",
    comment: "Checkout was so fast I thought something went wrong. It didn't!",
  },
  {
    image: "https://i.pravatar.cc/150?img=22",
    name: "Derek Lin",
    userName: "@dereklin",
    comment:
      "I've had to return two items and both times the refund hit my card before I expected it. Great support team.",
  },
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "Priya Nair",
    userName: "@priyanair",
    comment:
      "The order tracking actually matches reality. My package showed up exactly when the app said it would.",
  },
  {
    image: "https://i.pravatar.cc/150?img=44",
    name: "Jonah Fischer",
    userName: "@jonahf",
    comment:
      "Search finds what I actually mean, not just keyword matches. Filters make it even easier to narrow down.",
  },
  {
    image: "https://i.pravatar.cc/150?img=55",
    name: "Alina Kowalski",
    userName: "@alinak",
    comment:
      "Switched to the Plus plan for the free 2-day shipping and it paid for itself in one order.",
  },
  {
    image: "https://i.pravatar.cc/150?img=66",
    name: "Marcus Webb",
    userName: "@marcusw",
    comment:
      "Wishlist plus price-drop alerts means I never overpay. This is how online shopping should feel.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Shoppers Love{" "}
        </span>
        Kartly
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Real feedback from real orders — on payments, search, and delivery.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
