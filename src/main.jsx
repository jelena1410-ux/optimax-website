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
  ['Poƒçetna', '#pocetna'],
  ['Usluge', '#usluge'],
  ['Kako radimo', '#kako-radimo'],
  ['Za koga radimo', '#za-koga'],
  ['Podr≈°ka', '#podrska'],
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
    text: 'Postavljamo praktiƒçne pokazatelje, izvje≈°tajne ritmove i upravljaƒçke preglede koji podr≈æavaju bolje odluke.',
  },
  {
    icon: ShieldCheck,
    title: 'Organizacijska kontrola',
    text: 'Uvodi se red u prioritete, provedbu i praƒáenje bez nepotrebne administracije i paralelnih sustava.',
  },
];

const process = [
  'Razumijemo poslovni model, ciljeve i trenutaƒçne napetosti u sustavu.',
  'Analiziramo procese, odgovornosti, podatke i toƒçke odluƒçivanja.',
  'Definiramo ciljanu arhitekturu rada s jasnim prioritetima i metrikama.',
  'Pratimo provedbu kroz ritam koji ostaje upotrebljiv nakon projekta.',
];

const audiences = [
  'Vlasnici i uprave koje trebaju veƒáu preglednost nad poslovanjem',
  'Rastuƒáe tvrtke u kojima operativa vi≈°e ne mo≈æe ovisiti o improvizaciji',
  'Organizacije koje ≈æele standardizirati procese bez gubitka fleksibilnosti',
  'Timovi koji trebaju jasnije prioritete, odgovornosti i upravljaƒçke podatke',
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
              Partner za poslovnu arhitekturu, operativnu jasnoƒáu i upravljaƒçki ritam koji poma≈æe vodstvu donositi mirnije, preciznije odluke.
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
          title="Sustavi koji poslovanje ƒçine upravljivim."
          text="Radimo na mjestima gdje organizacija treba vi≈°e reda, manje operativne magle i jasniju vezu izmeƒëu odluke, provedbe i rezultata."
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
              Svaki anga≈æman poƒçinje razumijevanjem stvarne dinamike poslovanja. Rezultat nije prezentacija koja ostaje po strani, nego sustav rada koji vodstvo i timovi mogu nastaviti koristiti.
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
              <p className="eyebrow text-champagne-400">Strate≈°ka poslovna podr≈°ka</p>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Vanjski pogled koji uvodi unutarnju disciplinu.
              </h2>
              <p className="mt-6 text-lg leading-8 text-graphite-100/70">
                Podr≈æavamo vodstvo u postavljanju prioriteta, strukturiranju promjena i odr≈æavanju fokusa kada je poslovni sustav pod pritiskom rasta, slo≈æenosti ili promjene tr≈æi≈°ta.
              </p>
            </div>
            <div className="grid gap-px bg-graphite-100/10 p-px sm:grid-cols-2">
              {[
                ['Prioriteti', 'Jasna veza izmeƒëu strate≈°kih ciljeva i operativnog ritma.'],
                ['Odgovornosti', 'Definirane uloge, ovlasti i toƒçke odluƒçivanja.'],
                ['Pregledi', 'Upravljaƒçki formati koji pokazuju ono ≈°to je bitno.'],
                ['Provedba', 'Ritam praƒáenja koji odr≈æava fokus bez preoptereƒáenja.'],
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
            <h2"6∆74Ê÷S“&◊B”BfˆÁB÷Fó7∆íFWáB”7Ü¬fˆÁB◊6V÷ñ&ˆ∆B6”ßFWáB”GÜ¬∆sßFWáB”WÜ¬#‡¢Fˆv˜f˜&óFR˜6∆˜fÁRFñ¶vÊ˜7Fñ∑R‡¢¬ˆÉ#‡¢«6∆74Ê÷S“&◊B”bFWáB÷∆r∆VFñÊr”ÇFWáB÷w&ÜóFR”s#‡¢∑&F≤ñÊñ6ñ¶∆Êí&¶v˜f˜"F˜fˆ∆¶‚¶R¶&ßV÷ñ¶WfÊ¶RG&VÁWFH÷Êˆr∂ˆÁFV∑7Fí&ˆ6¶VÁRvF¶R˜Fî‘Ç6ˆÁ7V«FñÊr÷¸[ÊR7Gf˜&óFíÊßf\HwRg&ñ¶VFÊ˜7B‡¢¬˜‡¢∆Fób6∆74Ê÷S“&◊B”w&ñBv”BFWáB÷w&ÜóFR”É#‡¢∆á&Vc“&÷ñ«FÛ¶∂ˆÁF∑D˜Fñ÷Ç÷6ˆÁ7V«FñÊrÊá""6∆74Ê÷S“&6ˆÁF7B÷∆ñÊ≤#‡¢ƒ÷ñ¬6ó¶S◊≥#“Û‡¢∂ˆÁF∑D˜Fñ÷Ç÷6ˆÁ7V«FñÊrÊá ¢¬ˆ‡¢∆á&Vc“'FV√¢≥3ÉS"6∆74Ê÷S“&6ˆÁF7B÷∆ñÊ≤#‡¢≈ÜˆÊR6ó¶S◊≥#“Û‡¢≥3ÉR ¢¬ˆ‡¢«7‚6∆74Ê÷S“&6ˆÁF7B÷∆ñÊ≤#‡¢ƒ÷ñ‚6ó¶S◊≥#“Û‡¢á'fG6∂¢¬˜7„‡¢¬ˆFóc‡¢¬ˆFóc‡¢∆f˜&“6∆74Ê÷S“&&˜&FW"&˜&FW"÷w&ÜóFR”ìSÛ&r◊vÜóFR”b6ÜF˜r◊&V÷óV“6”ß”"ˆÂ7V&÷óC◊∂ÜÊF∆T6ˆÁF7E7V&÷óG”‡¢∆Fób6∆74Ê÷S“&w&ñBv”R6”¶w&ñB÷6ˆ«2”"#‡¢∆∆&V¬6∆74Ê÷S“&fñV∆B#‡¢ñ÷Rí&W¶ñ÷P¢∆ñÁWBGóS“'FWáB"Ê÷S“&Ê÷R"∆6VÜˆ∆FW#“%fZRñ÷R"&WVó&VBÛ‡¢¬ˆ∆&V√‡¢∆∆&V¬6∆74Ê÷S“&fñV∆B#‡¢Gg'F∂¢∆ñÁWBGóS“'FWáB"Ê÷S“&6ˆ◊Áí"∆6VÜˆ∆FW#“$Ê¶óbGg'F∂R"Û‡¢¬ˆ∆&V√‡¢∆∆&V¬6∆74Ê÷S“&fñV∆B6”¶6ˆ¬◊7‚”"#‡¢V÷ñ¿¢∆ñÁWBGóS“&V÷ñ¬"Ê÷S“&V÷ñ¬"∆6VÜˆ∆FW#“&ñ÷TGg'F∂Êá""&WVó&VBÛ‡¢¬ˆ∆&V√‡¢∆∆&V¬6∆74Ê÷S“&fñV∆B6”¶6ˆ¬◊7‚”"#‡¢˜'V∂¢«FWáF&VÊ÷S“&÷W76vR"&˜w3“#R"∆6VÜˆ∆FW#“%V∑&F∂Ú˜úZóFRZFÚ[ÊV∆óFRW&VFóFíR˜6∆˜fÊˆ“7W7FgR‚"&WVó&VBÛ‡¢¬ˆ∆&V√‡¢¬ˆFóc‡¢∆'WGFˆ‚GóS“'7V&÷óB"6∆74Ê÷S“'&V÷óV“◊7V&÷óB◊B”rñÊ∆ñÊR÷f∆WÇ÷ñ‚÷Ç”"r÷gV∆¬óFV◊2÷6VÁFW"ßW7Fñgí÷6VÁFW"v”2&r÷ˆ∆ófR”ÉÇ”rí”BFWáB÷6VÁFW"fˆÁB◊6V÷ñ&ˆ∆BFWáB◊vÜóFRG&Á6óFñˆ‚fˆ7W2◊fó6ñ&∆S¶˜WF∆ñÊRfˆ7W2◊fó6ñ&∆S¶˜WF∆ñÊR”"fˆ7W2◊fó6ñ&∆S¶˜WF∆ñÊR÷ˆfg6WB”Bfˆ7W2◊fó6ñ&∆S¶˜WF∆ñÊR÷ˆ∆ófR”s6”ßr÷WFÚ#‡¢Fˆv˜f˜&óFR˜6∆˜fÁRFñ¶vÊ˜7Fñ∑P¢ƒ'&˜u&ñváB6∆74Ê÷S“'6á&ñÊ≤”"6ó¶S◊≥á“Û‡¢¬ˆ'WGFˆ„‡¢¬ˆf˜&”‡¢¬ˆFóc‡¢¬˜6V7Fñˆ„‡†¢∆fˆ˜FW"6∆74Ê÷S“&&˜&FW"◊B&˜&FW"÷w&ÜóFR”Û&r÷w&ÜóFR”ìSÇ”Rí”FWáB÷w&ÜóFR”∆sßÇ”Ç#‡¢∆Fób6∆74Ê÷S“&◊Ç÷WFÚf∆WÇ÷Ç◊r”wÜ¬f∆WÇ÷6ˆ¬v”b6”¶f∆WÇ◊&˜r6”¶óFV◊2÷6VÁFW"6”¶ßW7Fñgí÷&WGvVV‚#‡¢ƒ∆ˆvÚÛ‡¢«6∆74Ê÷S“'FWáB◊6“FWáB÷w&ÜóFR”Ûc#‡¢*í∂ÊWrFFRÇíÊvWDgV∆≈ñV"Çó“˜Fî‘Ç6ˆÁ7V«FñÊr‚7f&f&ñG,[ÊÊ‡¢¬˜‡¢¬ˆFóc‡¢¬ˆfˆ˜FW#‡¢¬ˆ÷ñ„‡¢ì∞ß–†¶7&VFU&ˆ˜BÜFˆ7V÷VÁBÊvWDV∆V÷VÁD'îñBÇw&ˆ˜BrííÁ&VÊFW"ÉƒÛ‚ì∞†