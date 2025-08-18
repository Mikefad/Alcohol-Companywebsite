// =============================
// components/Testimonials.jsx
// =============================
const testimonials = [
  {
    name: 'John D.',
    quote: 'Exceptional taste and fast delivery. These spirits are something else!'
  },
  {
    name: 'Sarah P.',
    quote: 'Beautiful packaging and smooth flavors. Will buy again!'
  },
  {
    name: 'Chris B.',
    quote: 'Great customer service and fantastic product quality.'
  },
];

const Testimonials = () => (
  <section className="bg-white py-20 px-6">
    <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-sm text-gray-700">"{t.quote}"</p>
          <p className="mt-4 text-right font-semibold text-gray-800">- {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

