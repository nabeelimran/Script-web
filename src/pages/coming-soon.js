import React from "react";

function ComingSoon({
  isLinkActive
}) {
  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout min-h-screen flex flex-col">
        <div className="mb-10 space-y-2">
            
        </div>
      <div className="space-y-6 max-w-[500px] mx-auto w-full flex flex-col justify-center items-center">
        <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl lh-1_2 mb-6 max-w-[30rem] lg:max-w-none mx-auto">Coming Soon</h1>
        {
          isLinkActive ? <a rel="noopener noreferrer" href="/" className="px-8 py-3 bg-primary text-black w-[60%] rounded-xl py-2.5 mt-5 text-center">Back to homepage</a> : null
        }
        
      </div>
    </div>
  );
}

export default ComingSoon;
