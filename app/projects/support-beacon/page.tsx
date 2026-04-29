"use client";

import Link from "next/link";

const PRIMARY = "#4B1E6D";
const ACCENT = "#C9A24D";
const DARK = "#1A1A1A";
const BG = "#F6F3EC";

const projectMeta = [
  {
    label: "Client Type",
    value: "Rancher Navy (Nonprofit) – Central Texas",
  },
  {
    label: "Application",
    value: "Disaster Relief Logistics & Volunteer Coordination Platform",
  },
  {
    label: "Technology Stack",
    value:
      "AWS (EC2, CloudFront, Lightsail, Lambda), SageMaker AI, Lex, Nova, DOD Map APIs",
  },
  {
    label: "Project Duration",
    value: "In Development / Pre-Launch – June 2026",
  },
  {
    label: "Engagement Type",
    value:
      "Natural Disaster Response (Wildfires, Floods, Storms, Search & Rescue, Hay Relief)",
  },
  {
    label: "Scope",
    value:
      "Pro Bono enterprise platform supporting U.S. and Canada disaster response operations",
  },
  {
    label: "Capabilities",
    value:
      "Logistics Automation • Disaster Coordination • Mobile Apps (iOS & Android) • AI Integration • Workflow Automation • Secure Data Management",
  },
];

export default function SupportBeaconPage() {
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
            Support Beacon Relief – Fuzion Logistics Application
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Pro bono disaster relief logistics platform designed to replace
            manual coordination with real-time visibility, automation, and
            scalable response infrastructure across the U.S. and Canada.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Back to Projects
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
              {projectMeta.map((item) => (
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
            <ContentBlock title="Project Highlight">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group began their
                partnership with Rancher Navy during a devastating series of
                wildfires impacting ranching communities across Kansas, Oklahoma,
                and the Texas Panhandle.
              </p>

              <p>
                What started as a volunteer effort delivering donated hay quickly
                revealed a much larger challenge—coordinating large-scale disaster
                relief using spreadsheets, phone calls, and manual tracking exposed
                the nonprofit to operational risk and limited its ability to scale.
              </p>

              <p>
                Rancher Navy was coordinating hay donations, volunteer drivers,
                disaster locations, and delivery logistics across multiple states—and
                even Canada—using spreadsheets alone. As disaster frequency
                increased, so did the urgency for a secure, scalable, purpose-built
                system.
              </p>
            </ContentBlock>

            <ContentBlock title="What Is Support Beacon Relief">
              <p>
                Support Beacon Relief is a secure, end-to-end disaster response and
                logistics platform designed to replace manual coordination with
                real-time visibility, accountability, and automation.
              </p>

              <p>
                Developed at no cost to Rancher Navy, the platform enables the
                organization to manage multiple disaster events simultaneously,
                coordinate donations and deliveries, track volunteer drivers across
                the U.S. and Canada, and ensure recipients receive accurate delivery
                notifications.
              </p>

              <p>
                Fuzion retains ownership of the platform while donating full use to
                Rancher Navy and plans to license Support Beacon to public, private,
                and nonprofit organizations supporting disaster response.
              </p>
            </ContentBlock>

            <ContentBlock title="Core Capabilities (In Development)">
              <p>
                The platform includes centralized disaster event management across
                fires, floods, storms, and search & rescue operations, along with
                DOT-integrated mapping for real-time visibility across regions.
              </p>

              <p>
                A dedicated mobile app for drivers enables credential uploads,
                waiver signing, load verification through photos, availability
                tracking, and automated ETA notifications to recipients.
              </p>

              <p>
                The system also supports donor and recipient coordination, ensuring
                resources are matched to verified needs while improving
                transparency, accountability, and delivery readiness.
              </p>

              <p>
                Future expansion includes advanced coordination tools, integration
                with local authorities, and scalable infrastructure to support
                national disaster response efforts.
              </p>
            </ContentBlock>

            <ContentBlock title="Community & Strategic Impact">
              <p>
                Support Beacon Relief enables Rancher Navy to respond faster during
                critical disaster windows, scale operations safely, and reduce
                administrative burden while protecting sensitive volunteer and
                recipient data.
              </p>

              <p>
                The platform allows the organization to focus more time and energy
                on helping ranchers and rural communities rather than managing
                fragmented coordination processes.
              </p>

              <p>
                For Fuzion, this project reflects a deeper commitment to using
                technology as a force for good—bringing enterprise-grade solutions
                to organizations making real-world impact.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project highlights Fuzion’s ability to turn real-world
                operational challenges into meaningful technology solutions,
                building secure and scalable platforms from grassroots needs.
              </p>

              <p>
                It also demonstrates how Fuzion partners with nonprofit
                organizations in a way that is sustainable, respectful, and
                impactful—extending disaster response capabilities without
                introducing costly commercial systems.
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
                Building technology that actually makes an impact.
              </h3>

              <div className="mt-4 h-[2px] w-16" style={{ background: ACCENT }} />

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Fuzion partners with organizations to design scalable platforms,
                modernize operations, and deliver real-world results—whether in
                enterprise environments or mission-critical response efforts.
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
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Back to Projects
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

      <div className="mt-5 space-y-4 text-base leading-relaxed text-black/70">
        {children}
      </div>
    </section>
  );
}