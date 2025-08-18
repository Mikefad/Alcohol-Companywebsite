const COLORS = {
  navy: "#0e1a2b",
  borderDark: "#21314a",
};

const Footer = () => {
  return (
    <footer id="contact" style={{ background: COLORS.navy, color: "white" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
          <p className="text-white/75">orders@yourdistillery.com</p>
          <p className="text-white/75">support@yourdistillery.com</p>
          <p className="text-white/75 mt-4 font-medium">Call us:</p>
          <p className="text-white/75">+1 (555) 123‑4567</p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-left md:text-right">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-white/75">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">Shop</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="space-y-1 text-white/75">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center text-sm py-6 border-t"
        style={{ borderColor: COLORS.borderDark }}
      >
        <p className="text-white/60">
          © {new Date().getFullYear()} YourDistillery™. All rights reserved.
        </p>
        <p className="mt-1 space-x-4 text-white/60">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

