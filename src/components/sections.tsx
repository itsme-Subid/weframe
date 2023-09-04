import { AddBtnActive, AddBtnNonActive, Clock, ThreeDots } from "@/icons";
import { Progress } from "./ui/progress";
import { twMerge } from "tailwind-merge";

const todo = [
  {
    title: "important",
    color: "#FFAB2D",
    description: "Create sign up sheet for holiday student/parent conferences.",
    noUser: 4,
  },
  {
    title: "Instructor Meeting",
    color: "#E328AF",
    description: "Plan holiday demonstration program. Create outline.",
    noUser: 3,
  },
  {
    title: "Databse",
    color: "#38E25D",
    description:
      "Determine how many boards need to be ordered for testing and demo.",
    noUser: 2,
  },
];

const inProgress = [
  {
    title: "Video",
    color: "#5ECFFF",
    description: "Create sparring tutorial video for the weekly class.",
    rotate: 0,
    noUser: 3,
  },
  {
    title: "BUGS FIXING",
    color: "#FF4A55",
    description: "Payment gateway needs reauthorization.",
    rotate: 5,
    noUser: 4,
  },
];

const done = [
  {
    title: "BUGS FIXING",
    color: "#FF4A55",
    description: "Action Button needed for Google Maps visits.",
  },
  {
    title: "Database",
    color: "#38E25D",
    description: "Update new instructor photos.",
  },
  {
    title: "Instructor Meeting",
    color: "#E328AF",
    decsription: "Review/correct yellow belt techniques.",
  },
];

const Sections = () => {
  return (
    <div className="mx-12 my-8 grid grid-cols-4 gap-8">
      <div className="todo-list grid h-fit items-start gap-4">
        <div className="header flex items-center justify-between px-4">
          <h3 className="font-bold">To-Do List (24)</h3>
          <AddBtnActive size="3rem" />
        </div>
        <ul className="grid items-start gap-4">
          {todo.map((item, i) => (
            <li
              className="grid gap-2 rounded-[0.85rem] bg-[#211A75] p-4"
              key={i}
            >
              <div className="title-bar flex justify-between">
                <span
                  className="text-sm font-semibold capitalize before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-current"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.title}
                </span>
                <span className="rotate-90">
                  <ThreeDots size="1.5rem" />
                </span>
              </div>
              <p className="description mb-2">{item.description}</p>
              <Progress
                value={Math.random() * 100}
                className="h-2 bg-[#1E1C3A]"
                foreground={item.color}
              />
              <div className="bottom mt-2 flex justify-between">
                <ul className="users flex items-center">
                  {Array(item.noUser)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        className="negative-gap aspect-square w-8 rounded-full border-2 border-[#15132B] bg-[#C4C4C4]"
                        key={i}
                      ></li>
                    ))}
                </ul>
                <div className="time flex items-center gap-2 text-[#A5A5A5]">
                  <Clock />
                  <span className="text-xs">Due in 3 days</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="progress grid h-fit items-start gap-4">
        <div className="header flex items-center justify-between px-4">
          <h3 className="font-bold">In Progress (2)</h3>
          <span className="py-1">
            <AddBtnNonActive size="2.5rem" />
          </span>
        </div>
        <ul className="grid items-start gap-4">
          {inProgress.map((item, i) => (
            <li
              className={twMerge(
                "grid gap-2 rounded-[0.85rem] bg-[#211A75] p-4",
                item.rotate ? "custom-box-shadow-2" : "",
              )}
              style={{
                transform: !!item.rotate
                  ? `rotate(${item.rotate}deg) translate(1.75rem, 0.25rem)`
                  : "",
                transformOrigin: "bottom left",
              }}
              key={i}
            >
              <div className="title-bar flex justify-between">
                <span
                  className="text-sm font-semibold capitalize before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-current"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.title}
                </span>
                <span className="rotate-90">
                  <ThreeDots size="1.5rem" />
                </span>
              </div>
              <p className="description mb-2">{item.description}</p>
              <Progress
                value={Math.random() * 100}
                className="h-2 bg-[#1E1C3A]"
                foreground={item.color}
              />
              <div className="bottom mt-2 flex justify-between">
                <ul className="users flex items-center">
                  {Array(item.noUser)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        className="negative-gap aspect-square w-8 rounded-full border-2 border-[#15132B] bg-[#C4C4C4]"
                        key={i}
                      ></li>
                    ))}
                </ul>
                <div className="time flex items-center gap-2 text-[#A5A5A5]">
                  <Clock />
                  <span className="text-xs">Due in 3 days</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="done grid h-fit items-start gap-4">
        <div className="header flex items-center justify-between px-4">
          <h3 className="font-bold">Done (3)</h3>
          <span className="py-1">
            <AddBtnNonActive size="2.5rem" />
          </span>
        </div>
        <ul className="grid items-start gap-4">
          {done.map((item, i) => (
            <li
              className="grid gap-2 rounded-[0.85rem] bg-[#211A75] p-4"
              key={i}
            >
              <div className="title-bar flex justify-between">
                <span
                  className="text-sm font-semibold capitalize before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-current"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.title}
                </span>
                <span className="rotate-90">
                  <ThreeDots size="1.5rem" />
                </span>
              </div>
              <p className="description">{item.description}</p>
              <Progress
                value={Math.random() * 100}
                className="h-2 bg-[#1E1C3A]"
                foreground={item.color}
              />
              <div className="bottom flex justify-between">
                <ul className="users flex items-center">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        className="negative-gap aspect-square w-8 rounded-full border-2 border-[#15132B] bg-[#C4C4C4]"
                        key={i}
                      ></li>
                    ))}
                </ul>
                <div className="time flex items-center gap-2 text-[#A5A5A5]">
                  <Clock />
                  <span className="text-xs">Due in 3 days</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="revised grid h-fit items-start gap-4">
        <div className="header flex items-center justify-between px-4">
          <h3 className="font-bold">Revised (0)</h3>
          <span className="py-1">
            <AddBtnNonActive size="2.5rem" />
          </span>
        </div>
        <div className="rounded-[0.85rem] bg-[#211A75] p-4">
          <div className="move-box rounded-xl border border-dashed bg-[#0D0B21] p-4 text-center text-[#7879F1]">
            Move card here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
