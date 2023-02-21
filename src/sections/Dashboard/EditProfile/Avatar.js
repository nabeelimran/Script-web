import { Document } from "postcss";
import React from "react";
import { isBnbUser } from "utils/helper";

function Avatar({
  selectImage,
  image
}) {

  const openFile = () => {
    const fileEl = document.getElementById('file');
    fileEl.click();
  }

  return (
    <div className="relative w-[100px] xl:w-[120px] h-[100px] xl:h-[120px] rounded-full border-[4px] xl:border-[12px] border-primary">
      {console.log(image, 'image ==>>')}
      <img
        src={image ? image : "/images/yellow-dot.png"} 
        className="w-full h-full rounded-full object-cover"
        alt=""
        id="imagePreview"
      />

      <input type="file" accept="image/png, image/jpg, image/jpeg" id="file" className="hidden" onChange={selectImage} />

      {
        isBnbUser() ? null : <button className="w-[30px] xl:w-[36px] h-[30px] xl:h-[36px] bg-primary rounded-full absolute -top-0 xl:-top-3 -right-1 xl:-right-3 z-20 shadow-[0_0_6px_rgba(0,0,0,.8)] flex items-center justify-center"
        onClick={openFile}>
        <img
          src="/images/dashboard/edit.svg"
          className="w-[15px] xl:w-[18px] brightness-0"
          alt=""
        />
      </button>
      }
      
    </div>
  );
}

export default Avatar;
