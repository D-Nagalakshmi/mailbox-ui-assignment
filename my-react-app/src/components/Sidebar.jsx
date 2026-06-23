
import { NavLink } from "react-router-dom";
import { MdDrafts, MdDeleteOutline, MdGridView } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import profileImg from "../assets/mailprofile.png";

const menuItems = [
    {
        path: "/",
        label: "Inbox",
        icon: HiMail,
        count: 20,
    },
    {
        path: "/flagged",
        label: "Flagged",
        icon: CiStar,
    },
    {
        path: "/draft",
        label: "Draft",
        icon: MdDrafts,
    },
    {
        path: "/sent",
        label: "Sent",
        icon: AiOutlineSend,
    },
    {
        path: "/trash",
        label: "Trash",
        icon: MdDeleteOutline,
    },
    {
        path: "/more",
        label: "More",
        icon: MdGridView,
    },
];

export default function Sidebar({ closeMenu }) {
    return (
        <aside className="w-[270px] h-full bg-[#F5F8FA] shadow-xl overflow-y-auto">
            {/* <button
                onClick={closeMenu}
                className="absolute  right-4 lg:hidden"
            >
                <IoClose size={28} />
            </button> */}
            <div className="flex justify-end p-3 lg:hidden">
                <button onClick={closeMenu}>
                    <IoClose size={24} />
                </button>
            </div>



            {/* Profile */}
            <div className="p-8">
                <div className="flex items-center gap-4">
                    <img
                        src={profileImg}
                        alt="profile"
                        className="w-14 h-14 rounded-full"
                    />

                    <div>
                        <h3 className="text-[#23b1ee] font-semibold">
                            Mike Manson
                        </h3>

                        <p className="text-sm text-gray-700">
                            iamkiran@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav>
                {menuItems.map(({ path, label, icon: Icon, count }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === "/"}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `flex items-center justify-between px-8 py-4 border-l-[7px] transition-all ${isActive
                                ? "bg-white border-[#1FB5EB] font-bold"
                                : "border-transparent hover:bg-gray-100"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div className="flex items-center gap-4">
                                    <Icon
                                        className={`text-xl ${isActive
                                            ? "text-[#1FB5EB]"
                                            : "text-gray-500"
                                            }`}
                                    />
                                    <span>{label}</span>
                                </div>

                                {count && (
                                    <span className="bg-red-400 text-white text-sm px-4 py-0.5 font-light rounded-full">
                                        {count}
                                    </span>
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Folders */}
            <div className="mt-10 px-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Folders</h2>

                    <button className="bg-blue-100 text-gray-600 px-3 rounded-full">
                        Add
                    </button>
                </div>

                <div className="space-y-5">
                    {[
                        { name: "Office", color: "text-blue-600" },
                        { name: "Personal", color: "text-pink-400" },
                        { name: "Freelance", color: "text-amber-300" },
                    ].map((folder) => (
                        <div
                            key={folder.name}
                            className="flex items-center gap-4"
                        >
                            <FaFolder className={`${folder.color} text-xl`} />
                            <span>{folder.name}</span>
                        </div>
                    ))}

                    <button className="w-full h-[45px] rounded-lg bg-[#FF5F5F] text-white mt-10 mb-10 shadow-[0_12px_24px_rgba(255,104,104,0.35)]">
                        Compose
                    </button>
                </div>
            </div>
        </aside>
    );
}