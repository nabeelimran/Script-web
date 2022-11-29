import React from "react";

function FloatingInput({
  label,
  placeholder,
  type = "text",
  id,
  other,
  error = null,
}) {
  return (
    // <div className="relative text-base">
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
        htmlFor={id}
        className="transition-all -z-1 duration-300 text-primary block w-fit cursor-pointer"
      >
        {label}
      </label>
      <input
        {...other}
        type={type}
        id={id}
        placeholder={placeholder}
        className="block w-full appearance-none outline-none bg-transparent pb-2 border-b-2 border-primary"
      />

      {error && (
        <div>
          <p className="text-[#ff5454]" style={{ fontSize: "inherit" }}>
            {error}
          </p>
        </div>
      )}
    </div>
  );
}

export default FloatingInput;
