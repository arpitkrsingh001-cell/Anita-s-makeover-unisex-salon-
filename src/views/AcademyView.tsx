import React, { useState } from 'react';
import { Award, Sparkles, BookOpen, CheckCircle, Phone, MessageCircle, Send, Users, ShieldCheck, Check } from 'lucide-react';
import { ACADEMY_COURSES } from '../data/salonData.ts';
import { SALON_ACADEMY_PHONE, SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

export const AcademyView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('Professional Cosmetology Course');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '12th class appeared',
    purpose: 'Job',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = [
      "🎓 *Academy Career Counseling Inquiry | Anita's Makeover*",
      '--------------------------------------',
      `*Applicant Name:* ${formData.name}`,
      `*Phone Number:* ${formData.phone}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Interested Course:* ${selectedCourse}`,
      `*Highest Qualification:* ${formData.qualification}`,
      `*Purpose of Joining:* ${formData.purpose}`,
      formData.notes ? `*Message:* ${formData.notes}` : '',
      '--------------------------------------',
      'Please guide me regarding syllabus, upcoming batches, and enrollment process.',
    ].filter(Boolean).join('\n');

    setTimeout(() => {
      window.open(`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const academyBenefits = [
    'Get set for career opportunities in high-end salons, fashion photo-shoots, and the runway',
    'World class infrastructure with latest training equipment',
    'Well qualified and trained faculty with international exposure',
    'Pedagogy : Practical + Theory immersion',
    'Free Course kit and classroom material included',
    'Soft skills and client communication training',
    'Internship and placement assistance',
    'International Certifications to choose from',
  ];

  const careerRoles = [
    'Professional Makeup Artist',
    'Fashion & Runway Stylist',
    'Media & Television Artist',
    'Makeup & Aesthetic Consultant',
    'Beauty Academy Trainer',
    'Color Cosmetic Advisor',
    'Clinical Aesthetician',
    'Independent Salon Owner',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Academy Hero Header */}
      <div className="relative bg-[#201815] text-white rounded-2xl p-8 sm:p-14 overflow-hidden border border-[#382B24] shadow-2xl">
        <div className="max-w-2xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-[#D4AF37] border border-[#D4AF37]/30">
            <Award className="w-3.5 h-3.5" />
            <span>AM Academy Gurgaon · Helpline: +91 9650170897</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Anita's Makeover Academy
          </h1>

          <p className="text-xs sm:text-sm text-[#EADBCE] leading-relaxed">
            Giving you the platform to become a Professional Makeup Artist, Cosmetologist, and Salon Stylist by learning from the best in the beauty industry. State-of-the-art makeup classes, practical studio training, and recognized certifications upon completion.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#C8B8A6]">
            <a
              href={`tel:${SALON_ACADEMY_PHONE}`}
              className="flex items-center gap-1.5 text-white hover:text-[#D4AF37] font-semibold"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Helpline: {SALON_ACADEMY_PHONE}</span>
            </a>
            <span>·</span>
            <a
              href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:underline font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full opacity-15 lg:opacity-25 pointer-events-none hidden sm:block">
          <img
            src="/images/client/anita-founder-award.jpg"
            alt="Academy Training Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Courses Catalog */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
            Certified Curriculum
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#201815]">
            Professional Courses
          </h2>
          <p className="text-xs sm:text-sm text-[#736861]">
            Curated programs in Cosmetology, Makeup Artistry, Skin Care, Hair Couture, Self Grooming, and Nail Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACADEMY_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-[#E8DFD5] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="relative h-48 bg-[#201815] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#201815]/85 text-[#FAF8F5] text-[10px] uppercase font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                    {course.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#201815]">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#5A5049] leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#F3ECE2]">
                    <span className="text-[11px] font-semibold text-[#201815] uppercase tracking-wider block">
                      Curriculum Highlights
                    </span>
                    {course.curriculum.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#736861]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E8DFD5] text-[11px] text-[#736861]">
                    <span className="font-semibold text-[#201815] block">Certification:</span>
                    {course.certification}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedCourse(course.title);
                    const el = document.getElementById('career-counselling-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors text-center cursor-pointer"
                >
                  Apply for this Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academy Benefits & Career Opportunities Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Benefits Card */}
        <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E8DFD5] space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              The Academy Advantage
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#201815]">
              Why Study at Anita's Makeover
            </h3>
          </div>

          <ul className="space-y-3 text-xs text-[#5A5049]">
            {academyBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Career Opportunities Card */}
        <div className="bg-[#201815] text-white p-8 rounded-2xl border border-[#382B24] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Industry Growth
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Career Pathways
            </h3>
            <p className="text-xs text-[#EADBCE] leading-relaxed">
              As per the Indian Salon Report, the Indian salon industry is valued at US $2.6 billion and growing by 30% annually. Our graduates are equipped to excel across high-end salons, fashion shoots, TV productions, and independent entrepreneurial ventures.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {careerRoles.map((role, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-2.5 rounded text-xs text-[#EADBCE] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-[#A89F91]">
            Placement partners & verified alumni working across Rewari, Gurgaon, IMT Manesar, Bhiwadi, and Delhi NCR.
          </div>
        </div>
      </div>

      {/* Free Career Counselling Enquiry Form */}
      <div id="career-counselling-form" className="bg-white rounded-2xl border border-[#E8DFD5] p-8 sm:p-12 shadow-sm max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
            Admission Guidance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201815]">
            Free Career Counselling & Course Enquiry
          </h2>
          <p className="text-xs text-[#736861]">
            Leave your details to receive full syllabus breakdown, fee schedules, and batch commencement dates.
          </p>
        </div>

        {submitted && (
          <div className="p-4 bg-[#E8F5E9] border border-[#A5D6A7] rounded text-xs text-[#1F513B]">
            Thank you! Your course inquiry has been forwarded to our Academy Admissions Desk on WhatsApp (+91 99536 07012).
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Neha Sharma"
                className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                Contact Phone / WhatsApp *
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
                Course Selection *
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              >
                {ACADEMY_COURSES.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                Highest Educational Qualification
              </label>
              <select
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="Less than 8th">Less than 8th</option>
                <option value="8th class appeared">8th class appeared</option>
                <option value="10th class appeared">10th class appeared</option>
                <option value="12th class appeared">12th class appeared</option>
                <option value="Graduation appeared">Graduation appeared</option>
                <option value="Post Graduation or Higher">Post Graduation or Higher</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
              Purpose of Joining
            </label>
            <div className="flex flex-wrap gap-4 text-xs text-[#5A5049] pt-1">
              {['Job', 'Business', 'To Go Abroad', 'Hobby / Passion'].map((p) => (
                <label key={p} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="purpose"
                    value={p}
                    checked={formData.purpose === p}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="accent-[#201815]"
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
              Any Questions / Preferred Batch Time (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Inquiring for weekend batches, course fees, or hostel facilities..."
              className="w-full px-3 py-2 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Submit for Free Career Counselling</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
