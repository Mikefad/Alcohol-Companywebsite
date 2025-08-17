const features = [
  "100% Legal & Licensed Distribution",
  "Fast, Nationwide Delivery",
  "Secure Payment Gateway Integration",
  "Mobile-Friendly Shopping Experience",
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
        <ul className="grid md:grid-cols-2 gap-6 text-left">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-4">
              <span className="text-amber-600 font-bold text-xl">✓</span>
              <p className="text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
