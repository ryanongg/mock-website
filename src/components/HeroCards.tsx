import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { WalletIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://i.pravatar.cc/150?img=47"
            />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Sam Wu</CardTitle>
            <CardDescription>@samwu</CardDescription>
          </div>
        </CardHeader>

        <CardContent>My order showed up a day early. Checkout took seconds!</CardContent>
      </Card>

      {/* Order status */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Order #10482</CardTitle>
          <CardDescription className="font-normal text-primary">
            Out for delivery
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Your package is on its way and should arrive by 6pm today.
          </p>
        </CardContent>

        <CardFooter>
          <Badge variant="secondary" className="text-sm">
            Live tracking enabled
          </Badge>
        </CardFooter>
      </Card>

      {/* Membership */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            No commitment, upgrade any time as your shopping needs grow.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Shopping</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Free shipping over $35", "Standard returns", "Order tracking"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Feature */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <WalletIcon />
          </div>
          <div>
            <CardTitle>Secure payments</CardTitle>
            <CardDescription className="text-md mt-2">
              Cards, wallets, and buy-now-pay-later — all encrypted end to
              end.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
