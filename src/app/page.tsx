import Header from "@/components/header";
import Sections from "@/components/sections";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const Page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <Header />
        <Sections />
      </div>
    </div>
  );
};

export default Page;
