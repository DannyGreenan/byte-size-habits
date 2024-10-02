import {
  GiWarAxe,
  GiWolfHowl,
  GiWindowBars,
  GiWyvern,
  GiTriceratopsHead,
} from "react-icons/gi";

import Link from "next/link";

const Sidebar = () => {
  const SideBarIcon = ({ icon }) => {
    return <div className="sidebar-icon">{icon}</div>;
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <Link href="/axe">
        <SideBarIcon icon={<GiWarAxe size="28" />} />
      </Link>
      <SideBarIcon icon={<GiWolfHowl size="28" />} />
      <SideBarIcon icon={<GiWindowBars size="28" />} />
      <SideBarIcon icon={<GiWyvern size="28" />} />
      <SideBarIcon icon={<GiTriceratopsHead size="28" />} />
    </div>
  );
};

export default Sidebar;
