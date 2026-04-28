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

const navItems = [
  ['Početna', '#pocetna'],
  ['Usluge', '#usluge'],
  ['Kako radimo', '#kako-radimo'],
  ['Za koga radimo', '#za-koga'],
  ['Podrška', '#podrska'],
  ['Kontakt', '#kontakt'],
];

const services = [
  {
    icon: Layers3,
    title: 'Poslovna arhitektura',
    text: 'Oblikujemo jasnu strukturu odgovornosti, procesa i odluka kako bi organizacija radila stabilnije i preglednije.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operativna dijagnostika',
    text: 'Mapiramo uska grla, nejasne tokove rada i prostore u kojima se gubi vrijeme, fokus ili profitabilnost.',
  },
  {
    icon: BarChart3,
    title: 'Sustavi mjerenja',
    text: 'Postavljamo praktične pokazatelje, izvještajne ritmove i upravljačke preglede koji podržavaju bolje odluke.',
  },
  {
    icon: ShieldCheck,
    title: 'Organizacijska kontrola',
    text: 'Uvodi se red u prioritete, provedbu i praćenje bez nepotrebne administracije i paralelnih sustava.',
  },
];

const process = [
  'Razumijemo poslovni model, ciljeve i trenutačne napetosti u sustavu.',
  'Analiziramo procese, odgovornosti, podatke i točke odlučivanja.',
  'Definiramo ciljanu arhitekturu rada s jasnim prioritetima i metrikama.',
  'Pratimo provedbu kroz ritam koji ostaje upotrebljiv nakon projekta.',
];

const audiences = [
  'Vlasnici i uprave koje trebaju veću preglednost nad poslovanjem',
  'Rastuće tvrtke u kojima operativa više ne može ovisiti o improvizaciji',
  'Organizacije koje žele standardizirati procese bez gubitka fleksibilnosti',
  'Timovi koji trebaju jasnije prioritete, odgovornosti i upravljačke podatke',
];

function Logo() {
  return (
    <a href="#pocetna" className="group flex min-w-0 items-center gap-3" aria-label="OptiMAX Consulting">
      <span className="grid h-11 w-11 shrink-0 place-items-center border border-champagne-400/50 bg-graphite-900 text-sm font-semibold text-champagne-400">
        OM
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-semibold tracking-wide text-graphite-100 sm:text-lg">
          OptiMAX Consulting
        </span>
        <span className="block truncate text-[0.66rem] uppercase tracking-[0.18em] text-champagne-400/80 sm:text-xs sm:tracking-[0.22em]">
          Poslovna arhitektura
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-100/10 bg-graphite-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-9 xl:gap-11 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="hidden min-h-11 items-center gap-2 border border-champagne-400/50 px-5 py-3 text-sm font-semibold text-champagne-100 transition hover:border-champagne-400 hover:bg-champagne-400 hover:text-graphite-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400 lg:flex">
          Dogovorite poslovnu dijagnostiku
          <ArrowRight className="shrink-0" size={16} />
        </a>
        <button
          className="grid h-11 w-11 shrink-0 place-items-center border border-graphite-100/20 text-graphite-100 transition hover:border-champagne-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Otvori navigaciju"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="border-t border-graphite-100/10 bg-graphite-950 px-5 py-5 shadow-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navItems.map(([label, href]) => (
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
  return (
    <div className="hero-visual relative min-h-[430px] overflow-hidden bg-graphite-900 shadow-premium sm:min-h-[520px] lg:min-h-[640px]">
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

      <div className="relative grid h-full min-h-[430px] grid-cols-6 grid-rows-6 gap-4 p-5 sm:min-h-[520px] sm:p-7 lg:min-h-[640px] lg:gap-5">
        <div className="col-span-4 row-span-3 border border-champagne-400/35 bg-graphite-950/40 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.26em] text-champagne-400">Struktura</p>
          <div className="mt-12 h-px max-w-[58%] bg-champagne-400/40" />
        </div>
        <div className="col-span-2 row-span-4 flex flex-col justify-between border border-graphite-100/20 bg-graphite-950/35 p-6 backdrop-blur-md">
          <Compass className="text-champagne-400" size={28} />
          <div>
            <p className="metric">01</p>
            <p className="mt-4 text-sm text-graphite-100/75">Dijagnostika</p>
          </div>
        </div>
        <div className="col-span-5 row-span-2 border border-olive-600/45 bg-olive-900/55 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-md">
          <p className="metric">Mjerljivi rezultati</p>
          <div className="mt-10 max-w-[72%] space-y-3">
            <span className="block h-px bg-champagne-400/45" />
            <span className="block h-px w-2/3 bg-graphite-100/25" />
          </div>
        </div>
        <div className="col-span-1 row-span-2 border border-champagne-400/25 bg-champagne-400/10 backdrop-blur-sm" />
      </div>
    </div>
  );
}

function App() {
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

    const subject = encodeURIComponent('Poslovna dijagnostika');
    const body = encodeURIComponent(
      `Ime i prezime: ${name}\nTvrtka: ${company || '-'}\nEmail: ${email}\n\nPoruka:\n${message}`,
    );
    window.location.href = `mailto:kontakt@optimax-consulting.hr?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 text-graphite-950">
      <Header />

      <section id="pocetna" className="relative scroll-mt-24 overflow-hidden bg-graphite-950 pt-32 text-graphite-100 lg:pt-40">
        <div className="absolute inset-0 hero-lines opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 sm:gap-16 sm:pb-28 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:pb-36">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-champagne-400">OptiMAX Consulting</p>
            <h1 className="mt-8 max-w-4xl font-display text-[2.45rem] font-semibold leading-[1.14] text-graphite-100 sm:text-5xl sm:leading-[1.13] lg:text-7xl lg:leading-[1.12]">
              Gradimo poslovne sustave koji uvode red, preglednost i mjerljive rezultate.
            </h1>
            <p className="mt-11 max-w-2xl text-lg leading-8 text-graphite-100/75">
              Partner za poslovnu arhitekturu, operativnu jasnoću i upravljački ritam koji pomaže vodstvu donositi mirnije, preciznije odluke.
            </p>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <a href="#kontakt" className="premium-button inline-flex min-h-12 items-center justify-center gap-3 bg-champagne-400 px-7 py-4 text-center font-semibold text-graphite-950 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
                Dogovorite poslovnu dijagnostiku
                <ArrowRight className="shrink-0" size={18} />
              </a>
              <a href="#usluge" className="premium-button-secondary inline-flex min-h-12 items-center justify-center gap-3 border border-graphite-100/20 px-7 py-4 text-center font-semibold text-graphite-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-400">
                Pregled usluga
                <ChevronRight className="shrink-0" size={18} />
              </a>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>

      <section id="usluge" className="section-pad scroll-mt-24">
        <SectionHeading
          eyebrow="Usluge"
          title="Sustavi koji poslovanje čine upravljivim."
          text="Radimo na mjestima gdje organizacija treba više reda, manje operativne magle i jasniju vezu između odluke, provedbe i rezultata."
        />
        <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="service-card">
              <Icon className="text-olive-700" size={30} />
              <h3 className="mt-8 font-display text-xl font-semibold text-graphite-950">{title}</h3>
              <p className="mt-4 leading-7 text-graphite-700">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kako-radimo" className="scroll-mt-24 bg-graphite-950 py-20 text-graphite-100 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.86fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow text-champagne-400">Kako radimo</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Precizno, diskretno i usmjereno na provedbu.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite-100/70">
              Svaki angažman počinje razumijevanjem stvarne dinamike poslovanja. Rezultat nije prezentacija koja ostaje po strani, nego sustav rada koji vodstvo i timovi mogu nastaviti koristiti.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map((item, index) => (
              <div key={item} className="process-row">
                <span className="process-index">{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="za-koga" className="section-pad scroll-mt-24 bg-olive-100/50">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">Za koga radimo</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Za tvrtke koje su prerasle improvizaciju.
            </h2>
          </div>
          <div className="grid gap-4">
            {audiences.map((item) => (
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
              <p className="eyebrow text-champagne-400">Strateška poslovna podrška</p>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Vanjski pogled koji uvodi unutarnju disciplinu.
              </h2>
              <p className="mt-6 text-lg leading-8 text-graphite-100/70">
                Podržavamo vodstvo u postavljanju prioriteta, strukturiranju promjena i održavanju fokusa kada je poslovni sustav pod pritiskom rasta, složenosti ili promjene tržišta.
              </p>
            </div>
            <div className="grid gap-px bg-graphite-100/10 p-px sm:grid-cols-2">
              {[
                ['Prioriteti', 'Jasna veza između strateških ciljeva i operativnog ritma.'],
                ['Odgovornosti', 'Definirane uloge, ovlasti i točke odlučivanja.'],
                ['Pregledi', 'Upravljački formati koji pokazuju ono što je bitno.'],
                ['Provedba', 'Ritam praćenja koji održava fokus bez preopterećenja.'],
              ].map(([title, text]) => (
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
            <p className="eyebrow">Kontakt</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Dogovorite poslovnu dijagnostiku.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite-700">
              Kratak inicijalni razgovor dovoljan je za razumijevanje trenutačnog konteksta i procjenu gdje OptiMAX Consulting može stvoriti najveću vrijednost.
            </p>
            <div className="mt-10 grid gap-4 text-graphite-800">
              <a href="mailto:kontakt@optimax-consulting.hr" className="contact-link">
                <Mail size={20} />
                kontakt@optimax-consulting.hr
              </a>
              <a href="tel:+385000000000" className="contact-link">
                <Phone size={20} />
                +385 00 000 000
              </a>
              <span className="contact-link">
                <MapPin size={20} />
                Hrvatska
              </span>
            </div>
          </div>
          <form className="border border-graphite-950/10 bg-white p-6 shadow-premium sm:p-10" onSubmit={handleContactSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field">
                Ime i prezime
                <input type="text" name="name" placeholder="Vaše ime" required />
              </label>
              <label className="field">
                Tvrtka
                <input type="text" name="company" placeholder="Naziv tvrtke" />
              </label>
              <label className="field sm:col-span-2">
                Email
                <input type="email" name="email" placeholder="ime@tvrtka.hr" required />
              </label>
              <label className="field sm:col-span-2">
                Poruka
                <textarea name="message" rows="5" placeholder="Ukratko opišite što želite urediti u poslovnom sustavu." required />
              </label>
            </div>
            <button type="submit" className="premium-submit mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-olive-800 px-7 py-4 text-center font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive-700 sm:w-auto">
              Dogovorite poslovnu dijagnostiku
              <ArrowRight className="shrink-0" size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-graphite-100/10 bg-graphite-950 px-5 py-10 text-graphite-100 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-sm text-graphite-100/60">
            © {new Date().getFullYear()} OptiMAX Consulting. Sva prava pridržana.
          </p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
