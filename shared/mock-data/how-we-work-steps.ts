export interface HowWeWorkStep {
  step: "01" | "02" | "03" | "04" | "05";
  i18nTitleKey: string;
  i18nBodyKey: string;
  i18nDurationKey: string;
  badgeKey?: string;
  background: "image" | "primary" | "surface";
  imageUrl?: string;
}

export const HOW_WE_WORK_STEPS: HowWeWorkStep[] = [
  {
    step: "01",
    i18nTitleKey: "howWeWork.step01Title",
    i18nBodyKey: "howWeWork.step01Body",
    i18nDurationKey: "howWeWork.step01Duration",
    badgeKey: "howWeWork.step01Free",
    background: "image",
    imageUrl: "/images/manager-portrait.png",
  },
  {
    step: "02",
    i18nTitleKey: "howWeWork.step02Title",
    i18nBodyKey: "howWeWork.step02Body",
    i18nDurationKey: "howWeWork.step02Duration",
    background: "primary",
  },
  {
    step: "03",
    i18nTitleKey: "howWeWork.step03Title",
    i18nBodyKey: "howWeWork.step03Body",
    i18nDurationKey: "howWeWork.step03Duration",
    background: "surface",
  },
  {
    step: "04",
    i18nTitleKey: "howWeWork.step04Title",
    i18nBodyKey: "howWeWork.step04Body",
    i18nDurationKey: "howWeWork.step04Duration",
    background: "image",
    imageUrl: "/images/logistics-container.png",
  },
  {
    step: "05",
    i18nTitleKey: "howWeWork.step05Title",
    i18nBodyKey: "howWeWork.step05Body",
    i18nDurationKey: "howWeWork.step05Duration",
    background: "image",
    imageUrl: "/images/installation-engineers.png",
  },
];
