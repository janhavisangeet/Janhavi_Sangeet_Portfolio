import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={twMerge(
        "px-1 py-0.5 rounded-md bg-neutral-200 text-black dark:bg-neutral-800 dark:text-neutral-100",
        className,
      )}
    >
      {children}
    </span>
  );
};
