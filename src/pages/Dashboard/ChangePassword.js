import Button from "components/Button";
import PassowrdInput from "components/PasswordInput";
import Title from "components/Title";
import { ToastMessage } from "components/ToastMessage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "services/api";
import LocalServices from "services/LocalServices";

const LabelPassword = ({
  id,
  label,
  placeholder,
  error,
  other
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block w-fit text-xs md:text-sm mb-3 md:mb-3"
      >
        {label}
      </label>
      <PassowrdInput id={id} placeholder={placeholder} other={other}/>
      {error && (
        <div>
          <p className="text-[#FFEF00]" style={{ fontSize: "inherit" }}>
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

function ChangePassword() {
  const user = LocalServices.getServices("user") || null;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const errorShow = (type) => {
    let error;
    if (type) {
      switch (type.type) {
        case "required":
          error = "This field is requird. Please enter password";
          break;
        case "minLength":
          error = "Password must have at least 8 characters";
          break;
        case "pattern":
          error =
            "Password Should be eight characters long and alphanumeric with special characters";
          break;

        default:
          break;
      }
    }

    return error;
  }

  const changePassword = (data) => {
    setLoading(true);
    
    const req = {
      email: user.email || '',
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword
    }

    Api.changePassword(req, 'change-password').then((res) => {
      if(res && res.status === 200) {
        navigate({
          pathname: "/dashboard",
        })
        ToastMessage(res.data.message, true);
      } else {
        ToastMessage(res.data.message);
      }
      setLoading(false);
    }).catch((err) => {
      ToastMessage(err?.response?.data?.message || 'Unable to change password.');
      setLoading(false);
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

        <form className="space-y-6" onSubmit={handleSubmit(changePassword)}>
          <LabelPassword
            label="Old Password"
            id="Old"
            placeholder="Old Password"
            error={errorShow(errors.oldPassword)}
            other={{
              ...register("oldPassword", {
                required: true,
                // minLength: {
                //   value: 8,
                //   message: "Password must have at least 8 characters",
                // },
                // pattern: /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{8,}$/,
              }),
            }}
          />
          <LabelPassword
            label="New Password"
            id="new"
            placeholder="New Password"
            error={errorShow(errors.newPassword)}
            other={{
              ...register("newPassword", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
                pattern: /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{8,}$/,
              }),
            }}
          />
          <LabelPassword
            label="Confrim Password"
            id="confirm"
            placeholder="Confrim Password"
            error={
              errors.confirmPassword && errors.confirmPassword.message
            }
            other={{
              ...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("newPassword") !== val) {
                    return "Your password do not match";
                  }
                },
              }),
            }}
          />

          <div className="flex justify-end pt-2">
            <Button label="Submit" type="submit" loader={loading}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
