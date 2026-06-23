import { MdDrafts } from "react-icons/md";

export default function Draft() {
    const draftMails = [
        {
            id: 1,
            recipient: "Lakshmi@example.com",
            subject: "Project Proposal",
            content: "Hi John, I wanted to share the project proposal...",
            lastEdited: "5 mins ago",
        },
        {
            id: 2,
            recipient: "Naga@example.com",
            subject: "Interview Follow-up",
            content: "Thank you for taking the time to interview me...",
            lastEdited: "1 hour ago",
        },
        {
            id: 3,
            recipient: "client@example.com",
            subject: "Website Redesign Quote",
            content: "Please find attached the quotation for the redesign...",
            lastEdited: "Yesterday",
        },
    ];

    return (
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <MdDrafts className="text-3xl text-orange-500" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Draft Emails
                </h1>
            </div>

            {/* Draft List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {draftMails.map((mail) => (
                    <div
                        key={mail.id}
                        className="flex justify-between items-start p-5 border-b hover:bg-gray-50 cursor-pointer transition"
                    >
                        <div>
                            <p className="font-semibold text-gray-800">
                                To: {mail.recipient}
                            </p>

                            <h3 className="text-lg font-medium text-gray-700 mt-1">
                                {mail.subject}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {mail.content}
                            </p>
                        </div>

                        <span className="text-sm text-gray-400 whitespace-nowrap">
                            {mail.lastEdited}
                        </span>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {draftMails.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <MdDrafts className="text-7xl text-gray-300" />
                    <p className="text-lg text-gray-500 mt-4">
                        No draft emails found
                    </p>
                </div>
            )}
        </div>
    );
}