import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  ExternalLink,
  Loader2,
  ChevronDown,
  AlertCircle,
  Search,
  Check,
  RotateCcw,
  ShieldCheck,
  Edit2,
} from 'lucide-react';
import { auth } from '../firebase';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from 'firebase/auth';

const AMAZON_PRODUCT_URL =
  'https://www.amazon.in/dp/B0F49DN7N7?ref=cm_sw_r_apan_dp_C52HVS5M7YH3PZ0GT7W3&ref_=cm_sw_r_apan_dp_C52HVS5M7YH3PZ0GT7W3&social_share=cm_sw_r_apan_dp_C52HVS5M7YH3PZ0GT7W3&th=1';

interface CountryCodeItem {
  code: string;
  country: string;
  iso: string;
  flag: string;
}

const COUNTRY_CODES: CountryCodeItem[] = [
  { code: '+91', country: 'India', iso: 'IN', flag: '🇮🇳' },
  { code: '+1', country: 'United States', iso: 'US', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', iso: 'GB', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', iso: 'AE', flag: '🇦🇪' },
  { code: '+61', country: 'Australia', iso: 'AU', flag: '🇦🇺' },
  { code: '+65', country: 'Singapore', iso: 'SG', flag: '🇸🇬' },
  { code: '+966', country: 'Saudi Arabia', iso: 'SA', flag: '🇸🇦' },
  { code: '+49', country: 'Germany', iso: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'France', iso: 'FR', flag: '🇫🇷' },
  { code: '+974', country: 'Qatar', iso: 'QA', flag: '🇶🇦' },
  { code: '+968', country: 'Oman', iso: 'OM', flag: '🇴🇲' },
  { code: '+965', country: 'Kuwait', iso: 'KW', flag: '🇰🇼' },
  { code: '+973', country: 'Bahrain', iso: 'BH', flag: '🇧🇭' },
  { code: '+880', country: 'Bangladesh', iso: 'BD', flag: '🇧🇩' },
  { code: '+977', country: 'Nepal', iso: 'NP', flag: '🇳🇵' },
  { code: '+94', country: 'Sri Lanka', iso: 'LK', flag: '🇱🇰' },
  { code: '+1', country: 'Canada', iso: 'CA', flag: '🇨🇦' },
  { code: '+60', country: 'Malaysia', iso: 'MY', flag: '🇲🇾' },
  { code: '+64', country: 'New Zealand', iso: 'NZ', flag: '🇳🇿' },
  { code: '+27', country: 'South Africa', iso: 'ZA', flag: '🇿🇦' },
];

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyNowModal: React.FC<BuyNowModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    otp: '',
  });
  const [countryCode, setCountryCode] = useState('+91');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formError, setFormError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // OTP Firebase States
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery) ||
      c.iso.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cleanPhone = formData.phone.replace(/\D/g, '');
  const isPhoneEntered = cleanPhone.length >= 10;

  // Countdown timer for Resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  // Click outside to close country dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Cleanup reCAPTCHA when modal closes
  useEffect(() => {
    if (!isOpen) {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch {
          // Ignore
        }
        recaptchaVerifierRef.current = null;
      }
      setIsOtpSent(false);
      setConfirmationResult(null);
      setFormData({ name: '', phone: '', otp: '' });
      setFormError('');
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Initialize invisible reCAPTCHA Verifier
  const getRecaptchaVerifier = () => {
    const container = document.getElementById('recaptcha-container');
    if (!container) return null;

    if (recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
      } catch {
        // Ignore
      }
      recaptchaVerifierRef.current = null;
    }

    const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
        // reCAPTCHA solved
      },
      'expired-callback': () => {
        setFormError('reCAPTCHA expired. Please request OTP again.');
      },
    });

    recaptchaVerifierRef.current = verifier;
    return verifier;
  };

  // 1. Send OTP to Mobile Number
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!formData.name.trim()) {
      setFormError('Please enter your full name');
      return;
    }

    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }

    setFormError('');
    setIsSendingOtp(true);

    try {
      const verifier = getRecaptchaVerifier();
      if (!verifier) {
        throw new Error('reCAPTCHA container missing. Please refresh and try again.');
      }

      const fullPhoneNumber = `${countryCode}${cleanPhone}`;
      const confirmation = await signInWithPhoneNumber(auth, fullPhoneNumber, verifier);

      setConfirmationResult(confirmation);
      setIsOtpSent(true);
      setResendTimer(60);
      setFormError('');
    } catch (error: any) {
      console.error('Error sending OTP:', error);
      const code = error?.code || '';
      if (code === 'auth/operation-not-allowed') {
        setFormError('SMS Region not enabled: Please enable India (+91) in Firebase Console > Authentication > Settings > SMS Region Policy, or add this number in "Phone numbers for testing".');
      } else if (code === 'auth/invalid-phone-number') {
        setFormError('Invalid phone number. Please check country code and mobile number.');
      } else if (code === 'auth/too-many-requests') {
        setFormError('Too many attempts. Please wait a few minutes before trying again.');
      } else if (code === 'auth/quota-exceeded') {
        setFormError('SMS quota reached. Please use Firebase test phone numbers or contact support.');
      } else if (code === 'auth/captcha-check-failed' || code === 'auth/invalid-app-credential') {
        setFormError('Security check failed. Make sure Phone Auth is enabled in Firebase Console.');
      } else {
        setFormError(error?.message || 'Failed to send OTP. Please verify your number or try again.');
      }
    } finally {
      setIsSendingOtp(false);
    }
  };

  // 2. Verify OTP and Redirect to Amazon
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.otp || formData.otp.trim().length < 6) {
      setFormError('Please enter the 6-digit OTP received on your mobile');
      return;
    }

    if (!confirmationResult) {
      setFormError('Session expired. Please click Resend OTP.');
      return;
    }

    setFormError('');
    setIsVerifying(true);

    try {
      await confirmationResult.confirm(formData.otp.trim());
      setIsSubmitted(true);

      // Open Amazon product purchase page in a new window/tab
      window.open(AMAZON_PRODUCT_URL, '_blank', 'noopener,noreferrer');

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', otp: '' });
        setIsOtpSent(false);
        onClose();
      }, 2500);
    } catch (error: any) {
      console.error('Error verifying OTP:', error);
      const code = error?.code || '';
      if (code === 'auth/invalid-verification-code') {
        setFormError('Incorrect OTP code. Please enter the 6 digits sent to your phone.');
      } else if (code === 'auth/code-expired') {
        setFormError('This OTP has expired. Please click Resend OTP below.');
      } else {
        setFormError(error?.message || 'Failed to verify OTP. Please try again.');
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (formError) setFormError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-[32px] shadow-2xl overflow-hidden transition-all max-h-[92vh] flex flex-col border border-neutral-200/80"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
          {/* 1. Header with Badge */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center">
              <span className="text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide font-sans inline-block">
                Contact Us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight font-sans">
              Have Questions? <span className="text-[#0066FF]">Contact Us</span>
            </h2>

            {/* 2. Contact Channels: Perfectly Centered on All Devices */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 pb-1">
              {/* Location Card */}
              <div className="group flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-neutral-200/80 flex items-center justify-center text-[#0066FF] shrink-0 mb-1.5 group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-all duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="w-full text-center">
                  <span className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-400 font-sans leading-tight">
                    Location
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-neutral-800 font-sans truncate mt-0.5">
                    Surat, Gujarat
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <a
                href="mailto:ratguardpro9@gmail.com"
                className="group flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-blue-200 hover:bg-blue-50/20 active:scale-[0.98] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-neutral-200/80 flex items-center justify-center text-[#0066FF] shrink-0 mb-1.5 group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-all duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="w-full text-center">
                  <span className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-400 font-sans leading-tight">
                    Email Us
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-[#0066FF] font-sans truncate mt-0.5">
                    ratguardpro9@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+919328623013"
                className="group flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-blue-200 hover:bg-blue-50/20 active:scale-[0.98] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-neutral-200/80 flex items-center justify-center text-[#0066FF] shrink-0 mb-1.5 group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-all duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="w-full text-center">
                  <span className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-neutral-400 font-sans leading-tight">
                    Call Direct
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-[#0066FF] font-sans truncate mt-0.5">
                    +91 93286 23013
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* 3. Form or Thank You State */}
          <div className="mt-4">
            {/* Invisible reCAPTCHA Container */}
            <div id="recaptcha-container"></div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-[#111111] font-sans">
                  Phone Verified Successfully!
                </h4>
                <p className="text-sm text-neutral-600 font-sans max-w-xs mx-auto">
                  Redirecting you to the official Amazon store page...
                </p>
                <div className="pt-2">
                  <a
                    href={AMAZON_PRODUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] hover:underline"
                  >
                    <span>Click here if not redirected automatically</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : !isOtpSent ? (
              /* Step 1: Enter Name & Mobile Number */
              <form onSubmit={handleSendOtp} className="space-y-4">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#222222] font-sans">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 bg-neutral-50 hover:bg-white focus:bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all font-sans"
                  />
                </div>

                {/* Field 2: Mobile Number with Country Code Dropdown */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#222222] font-sans">
                    Mobile Number (For OTP Verification)
                  </label>

                  <div className="relative flex items-center bg-neutral-50 hover:bg-white focus-within:bg-white border border-neutral-200 focus-within:border-[#0066FF] focus-within:ring-1 focus-within:ring-[#0066FF] rounded-xl transition-all">
                    {/* Country Code Selector */}
                    <div className="relative shrink-0 border-r border-neutral-200/90" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setIsDropdownOpen((prev) => !prev);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-1.5 pl-3.5 pr-2.5 py-3 text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-100/60 rounded-l-xl focus:outline-none transition-colors cursor-pointer select-none"
                      >
                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                        <span className="font-sans font-bold text-neutral-900">{selectedCountry.code}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#0066FF]' : ''
                            }`}
                        />
                      </button>

                      {/* Dropdown Panel */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl border border-neutral-200 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                          <div className="p-2.5 border-b border-neutral-100 bg-neutral-50/80 sticky top-0 z-10">
                            <div className="relative flex items-center">
                              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 pointer-events-none" />
                              <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search country or code..."
                                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0066FF] text-neutral-800 placeholder-neutral-400 font-sans"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>

                          <div className="max-h-52 overflow-y-auto p-1.5 space-y-0.5 scrollbar-thin">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c) => {
                                const isSelected = c.code === countryCode;
                                return (
                                  <button
                                    key={c.code + c.country}
                                    type="button"
                                    onClick={() => {
                                      setCountryCode(c.code);
                                      setIsDropdownOpen(false);
                                      setSearchQuery('');
                                    }}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-colors cursor-pointer ${isSelected
                                        ? 'bg-blue-50/90 text-[#0066FF] font-bold'
                                        : 'text-neutral-700 hover:bg-neutral-100 font-medium'
                                      }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <span className="text-base shrink-0">{c.flag}</span>
                                      <span className="truncate font-sans">{c.country}</span>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0 ml-2">
                                      <span className="font-mono text-neutral-400 text-[11px] font-semibold">
                                        {c.code}
                                      </span>
                                      {isSelected && <Check className="w-3.5 h-3.5 text-[#0066FF]" />}
                                    </div>
                                  </button>
                                );
                              })
                            ) : (
                              <div className="py-6 text-center text-xs text-neutral-400 font-sans">
                                No countries found
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="93286 23013"
                      className="w-full px-3.5 py-3 bg-transparent text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none font-sans"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {formError && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50/80 border border-red-200 text-red-700 text-xs font-medium font-sans animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Send OTP Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSendingOtp}
                    className={`w-full py-3.5 px-6 bg-[#0066FF] hover:bg-[#0052cc] active:scale-[0.98] text-white font-semibold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all duration-200 cursor-pointer font-sans group ${isSendingOtp ? 'opacity-80 cursor-wait' : ''
                      }`}
                  >
                    {isSendingOtp ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending OTP via SMS...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Send Verification OTP</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Step 2: Enter & Verify OTP */
              <form onSubmit={handleVerifyOtp} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Sent Phone Banner */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-xs font-medium font-sans text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span>
                      OTP sent to <strong className="text-neutral-900 font-mono">{countryCode} {formData.phone}</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOtpSent(false);
                      setFormData((prev) => ({ ...prev, otp: '' }));
                      setFormError('');
                    }}
                    className="inline-flex items-center gap-1 text-[#0066FF] hover:underline font-semibold cursor-pointer shrink-0 ml-2"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* OTP Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-[#222222] font-sans">
                      Enter 6-Digit OTP
                    </label>
                    <span className="text-[11px] font-semibold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-md font-sans">
                      SMS Verification
                    </span>
                  </div>

                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-neutral-400 pointer-events-none">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="otp"
                      required
                      autoFocus
                      maxLength={6}
                      value={formData.otp}
                      onChange={handleChange}
                      placeholder="• • • • • •"
                      className="w-full pl-10 pr-4 py-3 bg-neutral-50 hover:bg-white focus:bg-white border border-neutral-200 rounded-xl text-base sm:text-lg tracking-widest font-mono text-center text-neutral-900 font-bold placeholder-neutral-400 placeholder:tracking-normal focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>
                </div>

                {/* Resend OTP Row */}
                <div className="flex items-center justify-between text-xs font-sans text-neutral-500 pt-1">
                  <span>Didn't receive code?</span>
                  {resendTimer > 0 ? (
                    <span className="text-neutral-400 font-medium">
                      Resend in <strong className="text-neutral-700 font-mono">{resendTimer}s</strong>
                    </span>
                  ) : (
                    <button
                      type="button"
                      disabled={isSendingOtp}
                      onClick={() => handleSendOtp()}
                      className="inline-flex items-center gap-1.5 text-[#0066FF] font-semibold hover:underline cursor-pointer disabled:opacity-50"
                    >
                      <RotateCcw className={`w-3.5 h-3.5 ${isSendingOtp ? 'animate-spin' : ''}`} />
                      <span>Resend OTP</span>
                    </button>
                  )}
                </div>

                {/* Error Message */}
                {formError && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50/80 border border-red-200 text-red-700 text-xs font-medium font-sans animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Verify Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isVerifying || formData.otp.length < 6}
                    className={`w-full py-3.5 px-6 bg-[#0066FF] hover:bg-[#0052cc] active:scale-[0.98] text-white font-semibold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all duration-200 cursor-pointer font-sans group ${isVerifying || formData.otp.length < 6 ? 'opacity-80' : ''
                      } ${isVerifying ? 'cursor-wait' : ''}`}
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying OTP...</span>
                      </>
                    ) : (
                      <>
                        <span>Verify & Buy on Amazon</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
