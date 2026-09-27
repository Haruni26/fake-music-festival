// TODO
//  - Update the appearance of the ticket tiers to have a more "professional" design
//  - Edit button appearance and hover effect
//  - Edit font text for the location

const ticketTiers = [
  {
    name: "General Admission",
    price: "$249",
    description: "Full 3-day access, general viewing areas",
  },
  {
    name: "VIP",
    price: "$549",
    description: "Elevated platforms, air-conditioned lounges, private bars",
  },
  {
    name: "VIP+",
    price: "$1,200",
    description:
      "Private cabana for up to 6, dedicated server, front-of-stage access",
  },
];

export function DateAndTickets() {
  return (
    <section className="relative bg-navy-deep px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <h1 className="font-display text-5xl md:text-7xl tracking-wide text-ivory">
          June 26–27, 2027
        </h1>

        <p className="text-sm md:text-base tracking-wide text-beige">
          Paradise Island · Nassau, Bahamas
        </p>
        <div className="grid w-full gap-6 sm:grid-cols-3">
          {ticketTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 px-6 py-8 transition-colors hover:border-ivory/70"
            >
              <span className="font-display text-lg uppercase tracking-wide text-ivory">
                {tier.name}
              </span>
              <span className="text-3xl font-bold text-ivory ">
                {tier.price}
              </span>
              <p className="text-sm text-ivory/60">{tier.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-4 text-xl rounded bg-ivory px-10 py-3 font-semibold text-navy-deep transition-all hover:shadow-[0_0_25px_rgba(70,230,255,0.6)] hover:cursor-pointer">
          Get Tickets
        </button>
      </div>
    </section>
  );
}
