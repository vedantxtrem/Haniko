
import Image from "next/image"

export default function Product() {
  const categories = [
    { name: "Beehive", icon: "/image/honey.jpg" },
    { name: "Beekeepar", icon: "/image/honey.jpg" },
    { name: "Honey", icon: "/image/honey.jpg" },
    { name: "Beekeepar", icon: "/image/honey.jpg" },
    { name: "Beekeeping", icon: "/image/honey.jpg" },
    { name: "Honeybee", icon: "/image/honey.jpg" },
  ]

  const products = [
    { name: "Organic Honey", price: 120, oldPrice: 150, image: "/placeholder.svg", sale: true, discount: 20 },
    { name: "Raw Honey", price: 180, oldPrice: 200, image: "/placeholder.svg", sale: true },
    { name: "Wild flower Honey", price: 100, oldPrice: 120, image: "/placeholder.svg", discount: 20 },
    { name: "Natural Honey", price: 120, oldPrice: 150, image: "/placeholder.svg" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-navy-900 mb-8">Best Quality Product</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <div key={index} className={`flex flex-col items-center p-4 rounded-lg ${index === 0 ? 'bg-yellow-400' : 'bg-blue-100'}`}>
            <Image src={category.icon} alt={category.name} width={40} height={40} className="mb-2" />
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative mb-4">
              <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-auto" />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">Sale</span>
              )}
              {product.discount && (
                <span className="absolute top-2 right-2 bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-xl font-bold text-yellow-500">${product.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice}</span>
              </div>
            </div>
            <button className="w-full bg-navy-900 text-white py-2 px-4 rounded hover:bg-navy-800 transition-colors flex items-center justify-center">
              {/* <ShoppingCart className="w-5 h-5 mr-2" /> */}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}