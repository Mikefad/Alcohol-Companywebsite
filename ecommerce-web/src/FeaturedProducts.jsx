import { motion } from "framer-motion";
import badge from "../assets/badge.svg";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";

const featured = [
  { title: "Signature Whisky", price: "$129.99", image: sample1 },
  { title: "Vintage Vodka", price: "$69.00", image: sample2 },
  { title: "Botanical Gin", price: "$89.99", image: sample3 },
];

const FeaturedProducts = () => (
  <section id="products" className="py-20 bg-[#f9f9f9]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl mb-4 w-full h-60 object-cover"
            />
            <img src={badge} alt="badge" className="absolute top-4 right-4 h-10" />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-primary mt-1 font-bold">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
