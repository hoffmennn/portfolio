<script setup lang="ts"></script>

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
        <RouterLink to="/o-mne" class="shrink-0 text-ink">O mne</RouterLink>
      </nav>
    </header>

    <section class="px-6 pt-20 sm:px-10">
      <h1
        class="m-0 mb-9 font-display text-[clamp(40px,6vw,96px)] leading-[0.98] font-light tracking-[-0.04em]"
      >
        Adam Hoffmann
      </h1>
      <div
        class="grid grid-cols-1 items-start gap-12 border-t border-ink pt-9 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.62fr)] sm:gap-x-[72px]"
      >
        <div class="flex flex-col gap-10">
          <div>
            <h2
              class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
            >
              O mne
            </h2>
            <p class="m-0 max-w-[60ch] text-[16.5px] leading-[1.8] text-[#3f3f38] text-pretty">
              Volám sa Adam Hoffmann, mám 23 rokov a som študent informatiky na STU FEI. Venujem
              sa informatike už od strednej školy, programovaním jednoduchej hry v pythone alebo
              tvorením prvých webov pomocou kurzov na Youtube som našiel vášeň v tomto smere. Počas celej strednej školy som
              taktiež pracoval ako technický asistent pri športových podujatiach, kde sme
              spoločne s našim tímom zabezpečovali časomieru na akciách po celom Slovensku,
              Česku a Poľsku. Toto hobby prerástlo v plnohodnotné štúdium v Bratislave a napokon
              aj prvé práce v IT sfére, práve programovaním webových aplikácii a stránok.
              Momentálne začínam inžinierske štúdium zamerané na umelú inteligenciu a verím že
              moje ďaľšie profesné kroky budú taktiež v tejto oblasti.
            </p>
          </div>
          <div class="border-t border-line pt-7">
            <h2
              class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
            >
              Voľný čas
            </h2>
            <p class="m-0 max-w-[60ch] text-[16.5px] leading-[1.8] text-[#3f3f38] text-pretty">
              Som aktívny človek a doma často neobsedím. Ak mám nejaký voľný čas, rád ho zaplním
              športom, najčastejšie cyklistikou, turistikou alebo dlhými prechádzkami so psom.
              Dlhé cesty vlakom rád využijem na čítanie kníh, zväčša je to literatúra faktu
              napríklad o fyzike, ľudskom tele alebo psychológii.
            </p>
          </div>
        </div>
        <img
          src="/about/adam-hoffmann.webp"
          alt="Adam Hoffmann"
          loading="lazy"
          class="block aspect-3/4 w-full rounded-md object-cover"
        />
      </div>
    </section>

    <section class="px-6 pt-30 pb-10 sm:px-10">
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
