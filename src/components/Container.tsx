import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`max-w-4xl w-full mx-auto py-20 px-5 md:px-10 overflow-x-hidden`}
    >
      {children}
    </main>
  );
};
