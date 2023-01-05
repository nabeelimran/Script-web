import React from "react";
import FloatingInput from "components/FloatingInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Checkbox from "components/Checkbox";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
    rememberPassword: false,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6 mb-10">
        <FloatingInput
          id="email"
          type="email"
          label="Email address*"
          placeholder="Enter your email adress"
          error={errors.email && "This field is requird. Please enter e-mail address."}
          other={{
            ...register("email", { required: true }),
          }}
        />
        <FloatingInput
          type="password"
          id="password"
          label="Password"
          placeholder="Your password"
          error={errors.password && "password is required."}
          other={{
            ...register("password", { required: true }),
          }}
        />
      </div>

      <div className="space-y-6">
        <Link to="/" className="text-sm lg:text-base text-primary block w-fit">
          Lost your password?
        </Link>

        <Checkbox
          id="remeber"
          title="Remember your password?"
          other={{
            ...register("rememberPassword", { required: false }),
          }}
        />

        <div className="pt-2">
          <Button type="submit" label="Login" />
        </div>
      </div>
    </form>
  );
}

export default Form;
