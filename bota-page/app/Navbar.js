import { BsYinYang } from "react-icons/bs";
import { FaBoltLightning } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { IoRocketOutline } from "react-icons/io5";
import { TbChecklist } from "react-icons/tb";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiChartLineUp } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const navbarItems = [
  { text: "Instant Listings", icon: FaBoltLightning },
  { text: "Dashboard", icon: RxDashboard },
  { text: "Ad Boosts", icon: IoRocketOutline },
  { text: "Orders", icon: TbChecklist },
  { text: "Goods", icon: MdOutlineShoppingBag },
  { text: "Lead Gen", icon: PiChartLineUp },
  { text: "Wallet", icon: CiWallet },
  { text: "Settings", icon: IoPersonOutline },
];

export default function Navbar() {
  return (
    <div className="md:col-span-1 md:flex md:justify-start">
      <nav className="flex h-screen w-52 flex-col items-start bg-teal-600 p-4 text-white">
        {/* Brand */}
        <h1 className="flex items-center gap-2 pb-2 font-bold uppercase hover:border-b hover:border-black">
          <BsYinYang className="h-5 w-5" />
          Bota
        </h1>

        {/* Menu Items */}
       <ul className="w-full">
  {navbarItems.map((item) => {
    const Icon = item.icon; 
    return (
      <li
        key={item.text}
        className="group flex items-center gap-2 rounded p-4 hover:bg-white cursor-pointer"
      >
        <Icon className="h-5 w-5 text-white group-hover:text-black transition-colors duration-200" />
        <span className="text-white group-hover:text-black transition-colors duration-200">
          {item.text}
        </span>
      </li>
    );
  })}
</ul>

      </nav>
    </div>
  );
}

