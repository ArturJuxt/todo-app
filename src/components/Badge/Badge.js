import React from "react";
import "./Badge.scss";
import classNames from "classnames";

const Badge = ({ color, click, className }) => {
  return (
    <div>
      <i
        onClick={click}
        className={classNames("badge", { [`badge--${color}`]: color }, className) }
      ></i>
    </div>
  );
};

export default Badge;
