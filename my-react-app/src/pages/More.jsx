import {
    MdArchive,
    MdSchedule,
    MdSettings,
    MdLabelImportant,
    MdReport,
} from "react-icons/md";

export default function More() {
    const options = [
        {
            id: 1,
            title: "Archive",
            description: "View archived emails",
            icon: <MdArchive className="text-blue-500 text-2xl" />,
        },
        {
            id: 2,
            title: "Scheduled",
            description: "Emails scheduled to be sent later",
            icon: <MdSchedule className="text-green-500 text-2xl" />,
        },
        {
            id: 3,
            title: "Important",
            description: "Important conversations",
            icon: <MdLabelImportant className="text-yellow-500 text-2xl" />,
        },
        {
            id: 4,
            title: "Spam",
            description: "Suspected spam emails",
            icon: <MdReport className="text-red-500 text-2xl" />,
        },
        {
            id: 5,
            title: "Settings",
            description: "Manage mailbox preferences",
            icon: <MdSettings className="text-gray-500 text-2xl" />,
        },
    ];

    return (
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                More Options
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {options.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        <div className="mb-4">{item.icon}</div>

                        <h3 className="text-lg font-semibold text-gray-800">
                            {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}