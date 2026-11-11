import React, { useState } from 'react';
import { Sparkles, Check, AlertCircle, ShieldCheck, CreditCard, Gift, Send } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/salonData.ts';
import { SALON_WHATSAPP_NUMBER, generateGeneralWhatsAppUrl } from '../utils/booking.ts';

export const MembershipView: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('silver-card');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const handleMembershipEnquiry = (planTitle: string) => {
    const text = `Hello Anita's Makeover! I would like to enroll/inquire about the *${planTitle}*. Name: ${clientName || 'Guest'}, Phone: ${clientPhone || 'Not specified'}. Please guide me on card activation.`;
    const url = `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Privilege Club</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          Anita's Makeover Memberships
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          Unlock tremendous upfront wallet savings and exclusive 20% all-year-long VIP privileges at all salon branches.
        </p>

        {/* Verification transparency banner */}
        <div className="p-3 bg-[#FDFBF7] border border-[#E8DFD5] rounded-lg text-xs text-[#736861] flex items-center justify-center gap-2 max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>
            <strong>Verified Terms:</strong> Membership tiers, benefits, and replacement fees are strictly preserved from authorized website records.
          </span>
        </div>
      </div>

      {/* Membership Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {MEMBERSHIP_PLANS.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header & Visual Asset */}
              <div className="bg-[#201815] p-6 text-white text-center relative overflow-hidden flex flex-col items-center">
                {plan.badge && (
                  <span className="absolute top-4 right-4 bg-[#D4AF37] text-[#201815] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    {plan.badge}
                  </span>
                )}
                
                <div className="h-40 w-full flex items-center justify-center p-2">
                  <img
                    src={plan.cardImage}
                    alt={plan.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mt-2">
                  {plan.title}
                </h3>
                <p className="text-xs text-[#D4AF37] mt-0.5 font-medium">{plan.tagline}</p>
              </div>

              {/* Pricing Callout */}
              <div className="p-6 bg-[#FDFBF7] border-b border-[#E8DFD5] space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#736861] font-semibold block">
                  Card Value & Privilege
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#201815]">
                  {plan.priceText}
                </p>
                <p className="text-xs text-[#A8823B] font-medium">{plan.benefitText}</p>
              </div>

              {/* Features List */}
              <div className="p-6 space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#201815] block">
                  Included Privileges
                </span>
                <ul className="space-y-2.5 text-xs text-[#5A5049]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Terms Accordion/Details */}
                <div className="pt-4 border-t border-[#F3ECE2] space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#736861] block">
                    Preserved Terms & Conditions
                  </span>
                  <ul className="space-y-1 text-[11px] text-[#736861] leading-relaxed">
                    {plan.terms.map((term, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C5A059]">•</span>
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="p-6 pt-0">
              <button
                onClick={() => handleMembershipEnquiry(plan.title)}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Inquire / Activate via WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Inquiry Strip */}
      <div className="bg-[#F3ECE2] p-8 rounded-2xl border border-[#E8DFD5] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif text-xl font-bold text-[#201815]">
            Have an Existing Card or Need a Replacement?
          </h3>
          <p className="text-xs text-[#5A5049]">
            Lost cards can be re-issued after verification at any branch desk for a replacement fee of ₹250.
          </p>
        </div>

        <button
          onClick={() => {
            const url = generateGeneralWhatsAppUrl('Membership Card Verification / Lost Card Replacement');
            window.open(url, '_blank', 'noopener,noreferrer');
          }}
          className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-white border border-[#C5A059] hover:bg-[#FAF8F5] rounded transition-colors shrink-0"
        >
          Verify Card Status on WhatsApp
        </button>
      </div>
    </div>
  );
};
