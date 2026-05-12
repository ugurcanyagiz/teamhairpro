import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { Readable } from "node:stream";

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const videoPath = join(process.cwd(), "components", "credit.mp4");
const contentType = "video/mp4";

export async function GET(request: NextRequest) {
  try {
    const videoStat = await stat(videoPath);
    const fileSize = videoStat.size;
    const range = request.headers.get("range");

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = Number.parseInt(parts[0], 10);
      const end = parts[1] ? Number.parseInt(parts[1], 10) : fileSize - 1;

      if (Number.isNaN(start) || Number.isNaN(end) || start >= fileSize || end >= fileSize) {
        return new NextResponse(null, {
          status: 416,
          headers: {
            "Content-Range": `bytes */${fileSize}`,
          },
        });
      }

      const chunkSize = end - start + 1;
      const stream = createReadStream(videoPath, { start, end });

      return new NextResponse(Readable.toWeb(stream) as BodyInit, {
        status: 206,
        headers: {
          "Accept-Ranges": "bytes",
          "Content-Length": chunkSize.toString(),
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Content-Type": contentType,
        },
      });
    }

    const stream = createReadStream(videoPath);

    return new NextResponse(Readable.toWeb(stream) as BodyInit, {
      headers: {
        "Accept-Ranges": "bytes",
        "Content-Length": fileSize.toString(),
        "Content-Type": contentType,
      },
    });
  } catch {
    return NextResponse.json({ error: "Tutorial video not found." }, { status: 404 });
  }
}
