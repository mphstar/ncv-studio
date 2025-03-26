import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What services does NCV offer?",
    answer:
      "We provide services such as motion graphics, illustration, 3D motion, live2D (optional), mixing and mastering, music videos (MV), and video production.",
  },
  {
    id: "02",
    question: "Do I need to make a reservation in advance?",
    answer:
      "Yes, we recommend making a reservation in advance so our team can provide the best service tailored to your needs.",
  },
  {
    id: "03",
    question: "Are there flexible service packages available?",
    answer:
      "We offer various service packages that can be customized for both small and large projects, depending on the client's needs.",
  },
  {
    id: "04",
    question: "What payment methods are accepted?",
    answer:
      "We accept payments via bank transfer, e-wallets, and credit cards. On-site payments are also available for certain services.",
  },
];

export default function FAQSection() {
  return (
    <section className="pt-6">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We are ready to answer your questions about NCV services.
        </motion.p>
        <div className="">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
