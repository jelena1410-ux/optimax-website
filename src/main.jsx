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
import { siteContent } from './content/siteContent';

const serviceIcons = {
  layers: Layers3,
  clipboard: ClipboardCheck,
  chart: BarChart3,
  shield: ShieldCheck,
};

function Logo() {
  return (
    <a href="#pocetna" className="group mr-4 flex h-10 w-[12.1rem] shrink-0 items-center sm:w-[13.15rem] lg:mr-10 xl:mr-12" aria-label={siteContent.logo.ariaLabel}>
      <span className="flex min-w-0 items-baseline gap-2.5 whitespace-nowrap leading-none">
        <span className="font-display text-[1.38rem] font-semibold tracking-tight text-[#f5f5f2] transition duration-300 group-hover:text-white sm:text-[1.54rem]">
          Opti<span className="text-champagne-400">MAX</span>
        </span>
        <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#f5f5f2]/95 transition duration-300 group-hover:text-champagne-200 sm:text-[0.82rem] sm:tracking-[0.14em]">
          Consulting
        </span>
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-champagne-400/15 bg-graphite-950/90 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
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
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[1.55rem] font-semibold leading-[1.12] tracking-tight text-graphite-950 sm:text-[2rem] lg:text-[2.45rem]">
        {title}
      </h2>
      {text && <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-graphite-700 sm:text-base">{text}</p>}
    </div>
  );
}

function HeroGraphic() {
  const { visual } = siteContent.hero;
  const visualCards = [visual.before, visual.after];

  return (
    <div className="reveal relative overflow-hidden border border-white/10 bg-graphite-900/80 shadow-[0_22px_68px_rgba(0,0,0,0.24)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(198,168,91,0.06),transparent_30%),linear-gradient(135deg,rgba(239,238,231,0.025),transparent_42%),linear-gradient(180deg,rgba(21,21,18,0.02),rgba(21,21,18,0.42))]" />

      <div className="relative grid min-h-[330px] gap-4 p-4 sm:min-h-[380px] sm:p-5 lg:min-h-[430px] lg:content-center lg:gap-5 lg:p-6">
        <div className="inline-flex w-fit items-center gap-2 border border-white/10 bg-graphite-950/50 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-champagne-400/85 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <Compass size={12} />
          {visual.badge}
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {visualCards.map((card, index) => (
            <article
              key={card.title}
              className={`relative overflow-hidden border p-5 shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition duration-500 ease-out hover:-translate-y-1 hover:border-white/20 sm:p-5 ${
                index === 1
                  ? 'border-white/10 bg-[linear-gradient(135deg,rgba(48,55,32,0.82),rgba(24,25,20,0.78))]'
                  : 'border-white/10 bg-graphite-950/65'
              }`}
            >
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-champagne-400/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-[1.22rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[1.32rem]">
                {card.title}
              </h3>
              <ul className="mt-5 grid gap-2 text-[0.84rem] leading-relaxed text-graphite-100/75 sm:text-[0.9rem]">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 bg-champagne-400/70" />
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
    <section className="relative bg-graphite-950 px-5 pb-20 text-graphite-100 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="hero-service-card reveal">
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
    <section id="nacin-rada" className="section-pad section-ivory scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
  const principles = [
    {
      title: 'Sustav prije improvizacije',
      description: 'Okvir rada mora biti jasan prije nego što rast postane opterećenje.',
    },
    {
      title: 'Jasnoća prije kompleksnosti',
      description: 'Dobar sustav pojednostavljuje odluke, odgovornosti i svakodnevni ritam.',
    },
    {
      title: 'Podaci prije pretpostavki',
      description: 'Upravljanje traži informacije koje stvarno pomažu odlučivanju.',
    },
    {
      title: 'Provedba prije strategije',
      description: 'Vrijednost nastaje tek kada se promjena vidi u načinu rada.',
    },
  ];

  return (
    <section id="o-nama" className="relative scroll-mt-24 overflow-hidden bg-graphite-950 py-20 text-graphite-100 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(203,185,135,0.06),transparent_28%),linear-gradient(180deg,rgba(21,21,18,0),rgba(48,55,32,0.16))]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <div className="reveal max-w-xl">
          <p className="eyebrow text-champagne-400">{content.eyebrow}</p>
          <h2 className="mt-5 font-display text-[1.68rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2.15rem] lg:text-[2.65rem]">
            {content.title}
          </h2>
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-graphite-100/70 sm:text-base">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href="#kontakt" className="premium-button mt-8 inline-flex min-h-11 items-center justify-center gap-3 bg-champagne-400 px-7 py-3.5 text-center font-semibold text-graphite-950 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
            {cta}
            <ArrowRight className="shrink-0" size={18} />
          </a>
        </div>
        <div className="reveal border-l border-champagne-400/40 pl-6 sm:pl-8 lg:pl-10">
          <div className="pb-7">
            <h3 className="font-display text-[1.05rem] font-semibold uppercase leading-tight tracking-[0.14em] text-champagne-300 sm:text-[1.16rem]">
              Način razmišljanja
            </h3>
            <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-graphite-100/70">
              Sustav promatramo kroz odluke, odgovornosti, podatke i provedbu.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((item, index) => (
              <div key={item.title} className="group grid grid-cols-[2.6rem_1fr] gap-4 py-5 transition duration-500 ease-out hover:translate-x-1">
                <span className="pt-1 font-display text-[0.66rem] font-semibold tracking-[0.16em] text-champagne-400/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold leading-6 tracking-tight text-[#f5f5f2] transition duration-300 group-hover:text-champagne-100 sm:text-[1.05rem]">
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-graphite-100/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 border-l border-champagne-400/50 bg-graphite-950/50 p-5 font-display text-base leading-7 text-[#f5f5f2] shadow-[0_16px_44px_rgba(0,0,0,0.18)] sm:text-lg">
            {content.closing.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection({ content }) {
  return (
    <section className="section-pad section-ivory">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <article key={item.title} className="service-card reveal">
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
    <section className="section-pad section-olive">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <div className="signal-panel reveal">
          <p className="eyebrow">{signals.eyebrow}</p>
          <h2 className="mt-4 font-display text-[1.7rem] font-semibold leading-[1.18] text-graphite-950 sm:text-[2.15rem]">
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
        <div className="signal-panel signal-panel-dark reveal">
          <p className="eyebrow text-champagne-400">{results.eyebrow}</p>
          <h2 className="mt-4 font-display text-[1.7rem] font-semibold leading-[1.18] text-graphite-100 sm:text-[2.15rem]">
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
    <main className="min-h-screen overflow-x-hidden bg-[#efeee7] text-graphite-950">
      <Header />

      <section id="pocetna" className="relative scroll-mt-24 overflow-hidden bg-graphite-950 pt-28 text-graphite-100 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(198,168,91,0.08),transparent_40%)]" />
        <div className="absolute inset-0 hero-lines opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-14 sm:gap-14 sm:pb-20 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:pb-24">
          <div className="reveal flex flex-col justify-center">
            <p className="eyebrow text-champagne-400">POSLOVNA ARHITEKTURA</p>
            <h1 className="mt-7 max-w-3xl font-display text-[2.08rem] font-semibold leading-[1.08] tracking-tight text-[#f5f5f2] sm:text-[2.72rem] lg:text-[3.82rem]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-[#d9d3c6] sm:text-base">
              {hero.text}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#kontakt" className="premium-button inline-flex min-h-11 items-center justify-center gap-3 bg-champagne-400 px-7 py-3.5 text-center font-semibold text-graphite-950 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
                {ctas.primary}
                <ArrowRight className="shrink-0" size={18} />
              </a>
              <a href="#kako-radimo" className="premium-button-secondary inline-flex min-h-11 items-center justify-center gap-3 border border-white/10 px-7 py-3.5 text-center font-semibold text-graphite-100/75 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
                {ctas.secondary}
                <ChevronRight className="shrink-0" size={18} />
              </a>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>
      <HeroCards items={heroCards} />

      <section id="usluge" className="section-pad section-ivory scroll-mt-24">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          text={services.text}
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.items.map(({ icon, title, text, benefit }, index) => {
            const Icon = serviceIcons[icon] ?? Layers3;

            return (
              <article key={title} className={`service-card reveal ${index === 1 ? 'service-card-featured' : ''}`}>
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

      <section id="kako-radimo" className="relative scroll-mt-24 bg-graphite-950 py-16 text-graphite-100 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.86fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow text-champagne-400">{process.eyebrow}</p>
            <h2 className="mt-4 font-display text-[1.55rem] font-semibold leading-tight tracking-tight sm:text-[2rem] lg:text-[2.45rem]">
              {process.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#d9d3c6] sm:text-base">
              {process.text}
            </p>
          </div>
          <div className="grid gap-6">
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

      <section id="za-koga" className="section-pad section-olive scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">{audiences.eyebrow}</p>
            <h2 className="mt-4 font-display text-[1.55rem] font-semibold leading-tight tracking-tight sm:text-[2rem] lg:text-[2.45rem]">
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
          <div className="grid items-stretch overflow-hidden border border-champagne-400/15 bg-graphite-950 shadow-premium lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center p-7 text-graphite-100 sm:p-10 lg:p-12">
              <p className="eyebrow text-champagne-400">{strategicSupport.eyebrow}</p>
              <h2 className="mt-5 font-display text-[1.55rem] font-semibold leading-tight tracking-tight sm:text-[2rem] lg:text-[2.45rem]">
                {strategicSupport.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-graphite-100/70">
                {strategicSupport.text}
              </p>
            </div>
            <div className="grid gap-px bg-graphite-100/10 p-px sm:grid-cols-2">
              {strategicSupport.packages.map(({ title, text }) => (
                <div key={title} className="flex h-full flex-col bg-graphite-900 p-7 transition duration-300 hover:bg-graphite-900/90 sm:p-8">
                  <Target className="text-champagne-400" size={24} />
                  <h3 className="mt-8 font-display text-xl font-semibold text-graphite-100">{title}</h3>
                  <p className="mt-4 leading-7 text-graphite-100/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-ivory scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mt-4 font-display text-[1.7rem] font-semibold leading-[1.18] sm:text-[2.2rem] lg:text-[2.8rem]">
              {contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite-700">
              {contact.text}
            </p>
            <div className="mt-8 grid gap-3 text-graphite-800">
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
          <form className="border border-graphite-950/10 bg-[#fbfaf5] p-6 shadow-[0_24px_76px_rgba(21,21,18,0.1)] sm:p-8" onSubmit={handleContactSubmit}>
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
            <button type="submit" className="premium-submit mt-7 inline-flex min-h-11 w-full items-center justify-center gap-3 bg-olive-800 px-7 py-3.5 text-center font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive-700 sm:w-auto">
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
