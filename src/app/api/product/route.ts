import { NextResponse, NextRequest } from "next/server";
const data = [
  {
    id: 1,
    name: "sepatu Nike",
    price: 10000,
  },
  {
    id: 2,
    name: "sepatu Adidas",
    price: 20000,
  },
  {
    id: 3,
    name: "sepatu Reebok",
    price: 30000,
  },
  {
    id: 4,
    name: "sepatu Puma",
    price: 40000,
  },
  {
    id: 5,
    name: "sepatu Converse",
    price: 50000,
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
