import Link from "next/link";

const Header = ({ dark, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white py-4 shadow-md">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto container px-4 max-w-7xl">
        <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-0">
          <Link href="/">الفوز بالجنة</Link>
        </h1>
        <nav>
          <ul className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-4">
            <li className="hover:underline underline-offset-4 font-bold">
              <Link className="text-white hover:text-gray-400" href="/">
                الصفحة الرئيسية
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 font-bold">
              <Link
                className="text-white hover:text-gray-400"
                href="/prayer-times"
              >
                مواقيت الصلاة
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 font-bold">
              <Link className="text-white hover:text-gray-400" href="/quran">
                القران الكريم
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 font-bold">
              <Link className="text-white hover:text-gray-400" href="/azkar">
                الاذكار
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 font-bold">
              <Link className="text-white hover:text-gray-400" href="/hadith">
                الاحاديث
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 font-bold">
              <Link
                className="text-white hover:text-gray-400"
                href="/namesOfAllah"
              >
                الاسماء الحسني
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 font-bold">
              <Link
                className="text-white hover:text-gray-400"
                href="/radioPage"
              >
                اذاعه القران الكريم
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

