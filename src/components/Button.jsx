import React, { forwardRef } from "react";

const Button = ({ children, classname="",...props },ref) => {
  
  return (
    <button type="button" className={`p-2 rounded-md  px-4 ${classname}`} {...props} ref={ref}>
        {children}
    </button>
  );
};

export default forwardRef(Button);
