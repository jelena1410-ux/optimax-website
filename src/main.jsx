import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
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

const COOKIE_CONSENT_KEY = 'optimax-cookie-consent';

function useScrollReveal(trigger) {
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [trigger]);
}

function useHashRoute() {
  const getHash = () => window.location.hash || '#pocetna';
  const [hash, setHash] = React.useState(getHash);

  React.useEffect(() => {
    const handleHashChange = () => setHash(getHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return hash;
}

function Logo() {
  return (
    <a href="#pocetna" className="group mr-10 flex h-11 w-[9.4rem] shrink-0 items-center sm:w-[10.2rem] lg:mr-20 xl:mr-24" aria-label={siteContent.logo.ariaLabel}>
      <span className="relative flex min-w-0 flex-col items-start justify-center border-l border-champagne-400/40 pl-3 leading-none">
        <span className="font-display text-[1.32rem] font-semibold tracking-tight text-[#f5f5f2] transition duration-300 group-hover:text-white sm:text-[1.46rem]">
          Opti<span className="text-champagne-400">MAX</span>
        </span>
        <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#f5f5f2]/80 transition duration-300 group-hover:text-champagne-200 sm:text-[0.64rem] sm:tracking-[0.22em]">
          Consulting
        </span>
      </span>
    </a>
  );
}

function LegalPageShell({ children }) {
  return (
    <section className="legal-page min-h-screen bg-graphite-950 px-5 pb-20 pt-32 text-graphite-100 lg:px-8 lg:pt-36">
      <div className="mx-auto max-w-5xl">
        <a href="#pocetna" className="inline-flex items-center gap-2 border-b border-champagne-400/30 pb-2 text-sm font-semibold text-champagne-300 transition hover:border-champagne-300 hover:text-champagne-100">
          <ChevronRight className="rotate-180" size={16} />
          Natrag na početnu
        </a>
        {children}
      </div>
    </section>
  );
}

function PrivacyPolicy({ content }) {
  return (
    <LegalPageShell>
      <article className="legal-card mt-10">
        <p className="eyebrow text-champagne-400">{content.eyebrow}</p>
        <h1 className="mt-5 font-display text-[2rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2.6rem]">
          {content.title}
        </h1>
        <p className="mt-3 text-sm text-graphite-100/50">{content.updated}</p>
        <p className="mt-8 max-w-3xl text-base leading-8 text-graphite-100/70">{content.intro}</p>
        <div className="mt-10 grid gap-5">
          {content.sections.map((section, index) => (
            <section key={section.title} className="legal-section">
              <span className="legal-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </section>
          ))}
        </div>
        <p className="mt-10 border-l border-champagne-400/40 bg-graphite-950/40 p-5 text-sm leading-7 text-graphite-100/70">
          {content.note}
        </p>
      </article>
    </LegalPageShell>
  );
}

function CookiePolicy({ content }) {
  return (
    <LegalPageShell>
      <article className="legal-card mt-10">
        <p className="eyebrow text-champagne-400">{content.eyebrow}</p>
        <h1 className="mt-5 font-display text-[2rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2.6rem]">
          {content.title}
        </h1>
        <p className="mt-3 text-sm text-graphite-100/50">{content.updated}</p>
        <p className="mt-8 max-w-3xl text-base leading-8 text-graphite-100/70">{content.intro}</p>
        <div className="mt-10 grid gap-5">
          {content.sections.map((section, index) => (
            <section key={section.title} className="legal-section">
              <span className="legal-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 overflow-hidden border border-white/10">
          <div className="grid bg-champagne-400/10 text-xs font-semibold uppercase tracking-[0.16em] text-champagne-300 sm:grid-cols-[0.8fr_1.5fr_0.9fr]">
            <span className="p-4">Kategorija</span>
            <span className="p-4">Svrha</span>
            <span className="p-4">Status</span>
          </div>
          {content.table.map((row) => (
            <div key={row.category} className="grid border-t border-white/10 text-sm leading-7 text-graphite-100/70 sm:grid-cols-[0.8fr_1.5fr_0.9fr]">
              <strong className="p-4 font-semibold text-[#f5f5f2]">{row.category}</strong>
              <span className="p-4">{row.purpose}</span>
              <span className="p-4 text-champagne-300/90">{row.status}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 border-l border-champagne-400/40 bg-graphite-950/40 p-5 text-sm leading-7 text-graphite-100/70">
          {content.note}
        </p>
      </article>
    </LegalPageShell>
  );
}

function FooterLogo() {
  return (
    <a href="#pocetna" className="footer-wordmark group inline-flex flex-col items-start" aria-label={siteContent.logo.ariaLabel}>
      <span className="font-display text-[1.5rem] font-semibold leading-none tracking-tight text-[#f5f5f2]">
        Opti<span>MAX</span>
      </span>
      <span className="mt-1 text-[0.58rem] font-semibold uppercase leading-none tracking-[0.28em] text-graphite-100/72 transition duration-300 group-hover:text-graphite-100/88">
        Consulting
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-champagne-400/10 bg-graphite-950/80 shadow-[0_12px_42px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2.5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-11 xl:gap-14 lg:flex">
          {siteContent.navigation.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="header-cta hidden min-h-11 items-center gap-2 px-5 py-2.5 text-[0.82rem] font-semibold text-champagne-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400 lg:flex">
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
  return (
    <div className="strategy-room reveal relative min-h-[330px] overflow-hidden sm:min-h-[390px] lg:min-h-[430px]">
      <div className="strategy-room__ambient" />
      <div className="strategy-room__architecture" />
      <div className="strategy-room__table" />
      <div className="strategy-room__reflection" />

      <div className="strategy-room__statement">
        <span aria-hidden="true" />
        <p>
          Sustav mora voditi posao.
          <br />
          Ne ljudi koji gase požare.
        </p>
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
            <article key={item.title} className="principle-card reveal">
              <span className="card-index">{String(content.items.indexOf(item) + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-xl font-semibold text-graphite-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-graphite-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ content }) {
  return (
    <section id="o-nama" className="relative scroll-mt-24 overflow-hidden bg-graphite-950 py-20 text-graphite-100 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(203,185,135,0.08),transparent_30%),radial-gradient(circle_at_82%_34%,rgba(108,123,74,0.14),transparent_34%),linear-gradient(180deg,rgba(21,21,18,0),rgba(48,55,32,0.14))]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-champagne-400">{content.eyebrow}</p>
          <h2 className="mt-5 font-display text-[1.68rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2.15rem] lg:text-[2.65rem]">
            {content.title}
          </h2>
        </div>

        <div className="reveal mt-10 border-y border-champagne-400/15 py-7 sm:mt-12 sm:py-9">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne-400/75">OptiMAX Consulting</p>
          <div className="mt-5 max-w-4xl columns-1 gap-10 space-y-5 text-[15px] leading-relaxed text-graphite-100/70 sm:text-base lg:columns-2">
            {content.companyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:items-start lg:gap-14">
          <div className="reveal order-2 lg:order-1">
            <div className="border-l border-champagne-400/45 pl-6 sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne-400/80">
                {content.founder.role}
              </p>
              <h3 className="mt-4 font-display text-[1.6rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2rem]">
                {content.founder.name}
              </h3>
            </div>
            <div className="founder-editorial-copy mt-8 text-[15px] leading-relaxed text-graphite-100/70 sm:text-base">
              {content.founder.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <figure className="founder-frame relative overflow-hidden rounded-[1.25rem] border border-champagne-400/25 bg-[linear-gradient(145deg,rgba(245,245,242,0.08),rgba(108,123,74,0.08))] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_12%,rgba(203,185,135,0.16),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
              <div className="founder-image-wrap relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-graphite-900">
                <img
                  src={content.founder.photo.src}
                  alt={content.founder.photo.alt}
                  className="founder-photo h-full w-full object-cover object-[62%_50%]"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    event.currentTarget.nextElementSibling?.classList.remove('hidden');
                    event.currentTarget.nextElementSibling?.classList.add('grid');
                  }}
                />
                <div className="hidden h-full place-items-center px-8 text-center">
                  <div>
                    <span className="mx-auto block h-px w-16 bg-champagne-400/50" />
                    <p className="mt-6 font-display text-xl font-semibold text-[#f5f5f2]">{content.founder.name}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-300/80">{content.founder.role}</p>
                    <p className="mt-6 text-sm leading-7 text-graphite-100/58">
                      Dodajte fotografiju kao <span className="text-champagne-200">{content.founder.photo.src}</span>.
                    </p>
                  </div>
                </div>
              </div>
              <span className="absolute bottom-5 left-5 h-px w-20 bg-champagne-400/50" />
              <span className="absolute right-5 top-5 h-20 w-px bg-olive-600/50" />
              <figcaption className="sr-only">
                {content.founder.photo.alt}
              </figcaption>
            </figure>
            <div className="about-manifest mt-6">
              <p className="about-statement-label">OPTIMAX PRINCIPLE</p>
              <blockquote className="about-statement-quote">
                Najveća vrijednost sustava
                <br />
                nije kontrola.
                <br />
                Nego jasnoća.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EvidenceSection({ content }) {
  return (
    <section className="evidence-section relative overflow-hidden scroll-mt-24 px-5 py-16 text-graphite-100 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 evidence-grid" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal grid gap-8 border-y border-champagne-400/15 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-champagne-400">{content.eyebrow}</p>
            <h2 className="mt-4 max-w-xl font-display text-[1.55rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2rem] lg:text-[2.35rem]">
              {content.title}
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-relaxed text-graphite-100/68 lg:justify-self-end">
            {content.text}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {content.items.map((item, index) => (
            <article key={item.title} className={`evidence-card reveal ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <span className="evidence-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="evidence-mini" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
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
              <span className="card-index">{String(content.items.indexOf(item) + 1).padStart(2, '0')}</span>
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

function CookieToggle({ checked, disabled = false, label, text, onChange }) {
  return (
    <div className="cookie-toggle-row">
      <div>
        <h3>{label}</h3>
        <p>{text}</p>
      </div>
      <button
        type="button"
        className={`cookie-toggle ${checked ? 'is-on' : ''}`}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        aria-pressed={checked}
      >
        <span />
      </button>
    </div>
  );
}

function CookieSettingsModal({ open, content, initialPreferences, onSave, onAcceptAll, onRejectOptional, onClose }) {
  const [preferences, setPreferences] = React.useState(initialPreferences);

  React.useEffect(() => {
    if (open) {
      setPreferences(initialPreferences);
    }
  }, [initialPreferences, open]);

  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="cookie-modal-backdrop" role="presentation">
      <div className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow text-champagne-400">Privatnost</p>
            <h2 id="cookie-settings-title">{content.modalTitle}</h2>
          </div>
          <button type="button" className="cookie-close" onClick={onClose} aria-label="Zatvori postavke kolačića">
            <X size={18} />
          </button>
        </div>
        <p className="mt-5 text-sm leading-7 text-graphite-100/70">{content.modalText}</p>
        <div className="mt-7 grid gap-4">
          <CookieToggle
            checked
            disabled
            label={content.categories.necessary.title}
            text={content.categories.necessary.text}
          />
          <CookieToggle
            checked={preferences.analytics}
            label={content.categories.analytics.title}
            text={content.categories.analytics.text}
            onChange={(value) => setPreferences((current) => ({ ...current, analytics: value }))}
          />
          <CookieToggle
            checked={preferences.marketing}
            label={content.categories.marketing.title}
            text={content.categories.marketing.text}
            onChange={(value) => setPreferences((current) => ({ ...current, marketing: value }))}
          />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" className="cookie-action cookie-action-primary" onClick={() => onSave(preferences)}>
            {content.buttons.save}
          </button>
          <button type="button" className="cookie-action" onClick={onAcceptAll}>
            {content.buttons.acceptAll}
          </button>
          <button type="button" className="cookie-action cookie-action-quiet" onClick={onRejectOptional}>
            {content.buttons.rejectOptional}
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieConsent({ content, settingsOpen, onSettingsOpen, onSettingsClose }) {
  const defaultPreferences = React.useMemo(() => ({ analytics: false, marketing: false }), []);
  const [visible, setVisible] = React.useState(false);
  const [preferences, setPreferences] = React.useState(defaultPreferences);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) {
        setVisible(true);
        return;
      }

      const parsed = JSON.parse(stored);
      setPreferences({
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      setVisible(true);
    }
  }, []);

  React.useEffect(() => {
    // TODO: Ako se kasnije uvodi analytics alat, učitati ga uvjetno tek kada je preferences.analytics === true.
    // Trenutno se ne učitavaju Google Analytics, Meta Pixel ni druge ne-nužne skripte.
  }, [preferences.analytics, preferences.marketing]);

  const storeConsent = (nextPreferences) => {
    const nextConsent = {
      necessary: true,
      analytics: Boolean(nextPreferences.analytics),
      marketing: Boolean(nextPreferences.marketing),
      savedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(nextConsent));
    setPreferences({ analytics: nextConsent.analytics, marketing: nextConsent.marketing });
    setVisible(false);
    onSettingsClose();
  };

  const acceptAll = () => storeConsent({ analytics: true, marketing: true });
  const rejectOptional = () => storeConsent(defaultPreferences);

  return (
    <>
      {visible && (
        <div className="cookie-banner" role="region" aria-label="Obavijest o kolačićima">
          <div>
            <p>{content.bannerText}</p>
            <a href="#politika-kolacica">Saznajte više u Politici kolačića.</a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" className="cookie-action cookie-action-primary" onClick={acceptAll}>
              {content.buttons.acceptAll}
            </button>
            <button type="button" className="cookie-action cookie-action-quiet" onClick={rejectOptional}>
              {content.buttons.rejectOptional}
            </button>
            <button type="button" className="cookie-action" onClick={onSettingsOpen}>
              {content.buttons.settings}
            </button>
          </div>
        </div>
      )}
      <CookieSettingsModal
        open={settingsOpen}
        content={content}
        initialPreferences={preferences}
        onSave={storeConsent}
        onAcceptAll={acceptAll}
        onRejectOptional={rejectOptional}
        onClose={onSettingsClose}
      />
    </>
  );
}

function TrustSignalSection() {
  const trustSignals = [
    {
      title: 'Poslovna arhitektura',
      text: 'Jasna struktura procesa, odgovornosti i upravljačkog ritma.',
    },
    {
      title: 'Operativna dijagnostika',
      text: 'Prepoznavanje uskih grla, preklapanja i točaka gdje sustav gubi jasnoću.',
    },
    {
      title: 'Mjerljivi pokazatelji',
      text: 'KPI-jevi, pregledi i ritam praćenja koji pomažu donositi sigurnije odluke.',
    },
    {
      title: 'Provedba u praksi',
      text: 'Fokus na promjeni koja se stvarno koristi, a ne na dokumentima koji ostaju u ladici.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-graphite-950 px-5 py-[4.5rem] text-graphite-100 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(203,185,135,0.1),transparent_32%),radial-gradient(circle_at_88%_92%,rgba(108,123,74,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal grid gap-8 border-y border-champagne-400/15 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow text-champagne-400">Struktura i povjerenje</p>
            <h2 className="mt-4 max-w-xl font-display text-[1.7rem] font-semibold leading-tight tracking-tight text-[#f5f5f2] sm:text-[2.15rem] lg:text-[2.55rem]">
              Za poslovanje koje traži jasniji sustav.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-relaxed text-graphite-100/68 sm:text-base lg:justify-self-end">
            OptiMAX Consulting pomaže uvesti strukturu tamo gdje svakodnevni rad, odgovornosti i odluke više ne mogu ovisiti o improvizaciji.
          </p>
        </div>
        <div className="mt-10 grid gap-px bg-champagne-400/15 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((item, index) => (
            <article key={item.title} className="reveal group bg-graphite-950 px-5 py-6 transition duration-500 hover:bg-graphite-900/70 sm:px-6 sm:py-7">
              <span className="font-display text-[0.68rem] font-semibold tracking-[0.2em] text-champagne-400/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-6 text-[#f5f5f2] transition group-hover:text-champagne-100">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-graphite-100/62">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ footer, onCookieSettingsOpen }) {
  return (
    <footer className="border-t border-champagne-400/20 bg-[radial-gradient(circle_at_10%_0%,rgba(203,185,135,0.08),transparent_28rem),#11110f] px-5 py-12 text-graphite-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.78fr_0.88fr_1.05fr] lg:gap-14">
          <div>
            <FooterLogo />
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-champagne-400/78">{footer.positioning}</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-graphite-100/62">
              {footer.text}
            </p>
          </div>

          <nav aria-label="Navigacija u podnožju">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-100/78">Navigacija</h2>
            <div className="mt-5 grid gap-3 text-sm text-graphite-100/58">
              {siteContent.navigation.map(({ label, href }) => (
                <a key={href} href={href} className="footer-legal-link">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-100/78">Kontakt</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-graphite-100/58">
              <a href={`mailto:${siteContent.contact.email}`} className="footer-legal-link">{siteContent.contact.email}</a>
              <a href={siteContent.contact.phoneHref} className="footer-legal-link">{siteContent.contact.phone}</a>
              <p>{siteContent.contact.location}</p>
            </div>
          </div>

          <div className="barteni-group-footnote text-xs leading-relaxed text-graphite-100/52">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-100/72">Barteni Group</h2>
            <p className="mt-5 max-w-xs text-graphite-100/52">{footer.group.relation}</p>
            <div className="mt-5 space-y-1.5">
              <p className="font-medium text-graphite-100/68">{footer.group.company}</p>
              {footer.group.details.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-champagne-400/15 pt-6 text-xs leading-relaxed text-graphite-100/50 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© 2026 {footer.companyName}. {footer.rights}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <a href="#politika-privatnosti" className="footer-legal-link">{footer.links.privacy}</a>
            <a href="#politika-kolacica" className="footer-legal-link">{footer.links.cookies}</a>
            <button type="button" className="footer-legal-link text-left" onClick={onCookieSettingsOpen}>
              {footer.links.cookieSettings}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const {
    about,
    audiences,
    contact,
    ctas,
    evidence,
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
    legal,
    cookies,
  } = siteContent;
  const hash = useHashRoute();
  const [cookieSettingsOpen, setCookieSettingsOpen] = React.useState(false);

  useScrollReveal(hash);

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

  const isPrivacyPage = hash === '#politika-privatnosti';
  const isCookiePage = hash === '#politika-kolacica';

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efeee7] text-graphite-950">
      <Header />
      {isPrivacyPage ? (
        <PrivacyPolicy content={legal.privacy} />
      ) : isCookiePage ? (
        <CookiePolicy content={legal.cookies} />
      ) : (
        <>
          <section id="pocetna" className="hero-stage relative scroll-mt-24 overflow-hidden bg-graphite-950 pt-[6.5rem] text-graphite-100 lg:pt-[7.5rem]">
            <div className="absolute inset-0 hero-cinematic" />
            <div className="absolute inset-0 hero-lines opacity-15" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-14 sm:gap-12 sm:pb-[4.5rem] lg:grid-cols-[1fr_0.84fr] lg:px-8 lg:pb-20">
              <div className="reveal flex flex-col justify-center">
                <p className="eyebrow text-champagne-400">POSLOVNA ARHITEKTURA</p>
                <h1 className="mt-7 max-w-3xl font-display text-[1.9rem] font-semibold leading-[1.09] tracking-tight text-[#f5f5f2] sm:text-[2.38rem] lg:text-[3.1rem]">
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
                <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
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

      <section id="kako-radimo" className="process-section relative scroll-mt-24 overflow-hidden bg-graphite-950 py-16 text-graphite-100 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(203,185,135,0.08),transparent_28rem),radial-gradient(circle_at_12%_80%,rgba(108,123,74,0.14),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.86fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow text-champagne-400">{process.eyebrow}</p>
            <h2 className="mt-4 font-display text-[1.55rem] font-semibold leading-tight tracking-tight sm:text-[2rem] lg:text-[2.45rem]">
              {process.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#d9d3c6] sm:text-base">
              {process.text}
            </p>
          </div>
          <div className="process-timeline grid gap-6">
            {process.items.map((item, index) => (
              <div key={item.title} className="process-row reveal">
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

      <EvidenceSection content={evidence} />

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
              <div key={item} className="audience-row reveal">
                <CheckCircle2 className="shrink-0 text-olive-700" size={22} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="podrska" className="section-pad scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal grid items-stretch overflow-hidden border border-champagne-400/15 bg-graphite-950 shadow-premium lg:grid-cols-[0.92fr_1.08fr]">
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
          <div className="reveal">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mt-4 font-display text-[1.7rem] font-semibold leading-[1.18] sm:text-[2.2rem] lg:text-[2.8rem]">
              {contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite-700">
              {contact.text}
            </p>
            <p className="contact-closing mt-8 font-display text-xl leading-8 text-graphite-950">
              {contact.closing}
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
          <form className="reveal border border-graphite-950/10 bg-[#fbfaf5] p-6 shadow-[0_24px_76px_rgba(21,21,18,0.1)] sm:p-8" onSubmit={handleContactSubmit}>
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
        </>
      )}
      <TrustSignalSection />
      <Footer footer={footer} onCookieSettingsOpen={() => setCookieSettingsOpen(true)} />
      <CookieConsent
        content={cookies}
        settingsOpen={cookieSettingsOpen}
        onSettingsOpen={() => setCookieSettingsOpen(true)}
        onSettingsClose={() => setCookieSettingsOpen(false)}
      />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
