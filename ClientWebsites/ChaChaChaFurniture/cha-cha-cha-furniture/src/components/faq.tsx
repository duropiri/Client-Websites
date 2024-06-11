import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const faqs = [
    {
      question: "Q: How do I choose the right furniture for my home?",
      answer:
        "A: Start by considering your space, style, and needs. Our in-store experts are here to help you make the perfect choice. Plus, with our new Buy on Credit offer, you can bring home your favorite pieces today and pay over time.",
    },
    {
      question: "Q: What is your return policy?",
      answer:
        "A: We offer a hassle-free return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Visit our store to learn more about our credit terms and how they apply to returns.",
    },
    {
      question: "Q: Do you offer customization?",
      answer:
        "A: Yes, we provide custom design services to create furniture that perfectly fits your space and style preferences. Contact us or visit our store to explore customization options and apply for credit to finance your custom pieces.",
    },
    {
      question: "Q: How long does delivery take?",
      answer:
        "A: Delivery times vary depending on the piece and customization options. Typically, it takes 2-4 weeks for delivery. Enjoy your new furniture immediately with our Buy on Credit option, and we'll handle the rest.",
    },
    {
      question: "Q: What materials do you use?",
      answer:
        "A: We use only the finest materials, including solid wood, premium fabrics, and durable metals, ensuring each piece is built to last. Upgrade your home with confidence using our flexible credit plans.",
    },
    {
      question: "Q: Do you offer financing options?",
      answer:
        "A: Yes, we now offer Buy on Credit options. This allows you to enjoy your new furniture immediately and pay over time. Visit our store to apply and get approved quickly.",
    },
    {
      question: "Q: Can I track my order?",
      answer:
        "A: Absolutely! Once your order is shipped, we provide tracking information so you can monitor the delivery progress. With our Buy on Credit offer, you can start enjoying your new furniture while we ensure it gets to you.",
    },
    {
      question: "Q: How do I care for my furniture?",
      answer:
        "A: Each piece comes with care instructions. Generally, we recommend regular dusting, avoiding direct sunlight, and using protective pads under heavy objects. Visit our website or contact us for specific care tips for your purchased items.",
    },
  ];

  return (
    <section
      id="faq"
      className="container relative flex flex-col items-start justify-center w-full h-auto "
    >
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full py-12 gap-10">
        <h2 className="text-4xl text-center max-w-[30ch]">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-screen-lg">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="p-3">
              <AccordionTrigger>
                <p className="text-lg font-semibold text-start">
                  {faq.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
});
FAQ.displayName = "FAQ";

export default FAQ;
