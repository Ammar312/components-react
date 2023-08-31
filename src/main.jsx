import React from "react";
import ReactDOM from "react-dom/client";
import Post from "./Post.jsx";
import "./index.css";
import tensport from "./assets/tensport.jpg";
import babar from "./assets/babar-azam.jpg";
import dawateislami from "./assets/dawateislami.jpg";
import dawatpost from "./assets/dawatpost.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Post
      name="DawateIslami"
      image={dawateislami}
      date="2h"
      postText="The one and only final destination..!"
      postImage={dawatpost}
      totalLikes="12k"
    />
    <Post
      name="TenSports"
      image={tensport}
      date="12h"
      postText="A true maestro in action, Babar Azam notches his second 150 in ODIs,
    showcasing why he holds the throne as the No. 1 ODI batsman. 🏆 Catch
    the action LIVE only on TenSportsHD!"
      postImage={babar}
      totalLikes="710"
    />
  </React.StrictMode>
);
