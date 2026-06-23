
import person from "../assets/Image 5.png";
import person1 from "../assets/profile1.png";
import person2 from "../assets/profile2.png";

import image1 from "../assets/attachment1.png";
import image2 from "../assets/attachment2.png";
import image3 from "../assets/attachment3.png";
import image4 from "../assets/attachment4.png";

export const emails = [
    {
        id: 1,
        name: "Sam Miller",
        subject: "Portfolio",
        email: "sammiller@gmail.com",
        time: "08:45 PM",
        day: "Today",
        message:
            "Stop wasting time looking for files buried in folders. Visually organize.",
        avatar: person,
        attachments: [image1, image2, image3, image4],
    },

    {
        id: 2,
        name: "Lily Jones",
        subject: "Invitations",
        email: "lilyjones@gmail.com",
        time: "01:11 PM",
        day: "Yesterday",
        message:
            "It's always a pleasure to have you at all my birthday parties.",
        avatar: person1,
    },

    {
        id: 3,
        name: "Smith",
        subject: "Assignment Submission",
        email: "smith@gmail.com",
        time: "06:45 PM",
        day: "Monday",
        message:
            "If you want to set up an assignment with additional reviews.",
        avatar: person2,
        attachments: [image2, image3, image1, image4],
    },

    {
        id: 4,
        name: "John Carter",
        subject: "Project Update",
        email: "john@gmail.com",
        time: "09:30 AM",
        day: "Sunday",
        message:
            "The latest project updates have been completed successfully. Please review the attached.",
        avatar: person2,
        attachments: [image3, image4, image2, image1],
    },
];


