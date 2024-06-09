"use client";

export default function AdminProductPage() {
  const revalidate = async () => {
    await fetch("http://localhost:3000/api/revalidate?tag=products", {
      method: "POST",
    });
  };

  return (
    <div className=" w-3/6 h-96 bg-sky-200  rounded-xl flex justify-center items-center ">
      <button
        className="p-2 rounded-lg bg-pink-300 font-semibold "
        onClick={revalidate}
      >
        Revalidate
      </button>
    </div>
  );
}
