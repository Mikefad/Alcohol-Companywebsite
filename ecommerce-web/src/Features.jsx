import { Sparkles, PackageCheck, Leaf } from 'lucide-react';

const features = [
  { icon: <Sparkles size={32} />, title: 'Small Batch Distillation', text: 'Meticulously crafted for rich, full-bodied taste.' },
  { icon: <PackageCheck size={32} />, title: 'Secure Delivery', text: 'Packaged with care and delivered safely to your door.' },
  { icon: <Leaf size={32} />, title: 'Sustainable', text: 'Eco-conscious production methods & packaging.' },
];

const Features = () => (
  <section className="py-20 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {features.map((f, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-md transition">
          <div className="mb-4 text-red-600 mx-auto">{f.icon}</div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">{f.title}</h3>
          <p className="text-gray-500 text-sm">{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
