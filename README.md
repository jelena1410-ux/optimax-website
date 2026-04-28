# OptiMAX Consulting Website

Premium responzivna web stranica za OptiMAX Consulting, izrađena s React, Vite i Tailwind CSS.

## Pokretanje

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Kako urediti sadržaj stranice

Sav tekst web stranice mijenja se samo u datoteci:

`src/content/siteContent.js`

U toj datoteci možete promijeniti naslove, opise usluga, cijene, tekstove gumba, kontakt podatke i footer bez diranja ostatka koda.

Jednostavne upute za uređivanje u GitHubu:

1. Otvorite GitHub repository `optimax-website`.
2. Kliknite na mapu `src`, zatim `content`, pa otvorite datoteku `siteContent.js`.
3. Kliknite ikonu olovke ili gumb `Edit this file`.
4. Promijenite željeni tekst između navodnika, na primjer naslov, opis, cijenu ili email adresu.
5. Nemojte mijenjati nazive ispred dvotočke, primjerice `title`, `text`, `price`, `email` ili `href`.
6. Na dnu stranice kliknite `Commit changes`.
7. Vercel će automatski pokrenuti novu objavu stranice nakon spremanja promjene.
