// src/components/Products.jsx
import { motion } from "framer-motion";
import sample1 from './assets/stanimir-filipov-VcFOVu4rqHU-unsplash.jpg';
import sample2 from './assets/zhivko-minkov-OzaAMXxlq2c-unsplash.jpg';
import sample3 from './assets/zhivko-minkov-ykpAk01hoac-unsplash (1).jpg';
import sample4 from './assets/leon-rockel-C120KG0o-v8-unsplash.jpg';
import sample5 from './assets/taylor-brandon-4xC3LHLP5ac-unsplash.jpg';
import sample6 from './assets/white-field-photo-PboILhfVi5o-unsplash.jpg';
import sample7 from './assets/zhivko-minkov-EHL8bCPcWr8-unsplash.jpg';
import sample8 from './assets/josh-appel-dWA9uWK6Ymo-unsplash.jpg';
import sample9 from './assets/brian-j-tromp-wflgbvAfNWo-unsplash.jpg';

const products = [
  { name: 'Whiskey Supreme', price: '$75.00', image: sample1, badge: 'Top Pick' },
  { name: 'Crystal Vodka', price: '$49.99', image: sample2, badge: 'Bestseller' },
  { name: 'Botanical Gin', price: '$65.00', image: sample3, badge: 'Limited Edition' },
];

const products2 = [
  { name: 'Midnight Barrel', price: '$89.00', image: sample4, badge: 'Editor\'s Choice' },
  { name: 'Amber Gold', price: '$95.50', image: sample5, badge: 'Rare Find' },
  { name: 'Velvet Oak', price: '$105.00', image: sample6, badge: 'Heritage' },
  { name: 'Vintage Reserve', price: '$115.00', image: sample7, badge: 'Classic' },
  { name: 'Golden Flame', price: '$98.00', image: sample8, badge: 'Fan Favorite' },
  { name: 'Autumn Spice', price: '$72.99', image: sample9, badge: 'Seasonal' },
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

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10">
      {products2.map((item, idx) => (
        <motion.div
          key={idx}
          className="rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
          <div className="p-5">
            <span className="inline-block mb-2 text-xs font-semibold text-white bg-black/80 rounded-full px-3 py-1">{item.badge}</span>
            <h3 className="text-lg font-bold text-gray-800 mt-2">{item.name}</h3>
            <p className="text-gray-500 mt-1">{item.price}</p>
          </div>
        </motion.div>
      ))}
    </div>

  </section>
);

export default Products;

