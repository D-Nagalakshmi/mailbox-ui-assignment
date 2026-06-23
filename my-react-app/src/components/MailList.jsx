

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
        <div className="w-[440px] p-5 bg-[#f9faf58c] overflow-y-auto">

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
                            ? "bg-white shadow-lg"
                            : "bg-white hover:shadow-md"
                            }`}
                    >
                        <div className="flex justify-between">
                            <div className="flex gap-3 ">
                                <img
                                    src={mail.avatar}
                                    alt=""
                                    className="w-14 h-14 rounded-full object-cover"
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


                            <div className="text-xs flex gap-2 font-bold">
                                <p>{mail.day}</p>
                                <p>{mail.time}</p>
                            </div>

                        </div>

                        <p className="mt-1 ml-17 mr-4 text-gray-500  text-sm">
                            {mail.message}
                        </p>

                        <div className="flex items-center gap-1 mt-3  ml-17 mr-4 text-cyan-500">
                            <IoMdAttach />
                            <span>4 Attachments</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}