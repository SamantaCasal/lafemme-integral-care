export interface BookableService {
  id: string;
  slug: string;
  name_es: string;
  name_en: string;
  category: string;
  description_es: string;
  description_en: string;
  duration_minutes: number;
  price_guaranies: number;
  modality: string;
  is_active: boolean;
  sort_order: number;
}

export interface Professional {
  id: string;
  name: string;
  role_es: string;
  role_en: string;
  photo_url: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface AvailabilityTemplate {
  id: string;
  professional_id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number;
  is_active: boolean;
}

export interface AvailabilityException {
  id: string;
  professional_id: string;
  exception_date: string;
  is_blocked: boolean;
  start_time: string | null;
  end_time: string | null;
  reason: string | null;
}

export interface BookingFormData {
  service: BookableService | null;
  professional: Professional | null;
  date: Date | null;
  time: string | null;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientNotes: string;
  needsInvoice: boolean;
  invoiceRuc: string;
  invoiceName: string;
}

export interface BookingResult {
  id: string;
  booking_number: string;
  service_id: string;
  professional_id: string;
  booking_date: string;
  booking_time: string;
  duration_minutes: number;
  price_guaranies: number;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  patient_notes: string | null;
  needs_invoice: boolean;
  invoice_ruc: string | null;
  invoice_name: string | null;
  status: string;
  cancel_token: string;
  created_at: string;
}

export const BOOKING_CATEGORIES = [
  { value: "all", labelKey: "booking.cat_all" },
  { value: "embarazo", labelKey: "booking.cat_embarazo" },
  { value: "posparto", labelKey: "booking.cat_posparto" },
  { value: "lactancia", labelKey: "booking.cat_lactancia" },
  { value: "reeducacion", labelKey: "booking.cat_reeducacion" },
  { value: "spa", labelKey: "booking.cat_spa" },
  { value: "nutricion", labelKey: "booking.cat_nutricion" },
  { value: "psicologia", labelKey: "booking.cat_psicologia" },
] as const;
