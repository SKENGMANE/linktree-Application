import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h2: "font-normal lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
