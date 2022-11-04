import React from "react";
const Home = (props) => {
  return (
    // to use h1 tag to show whatever you want
    <div className="home">
      <h1>Q. Should you use a Dropdown </h1>
      
      <button onMouseEnter={props.handleMouseEnter}>
        <span>Select</span>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
    </div>
    // to close div
  );
};
export default Home;
