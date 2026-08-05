type Tier = {
  size: "xl" | "lg" | "md" | "sm";
  artists: string[];
};

type LineupDay = {
  day: string;
  tiers: Tier[];
};

const sizeClasses: Record<Tier["size"], string> = {
  xl: "text-3xl md:text-5xl font-bold",
  lg: "text-2xl md:text-4xl font-bold",
  md: "text-lg md:text-2xl font-semibold",
  sm: "text-base md:text-xl font-medium",
};

function LineupRow({ tier }: { tier: Tier }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 uppercase tracking-wide text-ivory ${sizeClasses[tier.size]}`}
    >
      {tier.artists.map((artist, i) => (
        <span key={artist} className="flex items-center gap-x-3">
          {artist}
          {i < tier.artists.length - 1 && (
            <span className="text-neon-cyan/70" aria-hidden="true">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export function LineupDay({ day, tiers }: LineupDay) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="font-display text-sm tracking-[0.3em] text-ivory">
        {day}
      </span>
      {tiers.map((tier, i) => (
        <LineupRow key={i} tier={tier} />
      ))}
    </div>
  );
}
