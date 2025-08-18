import sample1 from './assets/stanimir-filipov-VcFOVu4rqHU-unsplash.jpg';
import sample2 from './assets/zhivko-minkov-OzaAMXxlq2c-unsplash.jpg';
import sample3 from './assets/zhivko-minkov-ykpAk01hoac-unsplash (1).jpg';

const products = [
  { name: 'Whiskey Supreme', price: '$75.00', image: sample1, badge: 'Top Pick' },
  { name: 'Crystal Vodka', price: '$49.99', image: sample2, badge: 'Bestseller' },
  { name: 'Botanical Gin', price: '$65.00', image: sample3, badge: 'Limited Edition' },
];

const Products = () => (
  <section id="products" className="py-20 px-6 bg-white">
    <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {products.map((item, idx) => (
        <div key={idx} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
          <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
          <div className="p-5">
            <span className="inline-block mb-2 text-xs font-medium text-red-500 bg-red-100 rounded-full px-3 py-1">{item.badge}</span>
            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="text-gray-500 mt-1">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Products;




