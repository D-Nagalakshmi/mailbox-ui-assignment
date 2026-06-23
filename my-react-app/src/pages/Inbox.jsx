

// import MailList from "../components/MailList";
// import MailDetails from "../components/MailDetails";

// export default function Inbox() {
//     return (
//         <div className="flex flex-1">
//             <MailList />

//             <div className="hidden md:block flex-1">
//                 <MailDetails />
//             </div>
//         </div>
//     );
// }

import { useState } from "react";
import MailList from "../components/MailList";
import MailDetails from "../components/MailDetails";
import { emails } from "../data/emails";

export default function Inbox({ search, setSearch }) {
    const [selectedMail, setSelectedMail] = useState(emails[0]);

    return (
        <div className="flex flex-1">
            <MailList
                emails={emails}
                selectedMail={selectedMail}
                setSelectedMail={setSelectedMail}
                search={search}
                setSearch={setSearch}
            />

            <div className="hidden md:block flex-1">
                <MailDetails mail={selectedMail} />
            </div>
        </div>
    );
}