import React from "react";
// import img from "./assets/ammar.jpg";
// import postImg from "./assets/first server thumb.png";

const Post = ({ name, image, date, postText, postImage, totalLikes }) => {
  return (
    <div className=" p-4">
      <div id="post" className="max-w-[571px] rounded-lg shadow-2xl">
        <div id="postHead" className=" p-4 flex justify-between ">
          <div id="logoandName" className=" flex gap-3 items-center">
            <div className=" w-12 h-12 overflow-hidden  rounded-full border-2">
              <img src={image} alt="img" width={48} height={48} />
            </div>
            <div>
              <p className=" font-medium">{name}</p>
              <p className=" text-[#8b8686]">
                {date} . <i class="bi bi-globe-asia-australia"></i>
              </p>
            </div>
          </div>
          <div id="postheadicons" className=" flex gap-2">
            <span>
              <i className="bi bi-three-dots"></i>
            </span>
            <span>
              <i className="bi bi-x-lg"></i>
            </span>
          </div>
        </div>
        <div id="text" className=" px-4  leading-[1.4rem]">
          {postText}
        </div>
        <div className=" mt-2 ">
          <img src={postImage} alt="" className=" w-full" />
        </div>
        <div
          id="secondLastDiv"
          className=" flex justify-between items-center px-4 py-2 "
        >
          <div className=" flex">
            <span className=" w-6 h-6 text-[14px] text-white bg-blue-600  flex justify-center items-center rounded-full">
              <i class="bi bi-hand-thumbs-up-fill"></i>
            </span>
            <span className=" w-6 h-6 text-white text-[14px] bg-red-400  flex justify-center items-center rounded-full">
              <i className="bi bi-heart-fill"></i>
            </span>
            &nbsp; {totalLikes}
          </div>
          <div className=" flex gap-4">
            <span>
              5<i className="bi bi-chat-left ml-2"></i>
            </span>
            <span>
              7<i className="bi bi-telegram ml-2 "></i>
            </span>
          </div>
        </div>
        <div className=" flex justify-between items-center mx-4 py-2 border-t-2 ">
          <div className=" text-slate-500 flex justify-center gap-2 hover:bg-gray-100 flex-grow mr-[2px]">
            <span>
              <i class="bi bi-hand-thumbs-up"></i>
            </span>
            Like
          </div>
          <div className=" text-slate-500 flex justify-center gap-2 hover:bg-gray-100 flex-grow mr-[2px]">
            <span>
              <i className="bi bi-chat-left ml-2"></i>
            </span>
            Comment
          </div>
          <div className=" text-slate-500 flex justify-center gap-2 hover:bg-gray-100 flex-grow ">
            <span>
              <i className="bi bi-telegram ml-2"></i>
            </span>
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
