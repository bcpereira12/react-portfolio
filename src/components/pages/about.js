import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas tellus
        rutrum tellus pellentesque eu tincidunt tortor. Leo vel fringilla est
        ullamcorper eget nulla. Egestas sed tempus urna et pharetra pharetra
        massa massa ultricies. Sagittis id consectetur purus ut faucibus. Amet
        tellus cras adipiscing enim. Imperdiet dui accumsan sit amet nulla
        facilisi morbi. Id neque aliquam vestibulum morbi blandit cursus risus
        at. Duis at consectetur lorem donec massa. Sed velit dignissim sodales
        ut eu. Condimentum lacinia quis vel eros. Phasellus faucibus scelerisque
        eleifend donec pretium vulputate sapien nec. Euismod lacinia at quis
        risus sed. Tincidunt lobortis feugiat vivamus at augue eget arcu.
        Bibendum neque egestas congue quisque egestas. In arcu cursus euismod
        quis viverra. Amet aliquam id diam maecenas ultricies mi.
      </div>
    </div>
  );
}
