export const getProduct = async (url: string) => {
  //   const res = await fetch(url, {
  //     cache: "reload",
  //   });
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["products"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
