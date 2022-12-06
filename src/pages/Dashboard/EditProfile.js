import Button from "components/Button";
import Checkbox from "components/Checkbox";
import FloatingLabelInput from "components/FloatingLabelInput";
import FloatingLabelSelect from "components/FloatingLabelSelect";
import FloatingLabelTextarea from "components/FloatingLabelTextarea";
import Title from "components/Title";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "sections/Dashboard/EditProfile/Avatar";

function EditProfile() {
  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout">
      <div className="flex justify-center mb-8">
        <Avatar />
      </div>

      <div>
        <Title variant="20" className="text-primary font-medium mb-6">
          Edit Profile
        </Title>

        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
            <div>
              <FloatingLabelInput lable="Username" />
              <p className="text-xs xl:text-sm mt-2 opacity-70">
                You may update your username again 2 month
              </p>
            </div>
            <div>
              <FloatingLabelInput lable="Username" />
              <p className="text-xs xl:text-sm mt-2 opacity-70">
                Customize capitalzation for your username
              </p>
            </div>
            <FloatingLabelInput lable="Email" />
            <FloatingLabelSelect label="Country" />
            <div className="sm:col-span-2">
              <FloatingLabelTextarea placeholder="Bio" />
              <p className="text-xs xl:text-sm mt-2 opacity-70">
                Description for the About panel on your channel page in under
                300 Characters
              </p>
            </div>
          </div>

          <div className="mb-6">
            <Checkbox
              id="remeber"
              title={
                <span className="text-white">
                  By clicking this, you agree to the{" "}
                  <Link
                    to="/terms-condition"
                    className="text-primary hover:underline"
                  >
                    Terms & conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy policy
                  </Link>
                </span>
              }
            />
          </div>

          <div className="flex lg:items-center justify-between space-y-4 lg:space-y-0 flex-col lg:flex-row mb-6">
            <p className="fs-18px font-medium">Total Earn : 0.00 $sSPAY</p>
            <p className="fs-18px font-medium">Watch Time (min) 51</p>
          </div>

          <p className="fs-16px font-medium mb-6">
            If you wanna know more go to{" "}
            <Link
              to="/terms-condition"
              className="text-primary hover:underline"
            >
              Wallet
            </Link>
          </p>

          <Button label="Save Changes" />
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
