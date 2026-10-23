import React from 'react';
import { WORKSHOP_INFO } from '../data/mockData';

export interface WhatsAppBookingParams {
  ref: string;
  fullName: string;
  phone: string;
  email?: string;
  vehicleYear?: string;
  vehicleMake: string;
  vehicleModel?: string;
  serviceCategory: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  urgency?: string;
  description?: string;
  lang: string;
}

export function buildWhatsAppBookingUrl(params: WhatsAppBookingParams): string {
  const {
    ref,
    fullName,
    phone,
    email,
    vehicleYear,
    vehicleMake,
    vehicleModel,
    serviceCategory,
    preferredDate,
    preferredTimeSlot,
    urgency,
    description,
    lang,
  } = params;

  let text = '';

  if (lang === 'sq') {
    text =
      `🚨 *Rezervim i Ri Takimi - Aurora Electric*\n\n` +
      `📋 *Numri i Referencës:* ${ref}\n` +
      `👤 *Klienti:* ${fullName}\n` +
      `📞 *Telefoni:* ${phone}\n` +
      `${email ? `✉️ *Email:* ${email}\n` : ''}` +
      `🚗 *Automjeti:* ${vehicleYear || ''} ${vehicleMake} ${vehicleModel || ''}\n` +
      `⚙️ *Shërbimi i Kërkuar:* ${serviceCategory}\n` +
      `${preferredDate ? `📅 *Data e Preferuar:* ${preferredDate} ${preferredTimeSlot ? `(${preferredTimeSlot})` : ''}\n` : ''}` +
      `${urgency ? `⚠️ *Statusi / Urgjenca:* ${urgency}\n` : ''}\n` +
      `${description ? `📝 *Përshkrimi i Problemit:*\n${description}` : ''}`;
  } else if (lang === 'mk') {
    text =
      `🚨 *Нова Резервација за Термин - Aurora Electric*\n\n` +
      `📋 *Референтен број:* ${ref}\n` +
      `👤 *Клиент:* ${fullName}\n` +
      `📞 *Телефони:* ${phone}\n` +
      `${email ? `✉️ *Е-пошта:* ${email}\n` : ''}` +
      `🚗 *Возило:* ${vehicleYear || ''} ${vehicleMake} ${vehicleModel || ''}\n` +
      `⚙️ *Услуга:* ${serviceCategory}\n` +
      `${preferredDate ? `📅 *Датум:* ${preferredDate} ${preferredTimeSlot ? `(${preferredTimeSlot})` : ''}\n` : ''}` +
      `${urgency ? `⚠️ *Итност:* ${urgency}\n` : ''}\n` +
      `${description ? `📝 *Опис на Проблемот:*\n${description}` : ''}`;
  } else {
    text =
      `🚨 *New Service Booking - Aurora Electric*\n\n` +
      `📋 *Booking Reference:* ${ref}\n` +
      `👤 *Customer Name:* ${fullName}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `${email ? `✉️ *Email:* ${email}\n` : ''}` +
      `🚗 *Vehicle:* ${vehicleYear || ''} ${vehicleMake} ${vehicleModel || ''}\n` +
      `⚙️ *Service Requested:* ${serviceCategory}\n` +
      `${preferredDate ? `📅 *Preferred Date:* ${preferredDate} ${preferredTimeSlot ? `(${preferredTimeSlot})` : ''}\n` : ''}` +
      `${urgency ? `⚠️ *Urgency Level:* ${urgency}\n` : ''}\n` +
      `${description ? `📝 *Problem Description:*\n${description}` : ''}`;
  }

  const phoneTarget = WORKSHOP_INFO.whatsappNumber || '38972554701';
  return `https://wa.me/${phoneTarget}?text=${encodeURIComponent(text.trim())}`;
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.11c-.24.67-1.39 1.28-1.92 1.35-.49.07-1.12.1-3.23-.77-2.69-1.12-4.44-3.86-4.57-4.04-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.39-.06.61.46.23.54.78 1.9.85 2.04.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.36 2.47 1.51.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.77-.16 1.44z" />
  </svg>
);
