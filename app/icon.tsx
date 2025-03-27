import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
        }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "33%",
              height: "33%",
              backgroundColor: "#c1ff72",
              borderRadius: "50%",
              display: "flex",
            }}
          />
        ))}
      </div>
    ),
    {
      ...size,
    }
  )
}
