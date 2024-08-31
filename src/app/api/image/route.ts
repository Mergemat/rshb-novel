import { promises as fs } from "fs";

export async function GET() {
  const res = new Response();
  res.headers.set("Content-Type", "image/jpeg");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const blob = await fs.readFile("public/assets/images/intro.jpg");

  return new Response(blob);
}
