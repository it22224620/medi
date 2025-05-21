export interface Employee {
  id: number;
  name: string;
  nameTranslated?: string;
  position: string;
  positionTranslated?: string;
  department: string;
  departmentTranslated?: string;
  image: string;
  languages: string[];
  bio: string;
  bioTranslated?: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: 'Sunita Rajan',
    nameTranslated: 'சுனிதா ராஜன்',
    position: 'Head Nurse',
    positionTranslated: 'தலைமை செவிலியர்',
    department: 'Nursing Administration',
    departmentTranslated: 'செவிலியர் நிர்வாகம்',
    image: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil'],
    bio: 'Sunita has over 20 years of nursing experience and oversees all nursing operations. She ensures high-quality patient care standards are maintained throughout the hospital.',
    bioTranslated: 'சுனிதா 20 ஆண்டுகளுக்கும் மேலான செவிலியர் அனுபவம் கொண்டவர் மற்றும் அனைத்து செவிலியர் செயல்பாடுகளையும் மேற்பார்வையிடுகிறார். மருத்துவமனை முழுவதும் உயர்தர நோயாளி சிகிச்சை தரநிலைகள் பராமரிக்கப்படுவதை உறுதி செய்கிறார்.'
  },
  {
    id: 2,
    name: 'Vijay Prakash',
    nameTranslated: 'விஜய் பிரகாஷ்',
    position: 'Laboratory Manager',
    positionTranslated: 'ஆய்வக மேலாளர்',
    department: 'Clinical Laboratory',
    departmentTranslated: 'கிளினிக்கல் ஆய்வகம்',
    image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil', 'Sinhala'],
    bio: 'Vijay manages our state-of-the-art clinical laboratory, ensuring accurate and timely test results. He has implemented numerous quality control measures to maintain diagnostic excellence.',
    bioTranslated: 'விஜய் எங்களின் நவீன கிளினிக்கல் ஆய்வகத்தை நிர்வகிக்கிறார், துல்லியமான மற்றும் சரியான நேரத்தில் சோதனை முடிவுகளை உறுதி செய்கிறார். நோயறிதல் சிறப்பை பராமரிக்க அவர் பல தர கட்டுப்பாட்டு நடவடிக்கைகளை அமல்படுத்தியுள்ளார்.'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    nameTranslated: 'சாரா ஜான்சன்',
    position: 'Hospital Administrator',
    positionTranslated: 'மருத்துவமனை நிர்வாகி',
    department: 'Administration',
    departmentTranslated: 'நிர்வாகம்',
    image: 'https://images.pexels.com/photos/6890741/pexels-photo-6890741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Sinhala'],
    bio: 'Sarah oversees the administrative operations of New Modern Medicare. With a background in healthcare management, she ensures the hospital runs efficiently while maintaining the highest patient care standards.',
    bioTranslated: 'சாரா நியூ மாடர்ன் மெடிக்கேரின் நிர்வாக செயல்பாடுகளை மேற்பார்வையிடுகிறார். சுகாதார மேலாண்மையில் பின்னணி கொண்ட அவர், மருத்துவமனை திறமையாக இயங்குவதை உறுதி செய்வதோடு, உயர்ந்த நோயாளி சிகிச்சை தரநிலைகளை பராமரிக்கிறார்.'
  },
  {
    id: 4,
    name: 'Rani Murugan',
    nameTranslated: 'ராணி முருகன்',
    position: 'Chief Pharmacist',
    positionTranslated: 'தலைமை மருந்தாளுநர்',
    department: 'Pharmacy',
    departmentTranslated: 'மருந்தகம்',
    image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil'],
    bio: 'Rani leads our pharmacy department with over 15 years of experience. She ensures accurate medication dispensing and patient counseling on proper medication use.',
    bioTranslated: 'ராணி 15 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன் எங்கள் மருந்தக துறையை வழிநடத்துகிறார். அவர் துல்லியமான மருந்து வழங்குதல் மற்றும் சரியான மருந்து பயன்பாட்டில் நோயாளி ஆலோசனை வழங்குவதை உறுதி செய்கிறார்.'
  },
  {
    id: 5,
    name: 'Nimal Perera',
    nameTranslated: 'நிமல் பெரேரா',
    position: 'Head of Maintenance',
    positionTranslated: 'பராமரிப்பு தலைவர்',
    department: 'Facilities Management',
    departmentTranslated: 'வசதிகள் மேலாண்மை',
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Sinhala', 'Tamil'],
    bio: 'Nimal ensures all hospital facilities are properly maintained and operational. His team is responsible for creating a safe, clean environment for patients and staff.',
    bioTranslated: 'நிமல் அனைத்து மருத்துவமனை வசதிகளும் முறையாக பராமரிக்கப்பட்டு செயல்படுவதை உறுதி செய்கிறார். அவரது குழு நோயாளிகள் மற்றும் ஊழியர்களுக்கு பாதுகாப்பான, சுத்தமான சூழலை உருவாக்குவதற்கு பொறுப்பானது.'
  },
  {
    id: 6,
    name: 'Fathima Najmudeen',
    nameTranslated: 'பாத்திமா நஜ்முதீன்',
    position: 'Patient Services Coordinator',
    positionTranslated: 'நோயாளி சேவைகள் ஒருங்கிணைப்பாளர்',
    department: 'Patient Services',
    departmentTranslated: 'நோயாளி சேவைகள்',
    image: 'https://images.pexels.com/photos/7584820/pexels-photo-7584820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil', 'Arabic'],
    bio: 'Fathima coordinates patient admissions, discharges, and transfers. She is dedicated to ensuring patients receive compassionate care throughout their hospital stay.',
    bioTranslated: 'பாத்திமா நோயாளிகளின் அனுமதி, வெளியேற்றம் மற்றும் மாற்றங்களை ஒருங்கிணைக்கிறார். நோயாளிகள் தங்கள் மருத்துவமனை தங்குமிடத்தில் அனுதாபமான சிகிச்சை பெறுவதை உறுதி செய்வதில் அவர் அர்ப்பணிப்புடன் இருக்கிறார்.'
  },
  {
    id: 7,
    name: 'Kumar Devanathan',
    nameTranslated: 'குமார் தேவநாதன்',
    position: 'Radiology Technician',
    positionTranslated: 'கதிரியக்க தொழில்நுட்ப வல்லுநர்',
    department: 'Radiology',
    departmentTranslated: 'கதிரியக்கவியல்',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil'],
    bio: 'Kumar operates our advanced diagnostic imaging equipment. He has specialized training in X-ray, ultrasound, and CT scanning procedures.',
    bioTranslated: 'குமார் எங்களின் மேம்பட்ட நோயறிதல் படிம மருத்துவ உபகரணங்களை இயக்குகிறார். அவர் எக்ஸ்-ரே, அல்ட்ராசவுண்ட் மற்றும் சிடி ஸ்கேனிங் செயல்முறைகளில் சிறப்பு பயிற்சி பெற்றுள்ளார்.'
  },
  {
    id: 8,
    name: 'Anjali Patel',
    nameTranslated: 'அஞ்சலி படேல்',
    position: 'Dietitian',
    positionTranslated: 'உணவியல் நிபுணர்',
    department: 'Nutrition Services',
    departmentTranslated: 'உணவூட்ட சேவைகள்',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Hindi', 'Tamil'],
    bio: 'Anjali develops specialized nutrition plans for patients with various health conditions. She provides nutritional education and counseling to support optimal recovery and health maintenance.',
    bioTranslated: 'அஞ்சலி பல்வேறு உடல்நலக் குறைபாடுகள் உள்ள நோயாளிகளுக்கு சிறப்பு உணவூட்டத் திட்டங்களை உருவாக்குகிறார். சிறந்த மீட்பு மற்றும் ஆரோக்கிய பராமரிப்புக்கு ஆதரவளிக்க அவர் உணவூட்ட கல்வி மற்றும் ஆலோசனை வழங்குகிறார்.'
  }
];