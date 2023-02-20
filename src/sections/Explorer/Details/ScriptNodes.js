import BulletPoint from "components/BulletPoint";
import NodesChart from "components/NodesChart";
import React from "react";

function ScriptNodes() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <NodesChart />

      <div className="flex-1 relative overflow-hidden space-y-6">
        <BulletPoint
          textClassName="break-all"
          point={
            <>
              99.49% <br />
              0x98fd878cd2267577ea6ac47bcb5ff4dd97d2f9e5
            </>
          }
        />

        <BulletPoint
          textClassName="break-all"
          point={
            <>
              0.50% <br />
              0x5606a0ed29d4a22488cd6204ced773f0c250c08
            </>
          }
        />

        <BulletPoint
          textClassName="break-all"
          point={
            <>
              0.01% <br /> 0xca9fcb8cb86715cf779bbbcce3113c10c25b2166
            </>
          }
        />
      </div>
    </div>
  );
}

export default ScriptNodes;
