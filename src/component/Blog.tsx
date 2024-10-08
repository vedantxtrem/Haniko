import Image from 'next/image'
import { FaUser, FaCalendar, FaComments } from 'react-icons/fa'

export default function BlogSection() {
  const blogPosts = [
    {
      title: "How many calories are in honey?",
      category: "Service",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec...",
      image: "/placeholder.svg?height=200&width=300",
      author: "Alex",
      date: "January 10, 2021",
      comments: 3
    },
    {
      title: "One pound of honey",
      category: "Honey",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec...",
      image: "/placeholder.svg?height=200&width=300",
      author: "Alex",
      date: "January 9, 2021",
      comments: 2
    },
    {
      title: "What is honey?",
      category: "Beekeeping",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec...",
      image: "/placeholder.svg?height=200&width=300",
      author: "Alex",
      date: "January 8, 2021",
      comments: 4
    }
  ]

  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0">
        <div className="w-12 h-12 bg-amber-400 transform rotate-45 translate-x-6 -translate-y-6"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">RECENT POSTS</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Blog</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <span className="text-amber-500 text-sm mb-2 inline-block">{post.category}</span>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaComments className="mr-2" />
                      <span>{post.comments} Comments</span>
                    </div>
                    <button className="text-amber-500 hover:text-amber-600 transition-colors">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}