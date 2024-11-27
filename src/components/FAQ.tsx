import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer: "Contact our support team to get your unique referral code.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer: "Contact our support team to get your unique referral code.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2747] via-[#0A0F1C] to-[#0A0F1C] opacity-50"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 shadow-lg">
        <h2 className="text-5xl font-bold text-center mb-12 font-display">
          <span className="text-yellow-400">FAQs</span>
        </h2>

        <div className=" ">
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-gray-800"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" border-t border-gray-800 rounded-lg overflow-hidden "
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-yellow-400 text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
