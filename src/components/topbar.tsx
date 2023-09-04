import {
  ArrowDown,
  Checkbox,
  Courses,
  Notification,
  Office,
  Search,
  USA,
} from "@/icons";

const updates: (
  | {
      icon: JSX.Element;
      number: number;
    }
  | {
      icon: JSX.Element;
      alert: boolean;
    }
)[] = [
  {
    icon: <Notification size={"1.5rem"} />,
    number: 12,
  },
  {
    icon: <Courses size={"1.5rem"} />,
    number: 5,
  },
  {
    icon: <Checkbox size={"1.5rem"} />,
    number: 2,
  },
  {
    icon: <Office size={"1.5rem"} />,
    alert: true,
  },
];

const Topbar = () => {
  return (
    <div className="topbar sticky top-0 z-10 flex items-center justify-between bg-[#15132B] px-8 py-4">
      <div className="search flex items-center gap-4 rounded-full bg-[#211A75] px-6 py-2">
        <Search />
        <input
          type="text"
          placeholder="Search here"
          className="bg-transparent outline-none placeholder:text-xs"
        />
      </div>
      <div className="right flex w-fit items-center gap-8 font-semibold underline-offset-2">
        <h3 className="uppercase text-[#6418C3] underline">other menus</h3>
        <ul className="icons flex items-center gap-6">
          {updates.map((update, index) => (
            <li
              key={index}
              className="relative flex items-center justify-center"
            >
              {update.icon}
              {"number" in update && (
                <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#5ECFFF] text-xs font-bold text-[#15132B]">
                  {update.number}
                </span>
              )}
              {"alert" in update && (
                <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#15132B] bg-[#E328AF] text-xs font-bold text-[#15132B]">
                  !
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="personalization flex gap-4">
          <div className="lang flex items-center gap-2 rounded-full bg-[#211A75] p-4 uppercase">
            <USA size={"1.5rem"} />
            English
            <ArrowDown />
          </div>
          <div className="profile mr-16 flex items-center gap-4 border-l border-[#1E1C3A] pl-4">
            <div className="img aspect-square h-full rounded-2xl bg-[#C4C4C4]"></div>
            <div className="details">
              <h3 className="whitespace-nowrap">Instructor Day</h3>
              <p className="font-light text-[#7879F1]">Super Admin</p>
            </div>
            <span className="grid place-content-center">
              <ArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
