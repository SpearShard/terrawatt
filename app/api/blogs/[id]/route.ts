// import { NextResponse } from "next/server";

// export async function GET(
//   _req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const res = await fetch(
//       `http://65.2.124.237:8000/api/v1/users/blog/${params.id}`,
//       { cache: "no-store" }
//     );

//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch {
//     return NextResponse.json(
//       { status: false, error: "Failed to fetch blog" },
//       { status: 500 }
//     );
//   }
// }
