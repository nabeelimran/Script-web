import { Icon } from "@iconify/react";
import React from "react";
import { helper } from "utils/helper";
import { ToastMessage } from "./ToastMessage";
import { useForm } from "react-hook-form";
import LocalServices from "services/LocalServices";
import { useDispatch } from "react-redux";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import EmojiPicker from 'emoji-picker-react';



function StreamForm({submitHandler}) {
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
  const dispatch = useDispatch()
  const [isEmoji,setIsEmoji] = React.useState(false)
  
  const onSubmit = (data) => {
    const user = LocalServices.getServices("user")
    if(user && user.userId){

      submitHandler(data)
    }else{
      dispatch(toggleModalVisibility(true))
    }
    reset();
  }

  const emojiHandler = (res) => {

    setValue('typedMessage',getValues('typedMessage')+res.emoji)
  }

  return (
    <>
    {
      isEmoji && <EmojiPicker onEmojiClick={(res)=> emojiHandler(res)}/>
    }
    <form className="flex space-x-4 mt-7" onSubmit={handleSubmit(onSubmit)}>
      <div className="h-10 w-full relative bg-shade-grayis rounded-lg overflow-hidden">
        <input
          autoComplete="off"
          type="text"
          className="absolute top-0 left-0 w-full h-full z-10 bg-transparent px-4 lh-1 pr-12"
          placeholder="Send Message"
          {...register("typedMessage", { required:true})}
        />

        <button type="button" className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-60 text-xl" onClick={(e)=>{e.preventDefault();setIsEmoji(!isEmoji);}}>
          <Icon icon="ic:outline-emoji-emotions" />
        </button>
      </div>

      <button
        type="submit"
        className="min-w-[40px] text-primary h-10 rounded-lg bg-shade-grayis flex items-center justify-center"
      >
        <img src="images/tv/send-icon.svg" className="w-[46%]" alt="" />
      </button>
    </form>
    
    </>
  );
}

export default StreamForm;
