
import { LuPaperclip } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoMdAttach } from "react-icons/io";

import image1 from "../assets/attachment1.png";
import image2 from "../assets/attachment2.png";
import image3 from "../assets/attachment3.png";
import image4 from "../assets/attachment4.png";

import {
    MdReply,
    MdReplyAll,
    MdDeleteOutline,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from "react-icons/md";

import { FaFolder } from "react-icons/fa";

export default function MailDetails({ mail }) {
    return (
        <div className="flex-1 p-8 bg-white overflow-y-auto">
            <div className="flex items-center justify-between mb-14">
                <div className="flex ml-12 items-center gap-8 text-gray-400 text-2xl">
                    <MdReply className="cursor-pointer hover:text-gray-600" />

                    <MdReplyAll className="cursor-pointer hover:text-gray-600" />

                    <FaFolder className="cursor-pointer hover:text-gray-600" />

                    <MdDeleteOutline className="cursor-pointer hover:text-gray-600" />
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-lg">1/180</span>

                    <MdKeyboardArrowLeft
                        className="text-3xl text-gray-400 cursor-pointer"
                    />

                    <MdKeyboardArrowRight
                        className="text-3xl text-gray-400 cursor-pointer"
                    />
                </div>
            </div>
            {/* User Details */}
            <div className="flex gap-3">
                <img
                    src={mail.avatar}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                />

                <div className="mt-0.5">
                    <h2 className="text-md font-bold">
                        {mail.name}
                    </h2>

                    <p className="text-gray-600 " >
                        {mail.subject}
                    </p>

                    <p className="text-gray-400">
                        {mail.email}
                    </p>
                </div>
            </div>

            {/* Time */}
            <p className="mt-8 font-semibold text-sm ml-16">
                {mail.day} {mail.time}
            </p>

            {/* Title */}
            <h1 className="text-lg font-bold mt-6 ml-16">
                Hi Mike,
            </h1>

            {/* Message */}
            <p className="mt-1 text-gray-500  ml-16 text-sm">
                {mail.fullmessage}
            </p>

            {/* Attachments */}
            <div className="flex ml-16 items-center gap-2 mt-7 text-cyan-500">
                <IoMdAttach />

                <span>4 Attachments</span>
            </div>

            {/* Images */}
            <div className="grid grid-cols-3 ml-16 gap-4 mt-6">

                <div className="space-y-4">
                    <img
                        src={image4}
                        alt=""
                        className="w-full h-24 object-cover rounded-md"
                    />

                    <img
                        src={image3}
                        alt=""
                        className="w-full h-24 object-cover rounded-md"
                    />
                </div>

                <img
                    src={image1}
                    alt=""
                    className="h-52 w-full object-cover rounded-md"
                />

                <img
                    src={image2}
                    alt=""
                    className="h-52 w-full object-cover rounded-md"
                />
            </div>

            {/* Download */}
            <div className=" ml-16 flex items-center gap-4 mt-6">
                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-100">
                    <FiDownload />
                    Download
                </button>

                <span className="text-gray-400">
                    5.6 mb total
                </span>
            </div>

            {/* Message Box */}
            <div className="mt-12 ml-16 border rounded-lg bg-white px-4 py-3 flex items-center">
                <input
                    type="text"
                    placeholder="Type Message..."
                    className="flex-1 outline-none"
                />

                <button className="text-gray-500 mr-4">
                    <LuPaperclip size={20} />
                </button>

                <button className="text-cyan-500">
                    <IoSend size={22} />
                </button>
            </div>
        </div>
    );
}
