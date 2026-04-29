"use client";

import Link from "next/link";

const PRIMARY = "#4B1E6D";
const ACCENT = "#C9A24D";
const DARK = "#1A1A1A";
const BG = "#F6F3EC";

const articleMeta = [
  {
    label: "Location",
    value: "Olathe, KS | Calera, OK",
  },
  {
    label: "Announcement Date",
    value: "April 2026",
  },
  {
    label: "Category",
    value: "Product News",
  },
  {
    label: "Organization",
    value: "Fuzion Consulting Group / Fuzion Chickasaw Group / Rancher Navy",
  },
  {
    label: "Focus",
    value:
      "Enterprise logistics and coordination platform inspired by real-world nonprofit disaster-response operations",
  },
  {
    label: "Target Release",
    value: "Fall 2027",
  },
];

export default function SupportBeaconReliefPlatformPage() {
  return (
    <main className="min-h-screen" style={{ background: BG, color: DARK }}>
      <div className="h-[3px] w-full" style={{ background: ACCENT }} />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em]" style={{ color: PRIMARY }}>
            FUZION CHICKASAW GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Fuzion Announces Development of Enterprise Support Beacon Relief
            Platform Inspired by Partnership with Rancher Navy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group and Fuzion Chickasaw Group are proud to
            announce the development of an Enterprise version of Support Beacon
            Relief, a next-generation logistics and coordination platform
            inspired by Fuzion’s nonprofit partnership with Rancher Navy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/news" className="rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90" style={{ background: PRIMARY }}>
              Back to News
            </Link>

            <Link href="/contact" className="rounded-full border bg-white px-6 py-3 text-sm font-medium transition hover:bg-black/5" style={{ borderColor: "rgba(201,162,77,0.65)", color: DARK }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 pb-8">
          <div className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]" style={{ borderColor: ACCENT }}>
            <div className="space-y-5">
              {articleMeta.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold" style={{ color: PRIMARY }}>
                    {item.label}:
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-black/70">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="space-y-12">
            <ContentBlock title="Future Enterprise Product Details">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group are proud to
                announce the development of an Enterprise version of{" "}
                <strong className="text-black">Support Beacon Relief</strong>, a
                next-generation logistics and coordination platform inspired by
                Fuzion’s nonprofit partnership with{" "}
                <strong className="text-black">Rancher Navy</strong>.
              </p>

              <p>
                The Enterprise Support Beacon initiative was born from real-world
                collaboration with{" "}
                <strong className="text-black">
                  Morgan Broome and Amy Houston
                </strong>
                , Founders and Directors of Rancher Navy.
              </p>

              <p>
                Fuzion worked closely with Rancher Navy to automate
                spreadsheet-driven logistics used to coordinate hay donations,
                volunteer drivers, disaster locations, and delivery timelines.
              </p>
            </ContentBlock>

            <ContentBlock title="From Grassroots Relief to Enterprise Capability">
              <p>
                Support Beacon Relief was initially designed to enable nonprofits
                to respond faster and more safely during natural disasters by
                replacing manual coordination with real-time visibility and
                automation.
              </p>

              <p>
                Fuzion is now developing an{" "}
                <strong className="text-black">
                  AI-enabled SaaS Enterprise platform
                </strong>{" "}
                to extend these capabilities across industries.
              </p>
            </ContentBlock>

            <ContentBlock title="Planned Enterprise Capabilities">
              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>End-to-end logistics coordination</li>
                <li>Secure role-based access</li>
                <li>Real-time tracking of deliveries and routes</li>
                <li>Mobile-first workflows</li>
                <li>Enterprise reporting and auditability</li>
                <li>Flexible deployments across sectors</li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Looking Ahead">
              <p>
                The Enterprise version of Support Beacon Relief is targeted for{" "}
                <strong className="text-black">Fall 2027</strong>.
              </p>

              <p>
                Development will continue alongside nonprofit partners to ensure
                real-world alignment.
              </p>
            </ContentBlock>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ background: PRIMARY }}>
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90" style={{ background: ACCENT, color: DARK }}>
              Contact Us →
            </Link>

            <Link href="/news" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Back to News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: PRIMARY }}>
        {title}
      </h2>

      <div className="mt-3 h-[2px] w-14" style={{ background: ACCENT }} />

      <div className="mt-5 space-y-4 text-base leading-relaxed text-black/70">
        {children}
      </div>
    </section>
  );
}