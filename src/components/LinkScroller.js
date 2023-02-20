import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { helper } from "utils/helper";

function LinkScroller({
  id,
  to,
  className,
  other,
  children,
  scrollerOptions = { smooth: true },
  wait = 1000,
}) {
  return (
    <Link
      to={to}
      {...other}
      className={className}
      onClick={() => {
        setTimeout(() => {
          scroller.scrollTo(id, scrollerOptions);
        }, wait);
      }}
    >
      {children}
    </Link>
  );
}

export default LinkScroller;
