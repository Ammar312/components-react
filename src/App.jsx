import React from "react";
import tensport from "./assets/tensport.jpg";
import babar from "./assets/babar-azam.jpg";
import dawateislami from "./assets/dawateislami.jpg";
import dawatpost from "./assets/dawatpost.jpg";
import startuplogo from "./assets/startup logo.jpg";
import startuppost from "./assets/startuppost.jpg";
import Post from "./Post";
import "./index.css";
const App = () => {
  return (
    <div className="">
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
      <Post
        name="Startup Pakistan"
        image={startuplogo}
        date="18h"
        postText="iPhone 15 Ultra's Jaw-Dropping Features and Specs Leaked ahead of its Launch.
        Check the Leaked Specs in Comment"
        postImage={startuppost}
        totalLikes="167"
      />
    </div>
  );
};

export default App;
