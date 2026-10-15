export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Cpu' | 'Zap' | 'Cable' | 'Radar' | 'Sparkles' | 'BatteryCharging' | 'Wrench';
  bulletPoints: string[];
  turnaroundTime: string;
  commonSymptoms: string[];
  priceRange: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ecu' | 'wiring' | 'infotainment' | 'starter-alternator';
  vehicle: string;
  year: number;
  image: string;
  briefDescription: string;
  technicalDetails: string;
  solution: string;
  turnaround: string;
}

export interface DiagnosticCode {
  code: string;
  system: string;
  severity: 'Critical' | 'Moderate' | 'Advisory';
  description: string;
  likelyElectricalCause: string;
  recommendedService: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  serviceCategory: string;
  description: string;
  preferredDate: string;
  preferredTimeSlot: string;
  urgency: 'Standard' | 'Urgent (Vehicle Dead/Non-Drivable)' | 'Pre-Purchase Check';
}
