

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Draft from "./pages/Draft";
import Trash from "./pages/Trash";
import Flagged from "./pages/Flagged";
import { HiMenu } from "react-icons/hi";
import More from "./pages/More"

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  return (

    <div className="flex min-h-screen">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {openMenu && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <Sidebar closeMenu={() => setOpenMenu(false)} />

          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      )}

      <div className="flex-1">
        {/* Header */}

        <div className="lg:hidden p-4 border-b">
          <button onClick={() => setOpenMenu(true)}>
            <HiMenu size={30} />
          </button>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Inbox search={search}
              setSearch={setSearch} />} />
            <Route path="/flagged" element={<Flagged />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/draft" element={<Draft />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </div>
  );
} export default App;