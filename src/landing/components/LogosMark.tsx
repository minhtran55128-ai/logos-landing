type LogosMarkProps = {
  src: string
  size: number
  // A second artwork of the same mark, drawn on top and faded out by `--f`, so the
  // mark can change colour as the product video box fills up.
  fadeSrc?: string
}

// The two white bars are separate rectangles in Figma, not part of the exported
// path, and sit at fixed proportions of the mark at every size.
export function LogosMark({ src, size, fadeSrc }: LogosMarkProps) {
  return (
    <span className="relative block shrink-0" style={{ width: size, height: size }}>
      <img src={src} alt="" width={size} height={size} className="block h-full w-full" />
      {fadeSrc ? (
        <img
          src={fadeSrc}
          alt=""
          width={size}
          height={size}
          className="landing-mark-fade absolute inset-0 block h-full w-full"
        />
      ) : null}
      <span
        className="absolute bg-white"
        style={{ left: "30.91%", top: "40%", width: "7.27%", height: "17.59%" }}
      />
      <span
        className="absolute bg-white"
        style={{ left: "61.82%", top: "40%", width: "7.27%", height: "17.59%" }}
      />
    </span>
  )
}
