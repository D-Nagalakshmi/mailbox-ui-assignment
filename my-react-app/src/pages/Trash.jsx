import { MdDeleteOutline } from "react-icons/md";

export default function Trash() {
    const deletedEmails = [
        {
            id: 1,
            sender: "john@example.com",
            subject: "Meeting Notes",
            preview: "Please find the meeting notes attached.",
            deletedAt: "Today",
        },
        {
            id: 2,
            sender: "client@example.com",
            subject: "Project Feedback",
            preview: "Here is the feedback for the recent project.",
            deletedAt: "Yesterday",
        },
        {
            id: 3,
            sender: "newsletter@example.com",
            subject: "Weekly Newsletter",
            preview: "Check out this week's latest updates.",
            deletedAt: "2 Days Ago",
        },
    ];

    return (
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <MdDeleteOutline className="text-3xl text-red-500" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Trash
                </h1>
            </div>

            {/* Trash List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {deletedEmails.map((email) => (
                    <div
                        key={email.id}
                        className="flex items-start justify-between p-5 border-b hover:bg-gray-50 transition cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <MdDeleteOutline className="text-red-500 text-lg" />
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800">
                                    {email.sender}
                                </p>

                                <h3 className="text-lg font-medium text-gray-700 mt-1">
                                    {email.subject}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    {email.preview}
                                </p>
                            </div>
                        </div>

                        <span className="text-sm text-gray-400 whitespace-nowrap">
                            {email.deletedAt}
                        </span>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {deletedEmails.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <MdDeleteOutline className="text-7xl text-gray-300" />
                    <p className="mt-4 text-lg text-gray-500">
                        Trash is empty
                    </p>
                </div>
            )}
        </div>
    );
}