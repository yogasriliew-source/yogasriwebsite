"use client";

import { useMemo, useState } from "react";

type Lang = "zh" | "en";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

const whatsappUrl =
  "https://wa.me/60126725549?text=Namaskaram%20Yoga%20Sri%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%20Nadi%20Scan%20%C3%97%20Hatha%20Yoga%20%C3%97%20Ayurveda%20%E5%81%A5%E5%BA%B7%E9%87%8D%E5%90%AF%E8%AF%BE%E7%A8%8B%E3%80%82";

const content = {
  zh: {
    nav: {
      why: "适合谁",
      pillars: "三大支柱",
      elements: "五大元素",
      journey: "重启路径",
      schedule: "时间表",
      programs: "课程配套",
      faq: "常见问题",
      consult: "咨询",
      register: "报名",
    },
    hero: {
      badge: "YOGA SRI WELLNESS",
      eyebrow: "Nadi Scan × Classical Hatha Yoga × Ayurveda",
      kicker: "检测｜练习｜饮食｜净化｜养护",
      title: "先懂身体，再练瑜伽",
      subtitle:
        "很多人不是不够努力，而是不知道身体现在真正需要什么。这个系列从 Nadi Balance Scan 开始，结合阿育吠陀医生一对一讲解、Isha 古典哈他瑜伽、阿育吠陀饮食、五大元素净化与 Panchakarma 疗程，帮助你建立更稳定、清明、可持续的身心节奏。",
      ctaPrimary: "立即报名",
      ctaSecondary: "WhatsApp 咨询",
      stats: [
        { label: "身体检测", value: "Nadi Scan" },
        { label: "古典练习", value: "Hatha Yoga" },
        { label: "医生指导", value: "Ayurveda" },
        { label: "净化养护", value: "Panchakarma" },
      ],
      noteTitle: "Certified Isha Hatha Yoga Teacher",
      noteText:
        "由 Yoga Sri 以中文清楚引导古典哈他瑜伽，并结合阿育吠陀医生讲解，让练习真正回到身体、饮食与生活节奏。",
    },
    why: {
      label: "WHY THIS MATTERS",
      title: "这不是普通瑜伽课，而是一段完整的健康重启过程。",
      text1:
        "适合第一次接触瑜伽、长期疲劳、睡眠不稳、压力大、消化不顺的人；也适合已经学过 Inner Engineering 或 Isha Hatha Yoga，想让身体、呼吸、饮食与能量状态更稳定的人。",
      text2:
        "你不一定需要更用力，而是需要更理解身体的信号。这个系列通过检测、理解、练习、饮食、净化与疗程，帮助你建立更适合自己的节奏。",
      cards: [
        "长期疲劳、睡不好、压力大",
        "身体僵硬，想开始瑜伽但不知道从哪里开始",
        "想了解体质、饮食与生活节奏",
        "想为更深度的练习与体验做准备",
      ],
    },
    pillars: {
      label: "THREE PILLARS",
      title: "Isha Yoga × Ayurveda × 五大元素",
      subtitle: "不是单一课程，而是从练习、体质、元素三个层面重新整理身体。",
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
      title: "从五大元素理解身体与生活",
      subtitle: "地、水、火、风、空，不只是概念，而是身体稳定、情绪流动、消化力、呼吸与内在空间的基础。",
      items: [
        { icon: "▰", title: "地｜Earth", text: "稳定、承载、扎根。帮助建立身体的支撑感与安全感。" },
        { icon: "◌", title: "水｜Water", text: "流动、滋养、柔和。支持情绪与身体的顺畅循环。" },
        { icon: "✦", title: "火｜Fire", text: "转化、活力、热能。帮助激活消化力与内在动力。" },
        { icon: "〰", title: "风｜Air", text: "流动、轻盈、呼吸。帮助提升灵活度与内在空间感。" },
        { icon: "◎", title: "空｜Space", text: "空间、清明、延展。让身体与心智更有余地与觉察。" },
      ],
    },
    journey: {
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
    schedule: {
      label: "VISUAL SCHEDULE",
      title: "两阶段健康重启时间表",
      subtitle:
        "你可以选择第一阶段、第二阶段，或完整参加两个阶段。每一阶段都从检测与理解开始，再进入练习、饮食、净化与疗程。",
      phaseLabel: "阶段",
      timeLabel: "时间",
      activityLabel: "内容",
      phases: [
        {
          title: "第一阶段｜身体觉察与基础重启",
          date: "21–24 May",
          note: "适合零基础、身体僵硬、长期疲劳，或想先从 Nadi Scan 与哈他瑜伽基础开始的人。",
          days: [
            {
              date: "21 May",
              day: "Day 1",
              rows: [
                { time: "6:00pm – 9:00pm", activity: "Nadi Balance Scan、哈他瑜伽介绍、瑜伽合十礼、Miracle of Mind" },
              ],
            },
            {
              date: "22 May",
              day: "Day 2",
              rows: [
                { time: "6:00pm – 9:00pm", activity: "哈他瑜伽体式入门、带领冥想" },
              ],
            },
            {
              date: "23 May",
              day: "Day 3",
              rows: [
                { time: "7:00am – 9:30am", activity: "哈他瑜伽｜Surya Shakti" },
                { time: "9:30am – 10:30am", activity: "阿育吠陀医生一对一讲解 Nadi Scan" },
                { time: "10:30am – 11:30am", activity: "阿育吠陀料理 Brunch" },
                { time: "2:30pm – 5:00pm", activity: "Panchakarma 排毒疗程" },
              ],
            },
            {
              date: "24 May",
              day: "Day 4",
              rows: [
                { time: "7:00am – 9:30am", activity: "哈他瑜伽｜Surya Kriya" },
                { time: "9:30am – 10:30am", activity: "阿育吠陀料理 Brunch" },
                { time: "11:00am – 12:30pm", activity: "认识阿育吠陀与元素净化概论" },
                { time: "1:00pm – 3:30pm", activity: "Panchakarma 排毒疗程" },
              ],
            },
          ],
        },
        {
          title: "第二阶段｜五大元素净化与深度养护",
          date: "28–31 May",
          note: "适合想深入 Bhuta Shuddhi 五大元素净化、阿育吠陀居家养护、饮食与 Panchakarma 疗程的人。",
          days: [
            {
              date: "28 May",
              day: "Day 1",
              rows: [
                { time: "6:00pm – 9:00pm", activity: "Nadi Balance Scan、Isha Kriya" },
              ],
            },
            {
              date: "29 May",
              day: "Day 2",
              rows: [
                { time: "6:00pm – 9:00pm", activity: "哈他瑜伽体式入门、带领冥想" },
              ],
            },
            {
              date: "30 May",
              day: "Day 3",
              rows: [
                { time: "7:00am – 9:30am", activity: "Bhuta Shuddhi 五大元素净化" },
                { time: "9:30am – 10:30am", activity: "阿育吠陀料理 Brunch" },
                { time: "1:00pm – 2:30pm", activity: "阿育吠陀居家养护法" },
                { time: "2:30pm – 5:00pm", activity: "Panchakarma 排毒疗程" },
              ],
            },
            {
              date: "31 May",
              day: "Day 4",
              rows: [
                { time: "7:00am – 9:30am", activity: "Bhuta Shuddhi 五大元素净化、Angamardana Studio" },
                { time: "9:30am – 10:30am", activity: "阿育吠陀料理 Brunch" },
                { time: "1:00pm – 2:30pm", activity: "阿育吠陀饮食与瑜伽饮食课" },
                { time: "2:30pm – 5:00pm", activity: "Panchakarma 排毒疗程" },
              ],
            },
          ],
        },
      ],
    },
    programs: {
      label: "PROGRAMS",
      title: "课程配套",
      subtitle: "点击展开查看每个配套内容。",
      bestFor: "适合",
      includes: "包含内容",
      data: [
        {
          title: "Nadi Balance Scan｜脉诊平衡检测",
          price: "RM180",
          tag: "入门推荐",
          summary: "先听懂身体，再选择适合自己的练习与养护。",
          bestFor: "适合容易疲劳、睡不好、压力大、消化不顺、情绪波动，或想先了解身体状态的人。",
          includes: ["Nadi Scan 检测", "PDF 报告", "阿育吠陀医生一对一讲解", "Yoga Sri 瑜伽顾问咨询"],
        },
        {
          title: "23 May｜一日健康重启体验",
          price: "RM1080",
          tag: "一天完整体验",
          summary: "Nadi Scan + Hatha Yoga + Ayurveda Brunch + Treatment。",
          bestFor: "适合想用一天完整体验检测、练习、饮食与阿育吠陀疗程的人。",
          includes: ["Hatha Yoga｜Surya Shakti", "Nadi Scan 医生一对一讲解", "Ayurveda Brunch｜阿育吠陀料理", "平衡瑜伽与带领冥想", "Ayurveda Treatment｜2小时疗程"],
        },
        {
          title: "21–24 May｜第一阶段基础重启",
          price: "RM1880",
          tag: "初学者友好",
          summary: "建立身体觉察、瑜伽基础与练习节奏。",
          bestFor: "适合零基础、身体僵硬、想开始瑜伽，或想重新建立稳定练习基础的人。",
          includes: ["Nadi Balance Scan", "阿育吠陀医生一对一讲解", "哈他瑜伽介绍与基础体式", "瑜伽合十礼", "Miracle of Mind", "Surya Shakti / Surya Kriya", "Panchakarma 排毒疗程"],
        },
        {
          title: "28–31 May｜第二阶段深度重启",
          price: "RM2580",
          tag: "五大元素重点",
          summary: "五大元素净化 · 饮食 · 居家养护 · Panchakarma。",
          bestFor: "适合已有瑜伽基础，想深入学习五大元素净化、阿育吠陀饮食与身体养护的人。",
          includes: ["Nadi Balance Scan", "Isha Kriya", "五大元素净化课程", "Angamardana Studio", "阿育吠陀居家养护法", "阿育吠陀饮食与瑜伽饮食课", "Panchakarma 排毒疗程"],
        },
        {
          title: "21–31 May｜完整健康重启系列",
          price: "RM3580",
          tag: "最完整推荐",
          summary: "从检测到净化的完整路径，适合想系统重启的人。",
          bestFor: "适合想完整调整身体、饮食、练习节奏与日常养护的人；也特别适合想为更深度练习做好身体准备的人。",
          includes: ["Nadi Balance Scan", "阿育吠陀医生一对一讲解", "Yoga Sri 咨询", "古典哈他瑜伽", "五大元素净化", "阿育吠陀饮食", "Panchakarma 疗程", "居家养护整合"],
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
      why: "Who It Is For",
      pillars: "3 Pillars",
      elements: "5 Elements",
      journey: "Journey",
      schedule: "Schedule",
      programs: "Programs",
      faq: "FAQ",
      consult: "Consult",
      register: "Register",
    },
    hero: {
      badge: "YOGA SRI WELLNESS",
      eyebrow: "Nadi Scan × Classical Hatha Yoga × Ayurveda",
      kicker: "Assessment｜Practice｜Food｜Purification｜Care",
      title: "Know Your Body. Practice Better.",
      subtitle:
        "A complete wellness reset series integrating Nadi Balance Scan, Ayurvedic doctor guidance, Isha Classical Hatha Yoga, Ayurvedic food, Five Elements Purification and Panchakarma therapy — helping you understand your body and build a practice rhythm that truly fits you.",
      ctaPrimary: "Register Now",
      ctaSecondary: "WhatsApp Us",
      stats: [
        { label: "Body Assessment", value: "Nadi Scan" },
        { label: "Classical Practice", value: "Hatha Yoga" },
        { label: "Doctor Guidance", value: "Ayurveda" },
        { label: "Purification", value: "Panchakarma" },
      ],
      noteTitle: "Certified Isha Hatha Yoga Teacher",
      noteText:
        "Guided by Yoga Sri in clear Chinese instruction, integrating classical Hatha Yoga with Ayurvedic doctor consultation so practice can truly return to the body, food and daily rhythm.",
    },
    why: {
      label: "WHY THIS MATTERS",
      title: "This is not just another yoga class. It is a full reset journey.",
      text1:
        "Suitable for beginners, those with fatigue, poor sleep, stress or digestive discomfort; and also for those who have learned Inner Engineering or Hatha Yoga and want more stability in body, breath, food habits and energy.",
      text2:
        "You may not need to push harder — you may need to understand your body’s signals more clearly. This series supports you through assessment, understanding, practice, food, purification and therapy.",
      cards: [
        "Fatigue, poor sleep or stress",
        "Stiff body and unsure where to begin",
        "Want to understand constitution and food rhythm",
        "Preparing for a deeper practice journey",
      ],
    },
    pillars: {
      label: "THREE PILLARS",
      title: "Isha Yoga × Ayurveda × Five Elements",
      subtitle: "A complete approach through practice, constitution and elemental balance.",
      items: [
        { title: "Isha Yoga", text: "Build stability, vitality, body awareness and inner clarity through classical Hatha Yoga." },
        { title: "Ayurveda", text: "Understand your condition more deeply through constitution analysis, doctor guidance, diet and therapies." },
        { title: "Five Elements", text: "Learn purification, balance and home care through the lens of the five elements." },
      ],
    },
    elements: {
      label: "FIVE ELEMENTS",
      title: "Understanding the body through the five elements",
      subtitle: "Earth, Water, Fire, Air and Space are not just concepts. They point to stability, flow, digestion, breath and inner spaciousness.",
      items: [
        { icon: "▰", title: "Earth", text: "Stability, grounding and support." },
        { icon: "◌", title: "Water", text: "Flow, nourishment and softness." },
        { icon: "✦", title: "Fire", text: "Transformation, vitality and inner heat." },
        { icon: "〰", title: "Air", text: "Movement, lightness and breath." },
        { icon: "◎", title: "Space", text: "Openness, clarity and expansion." },
      ],
    },
    journey: {
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
    schedule: {
      label: "VISUAL SCHEDULE",
      title: "Two-phase wellness reset schedule",
      subtitle: "You may join Phase 1, Phase 2, or the complete series. Each phase begins with assessment and understanding, then moves into practice, food, purification and therapy.",
      phaseLabel: "Phase",
      timeLabel: "Time",
      activityLabel: "Activity",
      phases: [
        {
          title: "Phase 1 | Body Awareness & Foundation Reset",
          date: "21–24 May",
          note: "Suitable for beginners, stiff bodies, fatigue, or those who want to begin with Nadi Scan and Hatha Yoga foundation.",
          days: [
            { date: "21 May", day: "Day 1", rows: [{ time: "6:00pm – 9:00pm", activity: "Nadi Balance Scan, Hatha Yoga introduction, Yoga Namaskar, Miracle of Mind" }] },
            { date: "22 May", day: "Day 2", rows: [{ time: "6:00pm – 9:00pm", activity: "Beginner Hatha Yoga postures, guided meditation" }] },
            {
              date: "23 May",
              day: "Day 3",
              rows: [
                { time: "7:00am – 9:30am", activity: "Hatha Yoga | Surya Shakti" },
                { time: "9:30am – 10:30am", activity: "1-to-1 Ayurvedic doctor explanation for Nadi Scan" },
                { time: "10:30am – 11:30am", activity: "Ayurveda Brunch" },
                { time: "2:30pm – 5:00pm", activity: "Panchakarma detox therapy" },
              ],
            },
            {
              date: "24 May",
              day: "Day 4",
              rows: [
                { time: "7:00am – 9:30am", activity: "Hatha Yoga | Surya Kriya" },
                { time: "9:30am – 10:30am", activity: "Ayurveda Brunch" },
                { time: "11:00am – 12:30pm", activity: "Introduction to Ayurveda and Five Elements Purification" },
                { time: "1:00pm – 3:30pm", activity: "Panchakarma detox therapy" },
              ],
            },
          ],
        },
        {
          title: "Phase 2 | Five Elements Purification & Deep Care",
          date: "28–31 May",
          note: "Suitable for those who want to go deeper into Bhuta Shuddhi, Ayurvedic home care, diet and Panchakarma therapy.",
          days: [
            { date: "28 May", day: "Day 1", rows: [{ time: "6:00pm – 9:00pm", activity: "Nadi Balance Scan, Isha Kriya" }] },
            { date: "29 May", day: "Day 2", rows: [{ time: "6:00pm – 9:00pm", activity: "Beginner Hatha Yoga postures, guided meditation" }] },
            {
              date: "30 May",
              day: "Day 3",
              rows: [
                { time: "7:00am – 9:30am", activity: "Bhuta Shuddhi Five Elements Purification" },
                { time: "9:30am – 10:30am", activity: "Ayurveda Brunch" },
                { time: "1:00pm – 2:30pm", activity: "Ayurvedic home-care methods" },
                { time: "2:30pm – 5:00pm", activity: "Panchakarma detox therapy" },
              ],
            },
            {
              date: "31 May",
              day: "Day 4",
              rows: [
                { time: "7:00am – 9:30am", activity: "Bhuta Shuddhi Five Elements Purification, Angamardana Studio" },
                { time: "9:30am – 10:30am", activity: "Ayurveda Brunch" },
                { time: "1:00pm – 2:30pm", activity: "Ayurvedic diet and yogic food class" },
                { time: "2:30pm – 5:00pm", activity: "Panchakarma detox therapy" },
              ],
            },
          ],
        },
      ],
    },
    programs: {
      label: "PROGRAMS",
      title: "Programs & Packages",
      subtitle: "Click to expand each package.",
      bestFor: "Best for",
      includes: "Includes",
      data: [
        { title: "Nadi Balance Scan", price: "RM180", tag: "Entry point", summary: "Understand your body first, then choose the right practice and care.", bestFor: "For those with fatigue, poor sleep, stress, digestive discomfort or those who want clarity before starting.", includes: ["Nadi Scan assessment", "PDF report", "1-to-1 Ayurvedic doctor explanation", "Yoga Sri consultation"] },
        { title: "23 May | One-Day Reset Experience", price: "RM1080", tag: "Full-day experience", summary: "Nadi Scan + Hatha Yoga + Ayurveda Brunch + Treatment.", bestFor: "For those who want a complete one-day experience of assessment, practice, food and therapy.", includes: ["Hatha Yoga | Surya Shakti", "Nadi Scan with doctor explanation", "Ayurveda Brunch", "Guided meditation / balancing yoga", "2-hour Ayurveda treatment"] },
        { title: "21–24 May | Phase 1 Foundation Reset", price: "RM1880", tag: "Beginner friendly", summary: "Build body awareness, yoga foundation and practice rhythm.", bestFor: "For beginners, stiff bodies, and those who want to establish a stable foundation.", includes: ["Nadi Balance Scan", "1-to-1 Ayurvedic doctor explanation", "Introduction to Hatha Yoga", "Yoga Namaskar", "Miracle of Mind", "Surya Shakti / Surya Kriya", "Panchakarma detox therapy"] },
        { title: "28–31 May | Phase 2 Deep Reset", price: "RM2580", tag: "Five elements focus", summary: "Five Elements Purification · Food · Home Care · Panchakarma.", bestFor: "For those with some yoga background who want to go deeper into five elements purification, Ayurvedic food and body care.", includes: ["Nadi Balance Scan", "Isha Kriya", "Five Elements course", "Angamardana Studio", "Ayurvedic home care", "Ayurvedic and yogic food class", "Panchakarma therapy"] },
        { title: "21–31 May | Complete Reset Series", price: "RM3580", tag: "Most complete", summary: "The most complete path from assessment to purification.", bestFor: "For those who want a full reset of body, food habits, practice rhythm and daily care.", includes: ["Nadi Balance Scan", "Ayurvedic doctor explanation", "Yoga Sri consultation", "Classical Hatha Yoga", "Five Elements Purification", "Ayurvedic food", "Panchakarma therapy", "Home-care integration"] },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      data: [
        { q: "Can I join if I have not learned Isha or Inner Engineering?", a: "Yes. This series is suitable for beginners, people with fatigue, poor sleep, stress or digestive discomfort, and those who want to start caring for the body in a structured way." },
        { q: "Can I still join if I already learned Hatha Yoga?", a: "Yes. This is not only about repeating asanas. It helps you understand how to adapt practice through Nadi Scan, Ayurvedic explanation, food, five elements purification and daily care." },
        { q: "Can beginners or stiff bodies join?", a: "Yes. The foundation package is designed for beginners, office workers and people who want a gentler starting point." },
        { q: "Is Panchakarma suitable for everyone?", a: "The therapy is arranged based on personal constitution and doctor advice. If you are pregnant, recovering from surgery, or on long-term medication, please consult first." },
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

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
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
  const [openProgram, setOpenProgram] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openPhase, setOpenPhase] = useState<number | null>(0);

  const copy = useMemo(() => content[lang], [lang]);

  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Yoga Sri Wellness home">
          <span className="brand-mark" />
          <span>{copy.hero.badge}</span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          <a href="#why">{copy.nav.why}</a>
          <a href="#pillars">{copy.nav.pillars}</a>
          <a href="#elements">{copy.nav.elements}</a>
          <a href="#journey">{copy.nav.journey}</a>
          <a href="#schedule">{copy.nav.schedule}</a>
          <a href="#programs">{copy.nav.programs}</a>
          <a href="#faq">{copy.nav.faq}</a>
        </div>

        <div className="nav-right">
          <div className="lang-switch" aria-label="Language switch">
            <button type="button" className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中</button>
            <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-btn">{copy.nav.consult}</a>
        </div>
      </nav>

      <section id="top" className="hero section-band">
        <div className="hero-bg-orb one" />
        <div className="hero-bg-orb two" />

        <div className="hero-copy">
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
          <p className="hero-kicker">{copy.hero.kicker}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-text">{copy.hero.subtitle}</p>

          <div className="cta-row">
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary">{copy.hero.ctaPrimary}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">{copy.hero.ctaSecondary}</a>
          </div>

          <div className="stats-grid" aria-label="Program highlights">
            {copy.hero.stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Yoga Sri profile">
          <div className="portrait-card">
            <div className="portrait-ring" />
            <img src="/yogasriprofile.jpg" alt="Yoga Sri" />
            <div className="hero-note">
              <p className="mini-label">{copy.hero.noteTitle}</p>
              <h3>Yoga Sri</h3>
              <p>{copy.hero.noteText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section section-card soft-card">
        <SectionHeader label={copy.why.label} title={copy.why.title} />
        <div className="two-col-text">
          <p>{copy.why.text1}</p>
          <p>{copy.why.text2}</p>
        </div>
        <div className="reason-strip">
          {copy.why.cards.map((item) => (
            <div className="reason-pill" key={item}><span />{item}</div>
          ))}
        </div>
      </section>

      <section id="pillars" className="section">
        <SectionHeader label={copy.pillars.label} title={copy.pillars.title} subtitle={copy.pillars.subtitle} />
        <div className="pillar-grid">
          {copy.pillars.items.map((item, index) => (
            <article className="pillar-card" key={item.title}>
              <div className="pillar-icon">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="elements" className="section section-card warm-card">
        <SectionHeader label={copy.elements.label} title={copy.elements.title} subtitle={copy.elements.subtitle} />
        <div className="elements-grid">
          {copy.elements.items.map((item) => (
            <article className="element-card" key={item.title}>
              <div className="element-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section">
        <SectionHeader label={copy.journey.label} title={copy.journey.title} />
        <div className="journey-grid">
          {copy.journey.items.map(([no, title, text]) => (
            <article className="journey-card" key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="schedule" className="section section-card schedule-section">
        <SectionHeader label={copy.schedule.label} title={copy.schedule.title} subtitle={copy.schedule.subtitle} />

        <div className="phase-tabs" aria-label="Schedule phases">
          {copy.schedule.phases.map((phase, index) => (
            <button
              type="button"
              key={phase.title}
              className={openPhase === index ? "active" : ""}
              onClick={() => setOpenPhase(index)}
            >
              <span>{copy.schedule.phaseLabel} {index + 1}</span>
              <strong>{phase.date}</strong>
            </button>
          ))}
        </div>

        <div className="schedule-stack">
          {copy.schedule.phases.map((phase, phaseIndex) => {
            const isActive = openPhase === phaseIndex;
            return (
              <article className={`phase-card ${isActive ? "active" : ""}`} key={phase.title}>
                <button
                  type="button"
                  className="phase-header"
                  onClick={() => setOpenPhase(isActive ? null : phaseIndex)}
                  aria-expanded={isActive}
                >
                  <div>
                    <p>{phase.date}</p>
                    <h3>{phase.title}</h3>
                  </div>
                  <span>{isActive ? "−" : "+"}</span>
                </button>

                {isActive && (
                  <div className="phase-body">
                    <p className="phase-note">{phase.note}</p>
                    <div className="timeline">
                      {phase.days.map((day) => (
                        <article className="day-card" key={`${phase.title}-${day.date}`}>
                          <div className="day-head">
                            <span>{day.day}</span>
                            <h4>{day.date}</h4>
                          </div>
                          <div className="day-rows">
                            {day.rows.map((row) => (
                              <div className="time-row" key={`${day.date}-${row.time}-${row.activity}`}>
                                <p className="time">{row.time}</p>
                                <p className="activity">{row.activity}</p>
                              </div>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="programs" className="section section-card soft-card">
        <SectionHeader label={copy.programs.label} title={copy.programs.title} subtitle={copy.programs.subtitle} />

        <div className="accordion-list">
          {copy.programs.data.map((item, index) => {
            const isOpen = openProgram === index;
            return (
              <article className={`accordion-card ${isOpen ? "open" : ""}`} key={item.title}>
                <button type="button" className="accordion-trigger" onClick={() => setOpenProgram(isOpen ? null : index)} aria-expanded={isOpen}>
                  <div className="accordion-title-wrap">
                    <span className="program-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <div className="accordion-side">
                    <strong>{item.price}</strong>
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="accordion-content">
                    <div className="program-meta">
                      <p><strong>{copy.programs.bestFor}：</strong>{item.bestFor}</p>
                    </div>
                    <h4>{copy.programs.includes}</h4>
                    <ul>
                      {item.includes.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="faq" className="section">
        <SectionHeader label={copy.faq.label} title={copy.faq.title} />
        <div className="faq-list">
          {copy.faq.data.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <article className={`faq-card ${isOpen ? "open" : ""}`} key={item.q}>
                <button type="button" className="faq-trigger" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-card payment-section">
        <SectionHeader label={copy.payment.label} title={copy.payment.title} />
        <p className="payment-text">{copy.payment.text}</p>

        <div className="payment-grid">
          <article className="payment-box bank-box">
            <h3>{copy.payment.bankTitle}</h3>
            <p><small>{copy.payment.bankNameLabel}</small><strong>{copy.payment.bankName}</strong></p>
            <p><small>{copy.payment.bankLabel}</small><strong>{copy.payment.bank}</strong></p>
            <p><small>{copy.payment.accountLabel}</small><strong>{copy.payment.account}</strong></p>
          </article>

          <article className="payment-box">
            <h3>{copy.payment.tngTitle}</h3>
            <div className="tng-wrap"><img src="/TNG.jpg" alt="TNG eWallet QR code" /></div>
          </article>
        </div>

        <div className="cta-row payment-cta">
          <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary">{copy.payment.register}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">{copy.payment.consult}</a>
        </div>
      </section>

      <footer className="footer">
        <p>© Yoga Sri Wellness</p>
        <p>Nadi Balance Scan × Hatha Yoga × Ayurveda × Five Elements</p>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Chat with Yoga Sri on WhatsApp">WhatsApp</a>

      <style jsx global>{`
        :root {
          --bg: #f8f1e6;
          --bg-soft: #fffaf2;
          --card: rgba(255, 252, 245, 0.86);
          --card-strong: #fff8ec;
          --ink: #312417;
          --muted: #786755;
          --line: rgba(103, 75, 48, 0.16);
          --gold: #b8843b;
          --gold-dark: #7a4f20;
          --clay: #bb7456;
          --sage: #6f8061;
          --cream: #fff7e8;
          --shadow: 0 24px 80px rgba(74, 48, 27, 0.12);
          --radius: 28px;
          --max: 1160px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(206, 153, 92, 0.26), transparent 34rem),
            radial-gradient(circle at 90% 10%, rgba(128, 148, 100, 0.18), transparent 26rem),
            linear-gradient(180deg, #faf0e1 0%, #f6ead8 42%, #fbf4ea 100%);
          color: var(--ink);
          font-family: ui-serif, Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif;
        }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }

        .site-shell { min-height: 100vh; overflow: hidden; position: relative; }
        .site-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(78, 54, 32, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(78, 54, 32, 0.03) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: linear-gradient(to bottom, black, transparent 72%);
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          width: min(calc(100% - 32px), var(--max));
          margin: 18px auto 0;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 1px solid rgba(120, 91, 55, 0.16);
          border-radius: 999px;
          background: rgba(255, 250, 242, 0.78);
          backdrop-filter: blur(18px);
          box-shadow: 0 12px 44px rgba(81, 53, 29, 0.1);
        }

        .brand, .nav-right, .nav-links, .lang-switch { display: flex; align-items: center; }
        .brand {
          gap: 10px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          letter-spacing: 0.16em;
          font-weight: 800;
          white-space: nowrap;
        }
        .brand-mark {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-block;
          background:
            radial-gradient(circle, #fff4dc 0 25%, transparent 26%),
            conic-gradient(from 30deg, #b8843b, #6f8061, #bb7456, #b8843b);
          box-shadow: 0 0 0 6px rgba(184, 132, 59, 0.1);
        }
        .nav-links {
          gap: 15px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }
        .nav-links a { transition: color 0.2s ease; white-space: nowrap; }
        .nav-links a:hover { color: var(--gold-dark); }
        .nav-right { gap: 10px; }
        .lang-switch { padding: 4px; border-radius: 999px; background: rgba(72, 49, 27, 0.07); }
        .lang-switch button {
          border: 0;
          cursor: pointer;
          padding: 7px 10px;
          border-radius: 999px;
          background: transparent;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 700;
        }
        .lang-switch button.active { color: white; background: var(--ink); }
        .nav-btn {
          padding: 10px 15px;
          border-radius: 999px;
          background: var(--ink);
          color: #fff8ea;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 12px 26px rgba(49, 36, 23, 0.16);
        }

        .hero, .section { width: min(calc(100% - 40px), var(--max)); margin: 0 auto; }
        .hero {
          position: relative;
          padding: 96px 0 72px;
          display: grid;
          grid-template-columns: 1.02fr 0.88fr;
          gap: 56px;
          align-items: center;
        }
        .hero-bg-orb { position: absolute; border-radius: 999px; filter: blur(4px); opacity: 0.7; pointer-events: none; }
        .hero-bg-orb.one { width: 320px; height: 320px; top: 80px; right: 220px; background: radial-gradient(circle, rgba(184, 132, 59, 0.16), transparent 68%); }
        .hero-bg-orb.two { width: 220px; height: 220px; bottom: 30px; left: 8%; background: radial-gradient(circle, rgba(111, 128, 97, 0.18), transparent 68%); }
        .hero-copy, .hero-visual { position: relative; z-index: 2; }
        .hero-eyebrow, .hero-kicker, .section-label, .mini-label, .program-tag {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          font-weight: 800;
        }
        .hero-eyebrow { color: var(--gold-dark); margin: 0 0 12px; }
        .hero-kicker { max-width: 680px; margin: 0 0 20px; color: var(--sage); line-height: 1.7; }
        h1, h2, h3, p { margin-top: 0; }
        h1 {
          max-width: 560px;
          margin-bottom: 22px;
          font-size: clamp(56px, 5.8vw, 82px);
          line-height: 1.03;
          letter-spacing: -0.045em;
          color: var(--ink);
        }
        .hero-text {
          max-width: 640px;
          margin-bottom: 28px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.95;
        }
        .cta-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .btn {
          min-height: 48px;
          padding: 14px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 800;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary { color: #fff8ea; background: linear-gradient(135deg, var(--ink), #654425); box-shadow: 0 18px 42px rgba(69, 44, 22, 0.18); }
        .btn-secondary { color: var(--ink); background: rgba(255, 255, 255, 0.48); border: 1px solid var(--line); }
        .stats-grid { margin-top: 34px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
        .stat-card { padding: 18px 16px; border-radius: 20px; background: rgba(255, 250, 241, 0.72); border: 1px solid var(--line); box-shadow: 0 16px 50px rgba(92, 58, 26, 0.07); }
        .stat-card strong { display: block; margin-bottom: 6px; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; }
        .stat-card span { color: var(--muted); font-size: 13px; line-height: 1.5; }
        .hero-visual { display: flex; justify-content: center; }
        .portrait-card { position: relative; width: min(100%, 420px); padding: 18px; border-radius: 42px; background: rgba(255, 248, 236, 0.74); border: 1px solid rgba(120, 91, 55, 0.16); box-shadow: var(--shadow); }
        .portrait-ring { position: absolute; width: 220px; height: 220px; top: -36px; right: -36px; border: 1px solid rgba(184, 132, 59, 0.28); border-radius: 50%; pointer-events: none; }
        .portrait-ring::after { content: ""; position: absolute; inset: 28px; border-radius: 50%; border: 1px solid rgba(111, 128, 97, 0.22); }
        .portrait-card img { position: relative; z-index: 1; width: 100%; height: 520px; object-fit: cover; object-position: center; display: block; border-radius: 32px; filter: saturate(0.96) contrast(0.98); }
        .hero-note { position: relative; z-index: 2; margin: -78px 18px 0; padding: 22px; border-radius: 26px; background: rgba(255, 252, 245, 0.9); border: 1px solid rgba(120, 91, 55, 0.15); backdrop-filter: blur(16px); box-shadow: 0 18px 54px rgba(63, 42, 22, 0.13); }
        .mini-label { margin-bottom: 8px; color: var(--gold-dark); font-size: 10px; }
        .hero-note h3 { margin-bottom: 8px; font-size: 30px; letter-spacing: -0.04em; }
        .hero-note p:last-child { margin-bottom: 0; color: var(--muted); line-height: 1.8; font-size: 14px; }

        .section { padding: 74px 0; }
        .section-card { padding: 58px; border-radius: var(--radius); border: 1px solid var(--line); box-shadow: var(--shadow); }
        .soft-card { background: linear-gradient(135deg, rgba(255, 250, 242, 0.9), rgba(255, 244, 224, 0.7)), radial-gradient(circle at 15% 20%, rgba(184, 132, 59, 0.14), transparent 24rem); }
        .warm-card { background: linear-gradient(135deg, rgba(255, 248, 236, 0.96), rgba(246, 225, 198, 0.72)), radial-gradient(circle at 85% 18%, rgba(111, 128, 97, 0.18), transparent 24rem); }
        .section-header { max-width: 820px; margin-bottom: 34px; }
        .section-label { margin-bottom: 12px; color: var(--gold-dark); }
        .section-header h2 { margin-bottom: 12px; font-size: clamp(34px, 5vw, 58px); line-height: 1; letter-spacing: -0.055em; }
        .section-subtitle { margin-bottom: 0; color: var(--muted); font-size: 17px; line-height: 1.9; }
        .two-col-text { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; }
        .two-col-text p { margin-bottom: 0; color: var(--muted); font-size: 17px; line-height: 2; }
        .reason-strip { margin-top: 30px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
        .reason-pill { padding: 16px; display: flex; gap: 10px; align-items: flex-start; border-radius: 18px; background: rgba(255, 255, 255, 0.48); border: 1px solid rgba(120, 91, 55, 0.12); color: var(--muted); font-size: 14px; line-height: 1.55; }
        .reason-pill span { width: 8px; height: 8px; margin-top: 6px; border-radius: 50%; flex: 0 0 auto; background: var(--gold); }

        .pillar-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .pillar-card, .element-card, .journey-card, .accordion-card, .faq-card, .payment-box, .phase-card, .day-card { border: 1px solid var(--line); background: rgba(255, 250, 242, 0.72); box-shadow: 0 18px 60px rgba(83, 52, 26, 0.07); }
        .pillar-card { min-height: 260px; padding: 28px; border-radius: 28px; position: relative; overflow: hidden; }
        .pillar-card::after { content: ""; position: absolute; width: 160px; height: 160px; right: -70px; bottom: -80px; border-radius: 50%; background: rgba(184, 132, 59, 0.12); }
        .pillar-icon { width: 52px; height: 52px; margin-bottom: 34px; border-radius: 50%; display: grid; place-items: center; background: #fff2dc; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-weight: 900; }
        .pillar-card h3, .element-card h3, .journey-card h3 { margin-bottom: 12px; font-size: 25px; letter-spacing: -0.04em; }
        .pillar-card p, .element-card p, .journey-card p { margin-bottom: 0; color: var(--muted); line-height: 1.85; }
        .elements-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; }
        .element-card { padding: 22px; border-radius: 26px; min-height: 250px; display: flex; flex-direction: column; }
        .element-icon { width: 62px; height: 62px; margin-bottom: 28px; border-radius: 24px; display: grid; place-items: center; color: var(--gold-dark); background: linear-gradient(135deg, #fff7e8, #f1d5ad); font-size: 28px; }
        .element-card p { font-size: 14px; }
        .journey-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; }
        .journey-card { min-height: 210px; padding: 22px; border-radius: 24px; background: rgba(255, 250, 242, 0.66); }
        .journey-card span { display: inline-flex; margin-bottom: 28px; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-weight: 900; font-size: 13px; letter-spacing: 0.12em; }
        .journey-card h3 { font-size: 22px; }
        .journey-card p { font-size: 14px; }

        .schedule-section { background: linear-gradient(135deg, rgba(255, 248, 236, 0.98), rgba(246, 232, 211, 0.82)), radial-gradient(circle at 90% 12%, rgba(111, 128, 97, 0.16), transparent 22rem); }
        .phase-tabs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }
        .phase-tabs button { cursor: pointer; border: 1px solid var(--line); border-radius: 22px; padding: 18px; text-align: left; background: rgba(255, 255, 255, 0.42); color: var(--ink); transition: 0.2s ease; }
        .phase-tabs button.active { background: var(--ink); color: #fff8ea; box-shadow: 0 18px 46px rgba(49, 36, 23, 0.16); }
        .phase-tabs span { display: block; margin-bottom: 8px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.7; }
        .phase-tabs strong { font-size: 24px; letter-spacing: -0.04em; }
        .schedule-stack { display: grid; gap: 14px; }
        .phase-card { border-radius: 28px; overflow: hidden; background: rgba(255, 252, 245, 0.74); }
        .phase-card.active { border-color: rgba(184, 132, 59, 0.38); box-shadow: 0 22px 72px rgba(83, 52, 26, 0.12); }
        .phase-header { width: 100%; padding: 24px; cursor: pointer; border: 0; background: transparent; color: var(--ink); display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; text-align: left; }
        .phase-header p { margin-bottom: 8px; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; font-size: 12px; }
        .phase-header h3 { margin-bottom: 0; font-size: 30px; line-height: 1.15; letter-spacing: -0.045em; }
        .phase-header span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; background: var(--ink); color: white; font-size: 24px; }
        .phase-body { padding: 0 24px 28px; }
        .phase-note { margin-bottom: 20px; padding: 18px; border-radius: 20px; background: rgba(255, 246, 230, 0.82); border: 1px solid rgba(120, 91, 55, 0.12); color: var(--muted); line-height: 1.8; }
        .timeline { display: grid; gap: 14px; }
        .day-card { position: relative; padding: 20px; border-radius: 24px; background: rgba(255, 255, 255, 0.5); }
        .day-card::before { content: ""; position: absolute; left: 31px; top: 66px; bottom: 22px; width: 1px; background: rgba(184, 132, 59, 0.28); }
        .day-head { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
        .day-head span { width: 42px; height: 42px; border-radius: 50%; background: #fff2dc; display: grid; place-items: center; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 11px; font-weight: 900; }
        .day-head h4 { margin: 0; font-size: 24px; letter-spacing: -0.04em; }
        .day-rows { display: grid; gap: 10px; }
        .time-row { display: grid; grid-template-columns: 180px 1fr; gap: 14px; align-items: start; padding: 13px 14px 13px 0; margin-left: 54px; border-bottom: 1px solid rgba(120, 91, 55, 0.1); }
        .time-row:last-child { border-bottom: 0; }
        .time { margin: 0; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; font-weight: 900; }
        .activity { margin: 0; color: var(--muted); line-height: 1.65; }

        .accordion-list, .faq-list { display: grid; gap: 14px; }
        .accordion-card, .faq-card { border-radius: 26px; overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .accordion-card.open, .faq-card.open { border-color: rgba(184, 132, 59, 0.42); box-shadow: 0 22px 70px rgba(83, 52, 26, 0.12); }
        .accordion-trigger, .faq-trigger { width: 100%; border: 0; cursor: pointer; text-align: left; background: transparent; color: var(--ink); }
        .accordion-trigger { padding: 24px; display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; }
        .accordion-title-wrap h3 { margin-bottom: 7px; font-size: 25px; line-height: 1.25; letter-spacing: -0.035em; }
        .accordion-title-wrap p { margin-bottom: 0; color: var(--muted); line-height: 1.7; }
        .program-tag { display: inline-flex; width: fit-content; margin-bottom: 12px; padding: 7px 10px; border-radius: 999px; color: var(--gold-dark); background: rgba(184, 132, 59, 0.12); font-size: 10px; }
        .accordion-side { min-width: 138px; display: flex; align-items: center; justify-content: flex-end; gap: 18px; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .accordion-side strong { font-size: 19px; }
        .accordion-side span, .faq-trigger b { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; color: white; background: var(--ink); font-size: 22px; line-height: 1; }
        .accordion-content { padding: 0 24px 26px; }
        .program-meta { padding: 18px; border-radius: 20px; background: rgba(255, 246, 230, 0.82); border: 1px solid rgba(120, 91, 55, 0.12); }
        .program-meta p { margin-bottom: 0; color: var(--muted); line-height: 1.8; }
        .program-meta strong { color: var(--ink); }
        .accordion-content h4 { margin: 22px 0 12px; font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-dark); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .accordion-content ul { margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; list-style: none; }
        .accordion-content li { position: relative; padding: 12px 14px 12px 34px; border-radius: 16px; background: rgba(255, 255, 255, 0.48); color: var(--muted); line-height: 1.55; }
        .accordion-content li::before { content: ""; position: absolute; width: 8px; height: 8px; left: 16px; top: 21px; border-radius: 50%; background: var(--gold); }
        .faq-list { max-width: 900px; margin: 0 auto; }
        .faq-trigger { padding: 22px 24px; display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; }
        .faq-trigger span { font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
        .faq-answer { margin: 0; padding: 0 24px 24px; color: var(--muted); line-height: 1.9; }

        .payment-section { background: linear-gradient(135deg, rgba(255, 250, 242, 0.92), rgba(248, 229, 204, 0.86)), radial-gradient(circle at 90% 20%, rgba(184, 132, 59, 0.15), transparent 22rem); }
        .payment-text { max-width: 760px; margin-bottom: 28px; color: var(--muted); font-size: 17px; line-height: 1.9; }
        .payment-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 18px; }
        .payment-box { padding: 28px; border-radius: 28px; }
        .payment-box h3 { margin-bottom: 22px; font-size: 28px; letter-spacing: -0.04em; }
        .payment-box p { margin: 0; padding: 15px 0; border-top: 1px solid rgba(120, 91, 55, 0.12); display: grid; gap: 5px; }
        .payment-box small { color: var(--muted); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
        .payment-box strong { color: var(--ink); font-size: 20px; letter-spacing: -0.02em; }
        .tng-wrap { width: min(100%, 260px); padding: 14px; border-radius: 24px; background: white; border: 1px solid rgba(120, 91, 55, 0.12); }
        .tng-wrap img { width: 100%; display: block; border-radius: 18px; }
        .payment-cta { margin-top: 28px; }
        .footer { width: min(calc(100% - 40px), var(--max)); margin: 0 auto; padding: 26px 0 92px; display: flex; justify-content: space-between; gap: 16px; color: var(--muted); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; }
        .footer p { margin: 0; }
        .floating-whatsapp { position: fixed; right: 22px; bottom: 22px; z-index: 60; min-height: 54px; padding: 0 20px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; color: white; background: linear-gradient(135deg, #2f6e45, #183f28); box-shadow: 0 18px 46px rgba(24, 63, 40, 0.28); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-weight: 900; letter-spacing: 0.02em; }

        @media (max-width: 1080px) {
          .nav { align-items: flex-start; border-radius: 28px; flex-wrap: wrap; }
          .nav-links { order: 3; width: 100%; justify-content: center; flex-wrap: wrap; row-gap: 10px; }
          .hero { grid-template-columns: 1fr; padding-top: 72px; }
          .hero-visual { justify-content: flex-start; }
          .stats-grid, .reason-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .elements-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .journey-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .time-row { grid-template-columns: 160px 1fr; }
        }

        @media (max-width: 780px) {
          .nav { width: min(calc(100% - 20px), var(--max)); margin-top: 10px; }
          .nav-right { width: 100%; justify-content: space-between; }
          .nav-links { display: none; }
          .hero, .section, .footer { width: min(calc(100% - 24px), var(--max)); }
          .hero { padding: 56px 0 52px; gap: 36px; }
          h1 { font-size: clamp(44px, 12vw, 58px); }
          .hero-text { font-size: 16px; line-height: 1.9; }
          .section { padding: 48px 0; }
          .section-card { padding: 28px; border-radius: 26px; }
          .section-header h2 { font-size: clamp(32px, 11vw, 46px); }
          .two-col-text, .pillar-grid, .payment-grid, .phase-tabs { grid-template-columns: 1fr; }
          .elements-grid, .journey-grid, .stats-grid, .reason-strip, .accordion-content ul { grid-template-columns: 1fr; }
          .portrait-card { width: 100%; }
          .portrait-card img { height: 430px; }
          .accordion-trigger { grid-template-columns: 1fr; }
          .accordion-side { width: 100%; justify-content: space-between; }
          .phase-header h3 { font-size: 24px; }
          .time-row { grid-template-columns: 1fr; gap: 6px; margin-left: 54px; }
          .footer { flex-direction: column; padding-bottom: 98px; }
        }

        @media (max-width: 480px) {
          .brand { font-size: 10px; letter-spacing: 0.12em; }
          .nav-btn { padding-inline: 12px; }
          .btn { width: 100%; }
          .hero-note { margin-left: 8px; margin-right: 8px; }
          .payment-box { padding: 22px; }
          .phase-body { padding-inline: 16px; }
          .phase-header { padding: 20px 16px; }
          .day-card { padding: 16px; }
          .day-card::before { left: 27px; }
          .time-row { margin-left: 46px; }
          .floating-whatsapp { right: 14px; bottom: 14px; min-height: 50px; }
        }
      `}</style>
    </main>
  );
}
