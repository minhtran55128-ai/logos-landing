type LogoProps = {
  tone?: "light" | "dark"
}

export function Logo({ tone = "light" }: LogoProps) {
  const textColor = tone === "light" ? "text-[#f7f4ee]" : "text-[#19212b]"

  return (
    <span className={`flex items-center gap-2.5 ${textColor}`}>
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25c1c8]">
        <span className="absolute h-3.5 w-3.5 rounded-full border-[1.5px] border-[#19212b]" />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-[#19212b]" />
      </span>
      <span className="text-[17px] font-semibold tracking-[-.04em]">logos</span>
    </span>
  )
}
