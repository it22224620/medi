export interface BlogPost {
  id: number;
  title: string;
  titleTranslated?: string;
  category: 'health' | 'news' | 'community';
  date: string;
  author: string;
  image: string;
  excerpt: string;
  excerptTranslated?: string;
  content: string;
  contentTranslated?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding Diabetes: Signs, Symptoms, and Management',
    titleTranslated: 'நீரிழிவு நோயைப் புரிந்துகொள்வது: அறிகுறிகள், அடையாளங்கள் மற்றும் மேலாண்மை',
    category: 'health',
    date: '2023-12-10',
    author: 'Dr. Rajiv Kumar',
    image: 'https://images.pexels.com/photos/48566/pexels-photo-48566.jpeg',
    excerpt: 'Learn about the early warning signs of diabetes and effective management strategies.',
    excerptTranslated: 'நீரிழிவு நோயின் ஆரம்ப எச்சரிக்கை அறிகுறிகள் மற்றும் அதன் திறம்பட நிர்வாகம் குறித்து அறிக.',
    content: 'Full English content here...',
    contentTranslated: 'Full Tamil content here...'
  },
  {
    id: 2,
    title: 'New Pediatric Wing Now Open at New Modern Medicare',
    titleTranslated: 'நியூ மாடர்ன் மெடிக்கேரில் புதிய குழந்தைகள் பிரிவு திறக்கப்பட்டது',
    category: 'news',
    date: '2023-11-15',
    author: 'Hospital Administration',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
    excerpt: 'Announcing our newly expanded pediatric wing with advanced facilities.',
    excerptTranslated: 'எங்கள் புதிய குழந்தைகள் பிரிவின் திறப்பை அறிவிப்பதில் மகிழ்ச்சி.',
    content: 'Full English content here...',
    contentTranslated: 'Full Tamil content here...'
  },
  {
    id: 3,
    title: 'Monsoon Health Precautions: Preventing Waterborne Diseases',
    titleTranslated: 'பருவமழை ஆரோக்கிய முன்னெச்சரிக்கைகள்: நீர்வழி நோய்களை தடுத்தல்',
    category: 'community',
    date: '2023-10-05',
    author: 'Dr. Thomas Wilson',
    image: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg',
    excerpt: 'Essential precautions to avoid waterborne diseases during monsoon.',
    excerptTranslated: 'பருவமழை காலத்தில் நீர் மூலம் பரவும் நோய்களைத் தடுக்கும் வழிகள்.',
    content: 'Full English content here...',
    contentTranslated: 'Full Tamil content here...'
  },
  {
    id: 4,
    title: 'Free Health Camp: Diabetes and Hypertension Screening',
    titleTranslated: 'இலவச ஆரோக்கிய முகாம்: நீரிழிவு மற்றும் உயர் இரத்த அழுத்த பரிசோதனை',
    category: 'news',
    date: '2023-09-20',
    author: 'Community Outreach Team',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
    excerpt: 'Join our free community camp for diabetes and hypertension screening.',
    excerptTranslated: 'நீரிழிவு மற்றும் உயர் இரத்த அழுத்தத்தை பரிசோதிக்கும் இலவச முகாமில் பங்கேற்கவும்.',
    content: `New Modern Medicare Hospital is proud to announce a free health camp focused on diabetes and hypertension screening for the Chavakachcheri community. This outreach initiative aims to address the growing prevalence of these conditions in our area through early detection and education.

**Event Details:**
- **Date:** September 30, 2023
- **Time:** 8:00 AM to 4:00 PM
- **Location:** New Modern Medicare Hospital, Community Hall
- **No appointment necessary** – Walk-ins welcome

**Services Offered:**
- Free blood glucose testing
- Blood pressure screening
- BMI calculation and waist circumference measurement
- Basic health check-up
- Individual consultation with healthcare professionals
- Educational sessions on managing diabetes and hypertension
- Nutritional guidance from our dietitian

**Educational Sessions Schedule:**
- 9:00 AM: Understanding Diabetes (Tamil)
- 10:30 AM: Hypertension Awareness (Tamil)
- 12:00 PM: Healthy Diet Tips (Tamil)
- 2:00 PM: Understanding Diabetes (English)
- 3:30 PM: Hypertension Awareness (English)

Participants diagnosed with diabetes or hypertension will receive guidance on follow-up care. Free educational materials available in Tamil and English.

For more information, please contact us at 077-456-7890.`,
    contentTranslated: `நியூ மாடர்ன் மெடிக்கேர் மருத்துவமனை சாவகச்சேரி சமூகத்திற்கான நீரிழிவு மற்றும் உயர் இரத்த அழுத்த பரிசோதனையில் கவனம் செலுத்தும் இலவச ஆரோக்கிய முகாமை அறிவிக்கிறது. ஆரம்ப கண்டறிதல் மற்றும் கல்வி மூலம் இந்த நோய்களின் பரவலைக் குறைக்க முயற்சி செய்கிறோம்.

**நிகழ்வு விவரங்கள்:**
- **தேதி:** செப்டம்பர் 30, 2023
- **நேரம்:** காலை 8:00 – மாலை 4:00
- **இடம்:** நியூ மாடர்ன் மெடிக்கேர், சமூக மண்டபம்
- **முன்பதிவு தேவையில்லை** – நேரடி வருகை வரவேற்கப்படுகிறது.

**சேவைகள்:**
- இலவச இரத்த சர்க்கரை பரிசோதனை
- இரத்த அழுத்த பரிசோதனை
- BMI மற்றும் இடுப்பு அளவீடு
- அடிப்படை சுகாதார பரிசோதனை
- தனிப்பட்ட மருத்துவ ஆலோசனை
- நீரிழிவு மற்றும் இரத்த அழுத்த மேலாண்மை கல்வி அமர்வுகள்
- ஊட்டச்சத்து வழிகாட்டல்

**கல்வி அமர்வு அட்டவணை:**
- 9:00 AM: நீரிழிவு நோய் அறிதல் (தமிழ்)
- 10:30 AM: உயர் இரத்த அழுத்தம் (தமிழ்)
- 12:00 PM: ஆரோக்கிய உணவுக் குறிப்புகள் (தமிழ்)
- 2:00 PM: நீரிழிவு நோய் அறிதல் (ஆங்கிலம்)
- 3:30 PM: உயர் இரத்த அழுத்தம் (ஆங்கிலம்)

நீரிழிவு அல்லது உயர் இரத்த அழுத்தம் கண்டறியப்பட்டவர்களுக்கு தொடர்ச்சியான சிகிச்சை ஆலோசனை வழங்கப்படும். இலவச கல்வி கைப்புத்தகங்கள் தமிழ் மற்றும் ஆங்கிலத்தில் வழங்கப்படும்.

மேலதிக தகவலுக்கு: 077-456-7890.`
  }
];
