import React from "react";
import zxcvbn from "zxcvbn";

function PasswordChercker({ password }) {
  const testRzlt = zxcvbn(password);

  const num = (testRzlt.score * 100) / 4;

  const ColorProgres = () => {
    switch (testRzlt.score) {
      case 0:
        return "#ffffffa0";
      case 1:
        return "#eb4034";
      case 2:
        return "#ffe44d";
      case 3:
        return "#72fc79";
      case 4:
        return "#00ab09";
      default:
        return "none";
    }
  };

  const CreatePasslabel = () => {
    switch (testRzlt.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const changeColor = () => ({
    backgroundColor: ColorProgres(),
    color: "red",
    width: `${num}%`,
    height: "100%",
    borderRadius: "2rem",
    transition: "1s all ease-in",
  });
  return (
    <div className="progress_bar">
      <div className="progress" style={changeColor()}></div>
      <p style={{ color: ColorProgres() }}>{CreatePasslabel()}</p>
    </div>
  );
}

export default PasswordChercker;
