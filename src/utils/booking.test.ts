import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateWhatsAppBookingUrl,
  generateGeneralWhatsAppUrl,
  validateBookingForm,
  formatINR,
  SALON_WHATSAPP_NUMBER,
} from './booking.ts';

test('validates correct booking form input', () => {
  const validData = {
    name: 'Pooja Sharma',
    phone: '9876543210',
    service: 'Bridal Makeup',
    branch: 'Sector 23A, Gurgaon',
    date: '2026-11-20',
    time: '11:00 AM',
  };

  const result = validateBookingForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('rejects incomplete booking form data and gives specific field errors', () => {
  const invalidData = {
    name: '',
    phone: '123',
    service: '',
    branch: '',
    date: '',
    time: '',
  };

  const result = validateBookingForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.service);
  assert.ok(result.errors.branch);
  assert.ok(result.errors.date);
  assert.ok(result.errors.time);
});

test('generates valid WhatsApp booking URL with proper parameters', () => {
  const booking = {
    name: 'Ananya Verma',
    phone: '+91 9811223344',
    service: 'Pre-Bridal Packages',
    branch: 'Sector 81, Gurgaon',
    date: '2026-12-05',
    time: '02:30 PM',
    notes: 'Skin consultation needed for sensitive skin',
  };

  const url = generateWhatsAppBookingUrl(booking);
  assert.ok(url.startsWith(`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=`));
  assert.ok(url.includes(encodeURIComponent('Ananya Verma')));
  assert.ok(url.includes(encodeURIComponent('Pre-Bridal Packages')));
  assert.ok(url.includes(encodeURIComponent('Sector 81, Gurgaon')));
  assert.ok(url.includes(encodeURIComponent('Skin consultation needed')));
});

test('generates valid general WhatsApp URL', () => {
  const url = generateGeneralWhatsAppUrl('Cosmetology Course Fee');
  assert.ok(url.startsWith(`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=`));
  assert.ok(url.includes(encodeURIComponent('Cosmetology Course Fee')));
});

test('formats Indian rupee values cleanly', () => {
  const formatted = formatINR(10000);
  assert.ok(formatted.includes('10,000') || formatted.includes('10 000'));
});
