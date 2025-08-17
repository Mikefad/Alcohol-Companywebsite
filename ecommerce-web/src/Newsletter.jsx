// =============================
// components/Newsletter.jsx
// =============================
export default function Newsletter() {
  return (
    <section className="bg-amber-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Stay in the Loop 🍷</h3>
        <p className="text-gray-700 mb-6">Sign up for our newsletter to receive product updates, legal tips, and exclusive discounts.</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
