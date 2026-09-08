<script setup lang="ts">
interface Project {
  index: string
  meta: string
  title: string
  description: string
  tags: string[]
  image?: { webp: string; alt: string; fit?: 'cover' | 'contain' }
  imageFirst: boolean
  link?: string
}

const projects: Project[] = [
  {
    index: '01',
    meta: '01 — B2B Webová aplikácia',
    title: 'Objednávkový systém pre veľkoobchod potravín',
    description:
        'Webová aplikácia pre veľkoobchod s čerstvým ovocím, zeleninou a potravinami,' +
        ' ktorá sprístupňuje rozsiahly katalóg produktov pre klientov a poskytuje možnosť objednávania tovaru.',
    tags: [],
    image: { webp: '/projects/proj-1.webp', alt: 'Screenshot objednávkového systému' },
    imageFirst: true,
    link: '/pripadova-studia/vvm',
  },
  {
    index: '02',
    meta: '02 — Web a identita',
    title: 'Rekreačná chata Kremnica',
    description:
      'Kompletná vizuálna identita a web pre rekreačnú chatu na okraji Kremnice — logo, prezentačný web s cenníkom a galériou, a tlačené materiály.',
    tags: [],
    image: { webp: '/projects/proj-2.webp', alt: 'Fotka chaty / web' },
    imageFirst: false,
    link: '/pripadova-studia/chata',
  },
  {
    index: '03',
    meta: '03 — Bakalárska práca',
    title: 'Behaviorálna biometrická autentifikácia pomocou dynamiky pohybov myši',
    description:
      'Systém, ktorý overí totožnosť používateľa len podľa toho, ako hýbe myšou — bez hesla, na pozadí bežnej práce. Priemerné AUC 0,9714 pri 118 používateľoch, s vysvetliteľnosťou modelu pomocou SHAP.',
    tags: ['Bakalárska práca', 'Strojové učenie', 'Python'],
    image: { webp: '/projects/bc/bc-pipeline.png', alt: 'Schéma architektúry systému', fit: 'contain' },
    imageFirst: true,
    link: '/pripadova-studia/biometria',
  },
]

const services = [
  {
    index: '01',
    title: 'Návrh a dizajn',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    index: '02',
    title: 'Vývoj na mieru',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    index: '03',
    title: 'Nasadenie a údržba',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
]

const heroWidths = [1600, 2400, 3200]
</script>

<template>
  <div class="min-h-screen bg-white">
    <header
      class="sticky top-0 z-20 flex flex-nowrap items-center justify-between gap-3 border-b border-line bg-white/86 px-6 py-4.5 backdrop-blur-[10px] sm:gap-6 sm:px-10"
    >
      <a href="#top" class="shrink-0 font-display text-[17px] font-medium tracking-[-0.02em]">
        Adam Hoffmann
      </a>
      <nav
        class="flex gap-3 text-[11.5px] tracking-[0.01em] text-muted sm:gap-7 sm:text-[13.5px]"
      >
        <a href="#work" class="shrink-0 text-muted">Práce</a>
        <a href="#services" class="shrink-0 text-muted">Služby</a>
        <RouterLink to="/o-mne" class="shrink-0 text-muted">O mne</RouterLink>
        <a href="#contact" class="shrink-0 text-muted">Kontakt</a>
      </nav>
    </header>

    <section id="top">
      <picture>
        <source
          type="image/webp"
          :srcset="heroWidths.map((w) => `/hero-${w}.webp ${w}w`).join(', ')"
          sizes="100vw"
        />
        <img
          :srcset="heroWidths.map((w) => `/hero-${w}.jpg ${w}w`).join(', ')"
          sizes="100vw"
          src="/hero-2400.jpg"
          alt="Adam Hoffmann"
          fetchpriority="high"
          class="block h-[clamp(300px,38vw,520px)] w-screen -ml-[calc(50vw-50%)] object-cover object-[50%_40%]"
        />
      </picture>
      <div
        class="mb-2 grid grid-cols-1 items-end gap-6 px-6 pt-11 sm:grid-cols-[minmax(280px,1.2fr)_minmax(260px,0.8fr)] sm:gap-16 sm:px-10"
      >
        <h1
          class="m-0 font-display text-[clamp(40px,6vw,96px)] leading-[0.98] font-light tracking-[-0.04em]"
        >
          Adam Hoffmann
        </h1>
        <div class="flex flex-col gap-3.5 pb-2.5">
          <div class="h-px bg-line"></div>
          <p class="m-0 max-w-[30ch] text-[15.5px] leading-relaxed text-muted text-pretty">
            Vývoj webových aplikácii <br> Študent informatiky na FEI STU
          </p>
        </div>
      </div>
    </section>

    <section id="work" class="px-6 pt-30 sm:px-10">
      <div
        class="mb-14 flex items-baseline justify-between gap-6 border-t border-line pt-5"
      >
        <h2 class="m-0 font-display text-[clamp(26px,3vw,44px)] font-normal tracking-[-0.03em]">
          Vybrané práce
        </h2>
      </div>

      <article
        v-for="project in projects"
        :key="project.index"
        class="mb-24 grid grid-cols-1 items-start gap-8 last:mb-0 sm:gap-12"
        :class="
          project.imageFirst
            ? 'sm:[grid-template-columns:minmax(0,1.5fr)_minmax(240px,0.8fr)]'
            : 'sm:[grid-template-columns:minmax(240px,0.8fr)_minmax(0,1.5fr)]'
        "
      >
        <component
          :is="project.link ? 'RouterLink' : 'div'"
          v-if="project.imageFirst"
          :to="project.link"
          class="relative aspect-16/10 w-full"
        >
          <img
            v-if="project.image"
            :src="project.image.webp"
            :alt="project.image.alt"
            loading="lazy"
            class="h-full w-full rounded-md bg-white"
            :class="
              project.image.fit === 'contain'
                ? 'border border-line object-contain p-8'
                : 'object-cover'
            "
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center rounded-md border border-line bg-[repeating-linear-gradient(135deg,#f5f4f0_0_10px,#ffffff_10px_20px)] p-6 text-center text-sm text-faint"
          >
            {{ project.title }}
          </div>
        </component>

        <div>
          <span class="mb-3.5 block text-xs tracking-[0.1em] text-faint">{{ project.meta }}</span>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,32px)] leading-[1.15] font-normal tracking-[-0.025em]"
          >
            <RouterLink v-if="project.link" :to="project.link">{{ project.title }}</RouterLink>
            <template v-else>{{ project.title }}</template>
          </h3>
          <p class="m-0 mb-5.5 text-[15px] leading-relaxed text-muted">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap items-center gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
            >
              {{ tag }}
            </span>
            <RouterLink
              v-if="project.link"
              :to="project.link"
              class="ml-1 text-xs text-muted underline underline-offset-4"
            >
              Prípadová štúdia →
            </RouterLink>
          </div>
        </div>

        <component
          :is="project.link ? 'RouterLink' : 'div'"
          v-if="!project.imageFirst"
          :to="project.link"
          class="relative aspect-16/10 w-full"
        >
          <img
            v-if="project.image"
            :src="project.image.webp"
            :alt="project.image.alt"
            loading="lazy"
            class="h-full w-full rounded-md bg-white"
            :class="
              project.image.fit === 'contain'
                ? 'border border-line object-contain p-8'
                : 'object-cover'
            "
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center rounded-md border border-line bg-[repeating-linear-gradient(135deg,#f5f4f0_0_10px,#ffffff_10px_20px)] p-6 text-center text-sm text-faint"
          >
            {{ project.title }}
          </div>
        </component>
      </article>
    </section>

    <section id="services" class="px-6 pt-30 sm:px-10">
      <div
        class="mb-12 flex items-baseline justify-between gap-6 border-t border-line pt-5"
      >
        <h2 class="m-0 font-display text-[clamp(26px,3vw,44px)] font-normal tracking-[-0.03em]">
          Weby na mieru
        </h2>
        <span class="text-xs tracking-[0.1em] text-faint uppercase">Services</span>
      </div>
      <div class="grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
        <div v-for="service in services" :key="service.index" class="bg-white px-7 pt-8 pb-10">
          <span class="mb-4.5 block text-xs text-faint">{{ service.index }}</span>
          <h3 class="m-0 mb-2.5 font-display text-lg font-medium tracking-[-0.015em]">
            {{ service.title }}
          </h3>
          <p class="m-0 text-[14.5px] leading-relaxed text-muted">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section id="about" class="px-6 pt-30 sm:px-10">
      <div
        class="grid grid-cols-1 gap-14 border-t border-line pt-5 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
      >
        <div>
          <span class="text-xs tracking-[0.1em] text-faint uppercase">About</span>
        </div>
        <div class="sm:col-span-2">
          <p
            class="m-0 mb-5 font-display text-[clamp(22px,2.6vw,36px)] leading-[1.3] font-light tracking-[-0.02em] text-pretty"
          >
            Študent informatiky na STU FEI, ktorý programuje webové aplikácie od strednej školy.
          </p>
          <p class="m-0 mb-6 max-w-[56ch] text-[15px] leading-loose text-muted">
            Momentálne začínam inžinierske štúdium zamerané na umelú inteligenciu a verím, že
            moje ďalšie profesné kroky budú taktiež v tejto oblasti.
          </p>
          <RouterLink to="/o-mne" class="text-sm text-muted underline underline-offset-4"
            >Viac o mne →</RouterLink
          >
        </div>
      </div>
    </section>

    <section id="contact" class="px-6 pt-35 pb-10 sm:px-10">
      <div
        class="flex flex-wrap items-end justify-between gap-12 border-t border-line pt-12"
      >
        <h2
          class="m-0 max-w-[20ch] font-display text-[clamp(32px,4.4vw,68px)] leading-[1.02] font-normal tracking-[-0.035em]"
        >
          Máte projekt? Napíšte mi.
        </h2>
        <div class="flex flex-col gap-2.5 text-sm text-muted">
          <span>E-mail — doplniť</span>
          <span>Telefón — doplniť</span>
          <span>LinkedIn / GitHub — doplniť</span>
        </div>
      </div>
      <div
        class="mt-24 flex flex-wrap justify-between gap-6 border-t border-line pt-4.5 text-xs text-faint"
      >
        <span>© 2026 Adam Hoffmann</span>
        <span>Freelance web developer</span>
      </div>
    </section>
  </div>
</template>
