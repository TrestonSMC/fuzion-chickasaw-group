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
    value: "Partnership",
  },
  {
    label: "Organization",
    value: "Fuzion Consulting Group / Veracity Consulting Inc.",
  },
  {
    label: "Focus",
    value:
      "Strategic collaboration supporting enterprise utility initiatives, business process optimization, and EPMS-related program delivery",
  },
];

export default function FuzionVeracityCollaborationPage() {
  return (
    <main className="min-h-screen" style={{ background: BG, color: DARK }}>
      <div className="h-[3px] w-full" style={{ background: ACCENT }} />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em]"
            style={{ color: PRIMARY }}
          >
            FUZION CHICKASAW GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Fuzion Consulting Group Announces Strategic Collaboration with
            Veracity Consulting Inc.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group recognizes its collaboration with Veracity
            Consulting Inc., whose support helped strengthen mission-critical
            enterprise initiatives tied to utility operations, business process
            optimization, and EPMS-related delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Back to News
            </Link>

            <Link
              href="/contact"
              className="rounded-full border bg-white px-6 py-3 text-sm font-medium transition hover:bg-black/5"
              style={{
                borderColor: "rgba(201,162,77,0.65)",
                color: DARK,
              }}
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 pb-8">
          <div
            className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: ACCENT }}
          >
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
            <ContentBlock title="Collaboration Details">
              <p>
                Fuzion Consulting Group is pleased to recognize its collaboration
                with{" "}
                <strong className="text-black">Veracity Consulting Inc.</strong>,
                a business and technology consulting firm based in{" "}
                <strong className="text-black">Overland Park, Kansas</strong>,
                who supported Fuzion on several mission-critical enterprise
                initiatives between{" "}
                <strong className="text-black">January 2024</strong> and{" "}
                <strong className="text-black">January 2025</strong>.
              </p>

              <p>
                Veracity Consulting Inc. partnered with Fuzion to support complex
                engagements related to a major electric utility’s{" "}
                <strong className="text-black">
                  Enterprise Project Management System (EPMS)
                </strong>{" "}
                program. This collaboration focused on{" "}
                <strong className="text-black">business process mapping</strong>,{" "}
                <strong className="text-black">optimization</strong>, and{" "}
                <strong className="text-black">enterprise readiness</strong>{" "}
                across regulated and operationally intensive environments.
              </p>
            </ContentBlock>

            <ContentBlock title="Key Areas of Support">
              <p>
                During this period, Veracity provided key expertise in the
                following areas:
              </p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>Business Process Optimization (BPO)</li>
                <li>Project &amp; Program Management (PMO)</li>
                <li>Process Automation</li>
                <li>Change Management</li>
                <li>Training development and enablement materials</li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Operational Impact">
              <p>
                Working alongside Fuzion’s engineering and delivery teams,
                Veracity Consulting Inc. helped document and improve critical
                business workflows, support operational clarity, and strengthen
                adoption strategies for enterprise-level systems.
              </p>

              <p>
                The collaboration played an important role in aligning technology
                capabilities with real-world utility operations while maintaining{" "}
                <strong className="text-black">compliance</strong>,{" "}
                <strong className="text-black">governance</strong>, and{" "}
                <strong className="text-black">long-term sustainability</strong>.
              </p>
            </ContentBlock>

            <ContentBlock title="Recognition & Appreciation">
              <p>
                Fuzion values strong partnerships built on trust, discipline, and
                shared commitment to execution. The team extends its appreciation
                to Veracity Consulting Inc. for their professionalism, expertise,
                and contributions across multiple EPMS-related initiatives.
              </p>
            </ContentBlock>

            <ContentBlock title="Learn More">
              <p>
                To learn more about Veracity Consulting Inc., visit{" "}
                <a
                  href="https://www.veracityit.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4 hover:opacity-75"
                  style={{
                    color: PRIMARY,
                    textDecorationColor: "rgba(201,162,77,0.7)",
                  }}
                >
                  veracityit.com
                </a>
                .
              </p>
            </ContentBlock>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ background: PRIMARY }}>
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Stay connected with Fuzion.
              </h3>

              <div className="mt-4 h-[2px] w-16" style={{ background: ACCENT }} />

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Learn more about our latest partnerships, company milestones,
                industry activity, and strategic initiatives.
              </p>
            </div>

            <div className="flex items-end lg:col-span-5 lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                  style={{
                    background: ACCENT,
                    color: DARK,
                  }}
                >
                  Contact Us →
                </Link>

                <Link
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Back to News
                </Link>
              </div>
            </div>
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