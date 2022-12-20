import Button from "components/Button";
import PassowrdInput from "components/PasswordInput";
import Title from "components/Title";
import React from "react";
import Api from "services/api";

const LabelPassword = ({ id, label, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block w-fit text-xs md:text-sm mb-3 md:mb-3"
      >
        {label}
      </label>
      <PassowrdInput id={id} placeholder={placeholder} />
    </div>
  );
};

function ChangePassword() {

  const changePassword = () => {
    const req = {
      email: '',
      oldPassword: '',
      password: '',
      confirmPassword: ''
    }

    Api.changePassword(req).then((res) => {

    }).catch((err) => {
      
    })
  }

  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing">
      <div className="dashboard-layout">
        <Title
          className="text-primary text-left font-semibold mb-6"
          variant="24"
        >
          Change Password
        </Title>

        <form className="space-y-6">
          <LabelPassword
            label="Old Password"
            id="Old"
            placeholder="Old Password"
          />
          <LabelPassword
            label="New Password"
            id="new"
            placeholder="New Password"
          />
          <LabelPassword
            label="Confrim Password"
            id="confirm"
            placeholder="Confrim Password"
          />

          <div className="flex justify-end pt-2">
            <Button label="Submit" type="submit" calReward={changePassword} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
