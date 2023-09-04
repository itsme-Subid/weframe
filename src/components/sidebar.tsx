import { twMerge } from "tailwind-merge";

import {
  ArrowChevron,
  Chat,
  Contact,
  Courses,
  Dashboard,
  Dots,
  Email,
  Hamburger,
  Invoice,
  Kanban,
  LongArrow,
  Settings,
  Shop,
} from "@/icons";

const categories = [
  {
    name: "dashboard",
    icon: <Dashboard size={"1.25rem"} />,
    active: false,
    extraSection: false,
    open: false,
    number: 0,
    attr: "",
  },
  {
    name: "email",
    icon: <Email size={"1.25rem"} />,
    active: false,
    extraSection: true,
    open: true,
    number: 17,
    attr: "",
  },
  {
    name: "chat",
    icon: <Chat size={"1.25rem"} />,
    active: false,
    extraSection: false,
    open: false,
    number: 0,
    attr: "",
  },
  {
    name: "kanban",
    icon: <Kanban size={"1.25rem"} />,
    active: true,
    extraSection: true,
    open: false,
    number: 0,
    attr: "",
  },
  {
    name: "contact",
    icon: <Contact size={"1.25rem"} />,
    active: false,
    extraSection: false,
    open: false,
    number: 0,
    attr: "new",
  },
  {
    name: "courses",
    icon: <Courses size={"1.25rem"} />,
    active: false,
    extraSection: true,
    open: false,
    number: 0,
    attr: "",
  },
  {
    name: "shop",
    icon: <Shop size={"1.25rem"} />,
    active: false,
    extraSection: false,
    open: false,
    number: 0,
    attr: "",
  },
  {
    name: "invoices",
    icon: <Invoice size={"1.25rem"} />,
    active: false,
    extraSection: true,
    open: false,
    number: 0,
    attr: "",
  },
  {
    name: "settings",
    icon: <Settings size={"1.25rem"} />,
    active: false,
    extraSection: false,
    open: false,
    number: 0,
    attr: "",
  },
];

const Sidebar = () => {
  return (
    <div className="custom-box-shadow-1 sticky top-0 z-20 h-screen max-w-xs overflow-auto bg-[#15132B] px-8">
      <div className="topbar flex items-center gap-8 py-6">
        <h2 className="ml-auto text-2xl">weframetech</h2>
        <Hamburger size={"2.5rem"} />
      </div>
      <div className="categories">
        <h3 className="text-lg font-semibold uppercase tracking-wider text-[#C7C7C7]">
          main menu
        </h3>
        <ul className="flex flex-col gap-2 py-2">
          {categories.map((category) => (
            <li
              key={category.name}
              className={twMerge(
                "relative flex cursor-pointer items-center gap-2 rounded-lg py-2 text-lg",
                category.active
                  ? "before:absolute before:inset-0 before:-right-8 before:left-auto before:w-1 before:rounded-full before:bg-[#6418C3]"
                  : "",
              )}
            >
              <div className="icon">{category.icon}</div>
              <div
                className={twMerge(
                  "name capitalize",
                  category.active ? "text-[#6418C3]" : "text-[#7879F1]",
                )}
              >
                {category.name}
              </div>
              <div className="right ml-auto flex items-center gap-2">
                {category.attr && (
                  <div className="attr rounded-full bg-[#E328AF] px-2 py-1 text-xs uppercase">
                    {category.attr}
                  </div>
                )}
                {!!category.number && (
                  <div className="number grid aspect-square place-content-center rounded-full bg-[#5ECFFF] px-2 text-xs">
                    {category.number}
                  </div>
                )}
                {category.extraSection && <ArrowChevron />}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom custom-gradient relative mb-4 overflow-hidden rounded-[2rem]">
        <div className="content grid place-content-center gap-2 p-8">
          <Dots />
          <h3 className="text-2xl">Increase your work with kanban</h3>
          <LongArrow />
        </div>
        <svg
          width="245"
          height="203"
          viewBox="0 0 245 203"
          fill="none"
          className="absolute bottom-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_484"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="245"
            height="203"
          >
            <rect width="245" height="203" rx="32" fill="white" />
          </mask>
          <g mask="url(#mask0_1_484)">
            <circle
              cx="232"
              cy="163"
              r="85"
              fill="url(#paint0_linear_1_484)"
              fillOpacity="0.6"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_484"
              x1="232"
              y1="78"
              x2="232"
              y2="248"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A0F9FF" stopOpacity="0.51" />
              <stop offset="1" stopColor="#A0F9FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
