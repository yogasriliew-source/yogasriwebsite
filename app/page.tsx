"use client";

import { useState } from "react";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

const whatsappUrl =
  "https://wa.me/60126725549?text=Namaskaram%20Yoga%20Sri%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E4%BA%94%E6%9C%88%E5%85%83%E7%B4%A0%E5%B9%B3%E8%A1%A1%E9%87%8D%E5%90%AF%E8%AF%BE%E7%A8%8B%E3%80%82";

const programs = [
  {
    title: "Nadi Balance Scan｜脉诊平衡检测",
    subtitle: "先听懂身体，再选择适合自己的练习与养护",
    date: "可预约",
    price: "RM180",
    tag: "入门首选",
    bestFor:
      "适合容易疲劳、睡不好、压力大、消化不顺、情绪波动，或想先了解身体状态的人。",
    includes: ["Nadi Scan 检测", "PDF 报告", "阿育吠陀医生一对一讲解", "Yoga Sri 瑜伽顾问咨询"],
  },
  {
    title: "5月23日｜一日健康重启体验",
    subtitle: "Nadi Scan + Hatha Yoga + Ayurveda Brunch + Treatment",
    date: "5月23日",
    price: "RM1080",
    tag: "完整体验一天",
    bestFor:
      "适合想用一天完整体验检测、练习、饮食与阿育吠陀疗程的人。",
    includes: ["Hatha Yoga｜Surya Shakti", "Nadi Scan 医生一对一报告讲解", "Ayurveda Brunch", "Ayurveda Treatment｜2小时疗程", "平衡瑜伽与带领冥想"],
  },
  {
    title: "5月21–24日｜健康重启基础配套",
    subtitle: "建立身体觉察、瑜伽基础与练习节奏",
    date: "5月21–24日",
    price: "RM1880",
    tag: "基础建立",
    bestFor:
      "适合零基础、身体僵硬、想开始瑜伽，或想重新建立稳定练习基础的人。",
    includes: ["Nadi Balance Scan", "医生一对一报告讲解", "哈他瑜伽介绍与基础体式", "瑜伽合十礼", "Miracle of Mind", "Surya Shakti / Surya Kriya"],
  },
  {
    title: "5月28–31日｜深度重启配套",
    subtitle: "五大元素净化 · 饮食 · 居家养护 · Panchakarma",
    date: "5月28–31日",
    price: "RM2580",
    tag: "深度调理",
    bestFor:
      "适合已有瑜伽基础，想深入学习五大元素净化、阿育吠陀饮食与身体养护的人。",
    includes: ["Nadi Balance Scan", "医生一对一报告讲解", "五大元素净化课程", "居家养护法", "阿育吠陀饮食课", "Panchakarma 疗程"],
  },
  {
    title: "5月21–31日｜8天健康重启完整系列",
    subtitle: "最完整 · 最推荐 · 从检测到净化的完整路径",
    date: "5月21–31日",
    price: "RM3580",
    tag: "最推荐",
    highlight: true,
    bestFor:
      "适合想完整调整身体、饮食、练习节奏与日常养护的人；也特别适合期待 10 月与 Sadhguru 相遇的学员。",
    includes: ["Nadi Balance Scan", "医生一对一报告讲解", "Yoga Sri 咨询", "古典哈他瑜伽", "五大元素净化", "阿育吠陀饮食", "Panchakarma 疗程", "居家养护整合"],
  },
];

const journey = [
  ["01", "检测", "通过 Nadi Balance Scan 先了解身体状态，而不是盲目开始。"],
  ["02", "理解", "由阿育吠陀医生讲解报告，看见体质与失衡信号。"],
  ["03", "练习", "以古典哈他瑜伽建立稳定、活力与身体觉察。"],
  ["04", "饮食", "用温和、支持消化的阿育吠陀饮食滋养身体。"],
  ["05", "净化", "从五大元素角度学习净化、平衡与居家养护。"],
  ["06", "整合", "把练习、饮食、作息与日常养护带回生活。"],
];

const faqs = [
  {
    question: "没有学过 Isha 或 Inner Engineering，可以参加吗？",
    answer:
      "可以。这个课程适合普通初学者、长期疲劳、睡眠不稳、压力大、消化不顺、想开始照顾身体的人。课程会从 Nadi Scan、医生讲解与基础练习开始，不需要你有 Isha 背景。",
  },
  {
    question: "已经学过 Hatha Yoga，还适合参加吗？",
    answer:
      "已经学过的人也很适合。这里不只是重复体式，而是通过 Nadi Scan、阿育吠陀医生讲解、饮食、五大元素净化与日常养护，帮助你知道如何让练习更适合自己当前的身体状态。",
  },
  {
    question: "零基础、身体僵硬可以参加吗？",
    answer:
      "可以。基础配套就是为零基础、身体僵硬、久坐上班族、想开始瑜伽但不知道从哪里开始的人设计的。课程会从身体觉察与基础练习慢慢进入。",
  },
  {
    question: "Panchakarma 疗程适合所有人吗？",
    answer:
      "疗程会根据个人体质与医生建议安排。若有怀孕、重大疾病、手术后恢复、长期服药、严重皮肤或心血管相关状况，请先咨询医生，并建议从 Nadi Balance Scan 开始。",
  },
];

function CTAButtons() {
  return (
    <div className="cta-row">
      <a className="btn btn-dark" href={registrationUrl} target="_blank" rel="noreferrer">
        立即填写报名表格
      </a>
      <a className="btn btn-light" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp 咨询适合配套
      </a>
    </div>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <article className={program.highlight ? "program-card highlight" : "program-card"}>
      <div className="program-top">
        <span className="program-date">{program.date}</span>
        <span className="program-tag">{program.tag}</span>
      </div>
      <h3>{program.title}</h3>
      <p className="muted">{program.subtitle}</p>
      <p className="price">{program.price}</p>
      <div className="best-for">
        <strong>适合：</strong>
        <p>{program.bestFor}</p>
      </div>
      <ul>
        {program.includes.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </article>
  );
}

function FAQItem({ item, index }: { item: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)}>
        <span>{item.question}</span>
        <b>{open ? "−" : "+"}</b>
      </button>
      {open && <p>{item.answer}</p>}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="logo">✦ YOGA SRI WELLNESS</a>
        <div className="nav-links">
          <a href="#why">为什么适合你</a>
          <a href="#path">学习路径</a>
          <a href="#programs">课程配套</a>
          <a href="#faq">常见问题</a>
        </div>
        <a className="nav-btn" href={whatsappUrl} target="_blank" rel="noreferrer">咨询</a>
      </nav>

      <section id="top" className="hero section">
        <div className="hero-text">
          <p className="eyebrow">For beginners & Isha students · Hatha Yoga · Ayurveda Reset</p>
          <h1>五月元素平衡重启｜从身体检测开始，找回稳定与清明。</h1>
          <p className="hero-subtitle">
            适合第一次接触瑜伽、长期疲劳、睡眠不稳、压力大、消化不顺的人；也适合已经学过 Inner Engineering 或 Hatha Yoga，想在 10 月与 Sadhguru 相遇前，把身体、呼吸、饮食与能量状态准备得更稳定的人。
          </p>
          <div className="pill-row">
            <span>Nadi Balance Scan</span>
            <span>Classical Hatha Yoga</span>
            <span>Ayurveda Brunch</span>
            <span>五大元素净化</span>
            <span>Panchakarma</span>
          </div>
          <CTAButtons />
          <div className="stats">
            <div><strong>RM180</strong><span>单项检测</span></div>
            <div><strong>RM1080</strong><span>一日体验</span></div>
            <div><strong>RM1880+</strong><span>4天配套</span></div>
            <div><strong>RM3580</strong><span>8天完整系列</span></div>
          </div>
        </div>
        <div className="hero-image-card">
          <img src="/yogasriprofile.jpg" alt="Yoga Sri" />
          <div className="profile-note">
            <small>Guided by Yoga Sri</small>
            <h3>Certified Hatha Yoga Teacher</h3>
            <p>以中文清楚带领古典哈他瑜伽，并结合阿育吠陀医生讲解，让练习回到身体与生活。</p>
          </div>
        </div>
      </section>

      <section id="why" className="section white-box two-col">
        <div>
          <p className="label">WHY THIS MATTERS</p>
          <h2>你不是需要更用力，而是需要更理解身体的信号。</h2>
        </div>
        <div className="text-block">
          <p>很多人并不是不够努力，而是身体已经长期处在消耗状态：工作忙、家庭责任重、睡眠不稳、消化变慢、肩颈紧绷、情绪容易浮动。</p>
          <p>五月元素平衡重启，不是让你更用力练习，而是帮助你先听懂身体，再通过 Nadi Scan、医生讲解、古典哈他瑜伽、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，重新建立稳定、轻盈与清明。</p>
          <div className="quote">这是一段从身体检测、练习、饮食、净化到日常养护的完整重启过程。</div>
        </div>
      </section>

      <section id="path" className="section">
        <p className="label">THE COMPLETE RESET PATH</p>
        <h2>从检测、理解、练习，到饮食、净化与整合。</h2>
        <p className="section-subtitle">每一步都不是单独的体验，而是为了帮助你把身体这个系统慢慢准备好。</p>
        <div className="journey-grid">
          {journey.map(([step, title, text]) => (
            <div className="journey-card" key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section audience-grid">
        <div className="dark-box">
          <p className="label">FOR WHOM</p>
          <h2>这个课程特别适合这样的你</h2>
        </div>
        <div className="audience-cards">
          {[
            ["长期疲劳、压力大、睡不好", "你想先知道身体为什么一直紧绷，再选择真正适合自己的练习与养护方式。"],
            ["身体僵硬、零基础、想开始瑜伽", "你不需要先变柔软才来上课，课程会从身体觉察与基础练习慢慢开始。"],
            ["已经学过 Inner Engineering 或 Hatha Yoga", "你想让身体更能支持自己的 Sadhana 与日常生活。"],
            ["期待 10 月见 Sadhguru", "你想提前把身体、饮食、睡眠与能量状态准备得更稳定、更清明。"],
          ].map(([title, text]) => (
            <div className="mini-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="section">
        <p className="label">PROGRAM OPTIONS</p>
        <h2>选择适合你的重启方式</h2>
        <p className="section-subtitle">如果你只是想先了解身体，从 Nadi Balance Scan 开始；如果你想从身体、饮食、练习、净化与疗程完整重启，最推荐 8 天完整系列。</p>
        <div className="program-grid">
          {programs.map((program) => <ProgramCard key={program.title} program={program} />)}
        </div>
      </section>

      <section className="section white-box two-col">
        <div>
          <p className="label">TRUST & SAFETY</p>
          <h2>有练习，也有医生讲解；有体验，也有安全边界。</h2>
        </div>
        <div className="text-block">
          <p><strong>Yoga Sri 的带领：</strong>Yoga Sri 多年来教授华语学员古典哈他瑜伽。她发现，很多人想开始瑜伽，却不知道自己的身体适合什么；也有很多已经学过练习的人，身体基础、饮食习惯、睡眠、消化与生活节奏并没有真正调整好。</p>
          <p><strong>重要说明：</strong>本课程不是医疗诊断或疾病治疗，也不取代专业医疗建议。如有严重疾病、怀孕、术后恢复或长期服药，请先咨询医生。</p>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <p className="label">FAQ</p>
        <h2>报名前你可能想知道</h2>
        <div className="faq-box">
          {faqs.map((item, index) => <FAQItem key={item.question} item={item} index={index} />)}
        </div>
      </section>

      <section className="section final-cta">
        <div>
          <p className="label">REGISTRATION</p>
          <h2>从听懂身体开始，重新建立稳定与清明。</h2>
          <p>请先填写报名表格。完成银行转账或 TNG 付款后，保留付款截图，Yoga Sri 团队会协助确认名额与后续准备事项。</p>
          <CTAButtons />
        </div>
        <div className="payment-box">
          <h3>银行转账</h3>
          <p><small>Account Name</small><br /><strong>YOGASRI ENTERPRISE</strong></p>
          <p><small>Bank</small><br /><strong>Public Bank</strong></p>
          <p><small>Account No.</small><br /><strong>3231265424</strong></p>
        </div>
      </section>

      <footer>© Yoga Sri Wellness · Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements</footer>
    </main>
  );
}
