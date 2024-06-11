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
        "A: Our design experts are here to help. Contact us for a personalized consultation to find pieces that match your style and needs.",
    },
    {
      question: "Q: What is your return policy?",
      answer:
        "A: We offer a hassle-free return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
    {
      question: "Q: Do you offer customization?",
      answer:
        "A: Yes, we provide custom design services to create furniture that perfectly fits your space and style preferences.",
    },
    {
      question: "Q: How long does delivery take?",
      answer:
        "A: Delivery times vary depending on the piece and customization options. Typically, it takes 2-4 weeks for delivery.",
    },
    {
      question: "Q: What materials do you use?",
      answer:
        "A: We use only the finest materials, including solid wood, premium fabrics, and durable metals, ensuring each piece is built to last.",
    },
    {
      question: "Q: Do you offer financing options?",
      answer:
        "A: Yes, we offer flexible financing options to help you bring home the furniture you love without breaking the bank.",
    },
    {
      question: "Q: Can I track my order?",
      answer:
        "A: Absolutely! Once your order is shipped, we provide tracking information so you can monitor the delivery progress.",
    },
    {
      question: "Q: How do I care for my furniture?",
      answer:
        "A: Each piece comes with care instructions. Generally, we recommend regular dusting, avoiding direct sunlight, and using protective pads under heavy objects.",
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
