import React from "react";
import img from "./assets/ammar.jpg";
import postImg from "./assets/first server thumb.png";

const Post = () => {
  return (
    <div className=" p-4">
      <div id="post" className=" border-pink-400 border-2">
        <div id="postHead" className=" p-4 flex justify-between ">
          <div id="logoandName" className=" flex gap-3 items-center">
            <div className=" w-12 h-12 overflow-hidden  rounded-full border-2">
              <img src={img} alt="img" width={48} height={48} />
            </div>
            <div>
              <p>Ammar Ul Mustafa</p>
              <p className=" text-[#8b8686]">12h</p>
            </div>
          </div>
          <div id="postheadicons" className=" flex gap-2">
            <span>
              <i class="bi bi-three-dots"></i>
            </span>
            <span>
              <i class="bi bi-x-lg"></i>
            </span>
          </div>
        </div>
        <div id="text" className=" px-4  leading-[1.4rem]">
          A true maestro in action, Babar Azam notches his second 150 in ODIs,
          showcasing why he holds the throne as the No. 1 ODI batsman. 🏆 Catch
          the action LIVE only on TenSportsHD!
        </div>
        <div className=" mt-2">
          <img src={postImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Post;
