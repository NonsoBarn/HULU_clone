import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem />
      </div>
      <Image
        className="object-contain w-[200px] h-[100px]"
        src="https://links.papareact.com/ua6"
        alt="Hulu logo"
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
      />
    </header>
  );
};

export default Header;
