import { Disclosure } from '@headlessui/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is CSS minification?',
      answer: 'CSS minification is the process of reducing CSS file size by removing unnecessary characters like whitespace, newlines, and comments without changing its functionality. This results in faster loading times for your website.',
    },
    {
      question: 'Is it safe to use minified CSS?',
      answer: 'Yes, minified CSS is completely safe to use. It contains the exact same rules as your original CSS, just with unnecessary characters removed. The browser interprets it exactly the same way.',
    },
    {
      question: 'Will minification break my CSS?',
      answer: 'No, proper minification should never break your CSS. Our tool carefully preserves all functional aspects of your CSS while only removing unnecessary characters and optimizing the file size.',
    },
    {
      question: 'Can I revert minified CSS?',
      answer: 'While minification itself is not reversible, we recommend keeping a copy of your original, unminified CSS for future editing. The minified version should only be used in production.',
    },
    {
      question: 'Is there a file size limit?',
      answer: 'Our tool can handle CSS files up to several megabytes in size. However, for optimal performance, we recommend processing files under 1MB at a time.',
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border rounded-lg dark:border-gray-700">
                  <Disclosure.Button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span className="font-semibold dark:text-white">{faq.question}</span>
                    {open ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 text-gray-600 dark:text-gray-300 border-t dark:border-gray-700">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
