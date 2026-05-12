"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import { A11y, EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { HOW_WE_WORK_STEPS } from "@shared/mock-data";
import { useMediaQuery } from "@shared/lib/hooks";
import { Badge } from "@shared/ui/badge";

import { HowWeWorkIllustration } from "./how-we-work-illustrations";

const MD_UP = "(min-width: 768px)";

type HowWeWorkStep = (typeof HOW_WE_WORK_STEPS)[number];

function StepVisual({ step }: { step: HowWeWorkStep }) {
  return (
    <div
      className="from-primary/12 via-surface-container-high to-surface-container relative aspect-[4/3] overflow-hidden bg-gradient-to-br"
      aria-hidden
    >
      <HowWeWorkIllustration
        id={step.illustrationId}
        className="text-primary origin-center scale-100 transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="from-on-background/15 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
        aria-hidden
      />
    </div>
  );
}

function HowWeWorkStepCard({
  step,
  idx,
  titleId,
}: {
  step: HowWeWorkStep;
  idx: number;
  titleId?: string;
}) {
  const t = useTranslations();

  return (
    <article className="border-outline-variant/15 bg-surface-container-lowest group flex h-full flex-col overflow-hidden rounded-3xl border shadow-[0_8px_30px_rgba(10,18,32,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(10,18,32,0.1)]">
      <div className="relative">
        <StepVisual step={step} />
        {step.badgeKey ? (
          <div className="absolute top-3 right-3 z-10">
            <Badge tone="tertiary" className="shadow-md">
              {t(step.badgeKey)}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="font-label text-primary text-sm font-black tracking-wide tabular-nums">
          {step.step}
        </span>
        <h3
          id={titleId}
          className="font-headline text-on-surface text-lg leading-snug font-extrabold lg:text-xl"
        >
          {t(step.i18nTitleKey)}
        </h3>
        <p className="text-on-surface-variant grow text-sm leading-relaxed">
          {t(step.i18nBodyKey)}
        </p>
        <p className="font-label text-outline border-outline-variant/20 mt-1 border-t pt-3 text-xs font-bold tracking-wider uppercase">
          {t(step.i18nDurationKey)}
        </p>
      </div>
    </article>
  );
}

function HowWeWorkMobileSwiper() {
  const t = useTranslations();
  const uid = useId().replace(/:/g, "");

  return (
    <div className="relative -mx-1 px-1">
      <Swiper
        id={`hww-swiper-${uid}`}
        aria-labelledby="hww-heading"
        className="hww-swiper !overflow-visible pb-10"
        modules={[Pagination, A11y, Keyboard, EffectCoverflow]}
        grabCursor
        watchOverflow
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={{ clickable: true }}
        effect="coverflow"
        centeredSlides
        slidesPerView={1.18}
        spaceBetween={14}
        coverflowEffect={{
          rotate: 18,
          stretch: 0,
          depth: 140,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          480: { slidesPerView: 1.22, spaceBetween: 16 },
        }}
        a11y={{
          prevSlideMessage: t("common.back"),
          nextSlideMessage: t("common.next"),
          paginationBulletMessage: "{{index}} / {{slidesCount}}",
        }}
      >
        {HOW_WE_WORK_STEPS.map((step, idx) => {
          const titleId = `hww-slide-title-${step.step}`;
          return (
            <SwiperSlide key={step.step} className="!h-auto">
              <div
                className="flex h-full w-full min-w-0 justify-center"
                role="group"
                aria-roledescription="slide"
                aria-labelledby={titleId}
              >
                <div className="w-full min-w-0 px-0.5">
                  <HowWeWorkStepCard step={step} idx={idx} titleId={titleId} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export function HowWeWorkTimeline() {
  const t = useTranslations();
  const isMdUp = useMediaQuery(MD_UP);

  return (
    <section className="bg-surface-container-low py-16 lg:py-20" aria-labelledby="hww-heading">
      <div className="px-6">
        <header className="mb-10 max-w-2xl space-y-3 lg:mb-12">
          <h2
            id="hww-heading"
            className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl"
          >
            {t("home.howWeWorkTitle")}
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed lg:text-lg">
            {t("home.howWeWorkSubtitle")}
          </p>
          <div className="bg-primary-container h-1 w-20 rounded-full" aria-hidden />
        </header>

        {isMdUp ? (
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {HOW_WE_WORK_STEPS.map((step, idx) => (
              <li key={step.step} className="min-w-0">
                <HowWeWorkStepCard step={step} idx={idx} />
              </li>
            ))}
          </ol>
        ) : (
          <HowWeWorkMobileSwiper />
        )}
      </div>
    </section>
  );
}
