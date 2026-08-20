import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ShieldCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  quantity,
  onIncrease,
  onDecrease,
  onReset,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    paymentMethod: 'cod',
  });

  if (!isOpen) return null;

  const unitPrice = 5499;
  const originalPrice = 6999;
  const subtotal = unitPrice * quantity;
  const savings = (originalPrice - unitPrice) * quantity;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in your delivery details.');
      return;
    }
    setIsOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        id="cart-drawer-backdrop"
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-out Panel */}
      <div
        id="cart-drawer-panel"
        className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0066FF]" />
            <h3 className="font-extrabold text-lg text-[#111111]">
              Your Shopping Cart ({quantity})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 text-neutral-500 hover:text-black rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 overflow-y-auto">
          {isOrdered ? (
            /* Order Success View */
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#111111]">
                Order Confirmed!
              </h4>
              <p className="text-sm text-neutral-600 max-w-xs">
                Thank you, <strong>{formData.name}</strong>! Your order for {quantity}x RatGuardPro Ultrasonic Repeller has been scheduled.
              </p>
              <div className="bg-neutral-50 p-4 rounded-xl text-xs text-neutral-600 text-left w-full space-y-1 border border-neutral-200">
                <p><strong>Tracking SMS:</strong> Sent to +91 {formData.phone}</p>
                <p><strong>Delivery:</strong> Express COD in 3-5 business days</p>
                <p><strong>Pay on Delivery:</strong> ₹{subtotal.toLocaleString('en-IN')}</p>
              </div>
              <button
                onClick={() => {
                  setIsOrdered(false);
                  setIsCheckingOut(false);
                  onReset();
                  onClose();
                }}
                className="w-full bg-[#111111] text-white py-3 rounded-xl font-bold text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : !isCheckingOut ? (
            /* Cart Items List */
            quantity > 0 ? (
              <div className="space-y-6">
                {/* Product Card */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 flex gap-4 items-center">
                  <div className="w-20 h-20 bg-neutral-900 rounded-xl flex items-center justify-center text-white shrink-0 p-2">
                    <span className="text-[10px] font-mono font-bold text-neutral-300 text-center">
                      RATGUARD PRO
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-sm text-[#111111] truncate">
                      Ultrasonic Rat Repellent Device
                    </h4>
                    <p className="text-xs text-neutral-500">Model: F1-E186HC (Dual Wave)</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-black text-base text-[#52C41A]">
                        ₹{unitPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-neutral-300 rounded-lg bg-white">
                        <button
                          onClick={onDecrease}
                          className="px-2 py-1 text-neutral-600 hover:text-black cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-neutral-900">
                          {quantity}
                        </span>
                        <button
                          onClick={onIncrease}
                          className="px-2 py-1 text-neutral-600 hover:text-black cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={onReset}
                        className="text-xs text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Free Delivery Promise */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3.5 flex items-center gap-3 text-xs text-blue-950 font-medium">
                  <Truck className="w-5 h-5 text-[#0066FF] shrink-0" />
                  <div>
                    <span className="font-bold">Free COD Across India</span> (Delivery in 5 Days)
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-neutral-300 mx-auto" />
                <p className="text-base font-extrabold text-neutral-800">Your cart is empty</p>
                <p className="text-xs text-neutral-400">Add an Ultrasonic Repeller to protect your spaces!</p>
              </div>
            )
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-4 text-xs font-medium">
              <h4 className="font-extrabold text-base text-[#111111] mb-2">
                Fast Checkout (Free COD Available)
              </h4>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Mobile Number (For Order Tracking)</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Delivery Address</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Flat / House No., Street, Area / Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Pincode</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 395006"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-2.5 rounded-xl border text-xs font-bold ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#52C41A] bg-emerald-50 text-emerald-900'
                        : 'border-neutral-200 bg-white'
                    }`}
                  >
                    💵 Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'online' })}
                    className={`p-2.5 rounded-xl border text-xs font-bold ${
                      formData.paymentMethod === 'online'
                        ? 'border-[#0066FF] bg-blue-50 text-blue-900'
                        : 'border-neutral-200 bg-white'
                    }`}
                  >
                    ⚡ UPI / Online
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#52C41A] hover:bg-[#43aa13] text-white py-3.5 rounded-xl font-extrabold text-sm shadow-md"
                >
                  Confirm & Place Order (₹{subtotal.toLocaleString('en-IN')})
                </button>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-full text-center text-xs text-neutral-500 hover:text-black py-2 mt-1"
                >
                  ← Back to cart
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer with Totals */}
        {!isOrdered && !isCheckingOut && quantity > 0 && (
          <div className="p-6 border-t border-neutral-100 bg-neutral-50 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>₹{(unitPrice * quantity).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>You Save</span>
                <span>-₹{savings.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Shipping</span>
                <span className="font-bold text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-black text-[#111111] pt-2 border-t border-neutral-200">
                <span>Total Amount</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              id="cart-proceed-checkout-btn"
              onClick={() => setIsCheckingOut(true)}
              className="w-full bg-[#111111] hover:bg-black text-white py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
