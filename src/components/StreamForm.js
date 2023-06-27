import { Icon } from "@iconify/react";
import React from "react";
import { helper } from "utils/helper";
import { ToastMessage } from "./ToastMessage";
import { useForm } from "react-hook-form";
import LocalServices from "services/LocalServices";
import { useDispatch } from "react-redux";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import EmojiPicker from "emoji-picker-react";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function StreamForm({ submitHandler, messageForReply, removeReplyMessage }) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    typedMessage: "",
  });
  const dispatch = useDispatch();
  const [isEmoji, setIsEmoji] = React.useState(false);
  

  const onSubmit = (data) => {
    const user = LocalServices.getServices("user");
    if (user && user.userId) {
      submitHandler(data);
      reset();
    } else {
      dispatch(toggleModalVisibility(true));
      reset();
    }
  };

  const modalRef = OutsideClickDetector(() => {
    setIsEmoji(false);
  });

  const emojiHandler = (res) => {
    setValue("typedMessage", getValues("typedMessage") + res.emoji);
  };

  return (
    <>
      {isEmoji && <EmojiPicker onEmojiClick={(res) => emojiHandler(res)} />}
      <form className=" mt-7" onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(messageForReply).length ? (
          <div className="flex flex-row justify-between items-center bg-shade-grayis rounded-lg mb-1 p-3">
            
            <div
              className="border-l-2 rounded-md border-primary pl-2 py-2 bg-[#2c2c2c]"
              style={{ flex: "0 1 80%" }}
            >
              <p className="text-xs md:text-sm font-medium">{messageForReply.userName}</p>
              <p className="text-xs md:text-sm text-ellipsis">{messageForReply.comment}</p>
            </div>
            <div>
              <Icon icon="material-symbols:close-rounded" className="cursor-pointer" onClick={()=>removeReplyMessage()}/>
            </div>
          </div>
        ) : null}

        <div className="flex space-x-4 items-end">
          <div className="h-10 w-full relative bg-shade-grayis rounded-lg overflow-hidden">
            {/* <div className="border-b-4 border-white p-10">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <p>Dheeraj</p>
            </div> */}
            <input
              autoComplete="off"
              type="text"
              className="absolute top-0 left-0 w-full h-full z-10 bg-transparent px-4 lh-1 pr-12"
              placeholder="Send Message"
              {...register("typedMessage", { required: true })}
            />

            <button
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-60 text-xl"
              ref={modalRef}
              onClick={(e) => {
                e.preventDefault();
                setIsEmoji(!isEmoji);
              }}
            >
              <Icon icon="ic:outline-emoji-emotions" />
            </button>
          </div>

          <button
            type="submit"
            className="min-w-[40px] text-primary h-10 rounded-lg bg-shade-grayis flex items-center justify-center"
          >
            <img src="images/tv/send-icon.svg" className="w-[46%]" alt="" />
          </button>
        </div>
      </form>
    </>
  );
}

export default StreamForm;
