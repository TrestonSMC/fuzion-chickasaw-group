"use client";

import Link from "next/link";

const PRIMARY = "#4B1E6D";
const ACCENT = "#C9A24D";
const DARK = "#1A1A1A";
const BG = "#F6F3EC";

type Advisor = {
  name: string;
  title: string;
  img: string;
  href: string;
};

export default function PrincipalPartnersPage() {
  const advisors: Advisor[] = [
    {
      name: "Amy Houston",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Amy%20Houston%20-%20Principal%20Advisor%20-%20Approved%20Image.jpg",
      href: "/company/amy-houston",
    },
    {
      name: "Morgan Broome",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Morgan%20Broome%20-%20Principal%20Advisor%20Pending%20Approval%20-%20Image.jpg",
      href: "/company/morgan-broome",
    },
    {
      name: "Sean Goretskie",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Sean%20Goretskie%20-%20Principal%20Advisor%20-%20Approved%20Image.jpg",
      href: "/company/sean-goretskie",
    },
    {
      name: "Robert S. Olson",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Senator%20Robert%20Olson%20-%20Principal%20Advisor%20-%20Approved%20Image.webp",
      href: "/company/robert-s-olson",
    },
  ];

  return (
    <main
      className="min-h-screen pt-28 md:pt-32"
      style={{ background: BG, color: DARK }}
    >
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p
          className="text-xs font-semibold tracking-[0.25em]"
          style={{ color: PRIMARY }}
        >
          PRINCIPAL ADVISORS
        </p>

        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Strategic perspective across the markets we serve and grow
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
          Fuzion Consulting Group and Fuzion Chickasaw Group are supported by a
          trusted network of Principal Advisors—experienced leaders who provide
          strategic perspective across the industries we serve today and the
          markets we are intentionally expanding into.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
          Our Principal Advisors offer real-world insight grounded in operations,
          regulation, and execution. They help ensure Fuzion’s solutions remain
          practical, credible, and aligned with real market conditions.
        </p>
      </section>

      <div className="h-[3px] w-full" style={{ background: ACCENT }} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-semibold" style={{ color: PRIMARY }}>
          What Principal Advisors Do
        </h2>

        <div className="mt-8 space-y-4 text-black/70">
          <p>Principal Advisors support Fuzion by:</p>

          <ul className="list-disc space-y-3 pl-5">
            <li>
              Providing <strong>strategic guidance</strong> grounded in hands-on
              industry experience
            </li>
            <li>
              Advising on <strong>market entry, positioning, and growth</strong>
            </li>
            <li>
              Ensuring solutions reflect{" "}
              <strong>real operational and regulatory needs</strong>
            </li>
            <li>
              Strengthening Fuzion’s ability to serve{" "}
              <strong>complex, regulated environments</strong>
            </li>
          </ul>

          <p className="pt-4">
            This model allows Fuzion to remain agile while benefiting from
            credible, external perspective.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-semibold" style={{ color: PRIMARY }}>
          Meet Our Principal Advisors
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="rounded-2xl border bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              style={{ borderColor: "rgba(201,162,77,0.45)" }}
            >
              <div
                className="mx-auto h-32 w-32 overflow-hidden rounded-full border bg-white"
                style={{ borderColor: "rgba(201,162,77,0.6)" }}
              >
                <img
                  src={advisor.img}
                  alt={advisor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="mx-auto mt-5 h-[3px] w-12 rounded-full"
                style={{ background: ACCENT }}
              />

              <p
                className="mt-5 text-lg font-semibold"
                style={{ color: PRIMARY }}
              >
                {advisor.name}
              </p>

              <p className="mt-2 text-sm text-black/60">{advisor.title}</p>

              <div className="mt-4">
                <Link
                  href={advisor.href}
                  className="text-sm font-medium hover:opacity-80"
                  style={{ color: PRIMARY }}
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{ background: PRIMARY }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-3xl font-semibold text-white">
            Work with a team backed by real-world experience.
          </h3>

          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: ACCENT,
                color: DARK,
              }}
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}