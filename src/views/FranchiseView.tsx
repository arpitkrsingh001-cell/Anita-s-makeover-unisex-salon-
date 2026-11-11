import React, { useState } from 'react';
import { Briefcase, Sparkles, MapPin, Phone, Mail, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { SALON_BRANCHES } from '../data/salonData.ts';
import { SALON_FRANCHISE_EMAIL, SALON_GENERAL_EMAIL, SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

export const FranchiseView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Gurgaon',
    investmentCapacity: '₹25 Lakhs – ₹50 Lakhs',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = [
      "🤝 *Franchise Partnership Query | Anita's Makeover*",
      '--------------------------------------',
      `*Applicant Name:* ${formData.name}`,
      `*Contact Phone:* ${formData.phone}`,
      `*Email Address:* ${formData.email}`,
      `*Target City / Location:* ${formData.city}`,
      `*Estimated Investment:* ${formData.investmentCapacity}`,
      formData.query ? `*Query Details:* ${formData.query}` : '',
      '--------------------------------------',
      'Please share the franchise prospectus and partnership terms.',
    ].filter(Boolean).join('\n');

    setTimeout(() => {
      window.open(`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Business Opportunity</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          Be a Partner of Anita's Makeover
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          Start your own profitable salon and beauty academy with our proven operational playbook, brand prestige, and technical training support.
        </p>
      </div>

      {/* Main Pitch & Franchise Offices Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Offices and Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#201815] text-white p-8 rounded-2xl border border-[#382B24] space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
              Official Headquarters
            </span>
            <h3 className="font-serif text-2xl font-bold">
              Franchise Advisory Desk
            </h3>
            
            <p className="text-xs text-[#EADBCE] leading-relaxed">
              We welcome visionary investors and beauty professionals across NCR and pan-India to partner with an established luxury brand with high client loyalty and multiple operational revenue streams (Salon, Bridal, Academy).
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Franchise Queries Email</span>
                  <a href={`mailto:${SALON_FRANCHISE_EMAIL}`} className="text-[#D4AF37] hover:underline">
                    {SALON_FRANCHISE_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Corporate Office Helpline</span>
                  <a href="tel:+919650170897" className="text-[#EADBCE] hover:text-white">
                    +91-9650170897
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Preserved Registered Offices Card */}
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-4 text-xs">
            <h4 className="font-serif font-bold text-sm text-[#201815]">
              Corporate & Branch Offices
            </h4>
            {SALON_BRANCHES.map((b) => (
              <div key={b.id} className="border-b border-[#F3ECE2] last:border-0 pb-3 last:pb-0 space-y-1">
                <div className="font-semibold text-[#201815] flex items-center justify-between">
                  <span>{b.locality}</span>
                  <span className="text-[10px] text-[#A8823B] bg-[#F5EFE6] px-1.5 py-0.5 rounded">
                    {b.category}
                  </span>
                </div>
                <p className="text-[#736861] text-[11px]">{b.address}</p>
                <p className="text-[#A8823B] font-mono text-[11px]">Contact: {b.formattedPhone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Franchise Application Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8DFD5] p-8 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1 border-b border-[#F3ECE2] pb-4">
            <h2 className="font-serif text-2xl font-bold text-[#201815]">
              Apply Online for Franchise
            </h2>
            <p className="text-xs text-[#736861]">
              Kindly fill up your details and our business development leadership will reach out within 24 hours.
            </p>
          </div>

          {submitted && (
            <div className="p-4 bg-[#E8F5E9] border border-[#A5D6A7] rounded text-xs text-[#1F513B] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
              <span>Thank you! Your franchise application has been dispatched to franchise@anitasmakeover.com and WhatsApp.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Gupta"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Contact Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Target City / Region *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Gurgaon, Rewari, Manesar, Noida..."
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                Estimated Investment Budget
              </label>
              <select
                value={formData.investmentCapacity}
                onChange={(e) => setFormData({ ...formData, investmentCapacity: e.target.value })}
                className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="₹15 Lakhs – ₹25 Lakhs">₹15 Lakhs – ₹25 Lakhs (Studio Format)</option>
                <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs (Full Luxury Unisex Salon)</option>
                <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore (Flagship Salon + Academy Center)</option>
                <option value="Above ₹1 Crore">Above ₹1 Crore (Multi-Unit Franchise)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                Specific Query / Commercial Space Details (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                placeholder="Mention whether you already own/rent commercial space, previous salon experience, etc."
                className="w-full px-3 py-2 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Submit Franchise Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
