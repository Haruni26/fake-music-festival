import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <section className="relative flex flex-col overflow-hidden items-center justify-center px-6 min-h-screen">
        <Image
          src="/image/concert-crowd.jpg"
          alt="Concert Crowd"
          loading="eager"
          fill
          className="object-cover brightness-[0.55] saturate-125"
        />

        {/* Night gradient + glow */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-navy-deep/60 to-navy-deep" />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-neon-red/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-neon-blue/20 blur-3xl" />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="z-10 text-center flex flex-col items-center gap-6">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wide text-ivory drop-shadow-[0_0_25px_rgba(270,204,179,0.5)]">
            Back and bigger than ever
          </h1>
        </div>

        <div className="absolute bottom-20 z-10 flex items-center gap-3">
          <button className="rounded bg-beige px-7 py-2.5 font-semibold text-navy-deep transition-all hover:shadow-[0_0_20px_rgba(229,204,179)]">
            Get Tickets
          </button>
          <button className="rounded border border-neon-blue px-7 py-2.5 font-semibold text-ivory transition-all hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(31,206,255)]">
            Learn More
          </button>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 z-10 flex flex-col items-center gap-2">
          <span className="h-8 w-px bg-linear-to-b from-transparent via-ivory/40 to-transparent" />
          <span className="h-1.5 w-1.5 rounded-full bg-white motion-safe:animate-pulse" />
        </div>
      </section>
    </div>
  );
}
