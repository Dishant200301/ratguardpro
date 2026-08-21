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
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#f4f7f2] rounded-3xl sm:rounded-[32px] shadow-2xl border border-[#e2ebd9] overflow-hidden transition-all max-h-[92vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-neutral-600 hover:text-black flex items-center justify-center shadow-md transition-all cursor-pointer border border-neutral-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto w-full p-4 sm:p-6 lg:p-8 scrollbar-none relative z-10">
          {/* Main Grid: Full 2-column on Laptop/Desktop, Form Only on Mobile & Tablet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* ================================================================= */}
            {/* LEFT COLUMN: INFO & BG IMAGE (Only on Laptop/Desktop, NOT on form) */}
            {/* ================================================================= */}
            <div className="hidden lg:flex lg:col-span-7 flex-col justify-between relative h-full min-h-[480px] p-7 xl:p-8 rounded-2xl sm:rounded-3xl bg-white bg-[url('/common/produst_popup-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden border border-[#e2ebd9] shadow-xs select-none">
              {/* 1. Header Info */}
              <div className="space-y-3 z-10">
                <span className="text-[#407e2d] text-base font-bold tracking-wide font-sans">
                  Contact
                </span>
                <h2 className="text-3xl xl:text-4xl font-extrabold text-[#111111] leading-[1.18] tracking-tight font-sans">
                  We're Here to Help,
                  <br />
                  Contact Us Today
                </h2>
                <p className="text-neutral-600 text-xs xl:text-sm font-medium leading-relaxed max-w-md font-sans">
                  Have questions about our ultrasonic rat repellent or need help
                  with your order? Our team is ready to assist you.
                </p>
              </div>

              {/* 2. Contact List (Cleanly placed on left side) */}
              <div className="relative mt-6 z-10 flex items-end justify-between">
                <div className="space-y-3 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#407e2d] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans">
                      123 NY street, New York
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#407e2d] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans">
                      example@example.com
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#407e2d] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans">
                      +123 456 789
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#407e2d] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans">
                      Available 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================================= */}
            {/* RIGHT COLUMN: CONTACT / ORDER FORM (Visible on All Devices)       */}
            {/* ================================================================= */}
            <div className="w-full lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm border border-neutral-200/70">
              {/* Form Mobile/Tablet Header Title (Shows only when left column is hidden) */}
              <div className="lg:hidden mb-5">
                <span className="text-[#407e2d] text-xs font-bold tracking-wider uppercase font-sans">
                  Quick Inquiry & Order
                </span>
                <h3 className="text-2xl font-black text-[#111111] font-sans tracking-tight">
                  Contact Us Today
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-green-100 text-[#407e2d] rounded-full flex items-center justify-center mx-auto">
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
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#407e2d] focus:ring-1 focus:ring-[#407e2d] transition-all"
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
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#407e2d] focus:ring-1 focus:ring-[#407e2d] transition-all"
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
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#407e2d] focus:ring-1 focus:ring-[#407e2d] transition-all"
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
                      placeholder="+123 456 789"
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#407e2d] focus:ring-1 focus:ring-[#407e2d] transition-all"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#222222] font-sans">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I need help with..."
                      className="w-full px-3.5 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#407e2d] focus:ring-1 focus:ring-[#407e2d] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Green Pill) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-[#407e2d] hover:bg-[#346724] active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 shadow-lg shadow-green-900/15 transition-all duration-200 cursor-pointer font-sans group"
                    >
                      <span>Submit</span>
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
