function DarkBtn({ toggleDarkMode, dark }) {
  return (
    <div
      className={`rounded-full p-3 cursor-pointer absolute z-10 right-20 top-20 ${
        dark ? "bg-[#111]  " : "bg-[#ddd] "
      }`}
      onClick={toggleDarkMode}></div>
  );
}

export default DarkBtn;
