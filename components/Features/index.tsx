import React from 'react';

const configs = [
  {
    title: '33 Challenging Levels',
    description: 'Each level presents unique obstacles, with increasing difficulty as you progress.',
  },
  {
    title: 'Dynamic Difficulty',
    description: 'Players can choose from "green" levels with wider spaces and angles, or opt for more difficult levels with tighter angles and more obstacles. ',
  },
  {
    title: 'Precision Navigation',
    description: 'The game tests your ability to guide an arrow through various hazards without crashing.',
  },
  {
    title: 'Variety of Obstacles',
    description: 'Encounter walls, rotating cogs, and thorns as you navigate through the levels.',
  },
]

export default function Features() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
          Key Features
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12">
          Thoughtful design provides users with a better experience.
        </p>
        {/* List */}
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          {
            configs.map(config => {
              return (
                <li key={config.title} className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                    alt=""
                    className="inline-block h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-xl font-semibold">{config.title}</p>
                  <p className="text-center text-sm text-gray-500">
                    {config.description}
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}