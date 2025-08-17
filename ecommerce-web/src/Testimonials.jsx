// =============================
// components/Testimonials.jsx
// =============================
export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">What Our Customers Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="italic mb-4">“Fast delivery and top-quality spirits. Super impressed!”</p>
            <h5 className="font-semibold">— Jenna R.</h5>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="italic mb-4">“Everything was legally compliant and smooth from checkout to delivery.”</p>
            <h5 className="font-semibold">— Marco B.</h5>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="italic mb-4">“Love the product selection and modern site design. Will order again.”</p>
            <h5 className="font-semibold">— Amina T.</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
