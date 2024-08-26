
import React, { useState } from 'react';

// FAQs array
const faqs = [
  {
    question: "How many levels are there in Space Waves?",
    answer: "Space Waves features a total of 33 levels, each with its own set of obstacles and difficulty.",
  },
  {
    question: "Can I choose the level I want to play?",
    answer: "Yes, Space Waves allows you to select any level you wish to play, including the most challenging ones right from the start.",
  },
  {
    question: "What types of obstacles will I encounter in the game?",
    answer: "Players will face various obstacles including walls, rotating cogs, and thorns throughout the levels.",
  },
  {
    question: "How does the difficulty increase in Space Waves?",
    answer: "Difficulty increases with each level, featuring tighter angles and more obstacles. \"Green\" levels offer wider spaces and angles, making them easier compared to higher difficulty levels.",
  },
  {
    question: "What is the main goal of each level?",
    answer: "The objective of each level is to navigate your arrow to the end without crashing into any obstacles.",
  }
];

export default function FAQ() {
  // State to manage which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index: any) => {
    // Toggle the FAQ: if already open, close it; if closed, open it.
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-500 lg:max-w-lg">
            About Space Waves
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col">
          {faqs.map((faq, index) => (
            <>
              <div
                key={index}
                className="relative my-3 w-full rounded-md px-12 py-8"
              >
                <div className="max-w-2xl">
                  <h2
                    className="text-xl font-bold text-black"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h2>
                  {openFAQ === index && (
                    <p className="font-inter mt-4 text-base font-light text-gray-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    {openFAQ !== index && (
                      <path
                        d="M12 7.05005V16.95"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <div className="mr-4 ml-8 border border-gray-200"></div>
            </>
          ))}
        </div>
        {/* <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#" className="text-black font-bold">
            {" "}
            customer support team.
          </a>
        </p> */}
      </div>
    </section>
  );
}