
import React, { useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <a href="#">
            <img src="/images/logo.png" width={40} height={40} />
          </a>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            {/* <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-inter lg: rounded-lg pb-8 lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              FAQs
            </a> */}
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            <LocaleSwitcher />
            {/* <a
              className="font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800"
              href="#"
            >
              Login
            </a> */}
          </div>
        </div>
      </nav>
    </section>
  );
}