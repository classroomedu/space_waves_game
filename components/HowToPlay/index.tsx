import React from 'react';

export default function HowToPlay() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How to Play Space Waves?
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          {/* All 33 levels of Space Waves share a common goal: guide your arrow to the end of each level without crashing into walls,
          rotating cogs, or thorns. Each level varies in difficulty. */}
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-xl gap-6">
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">1</p>
            </div>
            <p className="text-sm sm:text-base">
              All 33 levels of Space Waves share a common goal: guide your arrow to the end of each level without crashing into walls, rotating cogs, or thorns. Each level varies in difficulty.
            </p>
          </div>
           {/* Item */}
           <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">2</p>
            </div>
            <p className="text-sm sm:text-base">
              Choosing a "green" level provides wider spaces and angles, allowing you to build up some straight momentum. As the difficulty increases, you'll encounter more obstacles, tighter angles, and a greater challenge.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">3</p>
            </div>
            <p className="text-sm sm:text-base">
              Space Waves lets you pick any level you wish, so you can jump straight into the hardest levels to test your quick reaction times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}