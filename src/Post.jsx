import React from "react";
import img from "./assets/ammar.jpg";

const Post = () => {
  return (
    <div className=" p-7">
      <div id="post">
        <div id="postHead" className=" p-4">
          <div id="logoandName">
            <div className=" w-16  h-2">
              <img src={img} alt="img" className=" rounded-full" />
            </div>
            <div>
              <p>Ammar Ul Mustafa</p>
              <p>12h</p>
            </div>
          </div>
          <div id="postheadicons"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
