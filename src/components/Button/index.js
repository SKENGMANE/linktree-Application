import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-radius8" };
const variants = {
  OutlineBluegray50:
    "bg-bluegray_50 border border-bluegray_50 border-solid text-gray_900",
};
const sizes = { sm: "lg:p-[20px] xl:p-[25px] p-[29px] 3xl:p-[34px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineBluegray50"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray50",
  size: "sm",
};

export { Button };
