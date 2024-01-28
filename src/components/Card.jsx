import React from "react";

export default function Card({ horizontal, children }) {
  return (
    <div className={"flex gap-8 mb-20 " + (horizontal ? 'flex-row' : 'flex-col w-1/4')}>
      { children }
    </div>
  );
}
