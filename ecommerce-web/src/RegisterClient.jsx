// src/pages/partner.jsx
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, CheckCircle } from "lucide-react";
import { useState } from "react";

const COLORS = {
  primary: "#c61b3f",
  navy: "#191a37",
  border: "#e5e8ef",
  subtext: "#5a6576",
};

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 bg-[#f6f7fb] px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm border" style={{ borderColor: COLORS.border }}>
            <h1 className="text-3xl font-bold text-center mb-6" style={{ color: COLORS.navy }}>
              Become a Partner
            </h1>

            {submitted ? (
              <div className="text-center text-green-600">
                <CheckCircle className="inline mb-1" /> We’ve received your request. Our team will contact you shortly!
              </div>
            ) : (
              <form className="space-y-5" onSubmit={onSubmit}>
                <div>
                  <label className="text-sm font-medium">Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input required className="w-full rounded-xl border pl-9 pr-3 py-2 text-sm" style={{ borderColor: COLORS.border }} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="email" required className="w-full rounded-xl border pl-9 pr-3 py-2 text-sm" style={{ borderColor: COLORS.border }} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input required className="w-full rounded-xl border pl-9 pr-3 py-2 text-sm" style={{ borderColor: COLORS.border }} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Why are you interested in partnering?</label>
                  <textarea rows={4} className="w-full rounded-xl border px-3 py-2 text-sm" style={{ borderColor: COLORS.border }} />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: COLORS.primary }}
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

