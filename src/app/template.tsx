"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      {/* <h1>Hello world {state}</h1>
      <button
        className="p-2 rounded-xl bg-red-200"
        onClick={() => setState(state + 1)}
      >
        {" "}
        click
      </button> */}
      {children}
    </div>
  );
}
