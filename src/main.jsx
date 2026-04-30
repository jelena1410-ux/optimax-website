import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  X,
} from 'lucide-react';
import './styles.css';
import heroArchitecture from './assets/optimaxHeroArchitecture';
import { siteContent } from './content/siteContent';

const serviceIcons = {
  layers: Layers3,
  clipboard: ClipboardCheck,
  chart: BarChart3,
  shield: ShieldCheck,
};

function Logo() {
  return (
    <a href="#pocetna" className="group flex shrink-0 items-center" aria-label={siteContent.logo.ariaLabel}>
      <span className="flex h-10 w-[138px] items-center justify-center border border-champagne-400/15 bg-stone-50/96 px-3 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition duration-300 group-hover:border-champagne-400/35 group-hover:bg-white sm:h-11 sm:w-[160px] lg:w-[176px]">
        <img
          src="/optimax-logo-transparent.png"
          alt={siteContent.logo.alt}
          className="h-full w-full object-contain"
        />
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-100/10 bg-graphite-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-10 xl:gap-12 lg:flex">
          {siteContent.navigation.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="header-cta hidden min-h-12 items-center gap-2 px-6 py-3 text-sm font-semibold text-champagne-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400 lg:flex">
          {siteContent.ctas.primary}
          <ArrowRight className="shrink-0" size={16} />
        </a>
        <button
          className="grid h-11 w-11 shrink-0 place-items-center border border-graphite-100/20 text-graphite-100 transition hover:border-champagne-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={siteContent.navigationToggleLabel}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="border-t border-graphite-100/10 bg-graphite-950 px-5 py-5 shadow-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {siteContent.navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="border-b border-graphite-100/10 px-2 py-4 text-sm font-medium text-graphite-100/80 transition hover:text-champagne-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-graphite-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-graphite-700">{text}</p>}
    </div>
  );
}

function HeroGraphic() {
  const { visual } = siteContent.hero;
  const visualCards = [visual.before, visual.after];

  return (
    <div className="hero-visual relative overflow-hidden bg-graphite-900 shadow-premium">
      <img
        src={heroArchitecture}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-graphite-950/30" />
      <div className="absolute inset-0 hero-photo-vignette" />
      <div className="absolute inset-0 architectural-grid opacity-25" />
      <div className="absolute inset-x-6 top-6 h-px bg-champagne-400/35" />
      <div className="absolute bottom-6 right-6 top-6 w-px bg-champagne-400/30" />

      <div className="relative grid min-h-[430px] gap-4 p-5 sm:min-h-[520px] sm:p-7 lg:min-h-[620px] lg:content-center">
        <div className="inline-flex w-fit items-center gap-3 border border-champagne-400/25 bg-graphite-950/55 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-champagne-400 backdrop-blur-md">
          <Compass size={16} />
          {visual.badge}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {visualCards.map((card, index) => (
            <article
              key={card.title}
              className={`before-after-card ${index === 1 ? 'before-after-card-positive' : ''}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne-400/75">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-graphite-100">
                {card.title}
              </h3>
              <ul className="mt-7 grid gap-3 text-sm leading-6 text-graphite-100/70">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-champagne-400/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroCards({ items }) {
  return (
    <section className="relative bg-graphite-950 px-5 pb-20 text-graphite-100 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="hero-service-card">
            <span className="text-xs font-semibold tracking-[0.24em] text-champagne-400/80">{item.number}</span>
            <h3 className="mt-5 font-display text-xl font-semibold text-graphite-100">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-graphite-100/70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PrincipleSection({ content }) {
  return (
    <section id="nacin-rada" className="section-pad scroll-mt-24 bg-stone-100/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <article key={item.title} className="principle-card">
              <h3 className="font-display text-xl font-semibold text-graphite-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-graphite-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ content, cta }) {
  return (
    <section id="o-nama" className="section-pad scroll-mt-24 bg-graphite-950 text-graphite-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="eyebrow text-champagne-400">{content.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-graphite-100/70">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href="#kontakt" className="premium-button mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-champagne-400 px-8 py-4 text-center font-semibold text-graphite-950 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
            {cta}
            <ArrowRight className="shrink-0" size={18} />
          </a>
        </div>
        <div className="grid content-start gap-4">
          {content.highlights.map((item) => (
            <div key={item} className="about-principle">
              {item}
            </div>
          ))}
          <p className="mt-4 border-l border-champagne-400/45 pl-6 font-display text-2xl leading-snug text-graphite-100">
            {content.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection({ content }) {
  return (
    <section className="section-pad bg-stone-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <article key={item.title} className="service-card">
              <Target className="text-olive-700" size={24} />
              <h3 className="mt-7 font-display text-xl font-semibold text-graphite-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-graphite-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalSection({ signals, results }) {
  return (
    <section className="section-pad bg-olive-100/45">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <div className="signal-panel">
          <p className="eyebrow">{signals.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-graphite-950 sm:text-4xl">
            {signals.title}
          </h2>
          <div className="mt-8 grid gap-3">
            {signals.items.map((item) => (
              <div key={item} className="compact-row">
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-graphite-950/10 pt-6 font-display text-xl leading-8 text-graphite-950">
            {signals.closing}
          </p>
        </div>
        <div className="signal-panel signal-panel-dark">
          <p className="eyebrow text-champagne-400">{results.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-graphite-100 sm:text-4xl">
            {results.title}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {results.items.map((item) => (
              <div key={item} className="result-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const {
    about,
    audiences,
    contact,
    ctas,
    expertise,
    footer,
    hero,
    heroCards,
    principles,
    process,
    results,
    services,
    signals,
    strategicSupport,
  } = siteContent;

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const company = data.get('company')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      form.reportValidity();
      return;
    }

    const subject = encodeURIComponent(contact.form.subject);
    const { fields } = contact.form;
    const body = encodeURIComponent(
      `${fields.name.emailLabel}: ${name}\n${fields.company.emailLabel}: ${company || fields.company.fallback}\n${fields.email.emailLabel}: ${email}\n\n${fields.message.emailLabel}:\n${message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 text-graphite-950">
      <Header />

      <section id="pocetna" className="relative scroll-mt-24 overflow-hidden bg-graphite-950 pt-32 text-graphite-100 lg:pt-40">
        <div className="absolute inset-0 hero-lines opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-16 sm:gap-16 sm:pb-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-champagne-400">{hero.eyebrow}</p>
            <h1 className="mt-8 max-w-4xl font-display text-[2.2rem] font-semibold leading-[1.2] text-graphite-100 sm:text-[2.75rem] sm:leading-[1.18] lg:text-[4rem] lg:leading-[1.16]">
              {hero.title}
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-graphite-100/75">
              {hero.text}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#kontakt" className="premium-button inline-flex min-h-12 items-center justify-center gap-3 bg-champagne-400 px-8 py-4 text-center font-semibold text-graphite-950 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
                {ctas.primary}
                <ArrowRight className="shrink-0" size={18} />
              </a>
              <a href="#kako-radimo" className="premium-button-secondary inline-flex min-h-12 items-center justify-center gap-3 border border-graphite-100/20 px-8 py-4 text-center font-semibold text-graphite-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
                {ctas.secondary}
                <ChevronRight className="shrink-0" size={18} />
              </a>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>
      <HeroCards items={heroCards} />

      <section id="usluge" className="section-pad scroll-mt-24">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          text={services.text}
        />
        <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.items.map(({ icon, title, text, benefit }) => {
            const Icon = serviceIcons[icon] ?? Layers3;

            return (
              <article key={title} className="service-card">
                <Icon className="text-olive-700" size={30} />
                <h3 className="mt-8 font-display text-xl font-semibold text-graphite-950">{title}</h3>
                <p className="mt-4 leading-7 text-graphite-700">{text}</p>
                <p className="mt-6 border-t border-olive-700/15 pt-4 text-sm font-semibold text-olive-800">{benefit}</p>
              </article>
            );
          })}
        </div>
      </section>

      <PrincipleSection content={principles} />

      <section id="kako-radimo" className="scroll-mt-24 bg-graphite-950 py-20 text-graphite-100 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.86fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow text-champagne-400">{process.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {process.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite-100/70">
              {process.text}
            </p>
          </div>
          <div className="grid gap-4">
            {process.items.map((item, index) => (
              <div key={item.title} className="process-row">
                <span className="process-index">{String(index + 1).padStart(2, '0')}</span>
                <p>
                  <span className="block font-display text-xl font-semibold text-graphite-100">{item.title}</span>
                  <span className="mt-2 block text-base leading-7 text-graphite-100/70">{item.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection content={about} cta={ctas.primary} />

      <ExpertiseSection content={expertise} />

      <SignalSection signals={signals} results={results} />

      <section id="za-koga" className="section-pad scroll-mt-24 bg-olive-100/50">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">{audiences.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {audiences.title}
            </h2>
          </div>
          <div className="grid gap-4">
            {audiences.items.map((item) => (
              <div key={item} className="audience-row">
                <CheckCircle2 className="shrink-0 text-olive-700" size={22} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="podrska" className="section-pad scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden border border-graphite-950/10 bg-graphite-950 shadow-premium lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 text-graphite-100 sm:p-12 lg:p-16">
              <p className="eyebrow text-champagne-400">{strategicSupport.eyebrow}</p>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
                {strategicSupport.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-graphite-100/70">
                {strategicSupport.text}
              </p>
            </div>
            <div className="grid gap-px bg-graphite-100/10 p-px sm:grid-cols-2">
              {strategicSupport.packages.map(({ title, text }) => (
                <div key={title} className="bg-graphite-900 p-8">
                  <Target className="text-champagne-400" size={24} />
                  <h3 className="mt-8 font-display text-xl font-semibold text-graphite-100">{title}</h3>
                  <p className="mt-4 leading-7 text-graphite-100/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-24 bg-stone-100 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite-700">
              {contact.text}
            </p>
            <div className="mt-10 grid gap-4 text-graphite-800">
              <a href={`mailto:${contact.email}`} className="contact-link">
                <Mail size={20} />
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="contact-link">
                <Phone size={20} />
                {contact.phone}
              </a>
              <span className="contact-link">
                <MapPin size={20} />
                {contact.location}
              </span>
            </div>
          </div>
          <form className="border border-graphite-950/10 bg-white p-6 shadow-premium sm:p-10" onSubmit={handleContactSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field">
                {contact.form.fields.name.label}
                <input type="text" name="name" placeholder={contact.form.fields.name.placeholder} required />
              </label>
              <label className="field">
                {contact.form.fields.company.label}
                <input type="text" name="company" placeholder={contact.form.fields.company.placeholder} />
              </label>
              <label className="field sm:col-span-2">
                {contact.form.fields.email.label}
                <input type="email" name="email" placeholder={contact.form.fields.email.placeholder} required />
              </label>
              <label className="field sm:col-span-2">
                {contact.form.fields.message.label}
                <textarea name="message" rows="5" placeholder={contact.form.fields.message.placeholder} required />
              </label>
            </div>
            <button type="submit" className="premium-submit mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-olive-800 px-8 py-4 text-center font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive-700 sm:w-auto">
              {ctas.contact}
              <ArrowRight className="shrink-0" size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-graphite-100/10 bg-graphite-950 px-5 py-10 text-graphite-100 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-sm text-graphite-100/60">
            © {new Date().getFullYear()} {footer.companyName}. {footer.rights}
          </p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
