import React, { useState } from 'react';
import {
  X,
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const AMAZON_PRODUCT_URL =
  'https://www.amazon.in/dp/B0F49DN7N7?ref=cm_sw_r_apan_dp_C52HVS5M7YH3PZ0GT7W3&ref_=cm_sw_r_apan_dp_C52HVS5M7YH3PZ0GT7W3&social_share=cm_sw_r_apan_dp_C52HVS5M7YH3PZ0GT7W3&th=1';

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyNowModal: React.FC<BuyNowModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Open Amazon product purchase page in a new window/tab
    window.open(AMAZON_PRODUCT_URL, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card Container: 50-50 Split on Laptop/Desktop, Form-Only Clean White on Mobile/Tablet */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg lg:max-w-5xl bg-white lg:bg-[#f4f7f2] rounded-3xl sm:rounded-[32px] shadow-2xl overflow-hidden transition-all max-h-[92vh] flex flex-col border border-neutral-200/60 lg:border-neutral-200/80"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 lg:bg-white/90 lg:hover:bg-white text-neutral-600 hover:text-black flex items-center justify-center shadow-md transition-all cursor-pointer border border-neutral-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto w-full p-5 sm:p-7 lg:p-7 scrollbar-none relative z-10">
          {/* Main Grid: Exact 50-50 (grid-cols-2) on Laptop/Desktop, 1-col on Mobile/Tablet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* ================================================================= */}
            {/* LEFT COLUMN: 50% WIDTH ON LAPTOP/DESKTOP (Hidden on Mobile/Tablet) */}
            {/* ================================================================= */}
            <div className="hidden lg:flex flex-col justify-between relative h-full min-h-[480px] p-7 xl:p-0 rounded-2xl sm:rounded-3xl bg-[#f4f7f2]  overflow-hidden select-none">
              {/* 1. Header Info (Top Left with proper margins) */}
              <div className="space-y-3 z-10 max-w-xs xl:max-w-lg">
                <span className="text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full text-xs xl:text-sm font-bold tracking-wide font-sans inline-block">
                  Contact Us
                </span>
                <h2 className="text-2xl xl:text-3xl font-bold text-[#111111] leading-[1.2] tracking-tight font-sans">
                  We're Here to Help,
                  <br />
                  <span className="text-[#0066FF]">Contact Us Today</span>
                </h2>
                <p className="text-neutral-600 text-xs xl:text-sm font-medium leading-relaxed font-sans">
                  Have questions about our ultrasonic rat repellent or need help
                  with your order? Our team is ready to assist you.
                </p>
              </div>

              {/* 2. Contact List (Bottom Left with clickable phone and email) */}
              <div className="relative mt-6 z-10">
                <div className="space-y-3 shrink-0 max-w-[260px]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans leading-tight">
                      Surat, Gujarat, India
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a
                      href="mailto:info@ratguardpro.com"
                      className="text-xs font-semibold text-neutral-800 hover:text-[#0066FF] hover:underline font-sans transition-colors"
                    >
                      info@ratguardpro.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a
                      href="tel:+919409445443"
                      className="text-xs font-semibold text-neutral-800 hover:text-[#0066FF] hover:underline font-sans transition-colors"
                    >
                      +91 9409445443
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans">
                      Mon–Sat 10am–7pm
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Product Image: Positioned at Bottom-Right with prominent size */}
              <img
                src="/images/home/product/product.webp"
                alt="RatGuard Pro Device"
                className="absolute -bottom-2 -right-4 w-60 xl:w-72 max-h-[280px] xl:max-h-[320px] object-contain select-none pointer-events-none z-0 transition-transform duration-300 drop-shadow-xl"
                loading="eager"
              />
            </div>

            {/* ================================================================= */}
            {/* RIGHT COLUMN: 50% WIDTH ON LAPTOP/DESKTOP (Clean on Mobile/Tablet) */}
            {/* ================================================================= */}
            <div className="w-full bg-transparent lg:bg-white rounded-none lg:rounded-2xl sm:rounded-3xl p-0 lg:p-7 shadow-none lg:shadow-sm border-0 lg:border lg:border-neutral-200/70">
              {/* Form Mobile/Tablet Header Title */}
              <div className="lg:hidden mb-5 pr-8">
                <span className="text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-sans inline-block mb-1.5">
                  Quick Inquiry & Order
                </span>
                <h3 className="text-2xl font-bold text-[#111111] font-sans tracking-tight">
                  Contact Us Today
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#111111] font-sans">
                    Thank You!
                  </h4>
                  <p className="text-sm text-neutral-600 font-sans max-w-xs mx-auto">
                    Your inquiry has been received. Our team will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#222222] font-sans">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#222222] font-sans">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#222222] font-sans">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address..."
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>

                  {/* Row 3: Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#222222] font-sans">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9409445443"
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#222222] font-sans">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I need help with..."
                      className="w-full px-3.5 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Brand Blue Pill) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-[#0066FF] hover:bg-[#0052cc] active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all duration-200 cursor-pointer font-sans group"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
