"use client";

export default function AdminProductPage() {
  const revalidate = async () => {
    await fetch("http://localhost:3000/api/revalidate?tag=products", {
      method: "POST",
    });
  };

  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      <button className="p-2 rounded-xl bg-sky-200" onClick={revalidate}>
        Revalidate
      </button>
    </div>
  );
}
