import Button from "components/Button";
import Checkbox from "components/Checkbox";
import FloatingLabelInput from "components/FloatingLabelInput";
import FloatingLabelSelect from "components/FloatingLabelSelect";
import FloatingLabelTextarea from "components/FloatingLabelTextarea";
import Title from "components/Title";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "sections/Dashboard/EditProfile/Avatar";
import { useForm } from "react-hook-form";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { ToastMessage } from "components/ToastMessage";

function EditProfile() {

  const [countryList, setCountryList] = useState([]);
  const userId = LocalServices.getServices("user")?.userId || null;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [videoWatchDuration, setVideoWatchDuration] = useState(0);
  const navigate = useNavigate();

  const viewUserProfile = (userId) => {
    Api.viewUserProfile(userId, 'dashboard').then((res) => {
      if(res && res.status === 200) {
        setProfile(res.data.data);
      }
    })
  }

  const getCountryList = () => {
    Api.getCountryList('dashboard').then((res) => {
      if (res && res.status === 200) {
        setCountryList(res.data.data);
      }
    })
  }

  const getVideoWatchDuration = (userId) => {
    Api.getVideoWatchDuration(userId, 'watch').then((res) => {
      if(res && res.status === 200) {
        setVideoWatchDuration(res?.data?.data?.totalWatchVideoDuration);
      }
    })
  }

  const { register, handleSubmit, watch, formState: { errors }, } = useForm({
    username:"",
    email: "",
    country: "",
    bio: "",
    privacyPolicy: false,
  });

  const updateProfile = (data) => {
    setLoading(true);
    const req = {};
    Api.updateProfile(req, 'edit-profile').then(res => {
      if(res && res.status === 200) {
        navigate({
          pathname: "/dashboard",
        })
        ToastMessage(res.data.message, true);
      } else {
        ToastMessage(res.data.message);
      }
      setLoading(false);
    }).catch(err => {
      ToastMessage(err?.response?.data?.message || 'Unable to change password.');
      setLoading(false);
    })
  }

  useEffect(() => {
    getCountryList();
    if (userId) {
      getVideoWatchDuration(userId);
      viewUserProfile(userId);
    }
  }, [])

  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout">
      <div className="flex justify-center mb-8">
        <Avatar />
      </div>

      <div>
        <Title variant="20" className="text-primary font-medium mb-6">
          Edit Profile
        </Title>

        <form onSubmit={handleSubmit(updateProfile)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">
            <div>
              <FloatingLabelInput
                lable="Username"
                other={{
                  ...register("username", { required: true }),
                }}
                value={profile?.userName || ''}
              />
              <p className="text-xs xl:text-sm mt-2 opacity-70">
                You may update your username again 2 month
              </p>
            </div>
            <div>
              <FloatingLabelInput
                lable="Username"
                value={profile?.userName || ''}
                other={{
                  ...register("username", { required: true }),
              }}/>
              <p className="text-xs xl:text-sm mt-2 opacity-70">
                Customize capitalzation for your username
              </p>
            </div>
              <FloatingLabelInput
                lable="Email"
                value={profile?.email || ''}
                other={{
                ...register("email", { required: true }),
              }}/>
            <FloatingLabelSelect label="Country" options={countryList} value={profile?.profile?.country?.id || ''} />
            <div className="sm:col-span-2">
              <FloatingLabelTextarea placeholder="Bio" value={profile?.bio || ''} />
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
            <p className="fs-18px font-medium">Watch Time (min) {videoWatchDuration}</p>
          </div>

          <p className="fs-16px font-medium mb-6">
            If you wanna know more go to{" "}
            <a
                href="https://wallet.script.tv/"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Wallet
              </a>
            {/* <Link
              to="/terms-condition"
              className="text-primary hover:underline"
            >
              Wallet
            </Link> */}
          </p>

          <Button label="Save Changes" loader={loading} />
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
