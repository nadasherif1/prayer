import Link from 'next/link';
import {FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-end gap-8 px-4">
        <div className="lg:w-1/3 text-center">
          <h3 className="text-lg font-bold mb-2">تذكير</h3>
          <p>
            إِن تَكْفُرُوا فَإِنَّ اللَّهَ غَنِيٌّ عَنكُمْ ۖ وَلَا يَرْضَىٰ
            لِعِبَادِهِ الْكُفْرَ ۖ وَإِن تَشْكُرُوا يَرْضَهُ لَكُمْ ۗ وَلَا
            تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ ۗ ثُمَّ إِلَىٰ رَبِّكُم مَّرْجِعُكُمْ
            فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ ۚ إِنَّهُ عَلِيمٌ بِذَاتِ
            الصُّدُورِ
          </p>
        </div>

        <div className="lg:w-1/3 text-center">
          <h3 className="text-lg font-bold mb-2">الصفحات</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-400">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/quran" className="hover:text-gray-400">
                القرآن
              </Link>
            </li>
            <li>
              <Link href="/azkar" className="hover:text-gray-400">
                الأذكار
              </Link>
            </li>
            <li>
              <Link href="/prayer-times" className="hover:text-gray-400">
                مواقيت الصلاة
              </Link>
            </li>
            <li>
              <Link href="/hadith" className="hover:text-gray-400">
                الأحاديث
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/3 text-center">
          <h3 className="text-lg font-bold mb-2">مواقع التواصل الاجتماعي</h3>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <Link href="https://www.facebook.com/" className="hover:text-gray-400">
            <FaFacebookF />
            </Link>
            <Link href="https://x.com/" className="hover:text-gray-400">
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

