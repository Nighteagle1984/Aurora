export type Language = 'en' | 'sq' | 'mk';

import { mkTranslation } from './mk';

export interface TranslationSchema {
  nav: {
    services: string;
    dtcLookup: string;
    projects: string;
    about: string;
    contact: string;
    callUs: string;
    bookAppointment: string;
    bookShort: string;
  };
  hero: {
    badge: string;
    slogan: string;
    facility: string;
    headline: string;
    subheadline: string;
    callNow: string;
    getQuote: string;
    statVehicles: string;
    statVehiclesLabel: string;
    statFixRate: string;
    statFixRateLabel: string;
    statWarranty: string;
    statWarrantyLabel: string;
    statExp: string;
    statExpLabel: string;
    bayLive: string;
    bayTech: string;
    scannersTitle: string;
    scannersSubtitle: string;
    sameDay: string;
    sameDayLabel: string;
    certTech: string;
    rapidFix: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    standards: string;
    warranty: string;
    turnaround: string;
    commonSymptoms: string;
    technicalScope: string;
    bookService: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    guaranteeCta: string;
    items: {
      id: string;
      title: string;
      shortDescription: string;
      fullDescription: string;
      bulletPoints: string[];
      turnaroundTime: string;
      commonSymptoms: string[];
      priceRange: string;
    }[];
  };
  dtcChecker: {
    kicker: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    clear: string;
    listTitle: string;
    matches: string;
    noMatchTitle: string;
    noMatchSub: string;
    noMatchBtn: string;
    specSheet: string;
    targetSystem: string;
    faultDefinition: string;
    likelyCause: string;
    recommendedProtocol: string;
    triageCallout: string;
    bookTriageFor: string;
    severityCritical: string;
    severityModerate: string;
    severityAdvisory: string;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      wiring: string;
      ecu: string;
      infotainment: string;
      alternator: string;
    };
    caseStudy: string;
    technicalScope: string;
    viewBreakdown: string;
    requestSimilar: string;
    modalTitle: string;
    modalSymptoms: string;
    modalAnalysis: string;
    modalSolution: string;
    close: string;
    bookConsultation: string;
    items: {
      id: string;
      title: string;
      category: 'ecu' | 'wiring' | 'infotainment' | 'starter-alternator';
      vehicle: string;
      turnaround: string;
      briefDescription: string;
      technicalDetails: string;
      solution: string;
    }[];
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    accreditations: string;
    protocolKicker: string;
    protocolTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    facilityId: string;
    bayStatus: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    phoneSub: string;
    facilityLabel: string;
    facilitySub: string;
    hoursLabel: string;
    monFri: string;
    sat: string;
    sun: string;
    keyDrop: string;
    radarKicker: string;
    radarPin: string;
    mapView: string;
    satelliteView: string;
    getDirections: string;
    openToday: string;
    driveInLane: string;
    formKicker: string;
    formTitle: string;
    formSub: string;
    vehicleStatus: string;
    statusStandard: string;
    statusUrgent: string;
    statusPrePurchase: string;
    year: string;
    make: string;
    model: string;
    serviceCategory: string;
    symptoms: string;
    fullName: string;
    phone: string;
    email: string;
    preferredDate: string;
    preferredTime: string;
    submitBtn: string;
    submitting: string;
    termsNote: string;
    successKicker: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
    validation: {
      fullName: string;
      phone: string;
      email: string;
      make: string;
      model: string;
      description: string;
    };
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    description: string;
    warranty: string;
    capabilitiesTitle: string;
    workshopTitle: string;
    contactTitle: string;
    copyright: string;
    backToTop: string;
  };
  bookingModal: {
    kicker: string;
    title: string;
    subtitle: string;
    submitBtn: string;
    successKicker: string;
    successTitle: string;
    successDesc: string;
    callDispatch: string;
    done: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      services: 'Services',
      dtcLookup: 'DTC Lookup',
      projects: 'Projects',
      about: 'About',
      contact: 'Location & Contact',
      callUs: 'Call Us Now',
      bookAppointment: 'Book Appointment',
      bookShort: 'Book',
    },
    hero: {
      badge: 'Certified Electronics Lab',
      slogan: 'Aurora Electric',
      facility: 'Studeniçan, Skopje',
      headline: 'Advanced Auto Electrical & Diagnostic Services',
      subheadline: 'Master-certified auto electricians delivering precision wiring overhauls, dealer-level ECU diagnostics, charging system repairs, and complex fault resolution. We diagnose root causes with lab oscilloscopes—zero guessing, zero wasted parts.',
      callNow: 'Call Us Now',
      getQuote: 'Get a Quote / Book Appointment',
      statVehicles: '14,280+',
      statVehiclesLabel: 'Vehicles Diagnosed',
      statFixRate: '99.4%',
      statFixRateLabel: 'First-Visit Fix Rate',
      statWarranty: '24 Mo / 24k Mi',
      statWarrantyLabel: 'Parts & Labor Warranty',
      statExp: '18 Years',
      statExpLabel: 'Master Electronics Exp.',
      bayLive: 'DIAGNOSTIC BAY 1 // LIVE',
      bayTech: 'CAN 2.0B / FLEXRAY',
      scannersTitle: 'Dealer-Level Protocol Scanners',
      scannersSubtitle: 'PicoScope 4425A · Autel MaxiSys · Bosch ODIS',
      sameDay: 'Same-Day',
      sameDayLabel: 'Triage Slots',
      certTech: 'ASE Master Certified Technicians',
      rapidFix: 'Rapid Electrical Fault Isolation',
    },
    services: {
      kicker: '01. Precision Electrical Solutions',
      title: 'Our Core Automotive Electrical Services',
      subtitle: 'Equipped with digital oscilloscopes, factory scan tools, and bench simulators to repair complex electronic vehicle architectures without unnecessary part replacements.',
      standards: 'OEM Waveform Standards',
      warranty: '24 Mo Warranty',
      turnaround: 'Turnaround',
      commonSymptoms: 'Common Symptoms',
      technicalScope: 'Technical Scope',
      bookService: 'Book Service',
      guaranteeTitle: 'The "Zero Guesswork" Diagnostic Guarantee',
      guaranteeDesc: 'Every diagnostic booking includes physical oscilloscope waveforms and live digital data readouts showing exact failure points before any repair work commences.',
      guaranteeCta: 'Schedule Diagnostic Scan',
      items: [
        {
          id: 'computer-diagnostics',
          title: 'Computer Diagnostics & Error Clearing',
          shortDescription: 'Dealer-level OBD-II & CAN-bus network interrogation, live sensor telemetry, ECU fault isolation, and module recalibration.',
          fullDescription: 'Our diagnostic process goes far beyond generic code reading. Using multi-channel PicoScope oscilloscopes and OEM-level scanners, we monitor high-speed Controller Area Network (CAN), Local Interconnect Network (LIN), and FlexRay communications in real-time. We capture transient waveform anomalies that standard scanners miss, isolate faulty harness terminations, and perform complete parameter resets and coding.',
          bulletPoints: [
            'CAN-bus, LIN, & FlexRay network waveform analysis',
            'ECU, BCM, TCM & ABS module communications testing',
            'Freeze-frame telemetry breakdown & intermittent glitch capture',
            'True root-cause verification with no guesswork parts replacement',
          ],
          turnaroundTime: '1 – 3 Hours (Same-Day Triage)',
          commonSymptoms: [
            'Illuminated Check Engine or EPC warning light',
            'Limp-mode activation with reduced engine power',
            'Multiple contradictory dashboard warning lights',
            'Vehicle failing state emissions inspection readiness',
          ],
          priceRange: 'From $149 (Includes Full Waveform Diagnostic Report)',
        },
        {
          id: 'alternator-starter',
          title: 'Alternator & Starter Motor Repair',
          shortDescription: 'Precision bench testing, high-output alternator conversions, starter solenoid overhauls, and continuous voltage regulator balancing.',
          fullDescription: 'We service and remanufacture 12V and 24V starter motors, brushless smart alternators, and start-stop auxiliary charging circuits. Every charging system is stress-tested under full electrical load to inspect diode ripple, brush wear, slip-ring resistance, and starter draw amperage. We rebuild with high-temperature heavy-duty components for unmatched durability.',
          bulletPoints: [
            'Automated dynamic load bench testing up to 300A',
            'High-output alternator builds for auxiliary gear & audio',
            'Starter motor solenoid, reduction gear, and armature overhauls',
            'Smart LIN-controlled alternator charging curve calibration',
          ],
          turnaroundTime: 'Same-Day to 24 Hours',
          commonSymptoms: [
            'Clicking noise when turning the ignition key or pushing start',
            'Battery light glowing or flickering during acceleration',
            'High-pitched alternator whine through cabin audio',
            'Dimming headlights while idling or stopping at traffic lights',
          ],
          priceRange: 'From $185 (Bench Testing & Load Analysis included)',
        },
        {
          id: 'wiring-lighting-battery',
          title: 'Wiring, Lighting & Battery Services',
          shortDescription: 'Meticulous parasitic battery drain tracing, weather-sealed harness builds, AGM/Lithium battery registration, and modern LED retrofits.',
          fullDescription: 'Electrical gremlins are solved here with mathematical precision. We specialize in locating parasitic drains down to the milliamp using non-invasive thermal imaging and calibrated milli-ohm drop tests across fuse panels. Our wiring rebuilds use motorsport-grade Tefzel wiring, braided sleeving, and moisture-tight Deutsch DT connectors.',
          bulletPoints: [
            'Millivolt drop & thermal imaging parasitic draw pinpointing',
            'Complete chassis loom rebuilds & fire/rodent damage restoration',
            'AGM, EFB, and Lithium-ion battery registration & coding',
            'OEM LED/Bi-LED projector headlight retrofits & leveling alignment',
          ],
          turnaroundTime: 'Same-Day for Battery/Drain; 1 – 3 Days for Complex Looms',
          commonSymptoms: [
            'Battery dies overnight or after sitting 2 to 3 days',
            'Burning plastic or hot insulation odor in cabin or engine bay',
            'Flickering exterior lighting, turn signal hyper-flashing',
            'Fuses blowing repeatedly upon ignition engagement',
          ],
          priceRange: 'From $129 (Parasitic Drain Baseline Testing)',
        },
        {
          id: 'ambient-lighting-starlight',
          title: 'Ambient Lighting & Headliner Stars',
          shortDescription: 'Bespoke fiber-optic starlight headliner ceilings, shooting star animations, and OEM-integrated multi-zone RGBW dynamic ambient interior lighting.',
          fullDescription: 'Elevate your vehicle cockpit to luxury supercar status. We specialize in custom fiber-optic starlight headliners engineered with individual optic strands hand-woven into Alcantara or OEM headliner fabrics with twinkle engines and shooting star meteor effects. We also engineer flush, factory-style ambient lighting lines across the dashboard, door cards, footwells, and air vents with seamless smartphone and OEM CAN-bus infotainment color control.',
          bulletPoints: [
            '500 to 1,500+ hand-placed fiber optic starlight points with twinkle modes',
            'Integrated shooting star & constellation meteor animations with app control',
            'Flush acrylic LED ambient lighting strips along dash, doors & footwells',
            'OEM CAN-bus integration syncs with factory ambient menus (BMW, Mercedes, Audi, Porsche)',
          ],
          turnaroundTime: '1 – 2 Days (Precision Craftsmanship)',
          commonSymptoms: [
            'Desire for bespoke Rolls-Royce style starry ceiling ambiance',
            'Factory cabin lighting too dark, dated, or single-color yellow',
            'Looking to add modern multi-color dynamic ambient flow to interior',
            'Upgrading Alcantara custom headliner with constellation designs',
          ],
          priceRange: 'From $450 (Includes Fiber Engine & Custom Harness)',
        },
        {
          id: 'headlight-polishing',
          title: 'Headlight Polishing & UV Restoration',
          shortDescription: 'Multi-stage wet sanding, machine compound polishing, and ceramic UV protective clear coating to restore crystal clarity and peak illumination.',
          fullDescription: 'Cloudy, yellowed, and oxidized polycarbonate headlight lenses severely reduce nighttime visibility, scatter your light beam, and can cause a failed technical inspection. Our professional multi-stage restoration strips degraded factory UV layer through precision wet sanding (800 to 3000 grit), followed by high-gloss optical machine compounding and application of a durable ceramic UV-blocking sealant that prevents future yellowing. We also check beam projection leveling and socket integrity.',
          bulletPoints: [
            'Multi-stage wet sanding removes heavy oxidation, micro-scratches & pitting',
            'Rotary machine compound polishing restores optical crystal clarity',
            'Ceramic UV-blocking hydrophobic clear coat prevents future oxidation',
            'Beam alignment check & luminous intensity optimization',
          ],
          turnaroundTime: '1 – 2 Hours (Same-Day Service)',
          commonSymptoms: [
            'Hazy, yellowed, or oxidized headlight lenses',
            'Dim nighttime road visibility and scattered light pattern',
            'Failure in vehicle annual technical inspection due to weak beam',
            'Surface pitting, micro-scratches, or peeling factory clear coat',
          ],
          priceRange: 'From $49 / Pair (Includes Ceramic UV Protective Coating)',
        },
      ],
    },
    dtcChecker: {
      kicker: 'Interactive Diagnostic Triage Tool',
      title: 'OBD-II Fault Code & Electrical Symptom Checker',
      subtitle: 'Have a dashboard warning light or error code? Search our electrical diagnostic database to see the true underlying circuit cause before guessing parts.',
      searchPlaceholder: 'Search code (e.g., U0100, P0562, P0300) or symptom (CAN bus, battery, misfire)...',
      clear: 'Clear',
      listTitle: 'COMMON ELECTRICAL FAULT CODES',
      matches: 'MATCHES',
      noMatchTitle: 'No exact DTC code matched',
      noMatchSub: 'Our master diagnostic scanners cover all manufacturer-specific OEM codes.',
      noMatchBtn: 'Request Analysis for This Issue',
      specSheet: 'DTC SPECIFICATION SHEET',
      targetSystem: 'Target System',
      faultDefinition: 'Diagnostic Fault Definition',
      likelyCause: 'LIKELY ROOT ELECTRICAL / HARNESS CAUSE',
      recommendedProtocol: 'Recommended Technical Protocol',
      triageCallout: 'Ready to isolate this fault? We offer same-day triage appointments.',
      bookTriageFor: 'Book Triage for',
      severityCritical: 'Critical',
      severityModerate: 'Moderate',
      severityAdvisory: 'Advisory',
    },
    projects: {
      kicker: '02. Proof of Craftsmanship',
      title: 'Completed Auto Electrical Projects',
      subtitle: 'Inspect recent real-world diagnostics, chassis rewiring, high-output charging systems, and OEM cockpit integrations completed in our Studeniçan (Skopje) workshop.',
      tabs: {
        all: 'All Projects',
        wiring: 'Rewiring & Looms',
        ecu: 'ECU Diagnostics',
        infotainment: 'Cockpit & Electronics',
        alternator: 'Alternators & Starters',
      },
      caseStudy: 'CASE STUDY',
      technicalScope: 'Technical Scope',
      viewBreakdown: 'View Technical Breakdown',
      requestSimilar: 'Request Similar Build',
      modalTitle: 'Project Breakdown',
      modalSymptoms: 'Problem & Initial Symptoms',
      modalAnalysis: 'Diagnostic Analysis & Engineering',
      modalSolution: 'Delivered Resolution',
      close: 'Close',
      bookConsultation: 'Book Consultation For Similar Issue',
      items: [
        {
          id: 'proj-1',
          title: 'Complex Engine Loom & Chassis Rewire',
          category: 'wiring',
          vehicle: '1998 Porsche 911 (993 Turbo) & Track Spec GT3',
          turnaround: '3 Days',
          briefDescription: 'Complete harness overhaul following rodent damage and brittle wire degradation, built with motorsport-grade Raychem DR-25 heat shrink and gold-plated Deutsch pins.',
          technicalDetails: 'Reconstructed 148 circuit terminations, installed auxiliary relay power distribution module, and eliminated 3 critical ground loops causing ignition misfires.',
          solution: 'Engine bay now features 100% moisture-sealed mil-spec harnesses with labelled circuit breakouts, restoring factory throttle telemetry and zero resistance drop.',
        },
        {
          id: 'proj-2',
          title: 'CAN-Bus Network Isolation & ECU Cloning',
          category: 'ecu',
          vehicle: '2021 BMW M4 Competition (G82)',
          turnaround: '1.5 Days',
          briefDescription: 'Resolved erratic intermittent total bus shutdown (U0001 / U0100) triggered by pinched gateway harness under rear subframe.',
          technicalDetails: 'Used 4-channel PicoScope to isolate high-speed CAN-H / CAN-L waveform clipping; micro-soldered damaged bus termination resistor and flashed updated ECU firmware.',
          solution: 'Restored stable 2.5V recessive / 3.5V dominant differential signal, eliminated 18 false trouble codes, and re-synchronized active differential control unit.',
        },
        {
          id: 'proj-3',
          title: 'Custom Digital Cockpit & Infotainment Integration',
          category: 'infotainment',
          vehicle: '2019 Mercedes-Benz AMG C63S',
          turnaround: '5 Hours',
          briefDescription: 'Retrofitted high-resolution widescreen digital cluster with factory fiber-optic MOST bus integration and steering wheel CAN controls.',
          technicalDetails: 'Integrated wireless Apple CarPlay, front/rear parking telemetry overlay, radar detection integration, and custom ambient lighting bus synchronization.',
          solution: 'Flawless OEM appearance with zero dashboard warning faults and immediate optical gateway handshaking.',
        },
        {
          id: 'proj-4',
          title: 'High-Output Smart Alternator & Starter Rebuild',
          category: 'starter-alternator',
          vehicle: '2020 Ford F-350 Super Duty 6.7L Powerstroke',
          turnaround: 'Same-Day (6 Hours)',
          briefDescription: 'Upgraded dual charging system with 320-amp high-output hairpin alternator to support remote emergency work gear and onboard AC inverters.',
          technicalDetails: 'Balanced custom heavy copper rotor, replaced diode bridge with low-forward-drop Schottky rectifiers, and upgraded 0-gauge engine bay bonding cables.',
          solution: 'Delivers a rock-steady 14.4V at idle under full 220A auxiliary accessory load with zero voltage sag.',
        },
      ],
    },
    about: {
      kicker: '03. Trust & Technical Rigor',
      title: '18+ Years Solving Automotive Electronics That Stymie Other Shops',
      p1: 'Founded in Studeniçan (Skopje), Aurora Auto Electric was established on a simple engineering premise: modern automobiles are complex distributed computing networks on wheels. When an intermittent electrical fault or check engine light strikes, replacing parts by trial-and-error is costly and ineffective.',
      p2: 'Our workshop is staffed exclusively by ASE Master-Certified A6 Electrical/Electronic technicians. We combine advanced bench testing, thermal imaging, and multi-channel digital storage oscilloscopes to prove the electrical root cause with laboratory certainty.',
      pillar1Title: 'Dealer-Level Tools',
      pillar1Desc: 'PicoScope 4425A scopes, Autel MaxiSys Ultra, Bosch ODIS, and factory J2534 flashers.',
      pillar2Title: 'Zero Guesswork',
      pillar2Desc: 'We verify sensor signals, power delivery, and ground integrity before replacing any unit.',
      pillar3Title: 'Nationwide Warranty',
      pillar3Desc: '24-Month / 24,000-Mile warranty on all diagnostic harness work and rebuilt units.',
      accreditations: 'Accreditations:',
      protocolKicker: 'AURORA ELECTRIC DIAGNOSTIC PROTOCOL',
      protocolTitle: 'The 4-Stage Diagnostic Method',
      step1Title: 'Customer Consultation & Symptom Triage',
      step1Desc: 'Capturing exact driving conditions, weather patterns, and sequence of warning lights.',
      step2Title: 'Full CAN / LIN Network Topology Interrogation',
      step2Desc: 'Reading active and historical DTCs across every networked module without clearing freeze frames.',
      step3Title: 'Oscilloscope & Voltage Drop Validation',
      step3Desc: 'Probing live signal square waves, checking ground circuit resistance, and thermal scan.',
      step4Title: 'Documented Report & Repair Estimate',
      step4Desc: 'Providing oscilloscope waveform screenshots and clear, transparent estimates before repair.',
      facilityId: 'FACILITY ID: CA-8942-EL',
      bayStatus: 'Bay Inspection Ready',
    },
    contact: {
      kicker: '04. Workshop Location & Direct Dispatch',
      title: 'Schedule Diagnostic Assessment or Inquire',
      subtitle: 'Visit our Studeniçan (Skopje) electrical workshop or submit your vehicle’s symptoms for a fast estimate and triage slot reservation.',
      phoneLabel: 'Direct Phone Line',
      phoneSub: 'Speak directly with an ASE Master Diagnostic Consultant.',
      facilityLabel: 'Physical Facility',
      facilitySub: 'Studeniçan, Shkup · Dedicated diagnostic drive-in lanes',
      hoursLabel: 'Operating Hours',
      monFri: 'Mon – Fri: 7:30 AM – 6:00 PM',
      sat: 'Saturday: 8:00 AM – 2:00 PM',
      sun: 'Sunday: Emergency Tow-In Only',
      keyDrop: '24/7 Secure After-Hours Key Drop Box at Bay 1',
      radarKicker: 'INTERACTIVE WORKSHOP RADAR & NAVIGATION',
      radarPin: 'BAY PINPOINT',
      mapView: 'Map View',
      satelliteView: 'Satellite',
      getDirections: 'Get Directions',
      openToday: 'OPEN TODAY',
      driveInLane: 'Drive-in diagnostic lane',
      formKicker: 'Diagnostic Intake Form',
      formTitle: 'Get an Electrical Repair Quote or Reserve Triage',
      formSub: 'Fill in your vehicle details below for upfront pricing and technician dispatch.',
      vehicleStatus: 'Vehicle Operating Status',
      statusStandard: 'Standard Drive-In',
      statusUrgent: 'Vehicle Dead / Tow-In',
      statusPrePurchase: 'Pre-Purchase Scan',
      year: 'Year',
      make: 'Vehicle Make',
      model: 'Vehicle Model',
      serviceCategory: 'Primary Service Category',
      symptoms: 'Symptoms, Warning Lights or Diagnostic Codes',
      fullName: 'Your Full Name',
      phone: 'Phone Number',
      email: 'Email Address',
      preferredDate: 'Preferred Date (Optional)',
      preferredTime: 'Preferred Time Window',
      submitBtn: 'Submit Diagnostic Request & Reserve Bay',
      submitting: 'DISPATCHING INTAKE...',
      termsNote: 'No obligation quote · Upfront price authorization before any repair',
      successKicker: 'Inquiry Confirmed · Dispatch Reference',
      successTitle: 'Intake Confirmed',
      successDesc: 'Our lead diagnostics consultant has received your inquiry. A confirmation SMS and preliminary intake checklist have been routed to your phone number.',
      submitAnother: 'Submit Another Inquiry',
      validation: {
        fullName: 'Please enter your full name.',
        phone: 'Contact phone number is required.',
        email: 'Email address is required for diagnostic dispatch.',
        make: 'Vehicle make is required (e.g., BMW, Audi, Ford).',
        model: 'Vehicle model is required (e.g., M3, RS6, F-150).',
        description: 'Please describe the electrical symptom or warning codes.',
      },
    },
    faq: {
      kicker: 'Clear Answers & Technical Transparency',
      title: 'Frequently Asked Electrical & Diagnostic Questions',
      subtitle: 'Learn why our lab-grade oscilloscope diagnostics save time, eliminate guesswork, and prevent costly unnecessary parts.',
      items: [
        {
          question: 'How do you pinpoint parasitic battery drain that kills my battery overnight?',
          answer: 'We connect precision milliamp meters and thermal imaging cameras to the vehicle while it is in deep sleep mode (all modules shut down). By measuring millivolt drop across individual fuses and thermal heat signatures of active circuit components, we locate the exact module or wire pulling power without disrupting the vehicle’s sleep state.',
        },
        {
          question: 'What makes your diagnostics different from free auto parts store code scans?',
          answer: 'Parts stores simply read the stored Diagnostic Trouble Code (DTC) and guess which part to sell you. We use digital lab oscilloscopes and dealer-grade scanners to physically measure the voltage, amperage, and serial data waveforms entering and exiting the component. We prove whether the sensor, the wiring harness, the ground connection, or the computer is at fault before replacing anything.',
        },
        {
          question: 'Do you work on European, Domestic, and Japanese vehicles?',
          answer: 'Yes. Our technicians hold dedicated OEM diagnostic software licenses for Mercedes-Benz (Xentry), BMW (ISTA), Audi/VW (ODIS), Porsche (PIWIS), Ford (FDRS), GM (GDS2), and Toyota/Lexus (Techstream).',
        },
        {
          question: 'Can you program replacement keys, remotes, and blank ECUs?',
          answer: 'Yes. We carry factory pass-thru (J2534) hardware capable of programming immobilizer modules, virgin ECUs, TCM transmissions, smart proximity fobs, and instrument clusters.',
        },
      ],
    },
    footer: {
      description: 'Advanced auto electrical repairs, digital oscilloscope diagnostics, ECU programming, and wiring harness overhauls. Serving European, Domestic, and Japanese vehicles with dealer-level precision.',
      warranty: '24-Month / 24,000-Mile Nationwide Warranty',
      capabilitiesTitle: 'Capabilities',
      workshopTitle: 'Workshop',
      contactTitle: 'Direct Contact',
      copyright: 'Aurora Electric Diagnostics, LLC. All rights reserved.',
      backToTop: 'Back to Top',
    },
    bookingModal: {
      kicker: 'Direct Bay Reservation',
      title: 'Book Diagnostic Appointment',
      subtitle: 'Reserve your diagnostic bay slot with our master electrical technicians.',
      submitBtn: 'Confirm Diagnostic Bay Reservation',
      successKicker: 'Appointment Request Received',
      successTitle: 'Reservation Confirmed',
      successDesc: 'Our diagnostic coordinator will call you within 30 minutes to confirm your exact bay time and technician assignment.',
      callDispatch: 'Call Dispatch Now',
      done: 'Done',
    },
  },
  sq: {
    nav: {
      services: 'Shërbimet',
      dtcLookup: 'Verifikim DTC',
      projects: 'Projektet',
      about: 'Rreth Nesh',
      contact: 'Vendndodhja & Kontakti',
      callUs: 'Telefono Tani',
      bookAppointment: 'Rezervo Takim',
      bookShort: 'Rezervo',
    },
    hero: {
      badge: 'Laborator i Çertifikuar Elektronik',
      slogan: 'Aurora Electric',
      facility: 'Qendra në Studeniçan, Shkup',
      headline: 'Shërbime të Avancuara Auto Elektrike & Diagnostikim',
      subheadline: 'Elektricistë auto të certifikuar të nivelit Master për instalime elektrike precize, diagnostikim kompjuteri ECU të nivelit të koncesionarit, riparime alternatori & motorino, dhe zgjidhje të defekteve komplekse. Gjejmë shkakun rrënjësor me oshiloskop laboratorik—pa supozime, pa shpenzime të kota pjesësh.',
      callNow: 'Na Telefononi Tani',
      getQuote: 'Merr Ofertë / Rezervo Takim',
      statVehicles: '14,280+',
      statVehiclesLabel: 'Automjete të Diagnostikuara',
      statFixRate: '99.4%',
      statFixRateLabel: 'Zgjidhje në Vizitën e Parë',
      statWarranty: '24 Muaj / 24k Milje',
      statWarrantyLabel: 'Garanci Pjesësh & Pune',
      statExp: '18 Vite',
      statExpLabel: 'Përvojë Master Elektronike',
      bayLive: 'KABINA E DIAGNOSTIKIMIT 1 // AKTIV',
      bayTech: 'CAN 2.0B / FLEXRAY',
      scannersTitle: 'Skanerë të Nivelit të Koncesionarit',
      scannersSubtitle: 'PicoScope 4425A · Autel MaxiSys · Bosch ODIS',
      sameDay: 'Brenda Ditës',
      sameDayLabel: 'Vende të Lira Triage',
      certTech: 'Teknikë Master të Certifikuar ASE',
      rapidFix: 'Izolim i Shpejtë i Defekteve Elektrike',
    },
    services: {
      kicker: '01. Zgjidhje Elektrike me Precizion të Lartë',
      title: 'Shërbimet Tona Kryesore Auto Elektrike',
      subtitle: 'Të pajisur me oshiloskopë dixhitalë, mjete diagnostikimi origjinale të fabrikës dhe simulatorë laboratori për të riparuar arkitekturat elektronike komplekse pa ndërrime të panevojshme pjesësh.',
      standards: 'Standarde Vale OEM',
      warranty: '24 Muaj Garanci',
      turnaround: 'Koha e realizimit',
      commonSymptoms: 'Simptomat më të shpeshta',
      technicalScope: 'Fusha Teknike',
      bookService: 'Rezervo Shërbimin',
      guaranteeTitle: 'Garancia e Diagnostikimit "Pa Supozime"',
      guaranteeDesc: 'Çdo rezervim diagnostikimi përfshin lexim fizik me oshiloskop dhe të dhëna dixhitale në kohë reale që tregojnë pikën e saktë të defektit përpara se të nisë çdo riparim.',
      guaranteeCta: 'Planifiko Skanim Diagnostikues',
      items: [
        {
          id: 'computer-diagnostics',
          title: 'Diagnostikim Kompjuterik & Fshirje Gabimesh',
          shortDescription: 'Kontroll i thelluar i rrjeteve OBD-II & CAN-bus të nivelit OEM, telemetri e sensorëve në kohë reale, izolim defekti në ECU dhe rikalibrim modulesh.',
          fullDescription: 'Procesi ynë diagnostikues shkon shumë përtej leximit të thjeshtë të kodeve. Duke përdorur oshiloskopë shumë-kanalësh PicoScope dhe skanerë OEM, ne monitorojmë rrjetet CAN, LIN dhe FlexRay me shpejtësi të lartë në kohë reale. Kapim anomalitë e valëve që skanerët e zakonshëm nuk i shohin dot, izolojmë kabllot e dëmtuara dhe kryejmë kodim e rikonfigurim të plotë.',
          bulletPoints: [
            'Analizë e formës së valëve për rrjetet CAN-bus, LIN, & FlexRay',
            'Testim komunikimi për modulet ECU, BCM, TCM & ABS',
            'Analizë e të dhënave freeze-frame & kapje e defekteve të çastit',
            'Verifikim i shkakut të vërtetë pa ndërrim pjesësh me hamendësim',
          ],
          turnaroundTime: '1 – 3 Orë (Ekzaminim Brenda Ditës)',
          commonSymptoms: [
            'Drita e motorit (Check Engine) ose EPC e ndezur në kroskot',
            'Aktivizim i regjimit emergjent (limp-mode) me fuqi të reduktuar',
            'Shumë drita paralajmëruese kontradiktore të ndezura njëkohësisht',
            'Makina nuk kalon dot testin e emetimeve teknike',
          ],
          priceRange: 'Nga $149 (Përfshin Raport të Plotë me Valë Oshiloskopi)',
        },
        {
          id: 'alternator-starter',
          title: 'Riparim Dinamo (Alternator) & Motorino',
          shortDescription: 'Testim dinamik në laborator, modifikim alternatori me fuqi të lartë (High-Output), riparim i solenoideve të motorinos dhe balancim i rregullatorit të tensionit.',
          fullDescription: 'Riparojmë dhe rikondicionojmë motorino 12V dhe 24V, alternatorë inteligjentë pa furça dhe qarqe ndihmëse karikimi start-stop. Çdo sistem testohet nën ngarkesë të plotë elektrike për të inspektuar diodat, konsumimin e furçave, rezistencën dhe amperazhin e tërheqjes.',
          bulletPoints: [
            'Testim automatik në bankoprofë me ngarkesë deri në 300A',
            'Ndërtim alternatorësh me rendiment të lartë për pajisje shtesë',
            'Riparim i solenoidit të motorinos, reduktorit dhe armaturës',
            'Kalibrim i kurbës së karikimit inteligjent të kontrolluar me LIN',
          ],
          turnaroundTime: 'Brenda ditës deri në 24 Orë',
          commonSymptoms: [
            'Zhurmë kërcitëse (klikim) gjatë kthimit të çelësit ose shtypjes start',
            'Drita e baterisë ndizet ose vezullon gjatë përshpejtimit',
            'Zhurmë fishkëllime e alternatorit në altoparlantët e kabinës',
            'Zbehje e dritave të fenerëve gjatë qëndrimit në vend apo semafor',
          ],
          priceRange: 'Nga $185 (Përfshin Testim në Bankoprofë & Ngarkesë)',
        },
        {
          id: 'wiring-lighting-battery',
          title: 'Instalime Kabllore, Ndriçim & Bateri',
          shortDescription: 'Gjetje e saktë e shkarkimit parazitar të baterisë (humbje korrenti), ndërtim instalimesh me mbrojtje hermetike, regjistrim baterie AGM/Lithium dhe përmirësim LED.',
          fullDescription: 'Defektet elektrike të fshehura këtu zgjidhen me saktësi shkencore. Ne zbulojmë rrjedhjet e rrymës deri në miliamper duke përdorur kamera termike dhe matje të rënies së tensionit në milivolt nëpër siguresa. Përdorim kabllo të gradës së garave Tefzel dhe konektorë Deutsch DT kundër lagështirës.',
          bulletPoints: [
            'Zbulim i shkarkimit parazitar me termokamerë & rënie milivolti',
            'Rindërtim i plotë i instalimit elektrik të shasisë nga brejtësit/zjarri',
            'Regjistrim & kodim kompjuterik për bateri AGM, EFB dhe Lithium-ion',
            'Përmirësim i ndriçimit origjinal me projektorë LED/Bi-LED & nivelim',
          ],
          turnaroundTime: 'Brenda ditës për bateri; 1 – 3 ditë për instalime komplekse',
          commonSymptoms: [
            'Bateria shkarkohet brenda natës ose pas 2-3 ditësh qëndrimi',
            'Erë plastike e djegur ose kablli të nxehtë në kabinë/motor',
            'Dritat e jashtme vezullojnë ose sinjalet pulsojnë me shpejtësi',
            'Siguresa që digjen vazhdimisht sapo ndizet kontakti',
          ],
          priceRange: 'Nga $129 (Testimi Bazë i Shkarkimit Parazitar)',
        },
        {
          id: 'ambient-lighting-starlight',
          title: 'Ndriçim Ambiental & Qiell me Yje (Starlight)',
          shortDescription: 'Tavan me fibra optike me yje të stilit Rolls-Royce, efekte yjesh që bien (shooting stars) dhe shirita ndriçimi ambiental dinamik RGBW të integruar me sistemin e makinës.',
          fullDescription: 'Ngrini kabinën e makinës suaj në nivelin e një supermakine luksoze. Ne specializohemi në krijimin e tavanit me yje me fibra optike (Starlight Headliner), ku çdo pikë drite montohet me dorë mbi pëlhurë Alcantara ose tapiceri origjinale, me efekte pulsuese dhe yje që bien. Gjithashtu instalojmë linja ndriçimi ambiental origjinal në kroskot, dyer dhe këmbë me kontroll nga telefoni dhe menyja origjinale e makinës.',
          bulletPoints: [
            'Nga 500 deri në mbi 1,500 fije fibre optike me efekt vezullimi (twinkle)',
            'Animacione të yjeve që bien (shooting stars) & konstelacione me aplikacion',
            'Shirita akrilikë LED për ndriçim ambiental në dyer, kroskot & pedalierë',
            'Sinkronizim me menynë origjinale CAN-bus (BMW, Mercedes, Audi, Porsche)',
          ],
          turnaroundTime: '1 – 2 Ditë (Punim Mjeshtëror me Dorë)',
          commonSymptoms: [
            'Dëshirë për tavan me qiell me yje si Rolls-Royce në kabinë',
            'Ndriçimi origjinal i kabinës shumë i errët ose me një ngjyrë të vjetëruar',
            'Kërkesë për ndriçim modern me 64 ngjyra të kontrollueshme',
            'Përmirësim i tapicerisë me tavan Alcantara dhe yje të ndritshëm',
          ],
          priceRange: 'Nga $450 (Përfshin Motorin e Fibrave & Instalimin)',
        },
        {
          id: 'headlight-polishing',
          title: 'Polirim & Restaurim i Fenerëve (Headlight Polishing)',
          shortDescription: 'Zmerilim me ujë në disa faza, polirim me makineri optike dhe aplikim shtrese mbrojtëse qeramike UV për kthimin e qartësisë kristal dhe ndriçimit maksimal.',
          fullDescription: 'Fenerët e zverdhur, të matuar dhe të oksiduar nga dielli ulin ndjeshëm shikueshmërinë gjatë natës, shpërndajnë rrezen e dritës dhe mund të shkaktojnë dështim në kontrollin teknik. Shërbimi ynë profesional heq shtresën e dëmtuar përmes zmerilimit të imët me ujë (800 deri 3000 gradë), pasohet nga polirimi optik me makineri dhe mbrohet me shtresë qeramike me bllokim të rrezeve UV që parandalon zverdhjen e ardhshme. Gjithashtu kontrollojmë drejtimin dhe rregullimin e rrezes.',
          bulletPoints: [
            'Zmerilim me ujë në disa faza për heqjen e oksidimit dhe gërvishtjeve',
            'Polirim me makineri dhe pasta optike për qartësi kristal si të reja',
            'Mbrojtje qeramike hidrofobike kundër rrezeve UV për jetëgjatësi maksimale',
            'Kontroll i këndit të ndriçimit dhe intensitetit të dritës',
          ],
          turnaroundTime: '1 – 2 Orë (Brenda Ditës)',
          commonSymptoms: [
            'Fenerë të zverdhur, të mjegullt ose të oksiduar nga dielli',
            'Shikueshmëri e dobët gjatë natës dhe dritë e zbehtë',
            'Moskalim i kontrollit teknik për shkak të fuqisë së dobët të dritës',
            'Sipërfaqe e ashpër e plastikës me mikrogërvishtje dhe djegie llaku',
          ],
          priceRange: 'Nga 25€ / Çifti (Përfshin Mbrojtje Qeramike UV)',
        },
      ],
    },
    dtcChecker: {
      kicker: 'Mjeti Ndërveprues i Diagnostikimit',
      title: 'Kërkuesi i Kodeve të Gabimit OBD-II & Simptomave',
      subtitle: 'Keni një dritë paralajmëruese të ndezur apo kod gabimi? Kërkoni në bazën tonë të të dhënave elektrike për të parë shkakun e vërtetë para se të ndërroni pjesë.',
      searchPlaceholder: 'Kërko kod (p.sh. U0100, P0562, P0300) ose simptomë (CAN bus, bateri, ndezje)...',
      clear: 'Pastro',
      listTitle: 'KODET MË TË SHPESHTA TË GABIMEVE ELEKTRIKE',
      matches: 'PËRPUTHJE',
      noMatchTitle: 'Nuk u gjet asnjë kod i saktë për',
      noMatchSub: 'Skanerët tanë master të koncesionarit mbulojnë të gjitha kodet OEM të çdo prodhuesi.',
      noMatchBtn: 'Kërko Analizë për Këtë Problem',
      specSheet: 'SKEDA E SPECIFIKIMIT DTC',
      targetSystem: 'Sistemi i Prekur',
      faultDefinition: 'Përkufizimi i Defektit Diagnostikues',
      likelyCause: 'SHKAKU RRËNJËSOR ELEKTRIK / I KABLLOVE',
      recommendedProtocol: 'Protokolli Teknik i Rekomanduar',
      triageCallout: 'Gati për ta izoluar këtë defekt? Ofrojmë takime të shpejta brenda ditës.',
      bookTriageFor: 'Rezervo Kontroll për',
      severityCritical: 'Kritik',
      severityModerate: 'Mesatar',
      severityAdvisory: 'Këshillues',
    },
    projects: {
      kicker: '02. Dëshmi e Mjeshtërisë',
      title: 'Projektet e Përfunduara Auto Elektrike',
      subtitle: 'Shikoni diagnostikimet reale, rindërtimin e instalimeve elektrike, sistemet e fuqishme të karikimit dhe integrimet e kroskotit të kryera në qendrën tonë.',
      tabs: {
        all: 'Të Gjitha Projektet',
        wiring: 'Instalime & Kabllo',
        ecu: 'Diagnostikim ECU',
        infotainment: 'Kroskoti & Ekrane',
        alternator: 'Alternatorë & Motorino',
      },
      caseStudy: 'STUDIM RASTI',
      technicalScope: 'Fusha Teknike',
      viewBreakdown: 'Shiko Detajet Teknike',
      requestSimilar: 'Kërko Punim të Ngjashëm',
      modalTitle: 'Detajet e Projektit',
      modalSymptoms: 'Problemi & Simptomat Fillestare',
      modalAnalysis: 'Analiza Diagnostikuese & Inxhinieria',
      modalSolution: 'Zgjidhja e Dorëzuar',
      close: 'Mbyll',
      bookConsultation: 'Rezervo Konsultë për Problem të Ngjashëm',
      items: [
        {
          id: 'proj-1',
          title: 'Rindërtim Kompleks i Instalimit të Motorit & Shasisë',
          category: 'wiring',
          vehicle: '1998 Porsche 911 (993 Turbo) & Track Spec GT3',
          turnaround: '3 Ditë',
          briefDescription: 'Riparim i plotë i rrjetit të kabllove pas dëmtimit nga brejtësit dhe vjetërimit të telave, ndërtuar me mbrojtëse Raychem DR-25 dhe pina të praruar me ar Deutsch.',
          technicalDetails: 'U rindërtuan 148 pika lidhjeje, u instalua modul releje shtesë dhe u eliminuan 3 qarkë-shkurtra mase që shkaktonin mos-ndezje.',
          solution: 'Hapësira e motorit tani përmban instalim 100% hermetik të nivelit ushtarak me qarqe të etiketuara, duke rikthyer telemetrinë e gazit me zero rënie rezistence.',
        },
        {
          id: 'proj-2',
          title: 'Izolim i Rrjetit CAN-Bus & Klonim i ECU',
          category: 'ecu',
          vehicle: '2021 BMW M4 Competition (G82)',
          turnaround: '1.5 Ditë',
          briefDescription: 'Zgjidhje e rënies së herëpashershme të të gjithë rrjetit (U0001 / U0100) e shkaktuar nga një kabllo gateway e shtypur poshtë shasisë së pasme.',
          technicalDetails: 'Përdorëm PicoScope me 4 kanale për të izoluar shtrembërimin e valëve CAN-H / CAN-L; u mikrosaldua rezistenca fundore dhe u rifreskua programi i ECU.',
          solution: 'U rikthye sinjali diferencial i qëndrueshëm (2.5V / 3.5V), u fshinë 18 kode false gabimi dhe u risinkronizua diferenciali aktiv.',
        },
        {
          id: 'proj-3',
          title: 'Integrim i Kroskotit Dixhital & Multimedias',
          category: 'infotainment',
          vehicle: '2019 Mercedes-Benz AMG C63S',
          turnaround: '5 Orë',
          briefDescription: 'Instalim i kroskotit dixhital me definicion të lartë me integrim të plotë të fibrave optike MOST dhe butonave në timon.',
          technicalDetails: 'U integrua Apple CarPlay pa kabllo, telemetria e sensorëve të parkimit, mbrojtje nga radarët dhe ndriçimi ambiental i sinkronizuar.',
          solution: 'Pamje origjinale fabrike me zero gabime në kroskot dhe komunikim të menjëhershëm me rrjetin optik.',
        },
        {
          id: 'proj-4',
          title: 'Rindërtim Alternatori me Rendiment të Lartë & Motorino',
          category: 'starter-alternator',
          vehicle: '2020 Ford F-350 Super Duty 6.7L Powerstroke',
          turnaround: 'Brenda Ditës (6 Orë)',
          briefDescription: 'Përmirësim i sistemit të dyfishtë të karikimit me alternator 320-amper për të mbështetur pajisje pune dhe inverterë elektrikë 220V.',
          technicalDetails: 'Balancim i rotorit të rëndë të bakrit, ndërrim i urës së diodave me dioda Schottky me rënie minimale voltazhi dhe kabllo mase me profil 0-gauge.',
          solution: 'Furnizon një tension fiks 14.4V në minimun të motorit nën ngarkesë të plotë 220A pa asnjë luhatje rryme.',
        },
      ],
    },
    about: {
      kicker: '03. Besim & Rigorozitet Teknik',
      title: 'Mbi 18 Vite Përvojë në Zgjidhjen e Elektronikës që Bllokon Serviset e Tjera',
      p1: 'E themeluar në Studeniçan (Shkup), Aurora Auto Electric lindi mbi një parim të thjeshtë inxhinierik: makinat moderne janë rrjete kompjuterike komplekse mbi rrota. Kur ndodh një defekt i herëpashershëm elektrik apo ndizet drita e motorit, ndërrimi i pjesëve pa plan është i kushtueshëm dhe i paefektshëm.',
      p2: 'Servisi ynë ka vetëm teknikë të certifikuar Master ASE A6 në Elektrike/Elektronikë. Ne kombinojmë testime në laborator, imazhe termike dhe oshiloskopë dixhitalë për të vërtetuar shkakun elektrik me siguri shkencore.',
      pillar1Title: 'Pajisje të Fabrikës',
      pillar1Desc: 'Oshiloskopë PicoScope 4425A, Autel MaxiSys Ultra, Bosch ODIS dhe pajisje programimi J2534.',
      pillar2Title: 'Zero Hamendësime',
      pillar2Desc: 'Verifikojmë sinjalin e çdo sensori, furnizimin me korrent dhe masën para se të ndërrojmë çdo pjesë.',
      pillar3Title: 'Garanci Kombëtare',
      pillar3Desc: '24 muaj / 24,000 milje garanci për të gjitha punimet e instalimeve dhe pjesët e riparuara.',
      accreditations: 'Akreditimet:',
      protocolKicker: 'PROTOKOLLI DIAGNOSTIKUES AURORA ELECTRIC',
      protocolTitle: 'Metoda Diagnostikuese me 4 Faza',
      step1Title: 'Konsultimi me Klientin & Klasifikimi i Simptomave',
      step1Desc: 'Regjistrimi i kushteve të sakta të drejtimit, kushteve të motit dhe radhës së dritave të ndezura.',
      step2Title: 'Kontroll i Plotë i Topologjisë së Rrjetit CAN / LIN',
      step2Desc: 'Lexim i kodeve aktive dhe historike në çdo modul të lidhur pa fshirë të dhënat freeze-frame.',
      step3Title: 'Vlefshmëri me Oshiloskop & Rënie Voltazhi',
      step3Desc: 'Testim i formës katrore të sinjalit në kohë reale, kontroll i rezistencës së masës dhe skanim termik.',
      step4Title: 'Raport i Dokumentuar & Vlerësim Riparimi',
      step4Desc: 'Ofrim i pamjeve të valëve të oshiloskopit dhe preventiv i qartë e transparent para nisjes së punës.',
      facilityId: 'ID E SERVISIT: CA-8942-EL',
      bayStatus: 'Kabina Gati për Inspektim',
    },
    contact: {
      kicker: '04. Vendndodhja e Servisit & Pranimi Direkt',
      title: 'Planifikoni Vlerësim Diagnostikues ose Kërkoni Informacion',
      subtitle: 'Vizitoni laboratorin tonë elektrik në Studeniçan (Shkup) ose dërgoni simptomat e makinës suaj për një ofertë të shpejtë dhe rezervim vendi.',
      phoneLabel: 'Linja Direkte e Telefonit',
      phoneSub: 'Flisni drejtpërdrejt me një Konsulent Diagnostikues Master ASE.',
      facilityLabel: 'Adresa Fizike e Servisit',
      facilitySub: 'Studeniçan, Shkup · Pista të dedikuara hyrëse për diagnostikim',
      hoursLabel: 'Orari i Punës',
      monFri: 'Hënë – Premte: 7:30 AM – 6:00 PM',
      sat: 'Shtunë: 8:00 AM – 2:00 PM',
      sun: 'Diel: Vetëm Rimorkim Emergjent',
      keyDrop: 'Kuti e Sigurt 24/7 për Lënien e Çelësave jashtë orarit tek Kabina 1',
      radarKicker: 'RADARI NDËRVEPRUES I SERVISIT & NAVIGIMI',
      radarPin: 'PIKA E KABINAVE',
      mapView: 'Harta',
      satelliteView: 'Satelit',
      getDirections: 'Merr Udhëzimet e Rrugës',
      openToday: 'HAPUR SOT',
      driveInLane: 'Pista e dedikuar e hyrjes',
      formKicker: 'Formulari i Pranimit Diagnostikues',
      formTitle: 'Merrni Preventiv Riparimi Elektrik ose Rezervoni Vend',
      formSub: 'Plotësoni të dhënat e automjetit tuaj më poshtë për çmim të qartë dhe caktim tekniku.',
      vehicleStatus: 'Gjendja e Automjetit',
      statusStandard: 'Vjen me Makinë Vetë',
      statusUrgent: 'Makina e Fikur / Karotrec',
      statusPrePurchase: 'Kontroll para Blerjes',
      year: 'Viti',
      make: 'Marka e Automjetit',
      model: 'Modeli i Automjetit',
      serviceCategory: 'Kategoria Kryesore e Shërbimit',
      symptoms: 'Simptomat, Dritat e Ndezura ose Kodet e Gabimit',
      fullName: 'Emri & Mbiemri Juaj',
      phone: 'Numri i Telefonit',
      email: 'Adresa e Email-it',
      preferredDate: 'Data e Preferuar (Opsionale)',
      preferredTime: 'Fasha e Preferuar e Orarit',
      submitBtn: 'Dërgo Kërkesën & Rezervo Kabinën',
      submitting: 'PO REGJISTROHET...',
      termsNote: 'Ofertë pa detyrim · Miratim paraprak çmimi përpara çdo riparimi',
      successKicker: 'Kërkesa u Konfirmua · Numri i Referencës',
      successTitle: 'Pranimi u Regjistrua me Sukses',
      successDesc: 'Konsulenti ynë kryesor ka marrë kërkesën tuaj. Një SMS konfirmimi dhe lista e kontrollit paraprak janë dërguar në numrin tuaj të telefonit.',
      submitAnother: 'Dërgo një Kërkesë Tjetër',
      validation: {
        fullName: 'Ju lutem shkruani emrin dhe mbiemrin tuaj.',
        phone: 'Numri i telefonit është i detyrueshëm.',
        email: 'Adresa e email-it kërkohet për njoftimin e diagnostikimit.',
        make: 'Marka e automjetit është e detyrueshme (p.sh. BMW, Audi, Mercedes).',
        model: 'Modeli i automjetit është i detyrueshëm (p.sh. M3, C-Class, Golf).',
        description: 'Ju lutem përshkruani simptomën elektrike ose kodet e gabimit.',
      },
    },
    faq: {
      kicker: 'Përgjigje të Qarta & Transparencë Teknike',
      title: 'Pyetjet më të Shpeshta mbi Elektrikën & Diagnostikimin',
      subtitle: 'Mësoni pse diagnostikimi ynë me oshiloskop laboratorik kursen kohë, eliminon supozimet dhe shmang blerjen e kotë të pjesëve.',
      items: [
        {
          question: 'Si e zbuloni shkarkimin parazitar që harxhon baterinë brenda natës?',
          answer: 'Ne lidhim pajisje matëse me precizion miliamperi dhe kamera termike kur makina është në regjim të plotë fjetjeje (sleep mode). Duke matur rënien e milivoltit në çdo siguresë dhe nxehtësinë e komponentëve aktivë, gjejmë modulin apo telin ekzakt pa e zgjuar sistemin kompjuterik të makinës.',
        },
        {
          question: 'Pse diagnostikimi juaj ndryshon nga skanimi i thjeshtë falas në dyqane pjesësh?',
          answer: 'Dyqanet e pjesëve thjesht lexojnë kodin e gabimit dhe përpiqen t’ju shesin një pjesë me hamendësim. Ne përdorim oshiloskopë dixhitalë dhe matim fizikisht formën e valëve të tensionit, rrymës dhe të dhënave që hyjnë e dalin nga sensori. Ne vërtetojmë nëse fajin e ka sensori, teli, masa apo vetë kompjuteri para se të blihet pjesa.',
        },
        {
          question: 'A punoni me makina Evropiane, Amerikane dhe Japoneze?',
          answer: 'Po. Teknikët tanë zotërojnë licenca të programeve diagnostikuese OEM për Mercedes-Benz (Xentry), BMW (ISTA), Audi/VW (ODIS), Porsche (PIWIS), Ford (FDRS), GM (GDS2) dhe Toyota/Lexus (Techstream).',
        },
        {
          question: 'A mund të programoni çelësa të rinj, pultë dhe kompjutera (ECU) bosh?',
          answer: 'Po. Ne disponojmë pajisje zyrtare pass-thru (J2534) të afta për të programuar imobilajzerë, ECU të reja apo të përdorura, transmisione TCM, çelësa me sensor afrimi dhe instrumente bordi.',
        },
      ],
    },
    footer: {
      description: 'Riparime të avancuara auto elektrike, diagnostikim me oshiloskop dixhital, programim ECU dhe rindërtim rrjeti kabllor. Shërbim për makina Evropiane, Amerikane dhe Japoneze me saktësi koncesionari.',
      warranty: '24 Muaj / 24,000 Milje Garanci Kombëtare',
      capabilitiesTitle: 'Kapacitetet',
      workshopTitle: 'Servisi',
      contactTitle: 'Kontakt Direkt',
      copyright: 'Aurora Electric Diagnostics, LLC. Të gjitha të drejtat të rezervuara.',
      backToTop: 'Në Krye',
    },
    bookingModal: {
      kicker: 'Rezervim Direkt i Kabinës',
      title: 'Rezervo Takim Diagnostikues',
      subtitle: 'Zgjidhni vendin tuaj në kabinën e diagnostikimit me elektricistët tanë master.',
      submitBtn: 'Konfirmo Rezervimin e Kabinës',
      successKicker: 'Kërkesa për Takim u Pranua',
      successTitle: 'Rezervimi u Konfirmua',
      successDesc: 'Koordinatori ynë diagnostikues do t’ju telefonojë brenda 30 minutave për të konfirmuar orarin ekzakt dhe teknikun e caktuar.',
      callDispatch: 'Telefono Qendrën Tani',
      done: 'U Krye',
    },
  },
  mk: mkTranslation,
};
