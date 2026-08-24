import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  Home,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant seamless submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="w-full bg-white text-[#111111] font-sans antialiased">
      {/* 1. TOP BREADCRUMB & CONTEXT ROW (No Hero, clean and elegant) */}
      {/* <section className="w-full border-b border-neutral-200/80 bg-neutral-50/50 py-4 sm:py-5">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[#0066FF] font-semibold">Contact Us</span>
          </nav>
        </div>
      </section> */}

      {/* 2. MAIN SECTION: CONTACT FORM & GET IN TOUCH INFO */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* LEFT CONTAINER (Col-Span 7 on Desktop): CONTACT FORM */}
            <div className="order-2 lg:order-1 lg:col-span-7 w-full">
              <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 md:p-10 shadow-sm">
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider mb-3">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0066FF]" />
                    Send a Message
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
                    How Can We Help You?
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Have questions about our ultrasonic repellent, bulk orders, or installation? Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                {/* Submission Success Alert */}
                {isSubmitted && (
                  <div className="mb-6 p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-700 mt-1 leading-relaxed">
                        Thank you for reaching out. Our support specialist will contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      YOUR NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-[#111111] placeholder:text-neutral-400 outline-none focus:border-[#0066FF] focus:ring-3 focus:ring-[#0066FF]/15 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-[#111111] placeholder:text-neutral-400 outline-none focus:border-[#0066FF] focus:ring-3 focus:ring-[#0066FF]/15 transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-[#111111] placeholder:text-neutral-400 outline-none focus:border-[#0066FF] focus:ring-3 focus:ring-[#0066FF]/15 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      TYPE YOUR MESSAGE <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your requirement or query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-[#111111] placeholder:text-neutral-400 outline-none focus:border-[#0066FF] focus:ring-3 focus:ring-[#0066FF]/15 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0066FF] hover:bg-[#0052cc] active:scale-98 text-white font-bold text-sm px-8 py-3.5 sm:py-4 rounded-full shadow-md shadow-blue-600/25 transition-all duration-200 cursor-pointer disabled:opacity-70 font-sans tracking-wide uppercase"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT CONTAINER (Col-Span 5 on Desktop): GET IN TOUCH INFO */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full flex flex-col lg:border-l lg:border-neutral-200 lg:pl-12 xl:pl-16">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF] block mb-2">
                  CONTACT INFORMATION
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
                  Get in Touch
                </h2>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  Have an urgent inquiry? Reach out directly to our customer support and sales department through any of the channels below.
                </p>
              </div>

              {/* Information Cards Stack */}
              <div className="mt-8 space-y-6 sm:space-y-8">
                
                {/* 1. LOCATION */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-blue-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      LOCATION / REGISTERED OFFICE
                    </p>
                    <p className="text-sm font-semibold text-[#111111] leading-relaxed">
                      Plot No C/25, 1st Floor, Shyamdham Society, Vijayraj Circle, Singanpore Road, Surat, Gujarat - 395004, India
                    </p>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">
                      (VAMASHAY)
                    </p>
                  </div>
                </div>

                {/* 2. CONTACT (PHONE & EMAIL) */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-blue-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      DIRECT CONTACT
                    </p>
                    <div>
                      <a
                        href="tel:+919409445443"
                        className="inline-block text-sm sm:text-base font-bold text-[#111111] hover:text-[#0066FF] transition-colors"
                      >
                        +91 9409445443
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:support@ratguardpro.com"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 hover:text-[#0066FF] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-neutral-400" />
                        <span>support@ratguardpro.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. BUSINESS HOURS */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-blue-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      BUSINESS HOURS
                    </p>
                    <p className="text-sm font-bold text-[#111111]">
                      Monday – Saturday: 10:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Sunday: Closed (Online Orders Active 24/7)
                    </p>
                  </div>
                </div>

                {/* Trust Highlight Pill */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 to-emerald-50/60 border border-blue-100 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#0066FF] shrink-0" />
                  <p className="text-xs font-semibold text-neutral-800 leading-snug">
                    All inquiries are covered under our <strong>100% Quick Support Commitment</strong> and 1-Year Replacement Warranty.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF] block mb-1">
                OUR LOCATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                Find Us on the Map
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500">
              Singanpore Road, Surat, Gujarat 395004
            </p>
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[500px] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 relative">
            <iframe
              title="RatGuardPro Official Location Map"
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=Singanpore%20Road,%20Surat,%20Gujarat%20395004&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};
