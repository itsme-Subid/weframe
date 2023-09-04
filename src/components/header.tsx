import { AddFriend, ArrowBack, Comment, MartialArts, ThreeDots } from "@/icons";
import { Progress } from "@/components/ui/progress";

const Header = () => {
  return (
    <div className="mx-12 my-8 rounded-2xl bg-[#15132B] py-8 pl-16 pr-8">
      <div className="uppper flex justify-between">
        <div className="left relative">
          <h2 className="text-2xl font-bold">School November Tasks</h2>
          <p className="mt-2 text-sm text-[#A5A5A5]">
            Created by Instructor Day on November 31, 2022
          </p>
          <span className="absolute -left-10 top-0">
            <ArrowBack size="2rem" />
          </span>
        </div>
        <div className="right flex items-center gap-4">
          <div className="details text-end">
            <h3 className="whitespace-nowrap">Centered Martial Arts</h3>
            <p className="tex-sm text-[#A5A5A5]">Sunnyvale, Ca</p>
          </div>
          <div className="logo grid aspect-square h-full place-content-center rounded-2xl bg-white p-2">
            <MartialArts size="3rem" />
          </div>
          <ThreeDots size="1.75rem" />
        </div>
      </div>
      <div className="lower mt-2 flex justify-between gap-4">
        <div className="left flex items-center gap-4">
          <ul className="users flex">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <li
                  className="negative-gap aspect-square w-8 rounded-full border-2 border-[#15132B] bg-[#C4C4C4]"
                  key={i}
                ></li>
              ))}
            <li className="negative-gap grid aspect-square w-8 place-content-center rounded-full border-2 border-[#15132B] bg-[#E328AF] text-xs">
              5+
            </li>
          </ul>
          <button className="invite flex items-center gap-2 rounded-[0.85rem] bg-[#6418C3] px-4 py-2 text-xs">
            <AddFriend size="1.25rem" />
            Invite People
          </button>
          <button className="invite flex items-center gap-2 rounded-[0.85rem] border border-[#7879F1] px-4 py-2 text-xs">
            Private
          </button>
          <button className="invite flex items-center gap-2 rounded-[0.85rem] bg-[#7879F1] px-6 py-2 text-xs">
            Edit
          </button>
          <button className="invite flex items-center gap-2 rounded-[0.85rem] border border-[#7879F1] px-4 py-2 text-xs">
            <Comment size="1.25rem" />
            45 Comments
          </button>
        </div>
        <div className="right flex max-w-xs flex-1 items-center gap-4 whitespace-nowrap">
          Total Progress 60%
          <Progress
            value={60}
            className="bg-[#1E1C3A]"
            foreground={"#6418C3"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
