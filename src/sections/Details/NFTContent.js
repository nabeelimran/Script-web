import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import TokenDetails from "./TokenDetails";

function NFTContent() {
  const isAbove768px = useMediaQuery("(min-width : 768px)");

  return (
    <div>
      <img
        src="images/nft.png"
        className="w-full rounded-xl aspect-square object-cover"
        alt=""
      />

      {isAbove768px && (
        <div className="mt-6">
          <TokenDetails />
        </div>
      )}
    </div>
  );
}

export default NFTContent;
