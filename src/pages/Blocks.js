import Footer from "components/Footer";
import React from "react";
import ScriptNodes from "sections/Blocks/ScriptNodes";
import ExplorerNavbar from "components/ExplorerNavbar";

function Blocks() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />

      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <ExplorerNavbar />
      </div>

      <main className="flex-1">
        <div className="mb-20 lg:mb-24">
          <ScriptNodes />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blocks;
