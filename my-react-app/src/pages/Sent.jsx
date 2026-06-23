import { AiOutlineSend } from "react-icons/ai";

export default function Sent() {
    const sentEmails = [
        {
            id: 1,
            recipient: "nag@example.com",
            subject: "Project Proposal",
            preview: "Please find the attached project proposal document.",
            time: "10:45 AM",
        },
        {
            id: 2,
            recipient: "simha@example.com",
            subject: "Interview Follow-up",
            preview: "Thank you for taking the time to interview me.",
            time: "Yesterday",
        },
        {
            id: 3,
            recipient: "client@example.com",
            subject: "Website Design Updates",
            preview: "The latest design changes have been completed.",
            time: "2 Days Ago",
        },
    ];

    return (
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <AiOutlineSend className="text-3xl text-blue-500" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Sent Emails
                </h1>
            </div>

            {/* Email List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {sentEmails.map((email) => (
                    <div
                        key={email.id}
                        className="flex items-start justify-between p-5 border-b hover:bg-gray-50 transition cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <AiOutlineSend className="text-blue-500 text-lg" />
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800">
                                    To: {email.recipient}
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
                            {email.time}
                        </span>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {sentEmails.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <AiOutlineSend className="text-7xl text-gray-300" />
                    <p className="mt-4 text-lg text-gray-500">
                        No sent emails found
                    </p>
                </div>
            )}
        </div>
    );
}