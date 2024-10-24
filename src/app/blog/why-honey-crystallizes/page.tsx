import React from 'react'

function page() {
  return (
    <main className="max-w-6xl mx-auto p-10 my-20">
      <header>
        <h1 className="text-3xl font-bold mb-10 text-gray-700 text-start">
          Why Does Honey Crystallize?
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          If you’ve ever noticed your honey turning thick and grainy over time,
          don’t worry—it’s a natural process called crystallization. While some
          people may think crystallized honey has gone bad, it’s actually a sign
          of pure, natural honey.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-5">
          The Science Behind Crystallization
        </h2>
        <p className="text-gray-500 mb-4">
          Honey is made up of two main sugars: glucose and fructose. The balance
          between these sugars determines how quickly honey crystallizes.
          Glucose, in particular, tends to form crystals because it’s less
          soluble in water than fructose. Over time, glucose separates from the
          water and forms small crystals, causing the honey to thicken.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-5">
          Factors That Affect Crystallization
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-500">
          <li>
            <strong>Flower Source:</strong> Honey from flowers rich in glucose,
            like clover or dandelion, crystallizes faster than honey from
            flowers higher in fructose, such as acacia.
          </li>
          <li>
            <strong>Temperature:</strong> Honey crystallizes more quickly at
            cooler temperatures, especially below 50°F (10°C). Storing honey in
            the fridge accelerates crystallization, while keeping it in a warmer
            place slows it down.
          </li>
          <li>
            <strong>Purity:</strong> Raw, unfiltered honey crystallizes faster
            than processed honey because it contains natural particles like
            pollen and beeswax, which act as seeds for crystals to form.
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-5">
          How to Re-liquify Crystallized Honey
        </h2>
        <p className="text-gray-500 mb-4">
          To bring crystallized honey back to its liquid state, simply place the
          jar in warm water (not boiling) and stir until the crystals dissolve.
          Avoid microwaving honey, as this can destroy some of its beneficial
          enzymes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 mb-5">
          Embrace the Crystals
        </h2>
        <p className="text-gray-500 mb-4">
          Crystallization is a natural process and doesn’t affect the quality or
          taste of honey. Some even prefer crystallized honey for its creamy
          texture, which makes it perfect for spreading on toast or stirring into
          tea.
        </p>
      </section>
    </main>
  )
}

export default page