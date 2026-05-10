"use client";

import { useState } from "react";

type Program = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  price: string;
  bestFor: string;
  recommendation: string;
  includes: string[];
  highlight?: boolean;
};

type FAQ = {
  question: string;
  answer: string;
};

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

const whatsappUrl =
  "https://wa.me/60126725549?text=Namaskaram%20Yoga%20Sri%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E4%BA%94%E6%9C%88%E5%85%83%E7%B4%A0%E5%B9%B3%E8%A1%A1%E9%87%8D%E5%90%AF%E8%AF%BE%E7%A8%8B%E3%80%82";

const programs: Program[] = [
  {
    id: "nadi",
    title: "Nadi Balance Scan｜脉诊平衡检测",
    subtitle: "先听懂身体，再选择适合自己的练习与养护",
    date: "可预约",
    price: "RM180",
    bestFor:
      "适合容易疲劳、睡不好、压力大、消化不顺、情绪波动，或想先了解身体状态的人。",
    recommendation:
      "第一次接触 Yoga Sri Wellness，或不确定自己适合哪一个配套，建议先从这里开始。",
    includes: [
      "Nadi Scan 检测",
      "PDF 报告",
      "阿育吠陀医生一对一讲解",
      "Yoga Sri 瑜伽顾问咨询",
    ],
  },
  {
    id: "one-day",
    title: "5月23日｜一日健康重启体验",
    subtitle: "Nadi Scan + Hatha Yoga + Ayurveda Brunch + Treatment",
    date: "5月23日",
    price: "RM1080",
    bestFor:
      "适合想用一天完整体验检测、练习、饮食与阿育吠陀疗程的人。",
    recommendation:
      "如果你想先感受整个系统，但暂时无法参加多天课程，这会是最清楚的入口。",
    includes: [
      "Hatha Yoga｜Surya Shakti",
      "Nadi Scan 医生一对一报告讲解",
      "Ayurveda Brunch｜阿育吠陀料理 Brunch",
      "Ayurveda Treatment｜2小时阿育吠陀疗程",
      "平衡瑜伽与带领冥想",
    ],
  },
  {
    id: "foundation",
    title: "5月21–24日｜健康重启基础配套",
    subtitle: "建立身体觉察、瑜伽基础与练习节奏",
    date: "5月21–24日",
    price: "RM1880",
    bestFor:
      "适合零基础、身体僵硬、想开始瑜伽，或想重新建立稳定练习基础的人。",
    recommendation:
      "如果你已经学过 Inner Engineering，但身体状态还不够稳定，这个配套适合先打基础。",
    includes: [
      "Nadi Balance Scan 脉诊平衡检测",
      "阿育吠陀医生一对一报告讲解",
      "哈他瑜伽介绍与基础体式",
      "瑜伽合十礼",
      "Miracle of Mind",
      "带领冥想",
      "Surya Shakti / Surya Kriya 练习",
      "阿育吠陀料理 Brunch",
      "平衡瑜伽与幸福冥想",
    ],
  },
  {
    id: "deep-reset",
    title: "5月28–31日｜深度重启配套",
    subtitle: "五大元素净化 · 饮食 · 居家养护 · Panchakarma",
    date: "5月28–31日",
    price: "RM2580",
    bestFor:
      "适合已有瑜伽基础，想深入学习五大元素净化、阿育吠陀饮食与身体养护的人。",
    recommendation:
      "如果你不只是想练习，而是想把饮食、净化、疗程与日常养护整合起来，建议选择这个配套。",
    includes: [
      "Nadi Balance Scan 脉诊平衡检测",
      "阿育吠陀医生一对一报告讲解",
      "哈他瑜伽基础体式",
      "带领冥想",
      "五大元素净化课程",
      "元素净化概论",
      "居家养护法",
      "阿育吠陀饮食与瑜伽饮食课",
      "阿育吠陀料理 Brunch",
      "Panchakarma 阿育吠陀疗程",
    ],
  },
  {
    id: "complete",
    title: "5月21–31日｜8天健康重启完整系列",
    subtitle: "最完整 · 最推荐 · 为 10 月前的系统准备",
    date: "5月21–31日",
    price: "RM3580",
    bestFor:
      "适合已经完成 Inner Engineering、期待 10 月与 Sadhguru 相遇，并想认真准备身体、能量与生活节奏的人。",
    recommendation:
      "如果你这次的目标是为 10 月的重要时刻做准备，这是最推荐的完整路径。",
    includes: [
      "Nadi Balance Scan 脉诊平衡检测",
      "阿育吠陀医生一对一报告讲解",
      "Yoga Sri 瑜伽顾问咨询",
      "哈他瑜伽介绍与基础体式",
      "瑜伽合十礼",
      "Miracle of Mind",
      "带领冥想",
      "Surya Shakti / Surya Kriya 练习",
      "平衡瑜伽与幸福冥想",
      "五大元素净化课程",
      "元素净化概论",
      "居家养护法",
      "阿育吠陀饮食与瑜伽饮食课",
      "阿育吠陀料理 Brunch",
      "Panchakarma 阿育吠陀疗程",
    ],
    highlight: true,
  },
];

const faqs: FAQ[] = [
  {
    question: "我已经学过 Inner Engineering，还适合参加吗？",
    answer:
      "适合。这个课程不是取代你的 Sadhana，而是帮助你从身体、饮食、呼吸、体质与日常节奏上，把系统调整得更稳定。很多人已经学过练习，但身体仍然容易累、紧绷、睡不好或消化不顺，这正是本课程想帮助你重新理解的部分。",
  },
  {
    question: "我已经学过 Hatha Yoga，为什么还需要来？",
    answer:
      "已经学过的人更容易理解这个课程的价值。这里不只是重复体式，而是通过 Nadi Scan、阿育吠陀医生讲解、饮食、五大元素净化与日常养护，帮助你知道如何让练习更适合自己当前的身体状态。",
  },
  {
    question: "零基础可以参加吗？",
    answer:
      "可以。基础配套就是为零基础、身体僵硬、久坐上班族、想开始瑜伽但不知道从哪里开始的人设计的。课程会从身体觉察与基础练习慢慢进入。",
  },
  {
    question: "Panchakarma 疗程适合所有人吗？",
    answer:
      "疗程会根据个人体质与医生建议安排。若有怀孕、重大疾病、手术后恢复、长期服药、严重皮肤或心血管相关状况，请先咨询医生，并建议从 Nadi Balance Scan 开始。",
  },
  {
    question: "付款后如何确认名额？",
    answer:
      "请先填写报名表格，并完成银行转账或 TNG 付款。付款后保留转账截图，Yoga Sri 团队会协助确认名额与后续上课准备事项。",
  },
];

const journey = [
  {
    step: "01",
    title: "检测",
    text: "通过 Nadi Balance Scan 先了解身体状态，而不是盲目开始。",
  },
  {
    step: "02",
    title: "理解",
    text: "由阿育吠陀医生讲解报告，看见体质与失衡信号。",
  },
  {
    step: "03",
    title: "练习",
    text: "以 Isha Hatha Yoga 建立稳定、活力与身体觉察。",
  },
  {
    step: "04",
    title: "饮食",
    text: "用温和、支持消化的阿育吠陀饮食滋养身体。",
  },
  {
    step: "05",
    title: "净化",
    text: "从五大元素角度学习净化、平衡与居家养护。",
  },
  {
    step: "06",
    title: "整合",
    text: "把练习、饮食、作息与日常养护带回生活。",
  },
];

const schedule = [
  ["7:00am – 9:30am", "Hatha Yoga｜Surya Shakti"],
  ["9:30am – 10:30am", "Nadi Scan + 医生一对一讲解"],
  ["10:30am – 12:00pm", "Ayurveda Brunch"],
  ["1:00pm – 2:30pm", "平衡瑜伽与带领冥想"],
  ["2:30pm – 5:00pm", "Ayurveda Treatment｜2小时疗程"],
  ["5:30pm – 8:00pm", "Hatha Yoga / Integration Practice"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
      {children}
    </p>
  );
}

function CTAButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={registrationUrl}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition hover:scale-[1.01] ${
          light
            ? "bg-white text-stone-950 hover:bg-stone-100"
            : "bg-stone-950 text-white hover:bg-stone-800"
        }`}
      >
        立即填写报名表格
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full border px-6 py-3 text-center text-sm font-semibold transition hover:scale-[1.01] ${
          light
            ? "border-white/30 text-white hover:bg-white/10"
            : "border-stone-300 text-stone-900 hover:bg-stone-100"
        }`}
      >
        WhatsApp 咨询适合配套
      </a>
    </div>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        program.highlight
          ? "border-stone-900 bg-stone-950 text-white"
          : "border-stone-200 bg-white text-stone-900"
      }`}
    >
      {program.highlight && (
        <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-stone-950">
          最推荐
        </div>
      )}

      <div className="mb-6">
        <p
          className={`mb-2 text-xs font-medium tracking-[0.22em] ${
            program.highlight ? "text-stone-300" : "text-stone-500"
          }`}
        >
          {program.date}
        </p>
        <h3 className="pr-16 text-xl font-semibold leading-snug">
          {program.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-6 ${
            program.highlight ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {program.subtitle}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-semibold tracking-tight">{program.price}</p>
        <p
          className={`mt-3 text-sm leading-6 ${
            program.highlight ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {program.recommendation}
        </p>
      </div>

      <div
        className={`mb-5 rounded-3xl p-4 ${
          program.highlight ? "bg-white/10" : "bg-stone-50"
        }`}
      >
        <p className="mb-2 text-sm font-semibold">适合：</p>
        <p
          className={`text-sm leading-6 ${
            program.highlight ? "text-stone-200" : "text-stone-600"
          }`}
        >
          {program.bestFor}
        </p>
      </div>

      <ul className="mt-auto space-y-2 text-sm leading-6">
        {program.includes.slice(0, 6).map((item) => (
          <li key={item} className="flex gap-2">
            <span className={program.highlight ? "text-stone-300" : "text-stone-500"}>✓</span>
            <span>{item}</span>
          </li>
        ))}
        {program.includes.length > 6 && (
          <li className={program.highlight ? "text-stone-300" : "text-stone-500"}>
            + 更多完整内容
          </li>
        )}
      </ul>
    </article>
  );
}

function FAQItem({ item, index }: { item: FAQ; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-stone-200 py-5">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="text-lg font-semibold text-stone-950">{item.question}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xl">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-stone-950">
      <nav className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f8f4ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em]">
            ✦ YOGA SRI WELLNESS
          </a>
          <div className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <a href="#why" className="hover:text-stone-950">为什么适合你</a>
            <a href="#path" className="hover:text-stone-950">学习路径</a>
            <a href="#programs" className="hover:text-stone-950">课程配套</a>
            <a href="#faq" className="hover:text-stone-950">常见问题</a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-stone-950 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800"
          >
            咨询
          </a>
        </div>
      </nav>

      <section id="top" className="overflow-hidden px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-sm text-stone-700 shadow-sm">
              <span>For Inner Engineering students</span>
              <span className="text-stone-400">·</span>
              <span>Isha Hatha Yoga</span>
              <span className="text-stone-400">·</span>
              <span>Ayurveda Reset</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-stone-950 md:text-7xl">
              为 10 月与 Sadhguru 相遇，先把身体准备好。
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-stone-700 md:text-xl">
              如果你已经完成 Inner Engineering，平时也有练习，却仍然觉得身体疲劳、睡眠不稳、消化慢、情绪波动或练习不稳定，这个五月，先从身体检测开始，重新理解你的体质、呼吸、能量与生活节奏。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Nadi Balance Scan", "Isha Hatha Yoga", "Ayurveda Brunch", "五大元素净化", "Panchakarma"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <CTAButtons />
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["RM180", "单项检测"],
                ["RM1080", "一日体验"],
                ["RM1880+", "4天配套"],
                ["RM3580", "8天完整系列"],
              ].map(([number, label]) => (
                <div key={label} className="rounded-3xl bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-semibold">{number}</p>
                  <p className="mt-1 text-sm text-stone-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-stone-300/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-950 p-3 shadow-2xl">
              <img
                src="/yogasriprofile.jpg"
                alt="Yoga Sri"
                className="h-[560px] w-full rounded-[2rem] object-cover object-center"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Guided by Yoga Sri
                </p>
                <p className="mt-2 text-xl font-semibold text-stone-950">
                  Certified Hatha Yoga Teacher
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  以中文清楚带领古典哈他瑜伽，并结合阿育吠陀医生讲解，让练习不只停留在课堂，而是回到身体与生活。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-7 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Why this matters</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                你不是没有练习，你是需要更理解自己的系统。
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-9 text-stone-700">
              <p>
                很多已经学过 Inner Engineering 或 Hatha Yoga 的人，内在很向往，也很 devotive，但身体层面仍然有现实的信号：容易累、睡不好、消化不顺、肩颈紧、情绪浮动、练习断断续续。
              </p>
              <p>
                Yoga Sri Wellness 五月元素平衡重启，不是让你“更用力”练习，而是帮助你先听懂身体，再通过 Nadi Scan、医生讲解、Isha Hatha Yoga、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，重新建立稳定、轻盈与清明。
              </p>
              <div className="rounded-[2rem] bg-[#f8f4ec] p-6">
                <p className="text-xl font-semibold text-stone-950">
                  这不是普通瑜伽课，而是一段为身体、练习和内在状态做准备的过程。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="path" className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>The complete reset path</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              从检测、理解、练习，到饮食、净化与整合。
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              每一步都不是单独的体验，而是为了帮助你把身体这个系统慢慢准备好。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.22em] text-stone-400">{item.step}</p>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[2.5rem] bg-stone-950 p-8 text-white lg:col-span-1">
            <SectionLabel>For whom</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight">
              这个课程特别适合这样的你
            </h2>
          </div>
          <div className="grid gap-6 lg:col-span-2 md:grid-cols-2">
            {[
              [
                "已经完成 Inner Engineering",
                "你不是来找普通运动课，而是想让身体更能承接自己的 Sadhana。",
              ],
              [
                "期待 10 月见 Sadhguru",
                "你想提前把身体、饮食、睡眠与能量状态准备得更稳定。",
              ],
              [
                "常去 Isha Center 或学过 Hatha Yoga",
                "你知道练习珍贵，也希望练习能更持续、更深入生活。",
              ],
              [
                "40岁左右，开始认真听身体",
                "你不想再靠意志力硬撑，而是想用更聪明、更温和的方式照顾自己。",
              ],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Program options</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                选择适合你的重启方式
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                如果你只是想先了解身体，从 Nadi Balance Scan 开始；如果你是为了 10 月的重要时刻认真准备，最推荐 8 天完整系列。
              </p>
            </div>
            <CTAButtons />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-10">
            <SectionLabel>One-day sample flow</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight">
              一天会经历什么？
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              对第一次参加的人来说，清楚的流程会让身体和心理都更安心。这是 5月23日一日体验的建议流程。
            </p>
          </div>
          <div className="rounded-[2.5rem] bg-stone-950 p-6 text-white shadow-xl md:p-8">
            <div className="space-y-4">
              {schedule.map(([time, activity]) => (
                <div
                  key={time}
                  className="grid gap-3 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 sm:grid-cols-[170px_1fr]"
                >
                  <p className="text-sm font-semibold text-stone-300">{time}</p>
                  <p className="text-base font-medium">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-7 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Trust & safety</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                有练习，也有医生讲解；有体验，也有安全边界。
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-stone-700">
              <div className="rounded-[2rem] bg-[#f8f4ec] p-6">
                <h3 className="text-xl font-semibold text-stone-950">Yoga Sri 的带领</h3>
                <p className="mt-3">
                  Yoga Sri 多年来教授华语学员 Isha Hatha Yoga。她发现，很多人很向往更深入的练习，但身体基础、饮食习惯、睡眠、消化与生活节奏并没有真正调整好。因此，这个系列不是为了增加更多课程，而是帮助学员先把身体这个系统准备好。
                </p>
              </div>
              <div className="rounded-[2rem] bg-[#f8f4ec] p-6">
                <h3 className="text-xl font-semibold text-stone-950">重要说明</h3>
                <p className="mt-3">
                  本课程不是医疗诊断或疾病治疗，也不取代专业医疗建议。课程通过 Ayurveda 体质分析、瑜伽练习、饮食与日常养护，帮助你更了解身体状态，并建立更适合自己的生活节奏。如有严重疾病、怀孕、术后恢复或长期服药，请先咨询医生。
                </p>
              </div>
              <div className="rounded-[2rem] bg-[#f8f4ec] p-6">
                <h3 className="text-xl font-semibold text-stone-950">与 Isha 练习的关系</h3>
                <p className="mt-3">
                  这个课程不是取代你的 Inner Engineering 或个人 Sadhana，而是帮助你在身体、饮食、能量与生活节奏上，为练习建立更好的支持。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              报名前你可能想知道
            </h2>
          </div>
          <div className="rounded-[2.5rem] bg-white px-6 py-4 shadow-sm md:px-10">
            {faqs.map((item, index) => (
              <FAQItem key={item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] bg-stone-950 p-8 text-white shadow-xl md:p-12">
            <SectionLabel>Registration & payment</SectionLabel>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              从听懂身体开始，重新建立稳定与清明。
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
              请先填写报名表格。完成银行转账或 TNG 付款后，保留付款截图，Yoga Sri 团队会协助确认名额与后续准备事项。
            </p>
            <div className="mt-8">
              <CTAButtons light />
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-10">
            <h3 className="text-2xl font-semibold">银行转账</h3>
            <div className="mt-6 space-y-4 rounded-[2rem] bg-[#f8f4ec] p-6">
              <div>
                <p className="text-sm text-stone-500">Account Name</p>
                <p className="text-xl font-semibold">YOGASRI ENTERPRISE</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Bank</p>
                <p className="text-xl font-semibold">Public Bank</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Account No.</p>
                <p className="text-xl font-semibold">3231265424</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-stone-500">
              名额以完成报名与付款确认为准。如不确定身体状况或配套选择，请先 WhatsApp 咨询。
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-5 py-10 text-center text-sm text-stone-500 lg:px-8">
        <p>© Yoga Sri Wellness · Nadi Balance Scan × Isha Hatha Yoga × Ayurveda × Five Elements</p>
      </footer>
    </main>
  );
}
