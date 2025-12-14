export async function GET() {
  try {
    const res = await fetch(
      "http://65.2.124.237:8000/api/v1/users/blog/all",
      { cache: "no-store" }
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ status: false, error: "Failed to fetch blogs" }),
      { status: 500 }
    );
  }
}
