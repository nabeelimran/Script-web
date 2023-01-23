import React from "react";
import BulletPoint from "./BulletPoint";

const ListIntended = ({ title, points, shouldBeIntended = true }) => {
  return (
    <div className="space-y-4">
      {title && <BulletPoint point={title} />}

      {points && (
        <div
          className={`space-y-5 lg:space-y-3 ${shouldBeIntended ? "pl-6" : ""}`}
        >
          {points.map((item, i) => (
            <BulletPoint variant="white" point={item} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListIntended;
