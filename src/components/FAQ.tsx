import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical fumigation treatment take?",
      answer:
        "Most residential treatments take 2-4 hours, while commercial properties may take 4-8 hours depending on size and pest severity. We'll provide a time estimate during our initial inspection.",
    },
    {
      question: "Are your fumigation chemicals safe for children and pets?",
      answer:
        "Yes, we use eco-friendly, low-toxicity products that are safe when applied correctly. We recommend temporary relocation during treatment and provide specific re-entry guidelines for your safety.",
    },
    {
      question: "How often should I schedule pest control services?",
      answer:
        "For prevention, we recommend quarterly treatments. However, frequency depends on your location, property type, and pest history. We'll create a customized schedule during consultation.",
    },
    {
      question: "Do you offer guarantees on your services?",
      answer:
        "Yes! We provide warranties ranging from 3-12 months depending on the service. If pests return within the warranty period, we'll re-treat at no additional cost.",
    },
    {
      question: "What should I do to prepare for fumigation?",
      answer:
        "We'll provide a detailed preparation checklist, but generally you'll need to remove food items, cover furniture, and ensure access to treatment areas. We guide you through each step.",
    },
    {
      question: "Do you provide emergency pest control services?",
      answer:
        "Yes, we offer 24/7 emergency services for urgent pest situations. Emergency calls are typically addressed within 2-4 hours of contact.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-4">FAQ</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our fumigation and pest
            control services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
      </div>
    </section>
  );
};

export default FAQ;
