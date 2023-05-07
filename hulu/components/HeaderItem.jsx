import {
  UilHome,
  UilBoltAlt,
  UilCommentAltVerify,
  UilCopyLandscape,
  UilSearch,
  UilUser,
} from "@iconscout/react-unicons";

const items = [
  {
    id: 1,
    icon: <UilHome />,
    title: "HOME",
  },

  {
    id: 2,
    icon: <UilBoltAlt />,
    title: "TRENDING",
  },

  {
    id: 3,
    icon: <UilCommentAltVerify />,
    title: "VERIFIED",
  },
  {
    id: 4,
    icon: <UilCopyLandscape />,
    title: "COLLECTIONS",
  },
  {
    id: 5,
    icon: <UilSearch />,
    title: "SEARCH",
  },
  {
    id: 6,
    icon: <UilUser />,
    title: "Account",
  },
];

const HeaderItem = () => {
  return (
    <>
      {items.map((item) => (
        <div
          className=" flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white "
          key={item.id}
        >
          <span className="h-8 mb-1 group-hover:animate-bounce">
            {item.icon}{" "}
          </span>

          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default HeaderItem;
