import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative flex flex-col overflow-hidden items-center justify-center px-6 bg-black/90 min-h-screen">
        <Image
          src="/image/concert-crowd.jpg"
          alt="Concert Crowd"
          loading="eager"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="z-10 text-center flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-wide mb-6 drop-shadow-lg">
            Back and bigger than ever!
          </h1>
        </div>
        <div className="absolute bottom-30 z-10 flex items-center gap-2 text-white/90">
          <button className="bg-amber-400 text-white px-6 py-2 rounded font-semibold hover:bg-black hover:border-amber-400 transition-colors">
            Get Tickets
          </button>
          <button className="border border-emerald-500 text-white px-6 py-2 rounded font-semibold hover:bg-emerald-500 hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
