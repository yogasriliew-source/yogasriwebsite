"use client";

import { useState } from "react";

type Lang = "zh" | "en";

type PackageColor = "green" | "terracotta" | "sage" | "deepGreen";

type ProgramPackage = {
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  date: Record<Lang, string>;
  price: string;
  icon: string;
  color: PackageColor;
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

  const t = {
    zh: {
      eyebrow: "Yoga Sri Wellness",
      navProgram: "课程配套",
      navPayment: "报名付款",
      langLeft: "中文",
      langRight: "EN",
      heroPre: "五月",
      heroTitle: "健康重启系列",
      heroSubtitle: "Nadi Balance Scan × Hatha Yoga × Ayurveda × 五大元素净化",
      heroText:
        "从身体检测开始，重新理解你的体质、能量、呼吸与生活节奏。通过 Nadi Balance Scan、阿育吠陀医生讲解、Isha 哈他瑜伽、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，帮助身体慢慢回到更轻盈、稳定、清明的状态。",
      chip1: "单项体验",
      chip2: "一日体验",
      chip3: "4天配套",
      chip4: "8天完整系列",
      learn: "了解课程",
      register: "立即报名",
      certifiedSmall: "Certified Teacher",
      certifiedTitle: "Sadhguru Gurukulam 认证哈他瑜伽老师",
      journey: ["检测", "理解", "练习", "饮食", "净化", "养护"],
      programOptions: "Program Options",
      chooseTitle: "选择适合你的重启方式",
      chooseText:
        "第一次接触，可以从 Nadi Balance Scan 开始；想完整调整身体、能量、饮食与生活节奏，最推荐 8天健康重启完整系列。",
      basicBadge: "5月21–24日｜RM1880",
      basicTitle: "健康重启基础配套",
      basicText:
        "适合零基础、想开始瑜伽、想了解体质，并建立身体觉察与练习基础的学员。",
      deepBadge: "5月28–31日｜RM2580",
      deepTitle: "深度重启配套",
      deepText:
        "适合想深入学习五大元素净化、阿育吠陀饮食、居家养护与 Panchakarma 疗程的人。",
      signatureBadge: "最完整 · 最推荐",
      signatureTitle: "8天健康重启完整系列",
      signatureText:
        "系统性了解身体、建立瑜伽基础、学习五大元素净化，并结合阿育吠陀饮食与疗程进行深度养护。",
      stageOne: "第一阶段",
      stageOneTitle: "建立身体觉察与瑜伽基础",
      stageOneText: "了解体质 · 平衡能量 · 建立稳定基础",
      stageTwo: "第二阶段",
      stageTwoTitle: "深入五大元素净化与阿育吠陀养护",
      stageTwoText: "净化 · 饮食 · 居家养护 · Panchakarma 疗程",
      paymentSmall: "Registration & Payment",
      paymentTitle: "报名与付款",
      paymentText:
        "请先填写报名表格，并完成银行转账或使用 TNG QR 付款。付款后请保留转账截图，方便确认名额。",
      bank: "银行转账",
      form: "报名表格",
      formText: "填写资料确认名额",
      openForm: "打开报名表格",
      tngText: "请使用 TNG 扫描付款",
      closingSmall: "May Wellness Reset",
      closingTitle: "从听懂身体开始，",
      closingHighlight: "重新建立稳定与清明。",
      closingText: "这是一套从检测、理解、练习、饮食、净化到养护的完整健康重启过程。",
      finalButton: "立即填写报名表格",
    },
    en: {
      eyebrow: "Yoga Sri Wellness",
      navProgram: "Programs",
      navPayment: "Payment",
      langLeft: "中文",
      langRight: "EN",
      heroPre: "May",
      heroTitle: "Health Reset Series",
      heroSubtitle: "Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements Purification",
      heroText:
        "Begin with a body assessment and understand your constitution, energy, breath, and daily rhythm. Through Nadi Balance Scan, Ayurvedic doctor guidance, Isha Hatha Yoga, Ayurvedic food, Five Elements Purification, and Panchakarma treatment, this series supports the body to return to a lighter, steadier, and clearer state.",
      chip1: "Single Session",
      chip2: "One-Day Experience",
      chip3: "4-Day Packages",
      chip4: "8-Day Full Series",
      learn: "View Programs",
      register: "Register Now",
      certifiedSmall: "Certified Teacher",
      certifiedTitle: "Sadhguru Gurukulam Certified Hatha Yoga Teacher",
      journey: ["Assess", "Understand", "Practice", "Nourish", "Purify", "Support"],
      programOptions: "Program Options",
      chooseTitle: "Choose Your Reset Journey",
      chooseText:
        "Start with the Nadi Balance Scan if you are new. For a complete reset of body, energy, food, and lifestyle rhythm, the 8-day full series is the most recommended option.",
      basicBadge: "May 21–24｜RM1880",
      basicTitle: "4-Day Foundation Reset",
      basicText:
        "Suitable for beginners who want to start yoga, understand their constitution, and build body awareness through guided practice.",
      deepBadge: "May 28–31｜RM2580",
      deepTitle: "4-Day Deep Reset",
      deepText:
        "Suitable for those who want to go deeper into Five Elements Purification, Ayurvedic food, home care, and Panchakarma treatment.",
      signatureBadge: "Most Complete · Recommended",
      signatureTitle: "8-Day Complete Health Reset",
      signatureText:
        "A complete journey to understand the body, build a Hatha Yoga foundation, learn Five Elements Purification, and receive deeper support through Ayurvedic food and treatment.",
      stageOne: "Stage One",
      stageOneTitle: "Build Body Awareness & Yoga Foundation",
      stageOneText: "Understand constitution · Balance energy · Build steady foundation",
      stageTwo: "Stage Two",
      stageTwoTitle: "Deepen Five Elements & Ayurvedic Care",
      stageTwoText: "Purification · Food · Home care · Panchakarma treatment",
      paymentSmall: "Registration & Payment",
      paymentTitle: "Registration & Payment",
      paymentText:
        "Please complete the registration form first, then make payment by bank transfer or TNG QR. Keep your payment screenshot for confirmation.",
      bank: "Bank Transfer",
      form: "Registration Form",
      formText: "Submit your details to reserve your place",
      openForm: "Open Registration Form",
      tngText: "Scan with TNG to make payment",
      closingSmall: "May Wellness Reset",
      closingTitle: "Begin by listening to the body,",
      closingHighlight: "then rebuild steadiness and clarity.",
      closingText: "A complete reset journey from assessment, understanding, practice, food, purification, to daily support.",
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
      title: { zh: "4天健康重启基础配套", en: "4-Day Foundation Reset" },
      subtitle: { zh: "建立身体觉察与瑜伽基础", en: "Body awareness and yoga foundation" },
      date: { zh: "5月21–24日", en: "May 21–24" },
      price: "RM1880",
      icon: "✺",
      color: "terracotta",
    },
    {
      title: { zh: "4天深度重启配套", en: "4-Day Deep Reset" },
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

  const basicItems = {
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
  }[lang];

  const deepItems = {
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
  }[lang];

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
          --shadow: rgba(72, 53, 38, 0.12);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 8% 12%, rgba(216, 183, 124, 0.28), transparent 28%),
            radial-gradient(circle at 92% 10%, rgba(100, 116, 95, 0.18), transparent 31%),
            linear-gradient(180deg, #f8f0e6 0%, #fbf6ec 48%, #f2e8d8 100%);
          color: var(--text);
          font-family: Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif;
        }

        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }
        .page { overflow: hidden; }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .topNav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(248, 240, 230, 0.76);
          border-bottom: 1px solid rgba(228, 208, 181, 0.55);
        }

        .navInner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brandMark {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--deep);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          white-space: nowrap;
        }

        .brandDot {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.55);
          color: var(--terracotta);
        }

        .navRight {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .navLink {
          font-size: 14px;
          color: var(--muted);
          padding: 9px 10px;
        }

        .langSwitch {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 10px 26px rgba(80, 62, 43, 0.06);
        }

        .langSwitch button {
          border: 0;
          cursor: pointer;
          border-radius: 999px;
          padding: 9px 14px;
          background: transparent;
          color: var(--muted);
          font-size: 13px;
          transition: 0.22s ease;
        }

        .langSwitch button.active {
          background: var(--deep);
          color: white;
          box-shadow: 0 10px 20px rgba(63, 84, 63, 0.16);
        }

        .hero {
          position: relative;
          min-height: calc(100vh - 76px);
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(390px, 0.95fr);
          gap: clamp(36px, 5vw, 72px);
          align-items: center;
          padding: clamp(48px, 6vw, 84px) 0 70px;
        }

        .hero::before {
          content: "";
          position: absolute;
          left: -22%;
          top: -18%;
          width: 760px;
          height: 760px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.54);
          z-index: -1;
        }

        .hero::after {
          content: "";
          position: absolute;
          right: -20%;
          bottom: 7%;
          width: 660px;
          height: 660px;
          border-radius: 999px;
          background: rgba(213, 192, 153, 0.18);
          filter: blur(5px);
          z-index: -1;
        }

        .heroCopy {
          max-width: 720px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.56);
          color: var(--sage);
          letter-spacing: 0.22em;
          font-size: 12px;
          text-transform: uppercase;
          box-shadow: 0 10px 30px rgba(80, 62, 43, 0.06);
        }

        .eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--terracotta);
        }

        h1 {
          margin: 30px 0 0;
          color: var(--deep);
          font-size: clamp(50px, 7vw, 92px);
          line-height: 1.02;
          font-weight: 400;
          letter-spacing: 0.035em;
          text-wrap: balance;
        }

        h1 strong {
          display: block;
          color: var(--terracotta);
          font-weight: 400;
        }

        .subtitle {
          margin-top: 25px;
          max-width: 720px;
          color: var(--copper);
          font-size: clamp(18px, 1.7vw, 22px);
          line-height: 1.62;
        }

        .divider {
          width: 280px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, var(--terracotta), var(--gold), transparent);
        }

        .heroText {
          max-width: 720px;
          color: #455045;
          font-size: clamp(16px, 1.22vw, 18px);
          line-height: 1.95;
        }

        .heroChips {
          display: grid;
          grid-template-columns: repeat(2, minmax(170px, 1fr));
          gap: 12px;
          margin-top: 30px;
          max-width: 610px;
        }

        .chip {
          padding: 15px 17px;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 12px 32px rgba(74, 54, 38, 0.06);
        }

        .chip small {
          display: block;
          color: var(--copper);
          font-size: 12px;
          margin-bottom: 4px;
        }

        .chip b {
          color: var(--deep);
          font-size: clamp(20px, 2vw, 25px);
          font-weight: 400;
          white-space: nowrap;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 35px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          padding: 15px 29px;
          border-radius: 999px;
          font-size: 16px;
          transition: 0.25s ease;
          box-shadow: 0 18px 42px rgba(63, 84, 63, 0.14);
          line-height: 1.2;
        }

        .btn:hover { transform: translateY(-2px); }
        .btnGreen { background: var(--deep); color: white; }
        .btnOrange { background: var(--terracotta); color: white; }

        .photoWrap { position: relative; }

        .photoGlow {
          position: absolute;
          inset: -28px;
          background: linear-gradient(135deg, rgba(214, 183, 124, 0.36), rgba(255,255,255,0));
          border-radius: 58px;
          z-index: -1;
        }

        .photoCard {
          position: relative;
          padding: 12px;
          border-radius: 48px;
          border: 1px solid rgba(255, 255, 255, 0.74);
          background: rgba(255, 255, 255, 0.38);
          box-shadow: 0 30px 80px rgba(67, 49, 35, 0.16);
          overflow: hidden;
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
          grid-template-columns: 188px 1fr;
          align-items: center;
          gap: 20px;
          padding: 20px 22px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.72);
          background: rgba(255, 250, 241, 0.92);
          box-shadow: 0 18px 48px rgba(70, 50, 34, 0.14);
          backdrop-filter: blur(12px);
        }

        .certLogoWrap {
          width: 188px;
          height: 72px;
          border-radius: 18px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          box-shadow: 0 8px 22px rgba(70, 50, 34, 0.08);
        }

        .certLogo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .certBox small {
          display: block;
          color: var(--copper);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 11px;
          margin-bottom: 6px;
        }

        .certBox b {
          color: var(--deep);
          font-size: 18px;
          line-height: 1.38;
          font-weight: 500;
        }

        .journey {
          margin: 0 auto 74px;
          padding: 30px;
          border-radius: 38px;
          background: linear-gradient(135deg, #3f543f, #536a50);
          color: white;
          box-shadow: 0 28px 70px rgba(49, 65, 49, 0.22);
        }

        .journeyGrid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          text-align: center;
        }

        .journeyIcon {
          width: 52px;
          height: 52px;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(240, 211, 161, 0.6);
          color: #f0d3a1;
        }

        .journeyGrid p {
          margin: 0;
          color: #f4dfbd;
          letter-spacing: 0.18em;
          font-size: 14px;
        }

        .section { padding: 70px 0; }

        .sectionTitle {
          max-width: 780px;
          margin-bottom: 42px;
        }

        .sectionTitle small {
          color: var(--terracotta);
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-size: 12px;
        }

        h2 {
          margin: 14px 0 0;
          font-size: clamp(36px, 4.8vw, 62px);
          line-height: 1.14;
          font-weight: 400;
          color: var(--deep);
          text-wrap: balance;
        }

        .sectionTitle p {
          margin-top: 17px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.85;
        }

        .packageList { display: grid; gap: 16px; }

        .packageRow {
          display: grid;
          grid-template-columns: 78px minmax(0, 1fr) 172px 172px;
          align-items: center;
          gap: 18px;
          padding: 18px;
          border-radius: 30px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 12px 36px rgba(74, 54, 38, 0.06);
          transition: 0.25s ease;
        }

        .packageRow:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 56px rgba(74, 54, 38, 0.12);
        }

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

        .packageInfo h3 {
          margin: 0;
          color: var(--deep);
          font-size: clamp(21px, 2.2vw, 27px);
          line-height: 1.25;
          font-weight: 500;
        }

        .packageInfo p {
          margin: 6px 0 0;
          color: #687266;
          line-height: 1.45;
        }

        .dateBox {
          padding: 17px 14px;
          border-radius: 20px;
          text-align: center;
          background: #f4e7d6;
          color: var(--copper);
          font-size: 17px;
          line-height: 1.25;
        }

        .priceBox {
          padding: 18px 14px;
          border-radius: 20px;
          text-align: center;
          color: white;
          font-size: 28px;
          line-height: 1;
          white-space: nowrap;
        }

        .priceBox.green { background: var(--deep); }
        .priceBox.terracotta { background: var(--terracotta); }
        .priceBox.sage { background: var(--sage); }
        .priceBox.deepGreen { background: #344836; }

        .twoCards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
          align-items: stretch;
        }

        .programCard {
          padding: 34px;
          border-radius: 42px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 24px 64px rgba(72, 53, 38, 0.09);
        }

        .programCard.dark {
          background: linear-gradient(135deg, #3f543f, #4f664d);
          color: white;
          border-color: rgba(255, 255, 255, 0.18);
        }

        .badge {
          display: inline-flex;
          padding: 9px 15px;
          border-radius: 999px;
          background: var(--terracotta);
          color: white;
          font-size: 13px;
          letter-spacing: 0.12em;
          margin-bottom: 18px;
        }

        .programCard.dark .badge {
          background: #f1dfc3;
          color: var(--copper);
        }

        h3 {
          margin: 0;
          color: var(--deep);
          font-size: clamp(30px, 3.3vw, 40px);
          line-height: 1.2;
          font-weight: 400;
          text-wrap: balance;
        }

        .programCard.dark h3 { color: #f9ecd8; }

        .programCard p {
          color: var(--muted);
          line-height: 1.86;
          font-size: 16px;
        }

        .programCard.dark p { color: #efe4d1; }

        .checkList {
          display: grid;
          gap: 11px;
          margin-top: 26px;
        }

        .checkItem {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: start;
          padding-bottom: 11px;
          border-bottom: 1px solid #eadcc7;
          color: #4d584d;
          line-height: 1.48;
        }

        .programCard.dark .checkItem {
          color: #fbf3e7;
          border-bottom-color: rgba(255, 255, 255, 0.14);
        }

        .checkItem span {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #dfe7d8;
          color: var(--deep);
        }

        .programCard.dark .checkItem span {
          background: rgba(255, 255, 255, 0.12);
          color: #f0d3a1;
        }

        .signature {
          position: relative;
          overflow: hidden;
          border-radius: 48px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 241, 0.84);
          padding: 46px;
          box-shadow: 0 28px 76px rgba(72, 53, 38, 0.11);
        }

        .signature::after {
          content: "";
          position: absolute;
          right: -120px;
          top: -120px;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          background: rgba(214, 183, 124, 0.24);
        }

        .signatureGrid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 38px;
          align-items: center;
        }

        .priceBig {
          margin-top: 18px;
          color: var(--terracotta);
          font-size: clamp(44px, 5vw, 60px);
          line-height: 1;
        }

        .stageGrid { display: grid; gap: 18px; }

        .stage {
          border-radius: 28px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.72);
          padding: 24px;
        }

        .stage small {
          color: var(--terracotta);
          letter-spacing: 0.18em;
        }

        .stage h4 {
          margin: 10px 0 0;
          color: var(--deep);
          font-size: clamp(22px, 2.2vw, 27px);
          line-height: 1.24;
          font-weight: 400;
        }

        .stage p {
          margin: 10px 0 0;
          color: #687266;
          line-height: 1.55;
        }

        .payment {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 32px;
          padding: 38px;
          border-radius: 48px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 24px 64px rgba(72, 53, 38, 0.09);
        }

        .paymentCards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .paymentCard {
          padding: 24px;
          border-radius: 30px;
          background: #f5e7d4;
        }

        .paymentCard:nth-child(2) { background: #edf1e5; }

        .paymentCard small,
        .qrBox small {
          color: var(--terracotta);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 12px;
        }

        .paymentCard h3 {
          margin-top: 14px;
          font-size: 24px;
        }

        .account {
          margin-top: 8px;
          color: var(--terracotta);
          font-size: clamp(26px, 3vw, 34px);
        }

        .qrBox {
          padding: 22px;
          border-radius: 30px;
          background: #fff8ed;
          border: 1px solid var(--line);
          text-align: center;
        }

        .qrBox img {
          display: block;
          width: 100%;
          max-width: 280px;
          margin: 18px auto 0;
          border-radius: 20px;
          object-fit: contain;
          background: white;
        }

        .closing {
          margin: 60px auto 90px;
          max-width: 960px;
          padding: 58px 36px;
          border-radius: 48px;
          background: linear-gradient(135deg, #3f543f, #51684f);
          color: white;
          text-align: center;
          box-shadow: 0 30px 80px rgba(49, 65, 49, 0.22);
        }

        .closing small {
          color: #f0d3a1;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .closing h2 { color: white; }
        .closing h2 span { display: block; color: #f0d3a1; }

        .closing p {
          max-width: 700px;
          margin: 22px auto 0;
          color: #f8ead5;
          line-height: 1.85;
        }

        .closing .btn {
          margin-top: 34px;
          background: var(--terracotta);
          color: white;
        }

        @media (max-width: 980px) {
          .hero,
          .twoCards,
          .signatureGrid,
          .payment {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
            padding-top: 44px;
            gap: 38px;
          }

          .heroCopy { max-width: 100%; }
          .profileImg { height: 580px; min-height: 0; object-position: center 12%; }
          .certBox { grid-template-columns: 168px 1fr; }
          .certLogoWrap { width: 168px; height: 66px; }
          .journeyGrid { grid-template-columns: repeat(3, 1fr); }
          .packageRow { grid-template-columns: 70px 1fr; }
          .dateBox, .priceBox { grid-column: span 1; }
          .paymentCards { grid-template-columns: 1fr; }
        }

        @media (max-width: 680px) {
          .container,
          .navInner { width: min(100% - 28px, 1180px); }

          .navInner { height: auto; padding: 14px 0; align-items: flex-start; }
          .brandMark { font-size: 11px; letter-spacing: 0.14em; }
          .navRight { gap: 8px; align-items: flex-end; flex-direction: column; }
          .navLink { display: none; }

          h1 { font-size: 47px; letter-spacing: 0.02em; }
          h2 { font-size: 36px; }
          h3 { font-size: 30px; }
          .subtitle { font-size: 18px; }
          .heroText { font-size: 16px; line-height: 1.85; }
          .heroChips { grid-template-columns: 1fr; }
          .chip b { white-space: normal; }
          .buttons { flex-direction: column; }
          .btn { width: 100%; }

          .profileImg { height: 450px; object-position: center 10%; }
          .photoCard { border-radius: 34px; padding: 9px; }
          .profileImg { border-radius: 28px; }

          .certBox {
            left: 16px;
            right: 16px;
            bottom: 16px;
            grid-template-columns: 120px 1fr;
            gap: 12px;
            padding: 13px;
            border-radius: 22px;
          }

          .certLogoWrap {
            width: 120px;
            height: 54px;
            border-radius: 14px;
            padding: 8px 10px;
          }

          .certBox small { font-size: 9px; letter-spacing: 0.13em; }
          .certBox b { font-size: 13px; line-height: 1.35; }
          .journeyGrid { grid-template-columns: repeat(2, 1fr); }
          .journeyGrid p { letter-spacing: 0.12em; }
          .packageRow { grid-template-columns: 1fr; }
          .packageIcon { width: 58px; height: 58px; }
          .signature, .payment, .programCard { padding: 24px; border-radius: 32px; }
          .payment { gap: 22px; }
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
              <a className="navLink" href="#packages">{t.navProgram}</a>
              <a className="navLink" href="#payment">{t.navPayment}</a>
              <div className="langSwitch" aria-label="Language switcher">
                <button
                  type="button"
                  className={lang === "zh" ? "active" : ""}
                  onClick={() => setLang("zh")}
                >
                  中文
                </button>
                <button
                  type="button"
                  className={lang === "en" ? "active" : ""}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </nav>

        <section id="top" className="container hero">
          <div className="heroCopy">
            <div className="eyebrow">
              <span /> {t.eyebrow}
            </div>

            <h1>
              {t.heroPre}
              <strong>{t.heroTitle}</strong>
            </h1>

            <p className="subtitle">{t.heroSubtitle}</p>
            <div className="divider" />
            <p className="heroText">{t.heroText}</p>

            <div className="heroChips">
              <div className="chip">
                <small>{t.chip1}</small>
                <b>RM180</b>
              </div>
              <div className="chip">
                <small>{t.chip2}</small>
                <b>RM1080</b>
              </div>
              <div className="chip">
                <small>{t.chip3}</small>
                <b>RM1880 / RM2580</b>
              </div>
              <div className="chip">
                <small>{t.chip4}</small>
                <b>RM3580</b>
              </div>
            </div>

            <div className="buttons">
              <a href="#packages" className="btn btnGreen">{t.learn}</a>
              <a href={formUrl} target="_blank" rel="noreferrer" className="btn btnOrange">
                {t.register}
              </a>
            </div>
          </div>

          <div className="photoWrap">
            <div className="photoGlow" />
            <div className="photoCard">
              <img src="/yogasriprofile.jpg" alt="Yoga Sri" className="profileImg" />
              <div className="certBox">
                <div className="certLogoWrap">
                  <img
                    src="/HYTLogo.png"
                    alt="Sadhguru Gurukulam Certified Hatha Yoga Teacher"
                    className="certLogo"
                  />
                </div>
                <div>
                  <small>{t.certifiedSmall}</small>
                  <b>{t.certifiedTitle}</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container journey">
          <div className="journeyGrid">
            {t.journey.map((item, index) => (
              <div key={item}>
                <div className="journeyIcon">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="container section">
          <div className="sectionTitle">
            <small>{t.programOptions}</small>
            <h2>{t.chooseTitle}</h2>
            <p>{t.chooseText}</p>
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

        <section className="container section twoCards">
          <div className="programCard">
            <div className="badge">{t.basicBadge}</div>
            <h3>{t.basicTitle}</h3>
            <p>{t.basicText}</p>
            <div className="checkList">
              {basicItems.map((item) => (
                <div className="checkItem" key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="programCard dark">
            <div className="badge">{t.deepBadge}</div>
            <h3>{t.deepTitle}</h3>
            <p>{t.deepText}</p>
            <div className="checkList">
              {deepItems.map((item) => (
                <div className="checkItem" key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="signature">
            <div className="signatureGrid">
              <div>
                <div className="badge">{t.signatureBadge}</div>
                <h2>{t.signatureTitle}</h2>
                <div className="priceBig">RM3580</div>
                <p className="heroText">{t.signatureText}</p>
              </div>

              <div className="stageGrid">
                <div className="stage">
                  <small>{t.stageOne}</small>
                  <h4>{t.stageOneTitle}</h4>
                  <p>{t.stageOneText}</p>
                </div>
                <div className="stage">
                  <small>{t.stageTwo}</small>
                  <h4>{t.stageTwoTitle}</h4>
                  <p>{t.stageTwoText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="payment" className="container section">
          <div className="payment">
            <div>
              <div className="sectionTitle" style={{ marginBottom: 0 }}>
                <small>{t.paymentSmall}</small>
                <h2>{t.paymentTitle}</h2>
                <p>{t.paymentText}</p>
              </div>

              <div className="paymentCards">
                <div className="paymentCard">
                  <small>{t.bank}</small>
                  <h3>YOGASRI ENTERPRISE</h3>
                  <p>Public Bank</p>
                  <div className="account">3231265424</div>
                </div>

                <div className="paymentCard">
                  <small>{t.form}</small>
                  <h3>{t.formText}</h3>
                  <a href={formUrl} target="_blank" rel="noreferrer" className="btn btnGreen" style={{ marginTop: 18 }}>
                    {t.openForm}
                  </a>
                </div>
              </div>
            </div>

            <div className="qrBox">
              <small>TNG QR Payment</small>
              <img src="/TNG.jpg" alt="TNG QR Code" />
              <p>{t.tngText}</p>
            </div>
          </div>
        </section>

        <section className="container closing">
          <small>{t.closingSmall}</small>
          <h2>
            {t.closingTitle}<span>{t.closingHighlight}</span>
          </h2>
          <p>{t.closingText}</p>
          <a href={formUrl} target="_blank" rel="noreferrer" className="btn">
            {t.finalButton}
          </a>
        </section>
      </div>
    </main>
  );
}
