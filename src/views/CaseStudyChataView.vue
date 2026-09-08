<script setup lang="ts">
interface MetaRow {
  label: string
  value: string
}

const metaRows: MetaRow[] = [
  { label: 'Klient', value: 'Rekreačná chata Kremnica' },
  { label: 'Rola', value: 'Logo, web, tlačené materiály' },
  { label: 'Nástroje', value: 'Figma, Canva, HTML, CSS, JavaScript' },
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <header
      class="sticky top-0 z-20 flex flex-nowrap items-center justify-between gap-3 border-b border-line bg-white/86 px-6 py-4.5 backdrop-blur-[10px] sm:gap-6 sm:px-10"
    >
      <RouterLink to="/" class="shrink-0 font-display text-[17px] font-medium tracking-[-0.02em]">
        Adam Hoffmann
      </RouterLink>
      <nav class="flex gap-3 text-[11.5px] tracking-[0.01em] text-muted sm:gap-7 sm:text-[13.5px]">
        <RouterLink to="/#work" class="shrink-0 text-muted">Práce</RouterLink>
        <RouterLink to="/o-mne" class="shrink-0 text-muted">O mne</RouterLink>
        <RouterLink to="/#contact" class="shrink-0 text-muted">Kontakt</RouterLink>
      </nav>
    </header>

    <section class="px-6 pt-20 sm:px-10">
      <div class="mb-7 flex items-center gap-2.5 text-xs tracking-[0.1em] text-[#a3a39a] uppercase">
        <span>Prípadová štúdia</span>
      </div>
      <h1
        class="m-0 mb-10 max-w-[22ch] text-pretty font-display text-[clamp(40px,6vw,96px)] leading-[0.98] font-light tracking-[-0.04em]"
      >
        Rekreačná chata Kremnica
      </h1>
      <div
        class="grid grid-cols-1 gap-10 border-t border-ink pt-5.5 sm:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] sm:gap-16"
      >
        <div>
          <span class="mb-3.5 block text-xs tracking-[0.1em] text-faint uppercase">Prehľad</span>
          <p class="m-0 max-w-[56ch] text-[16px] leading-relaxed text-[#3f3f38] text-pretty">
            Kompletná vizuálna identita a web pre rekreačnú chatu na okraji Kremnice. Návrh
            loga, prezentačný web s cenníkom a galériou, a tlačené materiály — vizitky a letáky.
          </p>
        </div>
        <dl class="flex flex-col">
          <div
            v-for="(row, i) in metaRows"
            :key="row.label"
            class="grid grid-cols-[90px_1fr] gap-4 py-3"
            :class="i === 0 ? 'pt-0 pb-3' : 'border-t border-line'"
          >
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-[#a3a39a] uppercase">
              {{ row.label }}
            </dt>
            <dd class="m-0 text-[15px] leading-snug text-[#3f3f38]">{{ row.value }}</dd>
          </div>
          <div class="grid grid-cols-[90px_1fr] gap-4 border-t border-line py-3">
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-[#a3a39a] uppercase">URL</dt>
            <dd class="m-0 text-[15px] leading-snug">
              <a href="https://www.chata-kremnica.sk" class="border-b border-[#dcdad4]"
                >chata-kremnica.sk</a
              >
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="px-6 pt-24 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-ink pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Logo
        </h2>
        <div>
          <p class="m-0 mb-9 max-w-[56ch] text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Línie chaty, stromov a potokom v kruhu — motívy z okolia chaty. Funguje v
            tmavohnedej aj v bielom prevedení na fotografii, v malej veľkosti na vizitke aj vo
            veľkom na letáku. Inšpirácia loga bola vyegnerovaná pomocou AI.
          </p>
          <div class="flex flex-wrap gap-8">
            <figure class="m-0">
              <img
                src="/projects/chata/logo.png"
                alt="Logo — základné prevedenie"
                loading="lazy"
                class="block aspect-[1.75/1] w-full max-w-[420px] rounded-md bg-[#f6f5f2] object-cover"
              />
              <figcaption class="flex items-baseline gap-3 pt-3.5">
                <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">01</span>
                <span class="text-sm text-muted">Logo — základné prevedenie</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Web
        </h2>
        <div>
          <p class="m-0 mb-9 max-w-[56ch] text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Web s hlavnými informáciami hneď pod hero sekciou — kapacita, cena za
            osobu a noc, počet izieb a kuchýň. Nasleduje popis chaty, interiéru a exteriéru s
            galériou, cenník podľa sezóny a kontakt.
          </p>
          <figure class="m-0 max-w-[900px]">
            <img
              src="/projects/chata/web.png"
              alt="chata-kremnica.sk — úvodná stránka"
              loading="lazy"
              class="block h-[clamp(280px,34vw,460px)] w-full rounded-md bg-[#f6f5f2] object-cover object-top"
            />
            <figcaption class="flex items-baseline gap-3 pt-3.5">
              <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">02</span>
              <span class="text-sm text-muted">chata-kremnica.sk — úvodná stránka</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 pb-6 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Tlačené materiály
        </h2>
        <div>
          <p class="m-0 mb-9 max-w-[56ch] text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Vizitka s kontaktnými údajmi. Leták preberá
            rovnakú paletu a typografiu.
          </p>
          <div class="flex flex-wrap items-start gap-x-8 gap-y-10">
            <figure class="m-0 max-w-[420px] flex-1 basis-[300px]">
              <img
                src="/projects/chata/vizitka-front.png"
                alt="Vizitka — predná strana"
                class="block aspect-[1.75/1] w-full bg-[#f6f5f2] object-contain"
              />
              <figcaption class="flex items-baseline gap-3 pt-3.5">
                <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">03</span>
                <span class="text-sm text-muted">Vizitka — predná strana</span>
              </figcaption>
            </figure>
            <figure class="m-0 flex-[0_1_280px]">
              <img
                src="/projects/chata/letak.png"
                alt="Leták A4"
                loading="lazy"
                class="block aspect-[1/1.414] w-full rounded-md bg-[#f6f5f2] object-contain"
              />
              <figcaption class="flex items-baseline gap-3 pt-3.5">
                <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">04</span>
                <span class="text-sm text-muted">Leták A4</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pt-24 pb-10 sm:px-10">
      <div
        class="flex flex-wrap items-end justify-between gap-8 border-t border-line pt-4.5 text-[12.5px] text-faint"
      >
        <span>© 2026 Adam Hoffmann</span>
        <div class="flex flex-wrap gap-6 text-muted">
          <span>adam.hoffmann.151@gmail.com</span>
          <span>+421 940 708 368</span>
          <RouterLink to="/#work">Všetky práce →</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
