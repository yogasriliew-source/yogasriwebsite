"use client";

import { useState } from "react";

type Lang = "zh" | "en";
type PackageColor = "green" | "terracotta" | "sage" | "deepGreen" | "gold";

type ProgramPackage = {
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  date: Record<Lang, string>;
  price: string;
  icon: string;
  color: PackageColor;
};

type DetailPackage = {
  number: string;
  title: Record<Lang, string>;
  date?: Record<Lang, string>;
  price: string;
  suitable: Record<Lang, string>;
  includes: Record<Lang, string[]>;
  focus: Record<Lang, string[]>;
  accent: PackageColor;
};

type FAQItem = {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [openPackage, setOpenPackage] = useState<string | null>("01");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

  const whatsappText =
    lang === "zh"
      ? "Namaskaram Yoga Sri，我想了解五月元素平衡重启课程。"
      : "Namaskaram Yoga Sri, I would like to know more about the May Elemental Balance Reset program.";

  const whatsappUrl = `https://wa.me/60126725549?text=${encodeURIComponent(whatsappText)}`;

  const copy = {
    zh: {
      navProgram: "课程配套",
      navDetails: "详细说明",
      navFAQ: "常见问题",
      navPayment: "报名付款",
      heroPre: "五月",
      heroTitle: "元素平衡重启",
      heroSubtitle: "Nadi Balance Scan × Isha Hatha Yoga × Ayurveda × 五大元素净化",
      heroText:
        "从身体检测开始，重新理解你的体质、能量、呼吸与生活节奏。通过 Nadi Balance Scan、阿育吠陀医生讲解、Isha 哈他瑜伽、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，帮助身体慢慢回到更轻盈、稳定、清明的状态。",
      chip1: "单项体验",
      chip2: "一日体验",
      chip3: "4天配套",
      chip3Price: "基础 RM1880 / 深度 RM2580",
      chip4: "8天完整系列",
      learn: "了解课程",
      register: "立即报名",
      whatsapp: "WhatsApp 咨询",
      certifiedSmall: "Certified Teacher",
      certifiedTitle: "Sadhguru Gurukulam 认证哈他瑜伽老师",
      journey: ["检测", "理解", "练习", "饮食", "净化", "养护"],
      pillarsSmall: "Three Pillars",
      pillarsTitle: "Isha 瑜伽 × 阿育吠陀 × 元素平衡",
      pillarsText:
        "这不是普通瑜伽课，而是一套从检测、练习、饮食、净化到养护的身心健康重启系列。",
      elementsSmall: "Five Elements",
      elementsTitle: "从五大元素，看见身体的平衡方式",
      elementsText:
        "瑜伽练习帮助身体稳定，阿育吠陀帮助你理解体质，五大元素净化则让你把平衡带回日常生活。",
      programOptions: "Program Options",
      chooseTitle: "选择适合你的重启方式",
      chooseText:
        "第一次接触，可以从 Nadi Balance Scan 开始；想完整调整身体、能量、饮食与生活节奏，最推荐 8天健康重启完整系列。",
      detailSmall: "Program Details",
      detailTitle: "每一个配套，都有清楚的学习路径",
      detailText:
        "你可以根据自己的身体状态、时间安排和学习深度，选择单项检测、一日体验、4天基础、4天深度或8天完整系列。点击每个配套可展开完整说明。",
      includes: "包含",
      suitable: "适合",
      focus: "课程重点",
      expand: "展开说明",
      collapse: "收起说明",
      faqSmall: "FAQ",
      faqTitle: "常见问题",
      faqText: "如果你不确定适合哪个配套，可以先从 Nadi Balance Scan 开始，或 WhatsApp 咨询 Yoga Sri。",
      paymentSmall: "Registration & Payment",
      paymentTitle: "报名与付款",
      paymentText:
        "请先填写报名表格，并完成银行转账或使用 TNG QR 付款。付款后请保留转账截图，方便确认名额。",
      bank: "银行转账",
      form: "报名表格",
      formText: "填写资料确认名额",
      openForm: "打开报名表格",
      tngText: "请使用 TNG 扫描付款",
      closingSmall: "Elemental Balance Reset",
      closingTitle: "从听懂身体开始，",
      closingHighlight: "重新建立稳定与清明。",
      closingText:
        "这是一套从检测、理解、练习、饮食、净化到养护的完整健康重启过程。",
      finalButton: "立即填写报名表格",
    },
    en: {
      navProgram: "Programs",
      navDetails: "Details",
      navFAQ: "FAQ",
      navPayment: "Payment",
      heroPre: "May",
      heroTitle: "Elemental Balance Reset",
      heroSubtitle:
        "Nadi Balance Scan × Isha Hatha Yoga × Ayurveda × Five Elements Purification",
      heroText:
        "Begin with a body assessment and understand your constitution, energy, breath, and daily rhythm. Through Nadi Balance Scan, Ayurvedic doctor guidance, Isha Hatha Yoga, Ayurvedic food, Five Elements Purification, and Panchakarma treatment, this series supports the body to return to a lighter, steadier, and clearer state.",
      chip1: "Single Session",
      chip2: "One-Day Experience",
      chip3: "4-Day Packages",
      chip3Price: "Foundation RM1880 / Deep RM2580",
      chip4: "8-Day Full Series",
      learn: "View Programs",
      register: "Register Now",
      whatsapp: "Ask on WhatsApp",
      certifiedSmall: "Certified Teacher",
      certifiedTitle: "Sadhguru Gurukulam Certified Hatha Yoga Teacher",
      journey: ["Assess", "Understand", "Practice", "Nourish", "Purify", "Support"],
      pillarsSmall: "Three Pillars",
      pillarsTitle: "Isha Yoga × Ayurveda × Elemental Balance",
      pillarsText:
        "This is not just a yoga class. It is a structured wellness reset from assessment, practice, food, purification, and ongoing daily support.",
      elementsSmall: "Five Elements",
      elementsTitle: "Understand balance through the five elements",
      elementsText:
        "Yoga practice supports stability, Ayurveda helps you understand your constitution, and Five Elements Purification brings balance into daily life.",
      programOptions: "Program Options",
      chooseTitle: "Choose Your Reset Journey",
      chooseText:
        "Start with the Nadi Balance Scan if you are new. For a complete reset of body, energy, food, and lifestyle rhythm, the 8-day full series is the most recommended option.",
      detailSmall: "Program Details",
      detailTitle: "Each package has a clear learning path",
      detailText:
        "Choose from a single assessment, one-day experience, 4-day foundation, 4-day deep reset, or the complete 8-day series according to your body condition, schedule, and learning depth. Click each package to expand the details.",
      includes: "Includes",
      suitable: "Suitable for",
      focus: "Program focus",
      expand: "View details",
      collapse: "Hide details",
      faqSmall: "FAQ",
      faqTitle: "Frequently Asked Questions",
      faqText: "If you are unsure which package is suitable, begin with the Nadi Balance Scan or contact Yoga Sri on WhatsApp.",
      paymentSmall: "Registration & Payment",
      paymentTitle: "Registration & Payment",
      paymentText:
        "Please complete the registration form first, then make payment by bank transfer or TNG QR. Keep your payment screenshot for confirmation.",
      bank: "Bank Transfer",
      form: "Registration Form",
      formText: "Submit your details to reserve your place",
      openForm: "Open Registration Form",
      tngText: "Scan with TNG to make payment",
      closingSmall: "Elemental Balance Reset",
      closingTitle: "Begin by listening to the body,",
      closingHighlight: "then rebuild steadiness and clarity.",
      closingText:
        "A complete reset journey from assessment, understanding, practice, food, purification, to daily support.",
      finalButton: "Fill Registration Form",
    },
  }[lang];

  const packages: ProgramPackage[] = [
    {
      title: { zh: "Nadi Balance Scan", en: "Nadi Balance Scan" },
      subtitle: { zh: "脉诊平衡检测｜可预约", en: "Dosha Analysis & Personal Guidance" },
      date: { zh: "可预约", en: "By Appointment" },
      price: "RM180",
      icon: "✦",
      color: "green",
    },
    {
      title: { zh: "一日健康重启体验", en: "One-Day Health Reset Experience" },
      subtitle: {
        zh: "Nadi Scan + Hatha Yoga + Brunch + Treatment",
        en: "Nadi Scan + Hatha Yoga + Brunch + Treatment",
      },
      date: { zh: "5月23日", en: "May 23" },
      price: "RM1080",
      icon: "☀",
      color: "terracotta",
    },
    {
      title: { zh: "健康重启基础配套", en: "Foundation Reset Package" },
      subtitle: { zh: "建立身体觉察与瑜伽基础", en: "Body awareness and yoga foundation" },
      date: { zh: "5月21–24日", en: "May 21–24" },
      price: "RM1880",
      icon: "✺",
      color: "terracotta",
    },
    {
      title: { zh: "深度重启配套", en: "Deep Reset Package" },
      subtitle: {
        zh: "五大元素净化 · 饮食 · 居家养护 · Panchakarma",
        en: "Five Elements · Food · Home care · Panchakarma",
      },
      date: { zh: "5月28–31日", en: "May 28–31" },
      price: "RM2580",
      icon: "☘",
      color: "sage",
    },
    {
      title: { zh: "8天健康重启完整系列", en: "8-Day Complete Health Reset" },
      subtitle: { zh: "最完整 · 最推荐", en: "Most complete · Recommended" },
      date: { zh: "5月21–31日", en: "May 21–31" },
      price: "RM3580",
      icon: "◈",
      color: "deepGreen",
    },
  ];

  const pillars = {
    zh: [
      {
        icon: "☀",
        title: "Isha 哈他瑜伽",
        text: "以古典哈他瑜伽练习建立稳定、活力与身体觉察，让身体成为更好的承载器。",
      },
      {
        icon: "◌",
        title: "阿育吠陀检测与饮食",
        text: "通过 Nadi Scan、医生讲解与阿育吠陀饮食，理解体质与失衡信号。",
      },
      {
        icon: "✧",
        title: "五大元素净化",
        text: "从元素角度学习净化、平衡与居家养护，让练习更深入生活。",
      },
    ],
    en: [
      {
        icon: "☀",
        title: "Isha Hatha Yoga",
        text: "Classical Hatha Yoga practices to build stability, vitality, and body awareness.",
      },
      {
        icon: "◌",
        title: "Ayurvedic Assessment & Food",
        text: "Understand constitution and imbalance through Nadi Scan, doctor guidance, and Ayurvedic food.",
      },
      {
        icon: "✧",
        title: "Five Elements Purification",
        text: "Learn purification, balance, and home care from an elemental perspective.",
      },
    ],
  }[lang];

  const elements = {
    zh: [
      { icon: "▵", name: "火 Fire", text: "活力、消化、转化" },
      { icon: "◯", name: "水 Water", text: "滋养、流动、柔软" },
      { icon: "◇", name: "风 Air", text: "呼吸、移动、轻盈" },
      { icon: "■", name: "土 Earth", text: "稳定、支撑、扎根" },
      { icon: "✦", name: "空 Space", text: "开阔、觉察、清明" },
    ],
    en: [
      { icon: "▵", name: "Fire", text: "Vitality, digestion, transformation" },
      { icon: "◯", name: "Water", text: "Nourishment, flow, softness" },
      { icon: "◇", name: "Air", text: "Breath, movement, lightness" },
      { icon: "■", name: "Earth", text: "Stability, support, grounding" },
      { icon: "✦", name: "Space", text: "Openness, awareness, clarity" },
    ],
  }[lang];

  const detailPackages: DetailPackage[] = [
    {
      number: "01",
      title: { zh: "Nadi Balance Scan｜脉诊平衡检测", en: "Nadi Balance Scan" },
      price: "RM180",
      suitable: {
        zh: "容易疲劳、睡不好、压力大、消化不顺、情绪波动，想知道自己身体正在发生什么的人。",
        en: "For those who feel tired, sleep poorly, experience stress, digestive discomfort, emotional fluctuation, or want to understand what is happening in the body.",
      },
      includes: {
        zh: ["Nadi Scan 检测", "PDF 报告", "阿育吠陀医生一对一讲解", "瑜伽顾问咨询"],
        en: ["Nadi Scan assessment", "PDF report", "One-to-one explanation by Ayurvedic doctor", "Yoga consultation"],
      },
      focus: {
        zh: ["先听懂身体的信号，再选择真正适合自己的练习、饮食与养护方式。"],
        en: ["Understand the body’s signals first, then choose the practice, food, and care methods that truly suit you."],
      },
      accent: "green",
    },
    {
      number: "02",
      title: { zh: "5月23日｜一日健康重启体验", en: "May 23｜One-Day Health Reset Experience" },
      date: { zh: "5月23日", en: "May 23" },
      price: "RM1080",
      suitable: {
        zh: "适合想先用一天完整体验 Nadi Scan + Hatha Yoga + Ayurveda Brunch + Ayurveda Treatment 的学员。",
        en: "For those who want a full one-day experience of Nadi Scan, Hatha Yoga, Ayurveda Brunch, and Ayurveda Treatment.",
      },
      includes: {
        zh: [
          "Hatha Yoga｜Surya Shakti：帮助身体建立活力、稳定性与内在热能。",
          "Nadi Scan 医生一对一讲解：由阿育吠陀医生根据检测报告，帮助你了解自己的体质状态与身体失衡信号。",
          "Ayurveda Brunch｜阿育吠陀料理 Brunch：通过温和、支持消化的阿育吠陀饮食，让身体在练习后得到更好的滋养。",
          "Ayurveda Treatment｜2小时阿育吠陀疗程：帮助身体深度放松、舒缓紧绷，并进入更好的恢复状态。",
        ],
        en: [
          "Hatha Yoga｜Surya Shakti: supports vitality, stability, and inner heat.",
          "Nadi Scan doctor explanation: understand constitution and imbalance signals through the report.",
          "Ayurveda Brunch: gentle, digestion-supporting Ayurvedic food after practice.",
          "Ayurveda Treatment｜2 hours: supports deep relaxation, releases tension, and helps the body enter recovery.",
        ],
      },
      focus: {
        zh: ["用一天的时间，从检测、练习、饮食到疗程，完整体验身体被理解、被滋养、被重整的过程。"],
        en: ["In one day, experience the full process of assessment, practice, food, and treatment—allowing the body to be understood, nourished, and reset."],
      },
      accent: "terracotta",
    },
    {
      number: "03",
      title: { zh: "5月21–24日｜健康重启基础配套", en: "May 21–24｜Foundation Reset Package" },
      date: { zh: "5月21–24日", en: "May 21–24" },
      price: "RM1880",
      suitable: {
        zh: "适合零基础、想开始瑜伽、想了解体质，并建立身体觉察与练习基础的学员。",
        en: "Suitable for beginners who want to start yoga, understand their constitution, and build body awareness and practice foundation.",
      },
      includes: {
        zh: [
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
        en: [
          "Nadi Balance Scan",
          "One-to-one report explanation by Ayurvedic doctor",
          "Introduction to Hatha Yoga and foundational postures",
          "Yoga Namaskar / Namaste process",
          "Miracle of Mind",
          "Guided meditation",
          "Surya Shakti / Surya Kriya practice",
          "Ayurvedic Brunch",
          "Balancing Yoga and wellbeing meditation",
        ],
      },
      focus: {
        zh: [
          "这4天会帮助你先从身体觉察开始，了解自己的体质状态，再通过基础哈他瑜伽、呼吸与冥想，让身体慢慢打开，能量慢慢稳定。",
          "这不是强度训练，而是一个温和、有层次的身体重启过程。",
        ],
        en: [
          "These four days begin with body awareness and constitution understanding, then use foundational Hatha Yoga, breath, and meditation to gradually open the body and stabilize the system.",
          "This is not intensity training. It is a gentle, layered body reset process.",
        ],
      },
      accent: "terracotta",
    },
    {
      number: "04",
      title: { zh: "5月28–31日｜深度重启配套", en: "May 28–31｜Deep Reset Package" },
      date: { zh: "5月28–31日", en: "May 28–31" },
      price: "RM2580",
      suitable: {
        zh: "适合想深入学习五大元素净化、阿育吠陀饮食、居家养护与 Panchakarma 疗程的人。",
        en: "For those who want to go deeper into Five Elements Purification, Ayurvedic food, home care, and Panchakarma treatment.",
      },
      includes: {
        zh: [
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
        en: [
          "Nadi Balance Scan",
          "One-to-one report explanation by Ayurvedic doctor",
          "Foundational Hatha Yoga postures",
          "Guided meditation",
          "Five Elements Purification class",
          "Introduction to elemental purification",
          "Home care methods",
          "Ayurvedic food and yogic diet class",
          "Ayurvedic Brunch",
          "Panchakarma Ayurvedic treatment",
        ],
      },
      focus: {
        zh: [
          "这4天会更深入进入五大元素净化、阿育吠陀饮食和身体养护。",
          "通过瑜伽练习、饮食学习、居家养护法与 Panchakarma 疗程，让身体从内到外慢慢进入清理、平衡与重整。",
        ],
        en: [
          "These four days go deeper into Five Elements Purification, Ayurvedic food, and body care.",
          "Through yoga practice, food learning, home care, and Panchakarma treatment, the body is supported to enter a process of cleansing, balance, and reset from within.",
        ],
      },
      accent: "sage",
    },
    {
      number: "05",
      title: { zh: "5月21–31日｜8天健康重启完整系列", en: "May 21–31｜8-Day Complete Health Reset" },
      date: { zh: "5月21–31日", en: "May 21–31" },
      price: "RM3580",
      suitable: {
        zh: "这是最完整、最推荐的学习方式。适合想系统性了解身体、建立瑜伽基础、学习五大元素净化，并结合阿育吠陀饮食与疗程进行深度养护的学员。",
        en: "The most complete and recommended journey for those who want to understand the body systematically, build a yoga foundation, learn Five Elements Purification, and receive deeper support through Ayurvedic food and treatment.",
      },
      includes: {
        zh: [
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
        en: [
          "Nadi Balance Scan",
          "One-to-one report explanation by Ayurvedic doctor",
          "Yoga Sri consultation",
          "Introduction to Hatha Yoga and foundational postures",
          "Yoga Namaskar / Namaste process",
          "Miracle of Mind",
          "Guided meditation",
          "Surya Shakti / Surya Kriya practice",
          "Balancing Yoga and wellbeing meditation",
          "Five Elements Purification class",
          "Introduction to elemental purification",
          "Home care methods",
          "Ayurvedic food and yogic diet class",
          "Ayurvedic Brunch",
          "Panchakarma Ayurvedic treatment",
        ],
      },
      focus: {
        zh: [
          "8天完整系列会从身体检测开始，帮助你先了解自己的体质与状态，再通过哈他瑜伽、呼吸、冥想、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，让身体逐步进入更稳定、更轻盈、更清明的状态。",
          "第一阶段帮助你建立身体觉察与瑜伽基础。第二阶段带你深入五大元素净化与阿育吠陀养护。",
          "这是一套从检测、理解、练习、饮食、净化到养护的完整健康重启过程。",
        ],
        en: [
          "The 8-day series begins with body assessment, then supports you to understand your constitution and condition. Through Hatha Yoga, breath, meditation, Ayurvedic food, Five Elements Purification, and Panchakarma treatment, the body gradually enters a steadier, lighter, and clearer state.",
          "Stage one builds body awareness and yoga foundation. Stage two deepens Five Elements Purification and Ayurvedic care.",
          "This is a complete wellness reset from assessment, understanding, practice, food, purification, to daily support.",
        ],
      },
      accent: "deepGreen",
    },
  ];

  const faqs: FAQItem[] = [
    {
      q: { zh: "零基础可以参加吗？", en: "Can beginners join?" },
      a: {
        zh: "可以。基础配套就是为零基础、身体僵硬、想开始瑜伽但不知道从哪里开始的人设计的。",
        en: "Yes. The foundation package is designed for beginners and those who want to start yoga gently.",
      },
    },
    {
      q: { zh: "我应该先选哪一个配套？", en: "Which package should I choose first?" },
      a: {
        zh: "第一次接触建议先做 Nadi Balance Scan。如果想完整体验一天，可以选一日健康重启体验；想系统学习，建议选择8天完整系列。",
        en: "If you are new, begin with the Nadi Balance Scan. For a one-day introduction, choose the one-day experience. For systematic learning, choose the 8-day complete series.",
      },
    },
    {
      q: { zh: "Panchakarma 疗程适合所有人吗？", en: "Is Panchakarma suitable for everyone?" },
      a: {
        zh: "疗程会根据个人体质与医生建议安排。若有特殊身体状况，建议先咨询医生并从 Nadi Scan 开始。",
        en: "Treatments are arranged according to constitution and doctor guidance. If you have specific health conditions, begin with consultation and Nadi Scan.",
      },
    },
    {
      q: { zh: "付款后如何确认名额？", en: "How do I confirm my seat after payment?" },
      a: {
        zh: "请先填写报名表格，完成银行转账或 TNG 付款后，保留付款截图以便确认名额。",
        en: "Please complete the registration form and keep your bank transfer or TNG payment screenshot for confirmation.",
      },
    },
  ];

  return (
    <main>
      <style>{`
        :root {
          --cream: #f7efe4;
          --ivory: #fffaf1;
          --sage: #64745f;
          --soft-sage: #e9eee2;
          --deep: #3f543f;
          --dark: #273326;
          --terracotta: #b66b43;
          --copper: #9f5d3d;
          --gold: #d6b77c;
          --line: #e4d0b5;
          --text: #263428;
          --muted: #5d675a;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          color: var(--text);
          background:
            radial-gradient(circle at 6% 10%, rgba(255,255,255,.72), transparent 27%),
            radial-gradient(circle at 90% 8%, rgba(100, 116, 95, .16), transparent 30%),
            linear-gradient(180deg, #f7efe4 0%, #fbf6ec 48%, #f2e8d8 100%);
          font-family: Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif;
        }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }
        .page { overflow: hidden; }
        .container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }

        .topNav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(248, 240, 230, .84);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(228, 208, 181, .62);
        }
        .navInner {
          width: min(1180px, calc(100% - 40px));
          min-height: 74px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }
        .brandMark {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--deep);
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .brandDot {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.65);
          color: var(--terracotta);
        }
        .navRight { display: flex; align-items: center; gap: 14px; }
        .navLink { color: var(--muted); font-size: 14px; padding: 9px 10px; }
        .langSwitch {
          display: inline-flex;
          gap: 4px;
          padding: 4px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.72);
          box-shadow: 0 10px 26px rgba(80,62,43,.06);
        }
        .langSwitch button {
          border: 0;
          cursor: pointer;
          border-radius: 999px;
          background: transparent;
          color: var(--muted);
          padding: 9px 14px;
          font-size: 13px;
          transition: .22s ease;
        }
        .langSwitch button.active { background: var(--deep); color: #fff; }

        .hero {
          position: relative;
          min-height: calc(100vh - 74px);
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(390px, .96fr);
          gap: clamp(38px, 5vw, 72px);
          align-items: center;
          padding: clamp(48px, 6vw, 82px) 0 70px;
        }
        .hero::before {
          content: "";
          position: absolute;
          left: -23%;
          top: -18%;
          width: 770px;
          height: 770px;
          border-radius: 50%;
          background: rgba(255,255,255,.54);
          z-index: -1;
        }
        .hero::after {
          content: "";
          position: absolute;
          right: -20%;
          bottom: 5%;
          width: 670px;
          height: 670px;
          border-radius: 50%;
          background: rgba(214,183,124,.17);
          filter: blur(5px);
          z-index: -1;
        }
        .heroCopy { max-width: 720px; }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255,255,255,.62);
          color: var(--sage);
          font-size: 12px;
          letter-spacing: .22em;
          text-transform: uppercase;
          box-shadow: 0 10px 30px rgba(80,62,43,.06);
        }
        .eyebrow span { width: 8px; height: 8px; border-radius: 50%; background: var(--terracotta); }
        h1 {
          margin: 30px 0 0;
          color: var(--deep);
          font-size: clamp(48px, 6.2vw, 84px);
          line-height: 1.04;
          font-weight: 400;
          letter-spacing: .01em;
        }
        h1 strong { display: block; color: var(--terracotta); font-weight: 400; }
        .subtitle {
          margin-top: 24px;
          color: var(--copper);
          font-size: clamp(18px, 1.55vw, 22px);
          line-height: 1.62;
        }
        .divider {
          width: 280px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, var(--terracotta), var(--gold), transparent);
        }
        .heroText { color: #455045; font-size: clamp(16px, 1.15vw, 18px); line-height: 1.95; }
        .heroChips {
          max-width: 650px;
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .chip {
          min-height: 86px;
          padding: 15px 17px;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.64);
          box-shadow: 0 12px 32px rgba(74,54,38,.06);
        }
        .chip small { display: block; color: var(--copper); font-size: 12px; margin-bottom: 5px; }
        .chip b { display: block; color: var(--deep); font-size: clamp(19px, 1.7vw, 24px); line-height: 1.28; font-weight: 400; }
        .wideChip { grid-column: span 2; }
        .buttons { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 35px; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          padding: 15px 29px;
          border-radius: 999px;
          font-size: 16px;
          line-height: 1.2;
          transition: .25s ease;
          box-shadow: 0 18px 42px rgba(63,84,63,.14);
        }
        .btn:hover { transform: translateY(-2px); }
        .btnGreen { background: var(--deep); color: #fff; }
        .btnOrange { background: var(--terracotta); color: #fff; }
        .photoWrap { position: relative; }
        .photoGlow {
          position: absolute;
          inset: -28px;
          border-radius: 58px;
          background: linear-gradient(135deg, rgba(214,183,124,.36), rgba(255,255,255,0));
          z-index: -1;
        }
        .photoCard {
          position: relative;
          overflow: hidden;
          padding: 12px;
          border-radius: 48px;
          border: 1px solid rgba(255,255,255,.74);
          background: rgba(255,255,255,.38);
          box-shadow: 0 30px 80px rgba(67,49,35,.16);
        }
        .profileImg {
          display: block;
          width: 100%;
          height: min(74vh, 720px);
          min-height: 560px;
          object-fit: cover;
          object-position: center 14%;
          border-radius: 38px;
        }
        .certBox {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 26px;
          display: grid;
          grid-template-columns: 190px 1fr;
          align-items: center;
          gap: 20px;
          padding: 20px 22px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.72);
          background: rgba(255,250,241,.92);
          box-shadow: 0 18px 48px rgba(70,50,34,.14);
          backdrop-filter: blur(12px);
        }
        .certLogoWrap {
          width: 190px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #fff;
          padding: 10px 14px;
          box-shadow: 0 8px 22px rgba(70,50,34,.08);
        }
        .certLogo { width: 100%; height: 100%; object-fit: contain; display: block; }
        .certBox small { display: block; color: var(--copper); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; margin-bottom: 6px; }
        .certBox b { color: var(--deep); font-size: 18px; line-height: 1.38; font-weight: 500; }

        .journey {
          margin: 0 auto 74px;
          padding: 30px;
          border-radius: 38px;
          background: linear-gradient(135deg, #3f543f, #536a50);
          color: #fff;
          box-shadow: 0 28px 70px rgba(49,65,49,.22);
        }
        .journeyGrid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; text-align: center; }
        .journeyIcon {
          width: 52px;
          height: 52px;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(240,211,161,.6);
          color: #f0d3a1;
        }
        .journeyGrid p { margin: 0; color: #f4dfbd; letter-spacing: .18em; font-size: 14px; }

        .section { padding: 70px 0; }
        .sectionTitle { max-width: 780px; margin-bottom: 42px; }
        .sectionTitle small { color: var(--terracotta); letter-spacing: .28em; text-transform: uppercase; font-size: 12px; }
        h2 { margin: 14px 0 0; color: var(--deep); font-size: clamp(36px, 4.8vw, 62px); line-height: 1.14; font-weight: 400; }
        .sectionTitle p { margin-top: 17px; color: var(--muted); font-size: 17px; line-height: 1.85; }
        .softDivider {
          width: min(1180px, calc(100% - 40px));
          height: 1px;
          margin: 0 auto;
          background: linear-gradient(90deg, transparent, var(--line), transparent);
        }

        .pillarGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .pillarCard {
          position: relative;
          overflow: hidden;
          min-height: 230px;
          padding: 28px;
          border-radius: 34px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.58);
          box-shadow: 0 18px 46px rgba(72,53,38,.08);
        }
        .pillarCard::after {
          content: "";
          position: absolute;
          right: -44px;
          bottom: -44px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: rgba(214,183,124,.2);
        }
        .pillarIcon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: #e9eee2;
          color: var(--terracotta);
          font-size: 28px;
          margin-bottom: 20px;
        }
        .pillarCard h3 { font-size: 28px; }
        .pillarCard p { color: var(--muted); line-height: 1.75; }

        .elementBand {
          position: relative;
          overflow: hidden;
          border-radius: 42px;
          border: 1px solid rgba(228,208,181,.75);
          background: linear-gradient(135deg, rgba(63,84,63,.96), rgba(82,104,78,.94));
          padding: 34px;
          color: #fff;
          box-shadow: 0 26px 70px rgba(49,65,49,.2);
        }
        .elementBand::before {
          content: "";
          position: absolute;
          inset: -80px -120px auto auto;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(214,183,124,.18);
        }
        .elementHeader {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin-bottom: 28px;
        }
        .elementHeader small { color: #f0d3a1; letter-spacing: .28em; text-transform: uppercase; }
        .elementHeader h2 { color: #fff; }
        .elementHeader p { color: #f7ead7; line-height: 1.8; }
        .elementGrid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        .elementCard {
          padding: 20px 14px;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(255,255,255,.09);
          text-align: center;
        }
        .elementIcon { font-size: 34px; color: #f0d3a1; margin-bottom: 10px; }
        .elementCard h3 { color: #fff; font-size: 20px; margin: 0 0 8px; }
        .elementCard p { margin: 0; color: #f7ead7; line-height: 1.55; font-size: 14px; }

        .packageList { display: grid; gap: 16px; }
        .packageRow {
          display: grid;
          grid-template-columns: 78px minmax(0, 1fr) 172px 172px;
          align-items: center;
          gap: 18px;
          padding: 18px;
          border-radius: 30px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.6);
          box-shadow: 0 12px 36px rgba(74,54,38,.06);
          transition: .25s ease;
        }
        .packageRow:hover { transform: translateY(-3px); box-shadow: 0 26px 56px rgba(74,54,38,.12); }
        .packageIcon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: var(--soft-sage);
          color: var(--deep);
          font-size: 29px;
        }
        .packageInfo h3 { margin: 0; color: var(--deep); font-size: clamp(21px, 2.2vw, 27px); line-height: 1.25; font-weight: 500; }
        .packageInfo p { margin: 6px 0 0; color: #687266; line-height: 1.45; }
        .dateBox { padding: 17px 14px; border-radius: 20px; text-align: center; background: #f4e7d6; color: var(--copper); font-size: 17px; line-height: 1.25; }
        .priceBox { padding: 18px 14px; border-radius: 20px; text-align: center; color: #fff; font-size: 28px; line-height: 1; white-space: nowrap; }
        .priceBox.green { background: var(--deep); }
        .priceBox.terracotta { background: var(--terracotta); }
        .priceBox.sage { background: var(--sage); }
        .priceBox.deepGreen { background: #344836; }
        .priceBox.gold { background: #b89155; }

        .detailGrid { display: grid; gap: 18px; }
        .detailCard {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.66);
          box-shadow: 0 18px 50px rgba(72,53,38,.08);
        }
        .detailCard::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 8px;
          background: var(--deep);
        }
        .detailCard.terracotta::before { background: var(--terracotta); }
        .detailCard.sage::before { background: var(--sage); }
        .detailCard.deepGreen::before { background: #344836; }
        .detailTrigger {
          width: 100%;
          border: 0;
          cursor: pointer;
          display: grid;
          grid-template-columns: 96px minmax(0, 1fr) 150px 42px;
          gap: 18px;
          align-items: center;
          padding: 24px 28px 24px 34px;
          background: transparent;
          text-align: left;
        }
        .detailNumber {
          color: var(--terracotta);
          letter-spacing: .22em;
          font-size: 13px;
        }
        .detailTitle h3 {
          margin: 0;
          color: var(--deep);
          font-size: clamp(24px, 2.7vw, 34px);
          line-height: 1.18;
        }
        .detailDate { margin-top: 8px; color: var(--muted); line-height: 1.5; font-size: 15px; }
        .detailPrice {
          color: var(--terracotta);
          font-size: 34px;
          line-height: 1;
          white-space: nowrap;
          text-align: right;
        }
        .accordionIcon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #f3e5d1;
          color: var(--deep);
          font-size: 24px;
          transition: .25s ease;
        }
        .detailCard.open .accordionIcon { transform: rotate(45deg); background: var(--deep); color: #fff; }
        .detailBody {
          display: none;
          padding: 0 28px 28px 34px;
        }
        .detailCard.open .detailBody {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 20px;
        }
        .miniBlock {
          padding: 20px;
          border-radius: 26px;
          background: rgba(255,250,241,.78);
          border: 1px solid rgba(228,208,181,.72);
        }
        .miniBlock h4 {
          margin: 0 0 12px;
          color: var(--deep);
          font-size: 18px;
          letter-spacing: .08em;
          font-weight: 600;
        }
        .miniBlock p { margin: 0; color: var(--muted); line-height: 1.78; }
        .miniBlock ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }
        .miniBlock li {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 9px;
          align-items: start;
          color: #4d584d;
          line-height: 1.55;
        }
        .miniBlock li span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #e2eadb;
          color: var(--deep);
          font-size: 13px;
          margin-top: 1px;
        }
        .focusBlock { grid-column: span 2; background: linear-gradient(135deg, rgba(63,84,63,.96), rgba(79,102,77,.96)); }
        .focusBlock h4 { color: #f0d3a1; }
        .focusBlock p { color: #f7ead7; }
        .focusText { display: grid; gap: 10px; }

        .faqGrid { display: grid; gap: 14px; }
        .faqItem {
          border-radius: 26px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.64);
          overflow: hidden;
        }
        .faqQuestion {
          width: 100%;
          border: 0;
          cursor: pointer;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 24px;
          color: var(--deep);
          font-size: 20px;
          text-align: left;
        }
        .faqAnswer { display: none; padding: 0 24px 22px; color: var(--muted); line-height: 1.75; }
        .faqItem.open .faqAnswer { display: block; }
        .faqPlus {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3e5d1;
          color: var(--terracotta);
          transition: .25s ease;
        }
        .faqItem.open .faqPlus { transform: rotate(45deg); background: var(--deep); color: #fff; }

        .payment { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 32px; padding: 38px; border-radius: 48px; border: 1px solid var(--line); background: rgba(255,255,255,.62); box-shadow: 0 24px 64px rgba(72,53,38,.09); }
        .paymentCards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 28px; }
        .paymentCard { padding: 24px; border-radius: 30px; background: #f5e7d4; }
        .paymentCard:nth-child(2) { background: #edf1e5; }
        .paymentCard small, .qrBox small { color: var(--terracotta); letter-spacing: .16em; text-transform: uppercase; font-size: 12px; }
        .paymentCard h3 { margin-top: 14px; font-size: 24px; }
        .account { margin-top: 8px; color: var(--terracotta); font-size: clamp(26px, 3vw, 34px); }
        .qrBox { padding: 22px; border-radius: 30px; background: #fff8ed; border: 1px solid var(--line); text-align: center; }
        .qrBox img { display: block; width: 100%; max-width: 280px; margin: 18px auto 0; border-radius: 20px; object-fit: contain; background: #fff; }

        .closing { margin: 60px auto 90px; max-width: 960px; padding: 58px 36px; border-radius: 48px; background: linear-gradient(135deg, #3f543f, #51684f); color: #fff; text-align: center; box-shadow: 0 30px 80px rgba(49,65,49,.22); }
        .closing small { color: #f0d3a1; letter-spacing: .26em; text-transform: uppercase; }
        .closing h2 { color: #fff; }
        .closing h2 span { display: block; color: #f0d3a1; }
        .closing p { max-width: 700px; margin: 22px auto 0; color: #f8ead5; line-height: 1.85; }
        .closing .btn { margin-top: 34px; background: var(--terracotta); color: #fff; }

        .floatingWhatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 120;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 999px;
          background: #3f543f;
          color: #fff;
          box-shadow: 0 18px 42px rgba(39,51,38,.28);
          border: 1px solid rgba(255,255,255,.18);
          font-size: 15px;
        }
        .floatingWhatsapp span {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.15);
        }

        @media (max-width: 980px) {
          .hero, .payment { grid-template-columns: 1fr; }
          .hero { min-height: auto; padding-top: 44px; gap: 38px; }
          .heroCopy { max-width: 100%; }
          .profileImg { height: 580px; min-height: 0; object-position: center 12%; }
          .certBox { grid-template-columns: 168px 1fr; }
          .certLogoWrap { width: 168px; height: 66px; }
          .journeyGrid { grid-template-columns: repeat(3, 1fr); }
          .pillarGrid { grid-template-columns: 1fr; }
          .elementGrid { grid-template-columns: repeat(2, 1fr); }
          .packageRow { grid-template-columns: 70px 1fr; }
          .dateBox, .priceBox { grid-column: span 1; }
          .detailTrigger { grid-template-columns: 70px 1fr 130px 42px; }
          .detailCard.open .detailBody { grid-template-columns: 1fr; }
          .focusBlock { grid-column: span 1; }
          .paymentCards { grid-template-columns: 1fr; }
        }

        @media (max-width: 680px) {
          .container, .navInner { width: min(100% - 28px, 1180px); }
          .navInner { min-height: auto; padding: 14px 0; align-items: flex-start; }
          .brandMark { font-size: 11px; letter-spacing: .14em; }
          .navRight { gap: 8px; align-items: flex-end; flex-direction: column; }
          .navLink { display: none; }
          h1 { font-size: 46px; letter-spacing: 0; }
          h2 { font-size: 36px; }
          h3 { font-size: 30px; }
          .subtitle { font-size: 18px; }
          .heroText { font-size: 16px; line-height: 1.85; }
          .heroChips { grid-template-columns: 1fr; }
          .wideChip { grid-column: span 1; }
          .buttons { flex-direction: column; }
          .btn { width: 100%; }
          .profileImg { height: 450px; object-position: center 10%; }
          .photoCard { border-radius: 34px; padding: 9px; }
          .profileImg { border-radius: 28px; }
          .certBox { left: 16px; right: 16px; bottom: 16px; grid-template-columns: 120px 1fr; gap: 12px; padding: 13px; border-radius: 22px; }
          .certLogoWrap { width: 120px; height: 54px; border-radius: 14px; padding: 8px 10px; }
          .certBox small { font-size: 9px; letter-spacing: .13em; }
          .certBox b { font-size: 13px; line-height: 1.35; }
          .journeyGrid { grid-template-columns: repeat(2, 1fr); }
          .journeyGrid p { letter-spacing: .12em; }
          .elementGrid { grid-template-columns: 1fr; }
          .packageRow { grid-template-columns: 1fr; }
          .packageIcon { width: 58px; height: 58px; }
          .detailTrigger { grid-template-columns: 1fr 42px; padding: 24px; }
          .detailNumber, .detailPrice { grid-column: 1; text-align: left; }
          .detailTitle { grid-column: 1; }
          .accordionIcon { grid-column: 2; grid-row: 1 / span 3; align-self: center; }
          .detailBody { padding: 0 24px 24px; }
          .payment { padding: 24px; border-radius: 32px; gap: 22px; }
          .floatingWhatsapp { right: 14px; bottom: 14px; padding: 12px 14px; font-size: 13px; }
          .floatingWhatsapp span { width: 24px; height: 24px; }
        }
      `}</style>

      <div className="page">
        <nav className="topNav">
          <div className="navInner">
            <a className="brandMark" href="#top" aria-label="Yoga Sri Wellness">
              <span className="brandDot">✦</span>
              Yoga Sri Wellness
            </a>
            <div className="navRight">
              <a className="navLink" href="#packages">{copy.navProgram}</a>
              <a className="navLink" href="#details">{copy.navDetails}</a>
              <a className="navLink" href="#faq">{copy.navFAQ}</a>
              <a className="navLink" href="#payment">{copy.navPayment}</a>
              <div className="langSwitch" aria-label="Language switcher">
                <button type="button" className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中文</button>
                <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              </div>
            </div>
          </div>
        </nav>

        <section id="top" className="container hero">
          <div className="heroCopy">
            <div className="eyebrow"><span /> Yoga Sri Wellness</div>
            <h1>{copy.heroPre}<strong>{copy.heroTitle}</strong></h1>
            <p className="subtitle">{copy.heroSubtitle}</p>
            <div className="divider" />
            <p className="heroText">{copy.heroText}</p>
            <div className="heroChips">
              <div className="chip"><small>{copy.chip1}</small><b>RM180</b></div>
              <div className="chip"><small>{copy.chip2}</small><b>RM1080</b></div>
              <div className="chip wideChip"><small>{copy.chip3}</small><b>{copy.chip3Price}</b></div>
              <div className="chip"><small>{copy.chip4}</small><b>RM3580</b></div>
            </div>
            <div className="buttons">
              <a href="#packages" className="btn btnGreen">{copy.learn}</a>
              <a href={formUrl} target="_blank" rel="noreferrer" className="btn btnOrange">{copy.register}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btnGreen">{copy.whatsapp}</a>
            </div>
          </div>

          <div className="photoWrap">
            <div className="photoGlow" />
            <div className="photoCard">
              <img src="/yogasriprofile.jpg" alt="Yoga Sri" className="profileImg" />
              <div className="certBox">
                <div className="certLogoWrap">
                  <img src="/HYTLogo.png.jpg" alt="Sadhguru Gurukulam Certified Hatha Yoga Teacher" className="certLogo" />
                </div>
                <div>
                  <small>{copy.certifiedSmall}</small>
                  <b>{copy.certifiedTitle}</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container journey">
          <div className="journeyGrid">
            {copy.journey.map((item, index) => (
              <div key={item}>
                <div className="journeyIcon">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="softDivider" />

        <section className="container section">
          <div className="sectionTitle">
            <small>{copy.pillarsSmall}</small>
            <h2>{copy.pillarsTitle}</h2>
            <p>{copy.pillarsText}</p>
          </div>
          <div className="pillarGrid">
            {pillars.map((pillar) => (
              <div className="pillarCard" key={pillar.title}>
                <div className="pillarIcon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section">
          <div className="elementBand">
            <div className="elementHeader">
              <small>{copy.elementsSmall}</small>
              <h2>{copy.elementsTitle}</h2>
              <p>{copy.elementsText}</p>
            </div>
            <div className="elementGrid">
              {elements.map((element) => (
                <div className="elementCard" key={element.name}>
                  <div className="elementIcon">{element.icon}</div>
                  <h3>{element.name}</h3>
                  <p>{element.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="softDivider" />

        <section id="packages" className="container section">
          <div className="sectionTitle">
            <small>{copy.programOptions}</small>
            <h2>{copy.chooseTitle}</h2>
            <p>{copy.chooseText}</p>
          </div>
          <div className="packageList">
            {packages.map((item) => (
              <div className="packageRow" key={item.title.zh}>
                <div className="packageIcon">{item.icon}</div>
                <div className="packageInfo">
                  <h3>{item.title[lang]}</h3>
                  <p>{item.subtitle[lang]}</p>
                </div>
                <div className="dateBox">{item.date[lang]}</div>
                <div className={`priceBox ${item.color}`}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="details" className="container section">
          <div className="sectionTitle">
            <small>{copy.detailSmall}</small>
            <h2>{copy.detailTitle}</h2>
            <p>{copy.detailText}</p>
          </div>

          <div className="detailGrid">
            {detailPackages.map((item) => {
              const isOpen = openPackage === item.number;
              return (
                <article className={`detailCard ${item.accent} ${isOpen ? "open" : ""}`} key={item.number}>
                  <button
                    type="button"
                    className="detailTrigger"
                    onClick={() => setOpenPackage(isOpen ? null : item.number)}
                    aria-expanded={isOpen}
                  >
                    <div className="detailNumber">{item.number}</div>
                    <div className="detailTitle">
                      <h3>{item.title[lang]}</h3>
                      {item.date && <p className="detailDate">{item.date[lang]}</p>}
                    </div>
                    <div className="detailPrice">{item.price}</div>
                    <div className="accordionIcon">+</div>
                  </button>

                  <div className="detailBody">
                    <div className="miniBlock">
                      <h4>{copy.suitable}</h4>
                      <p>{item.suitable[lang]}</p>
                    </div>

                    <div className="miniBlock">
                      <h4>{copy.includes}</h4>
                      <ul>
                        {item.includes[lang].map((line) => (
                          <li key={line}><span>✓</span>{line}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="miniBlock focusBlock">
                      <h4>{copy.focus}</h4>
                      <div className="focusText">
                        {item.focus[lang].map((line) => <p key={line}>{line}</p>)}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="softDivider" />

        <section id="faq" className="container section">
          <div className="sectionTitle">
            <small>{copy.faqSmall}</small>
            <h2>{copy.faqTitle}</h2>
            <p>{copy.faqText}</p>
          </div>
          <div className="faqGrid">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`faqItem ${isOpen ? "open" : ""}`} key={faq.q.zh}>
                  <button
                    type="button"
                    className="faqQuestion"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    {faq.q[lang]}
                    <span className="faqPlus">+</span>
                  </button>
                  <div className="faqAnswer">{faq.a[lang]}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="payment" className="container section">
          <div className="payment">
            <div>
              <div className="sectionTitle" style={{ marginBottom: 0 }}>
                <small>{copy.paymentSmall}</small>
                <h2>{copy.paymentTitle}</h2>
                <p>{copy.paymentText}</p>
              </div>
              <div className="paymentCards">
                <div className="paymentCard">
                  <small>{copy.bank}</small>
                  <h3>YOGASRI ENTERPRISE</h3>
                  <p>Public Bank</p>
                  <div className="account">3231265424</div>
                </div>
                <div className="paymentCard">
                  <small>{copy.form}</small>
                  <h3>{copy.formText}</h3>
                  <a href={formUrl} target="_blank" rel="noreferrer" className="btn btnGreen" style={{ marginTop: 18 }}>{copy.openForm}</a>
                </div>
              </div>
            </div>
            <div className="qrBox">
              <small>TNG QR Payment</small>
              <img src="/TNG.jpg" alt="TNG QR Code" />
              <p>{copy.tngText}</p>
            </div>
          </div>
        </section>

        <section className="container closing">
          <small>{copy.closingSmall}</small>
          <h2>{copy.closingTitle}<span>{copy.closingHighlight}</span></h2>
          <p>{copy.closingText}</p>
          <a href={formUrl} target="_blank" rel="noreferrer" className="btn">{copy.finalButton}</a>
        </section>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floatingWhatsapp" aria-label="WhatsApp Yoga Sri">
          <span>☎</span>
          {copy.whatsapp}
        </a>
      </div>
    </main>
  );
}
