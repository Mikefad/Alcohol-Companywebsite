import scotch from './assets/stanimir-filipov-VcFOVu4rqHU-unsplash.jpg'
import vodca from './assets/zhivko-minkov-OzaAMXxlq2c-unsplash.jpg'
import gin from './assets/zhivko-minkov-ykpAk01hoac-unsplash (1).jpg'

const sampleProducts = [
  {
    name: "Single Malt Scotch",
    price: "$89.99",
    img: scotch,
  },
  {
    name: "Premium Vodka",
    price: "$39.99",
    img: vodca,
  },
  {
    name: "Botanical Gin",
    price: "$55.00",
    img: gin,
  },
  
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Featured Selection</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sampleProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h4>
              <p className="text-lg text-amber-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


