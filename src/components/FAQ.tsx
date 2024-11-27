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
    <section className="px-6 p-8 bg-gray-800/30 backdrop-blur-xl rounded-xl max-w-7xl w-[90%] mx-auto text-white mb-20 relative">
      <div className="absolute top-0 left-30 md:w-56 md:h-56 w-36 h-48 sm:w-48 sm:h-48 sm:block rounded-7xl bg-[#EDD955]/30 blur-3xl" />
      <h2 className="text-5xl font-bold text-center mb-12 font-display">
        <span className="text-yellow-400">FAQs</span>
      </h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 shadow-lg">
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
