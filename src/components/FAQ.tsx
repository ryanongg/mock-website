import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What payment methods does Kartly accept?",
    answer:
      "We accept all major credit and debit cards, Apple Pay, Google Pay, and buy-now-pay-later through our checkout partner. Every transaction is encrypted end to end and PCI-compliant.",
    value: "item-1",
  },
  {
    question: "Is it safe to save my card details?",
    answer:
      "Yes. We never store raw card numbers on our servers — payments are tokenized and processed through a certified payment provider, so your details stay protected even if you save them for next time.",
    value: "item-2",
  },
  {
    question: "How does search find the right products for me?",
    answer:
      "Our search understands what you mean, not just the words you type, and ranks results using filters, category, and your browsing history so the most relevant items show up first.",
    value: "item-3",
  },
  {
    question: "Can I track my order after I check out?",
    answer:
      "Absolutely. Every order gets a live tracking page showing each step from warehouse to doorstep, plus an estimated delivery window that updates in real time.",
    value: "item-4",
  },
  {
    question: "What happens if my package is late or lost?",
    answer:
      "Reach out to support with your order number and we'll investigate with the carrier immediately. If it can't be located, we'll reship or refund you, no questions asked.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
