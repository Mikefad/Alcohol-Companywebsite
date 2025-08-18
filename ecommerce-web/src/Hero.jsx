import banner from "./assets/150882-799711525_small.mp4";

export default function Hero() {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_top]"
        src={banner}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dim overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow">
          Luxury Spirits, Delivered Fast
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/85 drop-shadow">
          Explore our curated collection of high-end liquors, crafted to perfection and shipped with care.
        </p>
        <a
          href="#products"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

