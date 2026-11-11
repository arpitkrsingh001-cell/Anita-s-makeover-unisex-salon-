/**
 * Anita's Makeover - Booking & Contact Utility Functions
 * Central WhatsApp Booking Number: +91 99536 07012
 */

export const SALON_WHATSAPP_NUMBER = '919953607012';
export const SALON_GENERAL_EMAIL = 'info@anitasmakeover.com';
export const SALON_FRANCHISE_EMAIL = 'franchise@anitasmakeover.com';
export const SALON_ACADEMY_PHONE = '+91-9650170897';

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  branch: string;
  date: string;
  time: string;
  notes?: string;
}

export interface BookingValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: Partial<BookingData>): BookingValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (minimum 2 characters)';
  }

  // Indian phone validation (10 digits, optional country code prefix)
  const cleanPhone = (data.phone || '').replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = 'Please provide a valid 10-digit mobile number';
  }

  if (!data.service || data.service.trim() === '') {
    errors.service = 'Please select a salon service';
  }

  if (!data.branch || data.branch.trim() === '') {
    errors.branch = 'Please choose a salon branch';
  }

  if (!data.date || data.date.trim() === '') {
    errors.date = 'Please pick a preferred date';
  }

  if (!data.time || data.time.trim() === '') {
    errors.time = 'Please select a preferred appointment time slot';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Builds the official WhatsApp appointment inquiry link
 * URL Format: https://wa.me/919953607012?text=...
 */
export function generateWhatsAppBookingUrl(data: BookingData): string {
  const lines = [
    "✨ *Appointment Request | Anita's Makeover*",
    '--------------------------------------',
    `*Client Name:* ${data.name.trim() || 'Guest'}`,
    `*Contact Number:* ${data.phone.trim() || 'Not specified'}`,
    `*Selected Service:* ${data.service.trim() || 'General Consultation'}`,
    `*Preferred Branch:* ${data.branch.trim() || 'Sector 23A Gurgaon'}`,
    `*Preferred Date:* ${data.date.trim() || 'Earliest Available'}`,
    `*Preferred Time:* ${data.time.trim() || 'Flexible'}`,
  ];

  if (data.notes && data.notes.trim()) {
    lines.push(`*Notes / Requests:* ${data.notes.trim()}`);
  }

  lines.push('--------------------------------------');
  lines.push('Please let me know if this slot is available.');

  const messageText = lines.join('\n');
  return `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Builds general WhatsApp enquiry link
 */
export function generateGeneralWhatsAppUrl(inquiryTopic: string = 'General Inquiry'): string {
  const message = `Hello Anita's Makeover! I would like to enquire about: *${inquiryTopic}*. Please share details.`;
  return `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Indian Rupee formatter
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
