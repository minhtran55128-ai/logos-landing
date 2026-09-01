export function MissionSection() {
  return (
    <section id="mission" className="bg-[#f1ece3] py-24 md:py-32">
      <div className="logos-section grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
        <div>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            The reason to build it
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
            Personal academic support shouldn&rsquo;t be a luxury.
          </h2>
        </div>
        <div className="max-w-xl text-base leading-7 text-[#707a7e]">
          <p>
            A private tutor can understand the student, remember what they
            are working on and adapt the support over time. Most students do
            not have access to that level of individual support.
          </p>
          <p className="mt-5">
            Logos is exploring how technology can make more relevant and
            personalized academic support available at much greater scale.
          </p>
          <p className="mt-8 border-l-2 border-[#4d9fa1] pl-5 text-lg font-semibold leading-7 text-[#3d5d5a]">
            The goal isn&rsquo;t to think for students. It&rsquo;s to remove
            more of the friction around helping them learn.
          </p>
        </div>
      </div>
    </section>
  )
}
