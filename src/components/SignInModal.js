import { Icon } from "@iconify/react";
import BlackScreen from "./BlackScreen";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignInModalVisibility } from "redux/reducers/connectWalletModal_State";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useState } from "react";
import FloatingInput from "./FloatingInput";
import Api from "services/api";
import { ToastMessage } from "./ToastMessage";
import { useNavigate } from "react-router-dom";

function SignInModal() {
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confPasswordShow, setConfPasswordShow] = useState(false);
  const { isSignInModalVisible } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    username: "",
    email: "",
    refral: "",
    password: "",
    confirm_password: "",
  });

  const modalRef = OutsideClickDetector(() => {
    dispatch(toggleSignInModalVisibility(false));
    reset({
      email: "",
      password: ""
    });
  });

  const switchPasswordView = (from) => {
    if (from === "newPassword") {
      setPasswordShow(!passwordShow);
    } else {
      setConfPasswordShow(!confPasswordShow);
    }
  };

  const errorShow = (type) => {
    let error;
    if (type) {
      switch (type.type) {
        case "required":
          error = "This field is required.";
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
  };

  const signIn = (data) => {
    setLoading(true);
    const req = {
      email: data.email,
      password: data.password
    };

    Api.signinModalApi(req, "signInModal")
      .then((res) => {
        if(res && res.data && res.data.isSuccess) {
          
        } else {
          ToastMessage(res?.message || 'Something went wrong');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        ToastMessage(err?.message || 'Unable to login');
        setLoading(false);
      });
  };

  return (
    <>
      <BlackScreen zIndex="1000000" show={isSignInModalVisible} />
      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isSignInModalVisible
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
          <div className="lg:w-[50%]">
            <div className="mb-8">
              <Title className="font-medium mb-3">Sign In</Title>
              <p className="text-sm">
                We knew you’d come around, signin for endless entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-7">
              <form onSubmit={handleSubmit(signIn)}>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-6 gap-y-6 mb-6">
                  <div>
                    <FloatingInput
                      placeholder="Email"
                      other={{
                        ...register("email", { required: true }),
                      }}
                      error={
                        errors.email &&
                        "This field is requird. Please enter e-mail address."
                      }
                    />
                  </div>
                  <div>
                    <FloatingInput
                      id="newPassword"
                      type={passwordShow ? "text" : "password"}
                      viewButton={true}
                      switch={switchPasswordView}
                      showPassword={passwordShow}
                      label=""
                      placeholder="Enter password"
                      Eyebutton={true}
                      error={errorShow(errors.password)}
                      other={{
                        ...register("password", {
                          required: true,
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                          },
                          pattern: /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{8,}$/,
                        }),
                      }}
                    />
                  </div>
                </div>
                <Button label="Login" type="submit" loader={loading} />
              </form>
            </div>
            <img
              src="images/connect-wallet-banner.png"
              className="w-full lg:w-auto mt-10 lg:mt-0 max-w-[26rem] lg:max-w-none mx-auto lg:h-full object-cover lg:absolute top-0 right-0 z-[100]"
              alt=""
            />
            <button
              onClick={() => dispatch(toggleSignInModalVisibility(false))}
              className="absolute top-8 right-10 text-lg text-white flex z-[500000]"
            >
              <Icon icon="maki:cross" />
            </button>
          </div>
        </section>
      </UpperRoot>
    </>
  );
}

export default SignInModal;
