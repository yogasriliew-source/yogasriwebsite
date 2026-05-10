"use client";

import { useMemo, useState } from "react";

type Lang = "zh" | "en";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

const whatsappUrl =
  "https://wa.me/60126725549?text=Namaskaram%20Yoga%20Sri%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E4%BA%94%E6%9C%88%E5%85%83%E7%B4%A0%E5%B9%B3%E8%A1%A1%E9%87%8D%E5%90%AF%E8%AF%BE%E7%A8%8B%E3%80%82";

const content = {
  zh: {
    nav: {
      why: "为什么适合你",
      pillars: "三大支柱",
      elements: "五大元素",
      programs: "课程配套",
      faq: "常见问题",
      consult: "咨询",
      register: "报名",
    },
    hero: {
      badge: "YOGA SRI WELLNESS",
      kicker: "Nadi Balance Scan × Hatha Yoga × Ayurveda × 五大元素净化",
      title: "五月元素平衡重启系列",
      subtitle:
        "从身体检测开始，重新理解你的体质、能量、呼吸与生活节奏。通过 Nadi Balance Scan、阿育吠陀医生讲解、Isha 哈他瑜伽、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，帮助身体慢慢回到更轻盈、稳定、清明的状态。",
      ctaPrimary: "立即报名",
      ctaSecondary: "WhatsApp 咨询",
      stats: [
        { label: "单项体验", value: "RM180 起" },
        { label: "一日体验", value: "RM1080" },
        { label: "4天配套", value: "RM1880 / RM2580" },
        { label: "完整系列", value: "RM3580" },
      ],
      noteTitle: "Certified Teacher",
      noteText:
        "由 Yoga Sri 带领，以中文清楚引导古典哈他瑜伽，并结合阿育吠陀医生讲解，让练习真正回到身体与生活。",
    },
    why: {
      label: "WHY THIS MATTERS",
      title: "这不是普通瑜伽课，而是一段完整的健康重启过程。",
      text1:
        "适合第一次接触瑜伽、长期疲劳、睡眠不稳、压力大、消化不顺的人；也适合已经学过 Inner Engineering 或 Hatha Yoga，想让身体、呼吸、饮食与能量状态更稳定的人。",
      text2:
        "你不一定需要更用力，而是需要更理解身体的信号。这个系列通过检测、理解、练习、饮食、净化与疗程，帮助你建立更适合自己的节奏。",
    },
    pillars: {
      label: "THREE PILLARS",
      title: "Isha Yoga × Ayurveda × 五大元素",
      items: [
        {
          title: "Isha Yoga",
          text: "通过古典哈他瑜伽建立稳定、活力、身体觉察与更清明的内在状态。",
        },
        {
          title: "Ayurveda",
          text: "从体质分析、医生讲解、饮食与疗程角度，更深入理解你的身体状态。",
        },
        {
          title: "五大元素净化",
          text: "从元素角度学习净化、平衡与居家养护，让日常生活更有支持。",
        },
      ],
    },
    elements: {
      label: "FIVE ELEMENTS",
      title: "五大元素视觉区块",
      subtitle: "从地、水、火、风、空的角度，重新看待身体、能量与生活平衡。",
      items: [
        {
          icon: "◼",
          title: "地｜Earth",
          text: "稳定、承载、扎根。帮助建立身体的支撑感与安全感。",
        },
        {
          icon: "◌",
          title: "水｜Water",
          text: "流动、滋养、柔和。支持情绪与身体的顺畅循环。",
        },
        {
          icon: "✦",
          title: "火｜Fire",
          text: "转化、活力、热能。帮助激活消化力与内在动力。",
        },
        {
          icon: "〰",
          title: "风｜Air",
          text: "流动、轻盈、呼吸。帮助提升灵活度与内在空间感。",
        },
        {
          icon: "◎",
          title: "空｜Space",
          text: "空间、清明、延展。让身体与心智更有余地与觉察。",
        },
      ],
    },
    path: {
      label: "RESET JOURNEY",
      title: "从检测、理解、练习，到饮食、净化与整合",
      items: [
        ["01", "检测", "通过 Nadi Balance Scan 先了解身体状态。"],
        ["02", "理解", "由阿育吠陀医生讲解报告，看见体质与失衡信号。"],
        ["03", "练习", "以古典哈他瑜伽建立稳定、活力与身体觉察。"],
        ["04", "饮食", "以阿育吠陀饮食支持消化与整体平衡。"],
        ["05", "净化", "学习五大元素净化与居家养护方式。"],
        ["06", "整合", "把练习、饮食与养护带回日常生活。"],
      ],
    },
    programs: {
      label: "PROGRAMS",
      title: "课程配套",
      subtitle: "点击展开查看每个配套内容",
      data: [
        {
          title: "Nadi Balance Scan｜脉诊平衡检测",
          price: "RM180",
          summary: "先听懂身体，再选择适合自己的练习与养护。",
          bestFor:
            "适合容易疲劳、睡不好、压力大、消化不顺、情绪波动，或想先了解身体状态的人。",
          includes: [
            "Nadi Scan 检测",
            "PDF 报告",
            "阿育吠陀医生一对一讲解",
            "Yoga Sri 瑜伽顾问咨询",
          ],
        },
        {
          title: "5月23日｜一日健康重启体验",
          price: "RM1080",
          summary: "Nadi Scan + Hatha Yoga + Ayurveda Brunch + Treatment",
          bestFor:
            "适合想用一天完整体验检测、练习、饮食与阿育吠陀疗程的人。",
          includes: [
            "Hatha Yoga｜Surya Shakti",
            "Nadi Scan 医生一对一讲解",
            "Ayurveda Brunch",
            "平衡瑜伽与带领冥想",
            "Ayurveda Treatment｜2小时疗程",
          ],
        },
        {
          title: "5月21–24日｜健康重启基础配套",
          price: "RM1880",
          summary: "建立身体觉察、瑜伽基础与练习节奏",
          bestFor:
            "适合零基础、身体僵硬、想开始瑜伽，或想重新建立稳定练习基础的人。",
          includes: [
            "Nadi Balance Scan",
            "阿育吠陀医生一对一讲解",
            "哈他瑜伽介绍与基础体式",
            "瑜伽合十礼",
            "Miracle of Mind",
            "Surya Shakti / Surya Kriya",
          ],
        },
        {
          title: "5月28–31日｜深度重启配套",
          price: "RM2580",
          summary: "五大元素净化 · 饮食 · 居家养护 · Panchakarma",
          bestFor:
            "适合已有瑜伽基础，想深入学习五大元素净化、阿育吠陀饮食与身体养护的人。",
          includes: [
            "Nadi Balance Scan",
            "阿育吠陀医生一对一讲解",
            "五大元素净化课程",
            "居家养护法",
            "阿育吠陀饮食课",
            "Panchakarma 疗程",
          ],
        },
        {
          title: "5月21–31日｜8天健康重启完整系列",
          price: "RM3580",
          summary: "最完整 · 最推荐 · 从检测到净化的完整路径",
          bestFor:
            "适合想完整调整身体、饮食、练习节奏与日常养护的人；也特别适合期待 10 月与 Sadhguru 相遇的学员。",
          includes: [
            "Nadi Balance Scan",
            "阿育吠陀医生一对一讲解",
            "Yoga Sri 咨询",
            "古典哈他瑜伽",
            "五大元素净化",
            "阿育吠陀饮食",
            "Panchakarma 疗程",
            "居家养护整合",
          ],
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "常见问题",
      data: [
        {
          q: "没有学过 Isha 或 Inner Engineering，可以参加吗？",
          a: "可以。这个课程适合普通初学者、长期疲劳、睡眠不稳、压力大、消化不顺、想开始照顾身体的人。课程会从 Nadi Scan、医生讲解与基础练习开始，不需要你有 Isha 背景。",
        },
        {
          q: "已经学过 Hatha Yoga，还适合参加吗？",
          a: "适合。这里不只是重复体式，而是通过 Nadi Scan、阿育吠陀医生讲解、饮食、五大元素净化与日常养护，帮助你知道如何让练习更适合自己当前的身体状态。",
        },
        {
          q: "零基础、身体僵硬可以参加吗？",
          a: "可以。基础配套就是为零基础、身体僵硬、久坐上班族、想开始瑜伽但不知道从哪里开始的人设计的。",
        },
        {
          q: "Panchakarma 疗程适合所有人吗？",
          a: "疗程会根据个人体质与医生建议安排。若有怀孕、重大疾病、手术后恢复、长期服药等情况，请先咨询医生，并建议从 Nadi Balance Scan 开始。",
        },
      ],
    },
    payment: {
      label: "REGISTRATION & PAYMENT",
      title: "报名与付款",
      text: "请先填写报名表格。完成银行转账或 TNG 付款后，保留付款截图，Yoga Sri 团队会协助确认名额与后续准备事项。",
      bankTitle: "银行转账",
      bankNameLabel: "Account Name",
      bankName: "YOGASRI ENTERPRISE",
      bankLabel: "Bank",
      bank: "Public Bank",
      accountLabel: "Account No.",
      account: "3231265424",
      tngTitle: "TNG eWallet",
      register: "打开报名表格",
      consult: "WhatsApp 咨询",
    },
  },

  en: {
    nav: {
      why: "Why This Fits You",
      pillars: "3 Pillars",
      elements: "5 Elements",
      programs: "Programs",
      faq: "FAQ",
      consult: "Consult",
      register: "Register",
    },
    hero: {
      badge: "YOGA SRI WELLNESS",
      kicker: "Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements Purification",
      title: "May Elements Balance Reset Series",
      subtitle:
        "Begin with body assessment and rediscover your constitution, energy, breath and life rhythm. Through Nadi Balance Scan, Ayurvedic doctor guidance, Isha Hatha Yoga, Ayurvedic diet, five elements purification and Panchakarma, this series supports the body to return to a lighter, steadier and clearer state.",
      ctaPrimary: "Register Now",
      ctaSecondary: "WhatsApp Us",
      stats: [
        { label: "Single Experience", value: "RM180+" },
        { label: "One-Day Experience", value: "RM1080" },
        { label: "4-Day Packages", value: "RM1880 / RM2580" },
        { label: "Complete Series", value: "RM3580" },
      ],
      noteTitle: "Certified Teacher",
      noteText:
        "Guided by Yoga Sri in clear Chinese instruction, integrating classical Hatha Yoga with Ayurvedic doctor consultation so practice can truly return to the body and daily life.",
    },
    why: {
      label: "WHY THIS MATTERS",
      title: "This is not just another yoga class. It is a full reset journey.",
      text1:
        "Suitable for beginners, those with fatigue, poor sleep, stress or digestive discomfort; and also for those who have learned Inner Engineering or Hatha Yoga and want more stability in body, breath, food habits and energy.",
      text2:
        "You may not need to push harder — you may need to understand your body's signals more clearly. This series supports you through assessment, understanding, practice, food, purification and therapy.",
    },
    pillars: {
      label: "THREE PILLARS",
      title: "Isha Yoga × Ayurveda × Five Elements",
      items: [
        {
          title: "Isha Yoga",
          text: "Build stability, vitality, body awareness and inner clarity through classical Hatha Yoga.",
        },
        {
          title: "Ayurveda",
          text: "Understand your condition more deeply through constitution analysis, doctor guidance, diet and therapies.",
        },
        {
          title: "Five Elements",
          text: "Learn purification, balance and home care through the lens of the five elements.",
        },
      ],
    },
    elements: {
      label: "FIVE ELEMENTS",
      title: "Five Elements Visual Block",
      subtitle:
        "Revisit the body, energy and life balance through Earth, Water, Fire, Air and Space.",
      items: [
        {
          icon: "◼",
          title: "Earth",
          text: "Stability, grounding and support.",
        },
        {
          icon: "◌",
          title: "Water",
          text: "Flow, nourishment and softness.",
        },
        {
          icon: "✦",
          title: "Fire",
          text: "Transformation, vitality and inner heat.",
        },
        {
          icon: "〰",
          title: "Air",
          text: "Movement, lightness and breath.",
        },
        {
          icon: "◎",
          title: "Space",
          text: "Openness, clarity and expansion.",
        },
      ],
    },
    path: {
      label: "RESET JOURNEY",
      title: "From assessment and understanding to practice, nourishment and integration",
      items: [
        ["01", "Assess", "Start by understanding your current body condition through Nadi Balance Scan."],
        ["02", "Understand", "Receive Ayurvedic doctor guidance to see your constitution and imbalance patterns."],
        ["03", "Practice", "Build steadiness, vitality and awareness through classical Hatha Yoga."],
        ["04", "Nourish", "Support digestion and balance with Ayurvedic food."],
        ["05", "Purify", "Learn five elements purification and home-care support."],
        ["06", "Integrate", "Bring the practices, diet and care back into daily life."],
      ],
    },
    programs: {
      label: "PROGRAMS",
      title: "Programs & Packages",
      subtitle: "Click to expand each package",
      data: [
        {
          title: "Nadi Balance Scan",
          price: "RM180",
          summary: "Understand your body first, then choose the right practice and care.",
          bestFor:
            "For those with fatigue, poor sleep, stress, digestive discomfort or those who want clarity before starting.",
          includes: [
            "Nadi Scan assessment",
            "PDF report",
            "1-to-1 Ayurvedic doctor explanation",
            "Yoga Sri consultation",
          ],
        },
        {
          title: "23 May | One-Day Reset Experience",
          price: "RM1080",
          summary: "Nadi Scan + Hatha Yoga + Ayurveda Brunch + Treatment",
          bestFor:
            "For those who want a complete one-day experience of assessment, practice, food and therapy.",
          includes: [
            "Hatha Yoga | Surya Shakti",
            "Nadi Scan with doctor explanation",
            "Ayurveda Brunch",
            "Guided meditation / balancing yoga",
            "2-hour Ayurveda treatment",
          ],
        },
        {
          title: "21–24 May | Foundation Reset Package",
          price: "RM1880",
          summary: "Build body awareness, yoga foundation and practice rhythm",
          bestFor:
            "For beginners, stiff bodies, and those who want to establish a stable foundation.",
          includes: [
            "Nadi Balance Scan",
            "1-to-1 Ayurvedic doctor explanation",
            "Introduction to Hatha Yoga",
            "Yoga Namaskar",
            "Miracle of Mind",
            "Surya Shakti / Surya Kriya",
          ],
        },
        {
          title: "28–31 May | Deep Reset Package",
          price: "RM2580",
          summary: "Five Elements Purification · Food · Home Care · Panchakarma",
          bestFor:
            "For those with some yoga background who want to go deeper into five elements purification, Ayurvedic food and body care.",
          includes: [
            "Nadi Balance Scan",
            "1-to-1 doctor explanation",
            "Five Elements course",
            "Home care methods",
            "Ayurvedic food class",
            "Panchakarma therapy",
          ],
        },
        {
          title: "21–31 May | 8-Day Complete Reset Series",
          price: "RM3580",
          summary: "Most complete and recommended path",
          bestFor:
            "For those who want a full reset of body, food habits, practice rhythm and daily care; especially suitable for those preparing more seriously.",
          includes: [
            "Nadi Balance Scan",
            "Ayurvedic doctor explanation",
            "Yoga Sri consultation",
            "Classical Hatha Yoga",
            "Five Elements Purification",
            "Ayurvedic food",
            "Panchakarma therapy",
            "Home-care integration",
          ],
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      data: [
        {
          q: "Can I join if I have not learned Isha or Inner Engineering?",
          a: "Yes. This series is suitable for beginners, people with fatigue, poor sleep, stress or digestive discomfort, and those who want to start caring for the body in a structured way.",
        },
        {
          q: "Can I still join if I already learned Hatha Yoga?",
          a: "Yes. This is not only about repeating asanas. It helps you understand how to adapt practice through Nadi Scan, Ayurvedic explanation, food, five elements purification and daily care.",
        },
        {
          q: "Can beginners or stiff bodies join?",
          a: "Yes. The foundation package is designed for beginners, office workers and people who want a gentler starting point.",
        },
        {
          q: "Is Panchakarma suitable for everyone?",
          a: "The therapy is arranged based on personal constitution and doctor advice. If you are pregnant, recovering from surgery, or on long-term medication, please consult first.",
        },
      ],
    },
    payment: {
      label: "REGISTRATION & PAYMENT",
      title: "Registration & Payment",
      text: "Please fill in the registration form first. After bank transfer or TNG payment, keep your payment screenshot and Yoga Sri team will confirm your place and next steps.",
      bankTitle: "Bank Transfer",
      bankNameLabel: "Account Name",
      bankName: "YOGASRI ENTERPRISE",
      bankLabel: "Bank",
      bank: "Public Bank",
      accountLabel: "Account No.",
      account: "3231265424",
      tngTitle: "TNG eWallet",
      register: "Open Registration Form",
      consult: "WhatsApp Us",
    },
  },
};

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("zh");
  const [openProgram, setOpenProgram] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const copy = useMemo(() => content[lang], [lang]);

  return (
    <main className="site-shell">
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-dot" />
          {copy.hero.badge}
        </a>

        <div className="nav-links">
          <a href="#why">{copy.nav.why}</a>
          <a href="#pillars">{copy.nav.pillars}</a>
          <a href="#elements">{copy.nav.elements}</a>
          <a href="#programs">{copy.nav.programs}</a>
          <a href="#faq">{copy.nav.faq}</a>
        </div>

        <div className="nav-right">
          <div className="lang-switch">
            <button
              className={lang === "zh" ? "active" : ""}
              onClick={() => setLang("zh")}
            >
              中
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-btn">
            {copy.nav.consult}
          </a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="hero-badge">{copy.hero.badge}</p>
          <p className="hero-kicker">{copy.hero.kicker}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-text">{copy.hero.subtitle}</p>

          <div className="cta-row">
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              {copy.hero.ctaPrimary}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              {copy.hero.ctaSecondary}
            </a>
          </div>

          <div className="stats-grid">
            {copy.hero.stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <img src="/yogasriprofile.jpg" alt="Yoga Sri" />
            <div className="hero-note">
              <p className="mini-label">{copy.hero.noteTitle}</p>
              <h3>Yoga Sri</h3>
              <p>{copy.hero.noteText}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="why" className="section section-card soft-card">
        <SectionHeader label={copy.why.label} title={copy.why.title} />
        <div className="two-col-text">
          <p>{copy.why.text1}</p>
          <p>{copy.why.text2}</p>
        </div>
      </section>

      <div className="divider" />

      <section id="pillars" className="section">
        <SectionHeader label={copy.pillars.label} title={copy.pillars.title} />
        <div className="pillar-grid">
          {copy.pillars.items.map((item) => (
            <div className="pillar-card" key={item.title}>
              <div className="pillar-icon">{item.title.slice(0, 1)}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section id="elements" className="section section-card warm-card">
        <SectionHeader
          label={copy.elements.label}
          title={copy.elements.title}
          subtitle={copy.elements.subtitle}
        />
        <div className="elements-grid">
          {copy.elements.items.map((item) => (
            <div className="element-card" key={item.title}>
              <div className="element-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <SectionHeader label={copy.path.label} title={copy.path.title} />
        <div className="journey-grid">
          {copy.path.items.map(([no, title, text]) => (
            <div className="journey-card" key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section id="programs" className="section section-card soft-card">
        <SectionHeader
          label={copy.programs.label}
          title={copy.programs.title}
          subtitle={copy.programs.subtitle}
        />

        <div className="accordion-list">
          {copy.programs.data.map((item, index) => {
            const isOpen = openProgram === index;
            return (
              <div className={`accordion-card ${isOpen ? "open" : ""}`} key={item.title}>
                <button
                  className="accordion-trigger"
                  onClick={() => setOpenProgram(isOpen ? -1 : index)}
                >
                  <div className="accordion-title-wrap">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <div className="accordion-side">
                    <strong>{item.price}</strong>
                    <span>{isOpen ? "−" : "+"}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="accordion-content">
                    <div className="program-meta">
                      <p>
                        <strong>{lang === "zh" ? "适合：" : "Best for:"}</strong> {item.bestFor}
                      </p>
                    </div>
                    <ul>
                      {item.includes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      <section id="faq" className="section">
        <SectionHeader label={copy.faq.label} title={copy.faq.title} />
        <div className="faq-list">
          {copy.faq.data.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div className={`faq-card ${isOpen ? "open" : ""}`} key={item.q}>
                <button className="faq-trigger" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>{item.q}</span>
                  <b>{isOpen ? "−" : "+"}</b>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      <section className="section section-card payment-section">
        <SectionHeader label={copy.payment.label} title={copy.payment.title} />
        <p className="payment-text">{copy.payment.text}</p>

        <div className="payment-grid">
          <div className="payment-box">
            <h3>{copy.payment.bankTitle}</h3>
            <p>
              <small>{copy.payment.bankNameLabel}</small>
              <strong>{copy.payment.bankName}</strong>
            </p>
            <p>
              <small>{copy.payment.bankLabel}</small>
              <strong>{copy.payment.bank}</strong>
            </p>
            <p>
              <small>{copy.payment.accountLabel}</small>
              <strong>{copy.payment.account}</strong>
            </p>
          </div>

          <div className="payment-box">
            <h3>{copy.payment.tngTitle}</h3>
            <div className="tng-wrap">
              <img src="/TNG.jpg" alt="TNG QR" />
            </div>
          </div>
        </div>

        <div className="cta-row payment-cta">
          <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            {copy.payment.register}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            {copy.payment.consult}
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© Yoga Sri Wellness</p>
        <p>Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements</p>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}
