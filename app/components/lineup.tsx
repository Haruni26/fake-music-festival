type Tier = {
  size: "xl" | "lg" | "md" | "sm";
  artists: string[];
};

type LineupDayData = {
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
        <span key={artist} className="flex gap-2 md:gap-x-3">
          {artist}
          {i < tier.artists.length - 1 && <span aria-hidden="true">.</span>}
        </span>
      ))}
    </div>
  );
}

function LineupDay({ day, tiers }: LineupDayData) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="font-display text-lg tracking-[0.3em] mb-5 text-ivory">
        {day}
      </span>
      {tiers.map((tier, i) => (
        <LineupRow key={i} tier={tier} />
      ))}
    </div>
  );
}

const lineup: LineupDayData[] = [
  {
    day: "Friday",
    tiers: [
      {
        size: "xl",
        artists: [
          "Major Lazer",
          "DJ Snake",
          "The Chainsmokers",
          "Disclosure",
          "Porter Robinson",
        ],
      },
      {
        size: "md",
        artists: [
          "Glass Animals",
          "Flume",
          "Naughty Boy",
          "Gorillaz",
          "F3miii",
        ],
      },
      {
        size: "sm",
        artists: [
          "Foster the People",
          "Wolf Alice",
          "Amber Mark",
          "another person",
          "Billie Marten",
          "MPH",
        ],
      },
    ],
  },
  {
    day: "Saturday",
    tiers: [
      {
        size: "xl",
        artists: [
          "Bad Bunny",
          "Kendrick Lamar",
          "J Cole",
          "Metro Boomin",
          "Rauw Alejandro",
        ],
      },
      {
        size: "md",
        artists: [
          "Vybez Kartel",
          "Tyla",
          "Shenseea",
          "Rvssian",
          "Popcaan",
          "Wizkid",
        ],
      },
      {
        size: "sm",
        artists: [
          "Bunji Garlin",
          "Destra",
          "Amber Mark",
          "Billie Marten",
          "MPH",
        ],
      },
    ],
  },
];

export function LineupSection() {
  return (
    <section className="font-display relative px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        {lineup.map((d) => (
          <LineupDay key={d.day} day={d.day} tiers={d.tiers} />
        ))}
      </div>
    </section>
  );
}
