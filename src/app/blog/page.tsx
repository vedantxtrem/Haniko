import BlogCardSection from "@/component/BlogCardSection";
import React from "react";

function Blog() {
  const blogData = [
    {
      title: "Honey & Its Benefits",
      described:
        "Honey is packed with nutrients, antioxidants, and healing properties. If you're looking to add a healthy twist to your diet, honey can be an excellent substitute for sugar, providing both flavor and numerous health benefits. Let’s explore some of the key reasons why consuming honey can be great for your health.",
      image:
        "/blog/b1.webp",
      href: "/blog/honey-benefits",
      flex: "flex-row",
    },
    {
      title: "How Honey Gets Its Unique Taste from Different Flowers",
      described:
        "Honey, often considered nature's sweet gift, is more than just a delicious sweetener. Its taste, aroma, and even color vary depending on the type of flowers the bees visit to collect nectar. Each variety of honey offers a unique profile that is a direct reflection of the flowers in its environment, giving honey lovers an opportunity to explore a wide range of flavors. Whether it's fruity, floral, spicy, or earthy, every honey tells a story of its floral origins.",
      image:
        "/blog/b2.webp",
      href: "/blog/honey-flowers",
      flex: "flex-row-reverse",
    },
    {
      title: "Why Does Honey Crystallize?",
      described:
        "If you’ve ever noticed your honey turning thick and grainy over time, don’t worry—it’s a natural process called crystallization. While some people may think crystallized honey has gone bad, it’s actually a sign of pure, natural honey.",
      image:
        "/blog/b2.webp",
      href: "/blog/why-honey-crystallizes",
      flex: "flex-row",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-6xl font-semibold text-center mt-20 font-harman">
        Blog
      </h1>
      {blogData.map((blog, index) => (
        <BlogCardSection
          key={index}
          title={blog.title}
          described={blog.described}
          image={blog.image}
          href={blog.href}
          flex={blog.flex}
        />
      ))}
    </div>
  );
}

export default Blog;
