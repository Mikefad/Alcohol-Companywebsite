import banner from "./assets/150882-799711525_small.mp4"

export default function Hero() {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={banner}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/10 z-5" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Luxury Spirits, Delivered Fast</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/80">
          Explore our curated collection of high-end liquors, crafted to perfection and shipped with care.
        </p>
        <a
          href="#products"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
