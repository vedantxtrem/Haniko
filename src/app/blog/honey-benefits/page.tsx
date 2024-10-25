import React from "react";

function Page() {
  const honeyBenefits = [
    {
      title: "Rich in Antioxidants",
      description:
        "Honey is packed with plant compounds that act as antioxidants, which help to combat oxidative stress in the body. These antioxidants can lower the risk of heart disease and reduce inflammation. The darker the honey, the higher the antioxidant levels, making raw, unprocessed honey particularly beneficial.",
    },
    {
      title: "Boosts Immunity",
      description:
        "Honey has natural antibacterial and antimicrobial properties. Some studies even suggest that honey can be effective against certain types of bacteria, including E. coli and Salmonella.",
    },
    {
      title: "Soothes Coughs and Sore Throats",
      description:
        "One of the most well-known benefits of honey is its ability to soothe sore throats and calm coughs. It acts as a natural cough suppressant and has been found to be as effective as over-the-counter medicines for treating upper respiratory infections. A spoonful of honey, especially when combined with warm water or tea, can provide quick relief for a scratchy throat.",
    },
    {
      title: "Promotes Digestive Health",
      description:
        "Honey has been used as a natural remedy for digestive issues for centuries. Its prebiotic properties help nourish the good bacteria in your gut, which is essential for healthy digestion. Honey may also be helpful in treating indigestion and improving gut health by balancing the bacteria in the intestines.",
    },
    {
      title: "Energy Booster",
      description:
        "If you&apos;re looking for a natural energy booster, honey is an excellent choice. Its natural sugars—glucose and fructose—are easily absorbed by the body, providing a quick source of energy. Athletes often use honey as a source of fuel before and after workouts to improve endurance and speed up recovery.",
    },
    {
      title: "Supports Heart Health",
      description:
        "Consuming honey may improve heart health by lowering blood pressure, improving cholesterol levels, and reducing triglycerides. Honey’s antioxidant properties help protect the heart from oxidative damage, while its anti-inflammatory effects contribute to overall cardiovascular health.",
    },
    {
      title: "Promotes Better Skin",
      description:
        "Honey&apos;s hydrating and antibacterial properties make it an excellent remedy for skin issues. Applying honey topically can help treat acne, hydrate dry skin, and even heal wounds. The antioxidants in honey also slow down the aging process, keeping your skin looking youthful.",
    },
  ];

  return (
    <main className="relative ">
      <img
        src='https://markfedpunjab.com/markfed/wp-content/uploads/2022/10/WEBSITE-BANNER2.1.png'
        alt="A variety of honey products"
        width={800}
        height={450}
        className="w-full h-[600px] md:p-10 bg-cover bg-center object-cover"
      />

      <div className="max-w-4xl mx-auto p-10 bg-white relative -top-52">
        <h1 className="text-3xl font-bold mb-10 text-gray-700 text-start">
          Honey and Its Benefits
        </h1>
        <p className="text-lg text-gray-600 mb-8 font-normal">
          Honey is packed with nutrients, antioxidants, and healing properties.
          If you&apos;re looking to add a healthy twist to your diet, honey can
          be an excellent substitute for sugar, providing both flavor and
          numerous health benefits. Let&rsquo;s explore some of the key reasons
          why consuming honey can be great for your health.
        </p>

        <ol className="space-y-6 list-decimal">
          {honeyBenefits.map((benefit, index) => (
            <li key={index} className="font-bold text-gray-600">
              <h3 className="font-bold text-gray-600">{benefit.title}</h3>
              <p className="text-gray-500 font-normal">{benefit.description}</p>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold my-5 text-gray-600 text-start">
          Conclusion
        </h3>
        <p className="text-gray-500 mb-4">
          Honey is not just a sweet treat; it&apos;s a superfood with a
          multitude of health benefits. From boosting your immune system to
          enhancing skin health, honey has earned its place as one of the most
          versatile natural remedies. Whether you add it to your tea, drizzle it
          over yogurt, or use it as a skincare treatment, incorporating honey
          into your daily routine is a simple yet powerful way to improve your
          overall well-being.
        </p>
        <p className="text-gray-500">
          For the best results, opt for <strong>Haniko Honey</strong> to ensure
          you&apos;re getting all the nutrients and healing properties that
          honey has to offer.
        </p>
      </div>
    </main>
  );
}

export default Page;
