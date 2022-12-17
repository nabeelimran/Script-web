import React from "react";
import { Icon } from "@iconify/react";

function FloatingInput(props) {
  return (
    // <div className="relative text-base">
  //   viewButton=null,
  // switch
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder=" "
    //     className="floating-label block w-full appearance-none outline-none bg-transparent py-2 border-b-2 border-primary"
    //   />
    //   <label
    //     for="email"
    //     className="absolute bottom-1/2 translate-y-1/2 left-0 transition-all -z-1 duration-300 origin-0 bg-black text-primary"
    //   >
    //     {label}
    //   </label>
    // </div>

    <div className="relative text-sm lg:text-base space-y-1">
      <label
        htmlFor={props.id}
        className="transition-all -z-1 duration-300 text-primary block w-fit cursor-pointer"
      >
        {props.label}
      </label>
      <div className="relative">
      <input
        {...props.other}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="block w-full appearance-none outline-none bg-transparent pb-2 border-b-2 border-primary"
      />

      {props.viewButton && (
        <button
        type="button"
        className="absolute top-1/3 -translate-y-1/2 right-5 flex opacity-60 z-20 text-base md:text-xl"
        onClick={() => props.switch(props.id)}
      >
        {!props.showPassword ? <Icon icon="ion:eye-off" /> : <Icon icon="ion:eye" />}
      </button>
      )
        
      }
      </div>

      {props.error && (
        <div>
          <p className="text-[#ff5454]" style={{ fontSize: "inherit" }}>
            {props.error}
          </p>
        </div>
      )}
    </div>
  );
}

export default FloatingInput;
