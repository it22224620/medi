export interface Service {
  id: string;
  icon: string;
  colorClass: string;
  translationKey: string;
  descriptionKey: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'emergency',
    icon: 'alert-circle',
    colorClass: 'bg-red-100 text-red-600',
    translationKey: 'service.emergency',
    descriptionKey: 'service.emergency.desc',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '24/7 availability',
      'Immediate critical care',
      'Advanced life support',
      'Trauma management',
      'Rapid diagnostics'
    ]
  },
  {
    id: 'pediatrics',
    icon: 'baby',
    colorClass: 'bg-blue-100 text-blue-600',
    translationKey: 'service.pediatrics',
    descriptionKey: 'service.pediatrics.desc',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Child-friendly facilities',
      'Specialized pediatric care',
      'Vaccination services',
      'Growth monitoring',
      'Developmental assessments'
    ]
  },
  {
    id: 'laboratory',
    icon: 'flask-conical',
    colorClass: 'bg-purple-100 text-purple-600',
    translationKey: 'service.laboratory',
    descriptionKey: 'service.laboratory.desc',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Modern equipment',
      'Comprehensive blood testing',
      'Rapid results',
      'Microbiology services',
      'PCR testing'
    ]
  },
  {
    id: 'pharmacy',
    icon: 'pill',
    colorClass: 'bg-emerald-100 text-emerald-600',
    translationKey: 'service.pharmacy',
    descriptionKey: 'service.pharmacy.desc',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Full prescription services',
      'Over-the-counter medications',
      'Medication counseling',
      'Medicine home delivery',
      'Electronic prescriptions'
    ]
  },
  {
    id: 'surgery',
    icon: 'scissors',
    colorClass: 'bg-amber-100 text-amber-600',
    translationKey: 'service.surgery',
    descriptionKey: 'service.surgery.desc',
    image: 'https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Modern operating rooms',
      'General surgery',
      'Laparoscopic procedures',
      'Pre and post-operative care',
      'Specialized surgeons'
    ]
  },
  {
    id: 'maternity',
    icon: 'baby',
    colorClass: 'bg-pink-100 text-pink-600',
    translationKey: 'service.maternity',
    descriptionKey: 'service.maternity.desc',
    image: 'https://images.pexels.com/photos/271171/pexels-photo-271171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Prenatal care',
      'Labor and delivery',
      'Postnatal services',
      'Neonatal care',
      'Lactation support'
    ]
  },
  {
    id: 'outpatient',
    icon: 'stethoscope',
    colorClass: 'bg-sky-100 text-sky-600',
    translationKey: 'service.outpatient',
    descriptionKey: 'service.outpatient.desc',
    image: 'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'General consultations',
      'Specialist referrals',
      'Follow-up care',
      'Preventative care',
      'Health screenings'
    ]
  }
];