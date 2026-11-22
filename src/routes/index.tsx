import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-apothecary.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import sprigImg from "@/assets/sprig.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Ritu Sandhu — Classical Homeopathy & Holistic Care" },
      {
        name: "description",
        content:
          "Gentle, individualized homeopathic care for chronic conditions, women's health, and pediatrics. Consultations in clinic and online with Dr. Ritu Sandhu.",
      },
      { property: "og:title", content: "Dr. Ritu Sandhu — Classical Homeopathy" },
      {
        property: "og:description",
        content:
          "Gentle, individualized homeopathic care for chronic conditions, women's health, and pediatrics.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Homeopathy />
      <Services />
      <About />
      <Consultations />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="flex items-baseline gap-2 text-foreground">
          <span className="font-display text-2xl tracking-tight">Ritu Sandhu</span>
          <span className="eyebrow hidden sm:inline">BHMS</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {[
            ["Homeopathy", "#homeopathy"],
            ["Services", "#services"],
            ["About Us", "#about"],
            ["Consultations", "#consultations"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm tracking-wide text-foreground/75 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-foreground/20 bg-background/40 px-5 py-2 text-sm tracking-wide text-foreground backdrop-blur transition-all hover:border-foreground/60 hover:bg-foreground hover:text-background"
        >
          Book a consultation
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Homeopathic remedies, dried botanicals, and a marble mortar in soft window light"
          className="h-full w-full object-cover"
          width={1600}
          height={1800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      <img
        src={sprigImg}
        alt=""
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute right-8 top-28 hidden h-56 opacity-70 md:block"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-28 pb-20 md:px-10">
        <div className="animate-fade-up max-w-2xl">
          <p className="eyebrow mb-6">
            <span className="deco-rule mr-3" />
            Classical Homeopathy · est. 2008
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-moss md:text-7xl lg:text-8xl">
            Healing,<br />
            <em className="italic text-sage-deep">gently</em> guided
            <br />by nature.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/75">
            Individualized homeopathic care from Dr. Ritu Sandhu — treating the
            person, not only the diagnosis. Quiet consultations, considered
            remedies, lasting relief.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-moss px-7 py-3.5 text-sm tracking-wide text-cream transition-all hover:bg-ink"
            >
              Book a consultation
            </a>
            <a
              href="#homeopathy"
              className="rounded-full border border-moss/25 px-7 py-3.5 text-sm tracking-wide text-moss transition-all hover:border-moss"
            >
              The approach →
            </a>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-foreground/10 pt-6">
            {[
              ["25+", "years in practice"],
              ["9,000", "patients served"],
              ["94%", "report relief"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-moss">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Homeopathy() {
  const tenets = [
    {
      n: "I",
      t: "Healing Naturally",
      d: "A system that works to maintain a balance between our physical and mental plane. We treat the person, not just the tissues.",
    },
    {
      n: "II",
      t: "The Root Cause",
      d: "Symptoms are only the outward reflection of an internal derangement in the vital energy. We seek to heal the sick, not the results of sickness.",
    },
    {
      n: "III",
      t: "Information, Not Molecules",
      d: "Remedies pass information to the body, coaxing an immune reaction so it may adapt to optimal function and heal itself.",
    },
  ];
  return (
    <section id="homeopathy" className="relative px-6 py-20 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-4"><span className="deco-rule mr-3" />System of Healing</p>
            <h2 className="font-display text-4xl leading-tight text-moss md:text-6xl">
              Homeopathy: <em className="italic">Healing Naturally</em>.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Classical homeopathy treats the individual and not the symptoms. By reminding the body to adapt to optimal function, true balance is restored.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-3">
          {tenets.map((t) => (
            <article key={t.n} className="bg-background p-10 transition-colors hover:bg-secondary">
              <span className="font-display text-sm italic text-sage-deep">{t.n}</span>
              <h3 className="mt-6 font-display text-2xl text-moss">{t.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{t.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-secondary px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-full w-full rounded-sm border border-sage-deep/30" />
          <img
            src={doctorImg}
            alt="Portrait of Dr. Ritu Sandhu"
            className="relative h-[32rem] w-full rounded-sm object-cover"
            loading="lazy"
            width={1200}
            height={1500}
          />
          <img
            src={sprigImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-6 h-40 opacity-60"
          />
        </div>
        <div>
          <p className="eyebrow mb-4"><span className="deco-rule mr-3" />About us</p>
          <h2 className="font-display text-4xl leading-tight text-moss md:text-5xl">
            A unified manner of<br />
            <em className="italic text-sage-deep">natural healing</em>.
          </h2>
          <p className="mt-8 leading-relaxed text-foreground/80">
            This website is formed with the intent of presenting natural healing in a unified manner online. Our approach is deeply holistic, working across the conscious spectrum of the human experience.
          </p>
          <p className="mt-5 leading-relaxed text-foreground/80">
            While most medicine systems concentrate on manifested molecules alone, we strive to bring balance across the inter-related field of mind, body, and emotions. Our goal is to help you resume good health using natural therapies.
          </p>

          <ul className="mt-10 space-y-3 border-t border-border pt-8 text-sm">
            <li className="flex gap-3 text-foreground/75">
              <span className="text-sage-deep">—</span>
              Consultations by renowned holistic doctor
            </li>
            <li className="flex gap-3 text-foreground/75">
              <span className="text-sage-deep">—</span>
              Safe, quick, and permanent journey of healing
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: "Customized Treatment", desc: "Expert homeopathic care from a renowned and experienced doctor." },
    { title: "Worldwide Delivery", desc: "Your prescribed medicines are delivered safely to your doorstep." },
    { title: "Global Consultations", desc: "Reach us for health queries and support through email or phone." }
  ];
  return (
    <section id="services" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4"><span className="deco-rule mr-3" />What we offer</p>
          <h2 className="font-display text-4xl leading-tight text-moss md:text-6xl">
            Our <em className="italic">Services</em>.
          </h2>
          <p className="mt-6 text-foreground/70">
            A centre of excellence providing comprehensive and holistic support.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="border-t border-foreground/15 pt-6">
              <span className="font-display text-sm italic text-sage-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-moss">{it.title}</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consultations() {
  const steps = [
    {
      q: "A Counseling-type Setting",
      a: "I encourage you to discuss as much detail about how you have suffered. What has affected you? How? Together, we unearth the root causes.",
    },
    {
      q: "Understanding Patterns",
      a: "Factors like dreams, cravings, and dislikes provide insight. We look for the connecting theme with the innermost disturbance of energy.",
    },
    {
      q: "Healing Journey as a Team",
      a: "Though physical exams may not be performed during the consultation, we work as a team to support you in a safe and natural healing process.",
    },
  ];
  return (
    <section id="consultations" className="bg-moss px-6 py-28 text-cream md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4 text-sage">
              <span className="deco-rule mr-3 bg-sage" />The Process
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              <em className="italic text-sage">Consultations</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((t, i) => (
            <figure key={i} className="flex flex-col">
              <span className="font-display text-5xl leading-none text-sage">{String(i + 1).padStart(2, "0")}</span>
              <blockquote className="mt-4 font-display text-xl leading-snug italic">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 border-t border-cream/15 pt-4 text-sm tracking-wide text-cream/80 leading-relaxed">
                {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4"><span className="deco-rule mr-3" />Begin</p>
          <h2 className="font-display text-4xl leading-tight text-moss md:text-6xl">
            Book a <em className="italic">consultation</em>.
          </h2>
          <p className="mt-6 max-w-md text-foreground/70">
            First consultations last 60–75 minutes — long enough for the full
            picture. Follow-ups are 30 minutes.
          </p>

          <dl className="mt-12 space-y-7 text-sm">
            {/* <div>
              <dt className="eyebrow mb-1">Clinic</dt>
              <dd className="font-display text-lg text-moss">
                12 Lavelle Lane, Off Cunningham Road<br />
                Bangalore 560052
              </dd>
            </div> */}
            <div>
              <dt className="eyebrow mb-1">Hours</dt>
              <dd className="text-foreground/80">Mon – Sat · 11:00 –19:00 · By appointment</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Direct</dt>
              <dd className="space-y-1 text-foreground/80">
                <div>+91 95 0108 5298</div>
                <div>
                  <a href="mailto:clinic@anjalirao.health" className="underline-offset-4 hover:underline">
                    drritu4179@gmail.com
                  </a>
                </div>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you — the clinic will be in touch within one working day.");
          }}
          className="space-y-6 rounded-sm border border-border bg-card p-8 md:p-10"
        >
          <Field label="Your name">
            <input
              type="text"
              required
              className="w-full border-b border-foreground/15 bg-transparent py-2 outline-none transition-colors focus:border-moss"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              required
              className="w-full border-b border-foreground/15 bg-transparent py-2 outline-none transition-colors focus:border-moss"
            />
          </Field>
          <Field label="Phone (optional)">
            <input
              type="tel"
              className="w-full border-b border-foreground/15 bg-transparent py-2 outline-none transition-colors focus:border-moss"
            />
          </Field>
          <Field label="How can we help?">
            <textarea
              required
              rows={4}
              className="w-full resize-none border-b border-foreground/15 bg-transparent py-2 outline-none transition-colors focus:border-moss"
            />
          </Field>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-moss py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-ink"
          >
            Request appointment
          </button>
          <p className="text-center text-xs text-muted-foreground">
            We respond within one working day. All correspondence is private.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-3 block">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="font-display text-lg text-moss">Dr. Ritu Sandhu · Classical Homeopathy</div>
        <div>© {new Date().getFullYear()} · All rights reserved.</div>
      </div>
    </footer>
  );
}
