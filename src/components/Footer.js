import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        
        
        <div className="mb-4 md:mb-0 md:w-1/3  pl-[150px]">
          <h3 className="text-lg font-bold mb-2"> تذكير</h3>
          <p>
          إِن تَكْفُرُوا فَإِنَّ اللَّهَ غَنِيٌّ عَنكُمْ ۖ وَلَا يَرْضَىٰ لِعِبَادِهِ الْكُفْرَ ۖ وَإِن تَشْكُرُوا يَرْضَهُ لَكُمْ ۗ وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ ۗ ثُمَّ إِلَىٰ رَبِّكُم مَّرْجِعُكُمْ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ ۚ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ
</p>
        </div>
        
        
        <div className="mb-4 md:mb-0 md:w-1/3 pl-[200px]">
          <h3 className="text-lg font-bold mb-2">الصفحات</h3>
          <ul className="list-disc list-inside">
            <li><Link href="/" className="hover:text-gray-400">الصفحة الرئيسية</Link></li>
            <li><Link href="/quran" className="hover:text-gray-400"> القرآن</Link></li>
            <li><Link href="/azkar" className="hover:text-gray-400">الاذكار</Link></li>
            <li><Link href="/prayer-times" className="hover:text-gray-400">مواقيب الصلاه</Link></li>
            <li><Link href="/hadith" className="hover:text-gray-400"> الاحاديث</Link></li>

          </ul>
        </div>
        
        <div className="md:w-1/3 pl-[150px]">
          <h3 className="text-lg font-bold mb-2">مواقع التواصل الاجتماعي</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.facebook.com/" className="hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" className="hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="https://www.instagram.com/" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/" className="hover:text-gray-400">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

      </div>
      <div className="text-center mt-6">
        <p>© 2024 جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
