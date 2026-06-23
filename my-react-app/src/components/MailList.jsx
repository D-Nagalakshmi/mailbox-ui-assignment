

import { IoMdAttach } from "react-icons/io";

import { GoSearch } from "react-icons/go";

export default function MailList({
    emails,
    selectedMail,
    setSelectedMail,
    search,
    setSearch,
}) {
    const filteredEmails = emails.filter(
        (mail) =>
            mail.name.toLowerCase().includes(search.toLowerCase()) ||
            mail.subject.toLowerCase().includes(search.toLowerCase()) ||
            mail.message.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="w-full lg:w-[440px] p-4 md:p-5 bg-[#f9faf58c] overflow-y-auto">
            <div className="relative mb-6">
                <GoSearch
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
                />

                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-white outline-none"
                />
            </div>

            <div className="space-y-5">
                {filteredEmails.map((mail) => (

                    <div
                        key={mail.id}
                        onClick={() => setSelectedMail(mail)}
                        className={`py-5  px-5 rounded-3xl  cursor-pointer transition ${selectedMail.id === mail.id
                            ? "bg-white  shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                            : "bg-white  border border-[#f8f8f8] hover:shadow-sm"
                            }`}
                    >
                        {/* <div className="flex justify-between"> */}
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                            <div className="flex gap-3 ">
                                <img
                                    src={mail.avatar}
                                    alt="profile"
                                    // className="w-14 h-14 rounded-full object-cover"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"

                                />

                                <div>
                                    <h3 className="font-bold">
                                        {mail.name}
                                    </h3>
                                    <p className="text-md text-gray-600">
                                        {mail.subject}
                                    </p>

                                </div>

                            </div>


                            {/* <div className="text-xs flex gap-2 font-bold"> */}
                            <div className="text-xs flex gap-2 font-bold sm:self-start ml-[68px] sm:ml-0">
                                <p>{mail.day}</p>
                                <p>{mail.time}</p>
                            </div>

                        </div>
                        <p className="mt-2 sm:ml-[68px] text-gray-500 text-sm leading-6">
                            {/* <p className="mt-1 ml-17 mr-4 text-gray-500  text-sm"> */}
                            {mail.message}
                        </p>
                        <div className="flex items-center gap-1 mt-3 sm:ml-[68px] text-cyan-500">
                            {/* <div className="flex items-center gap-1 mt-3  ml-17 mr-4 text-cyan-500"> */}
                            <IoMdAttach />
                            <span>4 Attachments</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}