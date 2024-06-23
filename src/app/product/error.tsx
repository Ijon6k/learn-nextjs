"use client";

import { useEffect } from "react";

export default function Errorpage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <span>
        <h1>Error</h1>
        <br />
        <p>{error.message}</p>
        <button onClick={() => reset()} className="p-2 rounded-xl bg-red-200">
          Try again
        </button>
      </span>
    </div>
  );
}
