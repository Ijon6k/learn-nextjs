import { NextResponse, NextRequest } from "next/server";
import { title } from "process";
const data = [
  {
    id: 1,
    title: "sepatu Nike",
    price: 10000,
    image:
      "https://images.jdsports.id/i/jdid/jd_IH3118_al?w=400&resmode=sharp&qlt=70&fmt=webp",
  },
  {
    id: 2,
    title: "sepatu Adidas",
    price: 20000,
    image:
      "https://images.jdsports.id/i/jdid/jd_IH3118_al?w=400&resmode=sharp&qlt=70&fmt=webp",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id);
  if (id) {
    const detailProduct = data.find((product) => product.id === Number(id));

    // * mengecek apakah id yang dicari ada atau tidak
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: [],
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
