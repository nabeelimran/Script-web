import React from "react";

const User = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="images/marketplace-user.png"
        className="w-[30px] h-[30px] rounded-full"
        alt=""
      />
      <p>ABC #54353</p>
    </div>
  );
};

function ActivityRow() {
  return (
    <tr>
      <td>
        <User />
      </td>
      <td>3gdfs...fgs</td>
      <td>
        <span>
          Cancel Bid <span className="text-primary">(ME v2)</span>
        </span>
      </td>
      <td>about 16 hours ago</td>
      <td></td>
      <td>7DSF74...3shd</td>
      <td></td>
    </tr>
  );
}

export default ActivityRow;
