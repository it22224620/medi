export interface Testimonial {
  id: number;
  name: string;
  nameTranslated?: string;
  avatar: string;
  rating: number;
  testimonial: string;
  testimonialTranslated?: string;
  date: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Arun Thirunavukarasu',
    nameTranslated: 'அருண் திருநாவுக்கரசு',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    testimonial: 'I was admitted for an emergency surgery, and the care I received was exceptional. Dr. Ismail and the surgical team were professional, caring, and thorough. The staff made a stressful situation much easier to handle.',
    testimonialTranslated: 'நான் அவசர அறுவை சிகிச்சைக்காக அனுமதிக்கப்பட்டேன், நான் பெற்ற சிகிச்சை விதிவிலக்கானது. டாக்டர் இஸ்மாயில் மற்றும் அறுவை சிகிச்சைக் குழு தொழில்முறையாகவும், கவனிப்புடனும், முழுமையாகவும் இருந்தனர். அழுத்தமான சூழ்நிலையை கையாள்வதற்கு ஊழியர்கள் மிகவும் எளிதாக்கினர்.',
    date: '2023-09-15',
    service: 'Surgery'
  },
  {
    id: 2,
    name: 'Lakshmi Narayanan',
    nameTranslated: 'லக்ஷ்மி நாராயணன்',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    testimonial: 'Dr. Priya has been treating my children for years. She is patient, thorough, and always takes time to explain everything. The pediatric department is welcoming and designed to make children comfortable. Highly recommend!',
    testimonialTranslated: 'டாக்டர் பிரியா என் குழந்தைகளை பல ஆண்டுகளாக சிகிச்சையளித்து வருகிறார். அவர் பொறுமையாகவும், முழுமையாகவும் இருப்பார், எப்போதும் அனைத்தையும் விளக்க நேரம் எடுத்துக்கொள்வார். குழந்தைகள் மருத்துவப் பிரிவு வரவேற்கத்தக்கதாகவும், குழந்தைகள் வசதியாக உணரும் வகையிலும் வடிவமைக்கப்பட்டுள்ளது. மிகவும் பரிந்துரைக்கிறேன்!',
    date: '2023-07-22',
    service: 'Pediatrics'
  },
  {
    id: 3,
    name: 'Mahendran Selvaraj',
    nameTranslated: 'மகேந்திரன் செல்வராஜ்',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    testimonial: 'The laboratory services are efficient and well-organized. I appreciate how quickly I received my test results and the clear explanations provided by the staff. The hospital environment is clean and modern.',
    testimonialTranslated: 'ஆய்வக சேவைகள் திறமையாகவும், நன்கு ஒழுங்கமைக்கப்பட்டுள்ளன. என் சோதனை முடிவுகளை எவ்வளவு விரைவாகப் பெற்றேன் என்பதையும், ஊழியர்களால் வழங்கப்பட்ட தெளிவான விளக்கங்களையும் நான் பாராட்டுகிறேன். மருத்துவமனை சூழல் சுத்தமாகவும் நவீனமாகவும் உள்ளது.',
    date: '2023-10-05',
    service: 'Laboratory'
  },
  {
    id: 4,
    name: 'Jude Fernando',
    nameTranslated: 'ஜூட் பெர்னாண்டோ',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    testimonial: 'Dr. Anand\'s cardiac care has been life-changing for me. The entire cardiology team is knowledgeable and compassionate. I particularly appreciate that they speak Tamil, which makes it easier for me to communicate my concerns.',
    testimonialTranslated: 'டாக்டர் ஆனந்தின் இதய சிகிச்சை எனக்கு வாழ்க்கையை மாற்றியது. முழு இதயவியல் குழுவும் அறிவுள்ளவர்களாகவும், இரக்கமுள்ளவர்களாகவும் உள்ளனர். அவர்கள் தமிழில் பேசுவதை நான் குறிப்பாக பாராட்டுகிறேன், அது என் கவலைகளை தெரிவிப்பது எனக்கு எளிதாக்குகிறது.',
    date: '2023-11-18',
    service: 'Cardiology'
  },
  {
    id: 5,
    name: 'Praveena Sundaramoorthy',
    nameTranslated: 'பிரவீனா சுந்தரமூர்த்தி',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    testimonial: 'I delivered my baby at New Modern Medicare with Dr. Lakshmi, and the experience was wonderful. The maternity ward is comfortable and well-equipped. The nurses were supportive throughout labor and provided excellent postpartum care.',
    testimonialTranslated: 'நான் என் குழந்தையை டாக்டர் லக்ஷ்மியுடன் நியூ மாடர்ன் மெடிக்கேரில் பெற்றேடுத்தேன், அனுபவம் அற்புதமாக இருந்தது. மகப்பேறு வார்டு வசதியாகவும் நன்கு உபகரணங்களுடனும் உள்ளது. பிரசவம் முழுவதும் செவிலியர்கள் ஆதரவாக இருந்தனர் மற்றும் சிறந்த பிரசவத்திற்கு பிந்தைய சிகிச்சை வழங்கினர்.',
    date: '2023-08-30',
    service: 'Maternity'
  },
  {
    id: 6,
    name: 'Rajan Kandasamy',
    nameTranslated: 'ராஜன் கந்தசாமி',
    avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    testimonial: 'The pharmacy service is prompt and the pharmacist was helpful in explaining my medications. Prices are reasonable compared to other places in Chavakachcheri. I appreciate the home delivery option for regular prescriptions.',
    testimonialTranslated: 'மருந்தக சேவை துரிதமாக உள்ளது மற்றும் மருந்தாளுநர் என் மருந்துகளை விளக்குவதில் உதவியாக இருந்தார். சாவகச்சேரியில் உள்ள மற்ற இடங்களுடன் ஒப்பிடும்போது விலைகள் நியாயமாக உள்ளன. வழக்கமான மருந்துகளுக்கான வீட்டு விநியோக விருப்பத்தை நான் பாராட்டுகிறேன்.',
    date: '2023-12-05',
    service: 'Pharmacy'
  }
];