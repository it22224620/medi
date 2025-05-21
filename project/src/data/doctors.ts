export interface Doctor {
  id: number;
  name: string;
  nameTranslated?: string;
  specialty: string;
  specialtyTranslated?: string;
  image: string;
  languages: string[];
  education: string[];
  availability: string;
  bio: string;
  bioTranslated?: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Rajiv Kumar',
    nameTranslated: 'டாக்டர் ராஜீவ் குமார்',
    specialty: 'Chief Medical Officer, Internal Medicine',
    specialtyTranslated: 'தலைமை மருத்துவ அதிகாரி, உள் மருத்துவம்',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil', 'Sinhala'],
    education: [
      'MBBS - University of Colombo',
      'MD in Internal Medicine - University of Peradeniya',
      'Fellowship - Royal College of Physicians, UK'
    ],
    availability: 'Mon, Wed, Fri: 9:00 AM - 1:00 PM',
    bio: 'Dr. Kumar has over 15 years of experience in internal medicine and has been with New Modern Medicare since its founding. He specializes in managing complex medical conditions with a patient-centered approach.',
    bioTranslated: 'டாக்டர் குமார் உள் மருத்துவத்தில் 15 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்டவர் மற்றும் நியூ மாடர்ன் மெடிக்கேர் நிறுவப்பட்டதிலிருந்து இங்கு பணியாற்றி வருகிறார். நோயாளி மையமாக கொண்ட அணுகுமுறையுடன் சிக்கலான மருத்துவ நிலைமைகளை நிர்வகிப்பதில் நிபுணத்துவம் பெற்றவர்.'
  },
  {
    id: 2,
    name: 'Dr. Priya Navaratnam',
    nameTranslated: 'டாக்டர் பிரியா நவரத்னம்',
    specialty: 'Pediatrician',
    specialtyTranslated: 'குழந்தை மருத்துவர்',
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil'],
    education: [
      'MBBS - University of Jaffna',
      'DCH - Postgraduate Institute of Medicine, Colombo',
      'MD in Pediatrics - University of Colombo'
    ],
    availability: 'Tue, Thu: 8:00 AM - 2:00 PM, Sat: 9:00 AM - 12:00 PM',
    bio: 'Dr. Priya is a dedicated pediatrician with special interest in childhood development and preventative care. She has been serving the children of Chavakachcheri for over a decade.',
    bioTranslated: 'டாக்டர் பிரியா குழந்தை வளர்ச்சி மற்றும் தடுப்பு சிகிச்சையில் சிறப்பு ஆர்வம் கொண்ட அர்ப்பணிப்புள்ள குழந்தை மருத்துவர். அவர் ஒரு தசாப்தத்திற்கும் மேலாக சாவகச்சேரி குழந்தைகளுக்கு சேவை செய்து வருகிறார்.'
  },
  {
    id: 3,
    name: 'Dr. Mohammed Ismail',
    nameTranslated: 'டாக்டர் முகமது இஸ்மாயில்',
    specialty: 'General Surgeon',
    specialtyTranslated: 'பொது அறுவை சிகிச்சை நிபுணர்',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil', 'Sinhala'],
    education: [
      'MBBS - University of Peradeniya',
      'MS in General Surgery - University of Colombo',
      'FRCS - Royal College of Surgeons, Edinburgh'
    ],
    availability: 'Mon, Wed, Fri: 2:00 PM - 6:00 PM',
    bio: 'Dr. Ismail is a skilled surgeon specializing in general and laparoscopic surgery. He has performed over 2,000 successful surgeries and is known for his gentle approach with patients.',
    bioTranslated: 'டாக்டர் இஸ்மாயில் பொது மற்றும் லேப்ரோஸ்கோபிக் அறுவை சிகிச்சையில் நிபுணத்துவம் பெற்ற திறமையான அறுவை சிகிச்சை நிபுணர். அவர் 2,000க்கும் மேற்பட்ட வெற்றிகரமான அறுவை சிகிச்சைகளை மேற்கொண்டுள்ளார் மற்றும் நோயாளிகளுடன் மென்மையான அணுகுமுறைக்காக அறியப்படுகிறார்.'
  },
  {
    id: 4,
    name: 'Dr. Lakshmi Chandran',
    nameTranslated: 'டாக்டர் லக்ஷ்மி சந்திரன்',
    specialty: 'Obstetrician & Gynecologist',
    specialtyTranslated: 'மகப்பேறு மற்றும் பெண்ணோயியல் நிபுணர்',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Tamil', 'Sinhala'],
    education: [
      'MBBS - University of Colombo',
      'MD in Obstetrics & Gynecology - University of Colombo',
      'Fellowship in Maternal-Fetal Medicine - Singapore General Hospital'
    ],
    availability: 'Tue, Thu: 9:00 AM - 3:00 PM, Sat: 9:00 AM - 1:00 PM',
    bio: 'Dr. Lakshmi is dedicated to women\'s health and specializes in high-risk pregnancies. She has helped deliver over 3,000 babies and is passionate about maternal health education.',
    bioTranslated: 'டாக்டர் லக்ஷ்மி பெண்களின் ஆரோக்கியத்திற்காக அர்ப்பணிக்கப்பட்டவர் மற்றும் அதிக ஆபத்துள்ள கர்ப்பங்களில் நிபுணத்துவம் பெற்றவர். அவர் 3,000க்கும் மேற்பட்ட குழந்தைகளை பிரசவிக்க உதவியுள்ளார் மற்றும் தாய் ஆரோக்கிய கல்வியில் ஆர்வமுள்ளவர்.'
  },
  {
    id: 5,
    name: 'Dr. Thomas Wilson',
    nameTranslated: 'டாக்டர் தாமஸ் வில்சன்',
    specialty: 'Emergency Medicine',
    specialtyTranslated: 'அவசர மருத்துவம்',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Sinhala'],
    education: [
      'MBBS - University of Kelaniya',
      'MD in Emergency Medicine - University of Colombo',
      'Advanced Trauma Life Support Certification'
    ],
    availability: '24-hour emergency rotations',
    bio: 'Dr. Wilson leads our Emergency Department with expertise in trauma management and emergency care. He has trained extensively in advanced life support and emergency protocols.',
    bioTranslated: 'டாக்டர் வில்சன் காய மேலாண்மை மற்றும் அவசர சிகிச்சையில் நிபுணத்துவத்துடன் எங்கள் அவசர சிகிச்சைப் பிரிவை வழிநடத்துகிறார். அவர் மேம்பட்ட உயிர் ஆதரவு மற்றும் அவசர நெறிமுறைகளில் விரிவாக பயிற்சி பெற்றுள்ளார்.'
  },
  {
    id: 6,
    name: 'Dr. Anand Gupta',
    nameTranslated: 'டாக்டர் ஆனந்த் குப்தா',
    specialty: 'Cardiologist',
    specialtyTranslated: 'இருதய மருத்துவர்',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    languages: ['English', 'Hindi', 'Tamil'],
    education: [
      'MBBS - All India Institute of Medical Sciences',
      'MD in Cardiology - Christian Medical College, Vellore',
      'Fellowship in Interventional Cardiology - Apollo Hospitals, Chennai'
    ],
    availability: 'Mon, Thu: 10:00 AM - 4:00 PM',
    bio: 'Dr. Anand specializes in preventative cardiology and management of cardiac conditions. He brings international expertise to provide comprehensive cardiac care to the community.',
    bioTranslated: 'டாக்டர் ஆனந்த் தடுப்பு இதய மருத்துவம் மற்றும் இதய நிலைமைகளின் மேலாண்மையில் நிபுணத்துவம் பெற்றவர். சமூகத்திற்கு விரிவான இதய சிகிச்சை வழங்க அவர் சர்வதேச நிபுணத்துவத்தை கொண்டு வருகிறார்.'
  }
];