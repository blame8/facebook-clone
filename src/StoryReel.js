import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/id/237/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="test1"
      />
      <Story
        image="https://picsum.photos/seed/picsum/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="test2"
      />
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300?grayscale"
        title="test3"
      />
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300/?blur"
        title="test4"
      />
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        title="test5"
      />
    </div>
  );
}

export default StoryReel;
