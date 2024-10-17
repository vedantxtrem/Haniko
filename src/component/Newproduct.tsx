import React from 'react';

// Define new Pexels asset images
const assets = [
  'https://images.pexels.com/photos/15286/pexels-photo.jpg', // Replace with actual Pexels image URLs
  'https://images.pexels.com/photos/144770/pexels-photo-144770.jpeg',
  'https://images.pexels.com/photos/34950/pexels-photo.jpg',
  'https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg',
];

// Image function
const getImageUrl = (url:string) => url;

const headlines = [
  'Explore our world',
  'View all its beauty',
  'Take lots of photos',
  'Each one of them pretty',
];

export default function Newproduct() {
  return (
    <div>
      {headlines.map((headline, index) => (
        <section
          key={index}
          className="relative w-screen h-screen hero"
          id={`section-${index}`}
        >
          <figure
            className="fixed top-0 left-0 w-full h-full bg-cover"
            style={{ backgroundImage: `url(${getImageUrl(assets[index])})` }}
          ></figure>
          <div className="absolute inset-0 overflow-hidden">
            <h2 className="fixed top-0 left-0 flex items-center justify-center w-full h-full px-4 text-white text-center text-8vw md:text-6xl font-serif">
              {headline}
            </h2>
          </div>
        </section>
      ))}

      {/* Content Section */}
      <section className="relative mx-auto my-8 px-4 py-16 bg-white content">
        <div className="relative max-w-3xl mx-auto content__inner">
          <h1 className="text-3xl md:text-4xl font-serif text-center">
            Some Happy Little Text
          </h1>
          <h3 className="flex justify-between items-center text-xl font-serif mb-8">
            <span className="flex-1 bg-green-200 h-1 mr-4"></span> By Bob Ross{' '}
            <span className="flex-1 bg-green-200 h-1 ml-4"></span>
          </h3>

          <p className="text-lg leading-relaxed">
            A thin paint will stick to a thick paint. The shadows are just like
            the highlights, but we're going in the opposite direction. When you
            do it your way you can go anywhere you choose.
          </p>

          {/* Additional paragraphs */}
          <p className="text-lg leading-relaxed">
            You have to make almighty decisions when you're the creator. When
            you buy that first tube of paint it gives you an artist license.
          </p>

          {/* Blockquotes */}
          <blockquote className="relative pl-6 text-2xl font-serif leading-tight">
            <div className="absolute top-0 left-0 w-1 bg-green-300 h-full"></div>
            When you do it your way you can go anywhere you choose.
          </blockquote>

          {/* More content */}
          <p className="text-lg leading-relaxed">
            The first step to doing anything is to believe you can do it. See it
            finished in your mind before you ever start.
          </p>

          <blockquote className="relative pl-6 text-2xl font-serif leading-tight">
            <div className="absolute top-0 left-0 w-1 bg-green-300 h-full"></div>
            Don't fight it, use what happens.
          </blockquote>
        </div>
      </section>
    </div>
  );
}
