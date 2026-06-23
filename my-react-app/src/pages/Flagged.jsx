import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function Flagged() {
    const flaggedMails = [
        {
            id: 1,
            sender: "John Doe",
            subject: "Project Update",
            message: "Please review the latest project updates.",
            time: "10:30 AM",
        },
        {
            id: 2,
            sender: "Sarah Wilson",
            subject: "Meeting Reminder",
            message: "Reminder for tomorrow's client meeting.",
            time: "09:15 AM",
        },
        {
            id: 3,
            sender: "Michael Smith",
            subject: "Invoice Approval",
            message: "Kindly approve the pending invoice.",
            time: "Yesterday",
        },
    ];

    return (
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <FaStar className="text-yellow-400 text-2xl" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Flagged Emails
                </h1>
            </div>

            {/* Mail List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {flaggedMails.map((mail) => (
                    <div
                        key={mail.id}
                        className="flex items-center justify-between p-5 border-b hover:bg-gray-50 cursor-pointer transition"
                    >
                        <div className="flex items-start gap-4">
                            <FaStar className="text-yellow-400 mt-1" />

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    {mail.sender}
                                </h3>

                                <p className="font-medium text-gray-700">
                                    {mail.subject}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {mail.message}
                                </p>
                            </div>
                        </div>

                        <span className="text-sm text-gray-500 whitespace-nowrap">
                            {mail.time}
                        </span>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {flaggedMails.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <CiStar className="text-7xl text-gray-300" />
                    <p className="text-gray-500 mt-4 text-lg">
                        No flagged emails found
                    </p>
                </div>
            )}
        </div>
    );
}