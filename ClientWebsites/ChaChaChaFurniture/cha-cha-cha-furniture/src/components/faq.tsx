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
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
    },
    {
      question: "Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answer:
        "A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt.",
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