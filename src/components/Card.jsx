import React from "react";

export default function Card({ horizontal, children }) {
  return (
    <div className={"flex " + (horizontal ? 'flex-row' : 'flex-col')}>
      { children }
    </div>
  );
}
