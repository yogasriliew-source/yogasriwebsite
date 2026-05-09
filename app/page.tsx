export default function HomePage() {
  const mainProgram = {
    title: "3天五大元素健康重启学习营",
    subtitle: "清理 · 平衡 · 重整 · 焕发身心能量",
    desc: "当五大元素恢复平衡，身体自然成为修习的最佳载体。这个学习营结合 Isha 经典哈他瑜伽、五大元素净化、阿育吠陀饮食、Nadi 气脉平衡检测与医生一对一咨询，帮助你重新整理身体、呼吸、饮食与生活节奏。",
    schedule: [
      "5月29日（周四）6pm - 9pm",
      "5月30日（周五）7am - 3pm",
      "5月31日（周六）7am - 3pm",
    ],
    location: "Smrithi Ayur Care, Petaling Jaya",
  };

  const courses = [
    {
      title: "Yoga for Joints｜关节舒展瑜伽",
      subtitle: "温和开始，重新打开身体空间",
      price: "RM80 起",
      desc: "适合初学者、久坐上班族、肩颈僵硬、膝盖不适、身体长期紧绷，或想以温和方式开始瑜伽的人。通过简单、安全、可持续的练习，让关节、肌肉与呼吸慢慢恢复流动。",
      details: ["适合零基础", "温和安全", "改善僵硬感", "适合忙碌女性"],
    },
    {
      title: "Hatha for Beginners｜初学者哈他瑜伽",
      subtitle: "建立正确、安全、稳定的练习基础",
      price: "RM180 起",
      desc: "为没有瑜伽基础的学员设计，从身体使用、呼吸配合、专注力与稳定性开始。帮助你真正理解经典哈他瑜伽不是单纯运动，而是一种整理身体与生命状态的方式。",
      details: ["基础体式", "呼吸配合", "身体觉察", "长期练习建立"],
    },
    {
      title: "Yogasanas｜经典瑜伽体式",
      subtitle: "让身体成为修习的最佳载体",
      price: "RM800 起",
      desc: "Isha Classical Hatha Yoga 核心课程，通过精准的体式练习，帮助身体进入更稳定、优雅、专注的状态。适合想深入修习、调整身体姿态、提升练习质量的学员。",
      details: ["经典21个体式", "姿态与能量稳定", "适合持续练习者", "老师现场纠正"],
    },
    {
      title: "Bhuta Shuddhi｜五大元素净化",
      subtitle: "土 · 水 · 火 · 风 · 空 的内在净化",
      price: "RM800 起",
      desc: "通过传统净化过程与每日短时间练习，帮助学员建立与五大元素之间更细腻的连接。适合想让身体、情绪与内在状态更加稳定的人。",
      details: ["含净化器具", "每日约10分钟", "五元素平衡", "现场学习"],
    },
    {
      title: "Nadi Balance Scan｜脉诊平衡检测",
      subtitle: "了解你的体质，找回身体的自然节奏",
      price: "RM180 起",
      desc: "结合阿育吠陀医生解析与瑜伽顾问咨询，帮助你了解 Dosha 体质状态、身体倾向、生活节奏与适合的瑜伽练习方向。适合作为深入疗程、Panchakarma 或瑜伽 sadhana 前的基础评估。",
      details: ["Dosha 体质分析", "PDF 报告", "医生一对一讲解", "瑜伽建议"],
    },
    {
      title: "Yoga × Ayurveda 整合课程",
      subtitle: "从练习、饮食、体质到日常养护",
      price: "预约咨询",
      desc: "结合经典哈他瑜伽、阿育吠陀体质分析、饮食建议与日常养护方式，帮助学员从身体、呼吸、饮食与生活节奏中建立更完整的平衡。",
      details: ["医生支持", "瑜伽顾问", "饮食与作息建议", "适合长期调理"],
    },
  ];

  const elements = [
    { zh: "土", en: "EARTH", symbol: "△", color: "#c48a38" },
    { zh: "水", en: "WATER", symbol: "◌", color: "#4b9fbc" },
    { zh: "火", en: "FIRE", symbol: "▲", color: "#d96b2b" },
    { zh: "风", en: "AIR", symbol: "≋", color: "#7b9b77" },
    { zh: "空", en: "SPACE", symbol: "◎", color: "#b56f45" },
  ];

  const testimonials = [
    {
      name: "范美好｜杭州",
      text: "进入生命元素线上课堂三天，感觉自己的强迫性松绑了。早起做五大元素净化时，竟然完全沉浸在呼吸中，从没有过这样的感受。",
    },
    {
      name: "付洋｜大连",
      text: "亲手把泥土一点一点装进花盆，体会和泥土接触的过程，突然感觉土是那么伟大。通过这次课程，才发现人可以这么有意识地活着。",
    },
    {
      name: "素月",
      text: "早上喝了铜杯静置一夜的水，练习苏利亚克里亚时，感觉鼻腔充满水气，呼吸和空气中的水气完全混合在一起。",
    },
    {
      name: "黄健玲",
      text: "每次喝水前都带着意识对水合十，喝水的过程变得柔软，能体验到水在口腔、喉咙与身体里的细节。",
    },
    {
      name: "Yellow.light",
      text: "下班抬起水杯，对水说谢谢你，我爱你，喜悦，平静。喝下去觉得水好甜。",
    },
    {
      name: "Yoyo",
      text: "第二次参加线上课，感觉身体更柔软了。为了保持空腹，每天晚上吃得五分饱，身体健康方面也改善了。这个瑜伽感觉真是一辈子的事情。",
    },
    {
      name: "EKa",
      text: "之前自己练习时没有发现身体会晃动，是老师纠正后才知道。课堂上调整瑜伽合十礼时，感觉脊柱有一股热量。",
    },
    {
      name: "Michelle",
      text: "空间元素让我体验到脚步沉稳，头脑清晰，情绪趋于平静。喝水前带着感恩与敬畏，喝下去甘甜可口。",
    },
    {
      name: "婷婷",
      text: "我是被老师的祈请唱诵震撼到的，有种很愉悦的酥麻感。简单的合十礼，都感觉从手心到口腔像如沐甘露。",
    },
  ];

  const suitableFor = [
    "长期久坐、肩颈紧绷、身体僵硬的人",
    "工作与家庭责任重，想重新照顾自己的女性",
    "已经练习 Isha Yoga，想让身体状态更稳定的人",
    "想了解体质、饮食、作息与瑜伽练习如何配合的人",
    "准备 Panchakarma、Retreat 或深度修习的人",
    "想用中文准确学习经典哈他瑜伽的人",
  ];

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.eyebrow}>ISHA HATHA YOGA · AYURVEDA · FIVE ELEMENTS</p>

          <h1 style={styles.heroTitle}>
            Yoga Sri
            <span style={styles.heroTitleSmall}>｜Isha 哈他瑜伽导师</span>
          </h1>

          <h2 style={styles.heroHeadline}>
            让身体柔软，<br />
            让心安住。
          </h2>

          <p style={styles.heroParagraph}>
            用中文，深入而准确地学习经典哈他瑜伽，结合阿育吠陀智慧，重新建立身体、呼吸、饮食与生命节奏的平衡。
          </p>

          <div style={styles.heroButtons}>
            <a href="https://wa.me/60126725549" target="_blank" style={styles.buttonDark}>
              WhatsApp 预约课程
            </a>
            <a href="#courses" style={styles.buttonLight}>
              查看课程
            </a>
          </div>
        </div>

        <div style={styles.heroImageWrap}>
          <img src="/Yoga-sri.jpg" alt="Yoga Sri" style={styles.heroImage} />
          <div style={styles.imageCaption}>清理 · 平衡 · 重整 · 焕发身心能量</div>
        </div>
      </section>

      <section style={styles.elementSection}>
        <div style={styles.elementRow}>
          {elements.map((element) => (
            <div key={element.en} style={{ ...styles.elementItem, color: element.color }}>
              <div style={{ ...styles.elementCircle, borderColor: element.color }}>
                <span style={styles.elementSymbol}>{element.symbol}</span>
              </div>
              <div style={styles.elementZh}>{element.zh}</div>
              <div style={styles.elementEn}>{element.en}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.aboutSection}>
        <div style={styles.containerNarrow}>
          <p style={styles.sectionKicker}>ABOUT YOGA SRI</p>
          <h2 style={styles.sectionTitle}>把古老的瑜伽智慧，带回现代人的生活。</h2>

          <p style={styles.paragraph}>
            Yoga Sri 是 Isha Classical Hatha Yoga 老师，自 2017 年起教授经典哈他瑜伽，持续在马来西亚、中国、台湾、日本、印度及线上带领中文与英文课程。
          </p>

          <p style={styles.paragraph}>
            她特别理解中文学员在学习经典瑜伽时常遇到的困难：听不懂英文指令、不确定动作是否正确、练习很努力却不知道如何调整身体状态。因此，她的课程注重清晰引导、安全细节与长期练习的建立。
          </p>

          <p style={styles.paragraph}>
            近年来，Yoga Sri 结合阿育吠陀医生的体质分析与生活建议，帮助学员从瑜伽练习、饮食、作息与身体养护中，找到更完整的平衡方式。
          </p>
        </div>
      </section>

      <section style={styles.mainProgramSection}>
        <div style={styles.container}>
          <div style={styles.programGrid}>
            <div>
              <p style={styles.sectionKicker}>FEATURED PROGRAM</p>
              <h2 style={styles.sectionTitle}>{mainProgram.title}</h2>
              <p style={styles.programSubtitle}>{mainProgram.subtitle}</p>
              <p style={styles.paragraph}>{mainProgram.desc}</p>

              <div style={styles.programHighlights}>
                {[
                  "Nadi 气脉平衡检测",
                  "医生一对一咨询",
                  "五大元素净化",
                  "舒缓平衡瑜伽",
                  "Shanmukhi Mudra",
                  "阿育吠陀饮食",
                  "Masala Tea / Herbal Tea / Butter Milk",
                ].map((item) => (
                  <span key={item} style={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.programInfoCard}>
              <h3 style={styles.cardTitle}>课程时间</h3>
              {mainProgram.schedule.map((time) => (
                <p key={time} style={styles.infoLine}>
                  {time}
                </p>
              ))}

              <div style={styles.divider} />

              <h3 style={styles.cardTitle}>地点</h3>
              <p style={styles.infoLine}>{mainProgram.location}</p>

              <div style={styles.divider} />

              <h3 style={styles.cardTitle}>预约</h3>
              <p style={styles.infoLine}>+6012-6725549</p>
              <p style={styles.infoLine}>Facebook: YogaSriNowYoga</p>

              <a href="https://wa.me/60126725549" target="_blank" style={{ ...styles.buttonDark, marginTop: 22 }}>
                立即预约名额
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" style={styles.coursesSection}>
        <div style={styles.container}>
          <p style={{ ...styles.sectionKicker, textAlign: "center" }}>COURSES</p>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>课程介绍</h2>

          <p style={styles.centerParagraph}>
            从温和入门到深入修习，从关节舒展、经典体式、五大元素净化，到阿育吠陀体质分析，帮助你找到最适合身体状态的练习方式。
          </p>

          <div style={styles.courseGrid}>
            {courses.map((course) => (
              <div key={course.title} style={styles.card}>
                <div style={styles.courseTop}>
                  <h3 style={styles.courseTitle}>{course.title}</h3>
                  <span style={styles.price}>{course.price}</span>
                </div>

                <p style={styles.courseSubtitle}>{course.subtitle}</p>
                <p style={styles.courseDesc}>{course.desc}</p>

                <div style={styles.tagWrap}>
                  {course.details.map((detail) => (
                    <span key={detail} style={styles.tag}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.suitableSection}>
        <div style={styles.container}>
          <p style={{ ...styles.sectionKicker, textAlign: "center" }}>WHO IS THIS FOR</p>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>适合参加的人</h2>

          <div style={styles.suitableGrid}>
            {suitableFor.map((item) => (
              <div key={item} style={styles.suitableCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.testimonialSection}>
        <div style={styles.container}>
          <p style={{ ...styles.sectionKicker, textAlign: "center" }}>STUDENT STORIES</p>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>学员分享</h2>

          <p style={styles.centerParagraph}>
            这些分享来自 Yoga Sri 过往带领的五大元素、生命元素与经典哈他瑜伽课程。练习不只是动作，而是重新学习如何喝水、呼吸、接触土地，也整理自己的内在状态。
          </p>

          <div style={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <div key={item.name} style={styles.testimonialCard}>
                <p style={styles.testimonialText}>“{item.text}”</p>
                <strong style={styles.testimonialName}>{item.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.sadhguruSection}>
        <div style={styles.containerNarrowCenter}>
          <p style={styles.sectionKicker}>PREPARATION JOURNEY</p>
          <h2 style={styles.sectionTitle}>Sadhguru Malaysia 2026</h2>

          <p style={styles.paragraphCenter}>
            为迎接 2026 薩古魯马来西亚活动，Yoga Sri 将带领一系列身体准备课程、经典哈他瑜伽、五大元素净化与静修支持课程，帮助学员以更稳定、更清明的状态进入这个重要的体验。
          </p>

          <a href="https://wa.me/60126725549" target="_blank" style={styles.buttonDark}>
            询问 2026 课程与静修
          </a>
        </div>
      </section>

      <section style={styles.contactSection}>
        <div style={styles.containerNarrowCenter}>
          <h2 style={styles.contactTitle}>联系 Yoga Sri</h2>

          <p style={styles.contactText}>
            欢迎预约课程、私人咨询、企业课程、静修营与瑜伽 × 阿育吠陀合作。
          </p>

          <div style={styles.contactButtons}>
            <a href="https://wa.me/60126725549" target="_blank" style={styles.contactButtonPrimary}>
              WhatsApp
            </a>

            <a href="https://facebook.com/YogaSriNowYoga" target="_blank" style={styles.contactButtonSecondary}>
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, any> = {
  page: {
    background: "#f6efe5",
    color: "#4a3525",
    minHeight: "100vh",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
  },
  containerNarrow: {
    maxWidth: 960,
    margin: "0 auto",
  },
  containerNarrowCenter: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },
  hero: {
    padding: "70px 20px 50px",
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 50,
    alignItems: "center",
  },
  heroText: {},
  eyebrow: {
    letterSpacing: 3,
    color: "#8b6a4d",
    fontSize: 14,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 68,
    lineHeight: 1.05,
    margin: "20px 0",
    color: "#5a3d27",
  },
  heroTitleSmall: {
    display: "block",
    fontSize: 24,
    fontWeight: 400,
    marginTop: 14,
  },
  heroHeadline: {
    fontSize: 44,
    lineHeight: 1.25,
    margin: "0 0 20px",
    color: "#5a3d27",
  },
  heroParagraph: {
    fontSize: 20,
    lineHeight: 1.9,
    color: "#5f4a38",
  },
  heroButtons: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 30,
  },
  heroImageWrap: {
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: 430,
    borderRadius: 36,
    boxShadow: "0 25px 60px rgba(91,61,39,0.25)",
  },
  imageCaption: {
    marginTop: 18,
    fontSize: 18,
    color: "#7b5b42",
  },
  buttonDark: {
    display: "inline-block",
    padding: "16px 32px",
    backgroundColor: "#4a3525",
    color: "white",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: 17,
  },
  buttonLight: {
    display: "inline-block",
    padding: "16px 32px",
    backgroundColor: "#efe2d1",
    color: "#4a3525",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: 17,
  },
  elementSection: {
    padding: "30px 20px 70px",
  },
  elementRow: {
    display: "flex",
    justifyContent: "center",
    gap: 28,
    flexWrap: "wrap",
  },
  elementItem: {
    textAlign: "center",
  },
  elementCircle: {
    width: 70,
    height: 70,
    border: "2px solid",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px",
  },
  elementSymbol: {
    fontSize: 30,
  },
  elementZh: {
    fontSize: 18,
    marginBottom: 4,
  },
  elementEn: {
    fontSize: 13,
    letterSpacing: 1,
  },
  aboutSection: {
    background: "#fffaf3",
    padding: "90px 20px",
  },
  mainProgramSection: {
    background: "#eadcc9",
    padding: "90px 20px",
  },
  programGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 40,
    alignItems: "start",
  },
  programSubtitle: {
    fontSize: 22,
    color: "#9a6b3f",
    marginBottom: 20,
  },
  programHighlights: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 26,
  },
  programInfoCard: {
    background: "#fffaf3",
    color: "#4a3525",
    padding: 34,
    borderRadius: 30,
    boxShadow: "0 14px 35px rgba(91,61,39,0.10)",
  },
  coursesSection: {
    padding: "100px 20px",
  },
  suitableSection: {
    background: "#fffaf3",
    padding: "90px 20px",
  },
  testimonialSection: {
    background: "#f2e6d8",
    padding: "100px 20px",
  },
  sadhguruSection: {
    background: "#fffaf3",
    padding: "95px 20px",
  },
  contactSection: {
    background: "#3f2b1d",
    color: "white",
    padding: "90px 20px",
  },
  sectionKicker: {
    letterSpacing: 3,
    color: "#9a6b3f",
    fontSize: 13,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 46,
    color: "#5a3d27",
    margin: "0 0 26px",
    lineHeight: 1.2,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 2,
    color: "#5f4a38",
    marginBottom: 18,
  },
  paragraphCenter: {
    fontSize: 18,
    lineHeight: 2,
    color: "#5f4a38",
    marginBottom: 32,
  },
  centerParagraph: {
    fontSize: 18,
    lineHeight: 2,
    color: "#5f4a38",
    textAlign: "center",
    maxWidth: 820,
    margin: "0 auto 50px",
  },
  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
    gap: 26,
  },
  card: {
    background: "#fffaf3",
    padding: 32,
    borderRadius: 28,
    boxShadow: "0 12px 35px rgba(91,61,39,0.08)",
    border: "1px solid #eadcc9",
  },
  courseTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "flex-start",
  },
  courseTitle: {
    fontSize: 27,
    margin: "0 0 8px",
    color: "#5a3d27",
  },
  price: {
    background: "#eadcc9",
    color: "#5a3d27",
    padding: "7px 12px",
    borderRadius: 999,
    fontSize: 13,
    whiteSpace: "nowrap",
  },
  courseSubtitle: {
    fontSize: 18,
    color: "#9a6b3f",
    marginBottom: 18,
  },
  courseDesc: {
    fontSize: 16,
    lineHeight: 1.9,
    color: "#5f4a38",
  },
  tagWrap: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 22,
  },
  tag: {
    background: "#eadcc9",
    color: "#5a3d27",
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: 14,
  },
  suitableGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 18,
    marginTop: 34,
  },
  suitableCard: {
    background: "#f6efe5",
    padding: 24,
    borderRadius: 22,
    lineHeight: 1.8,
    border: "1px solid #eadcc9",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 26,
  },
  testimonialCard: {
    background: "#fffaf3",
    padding: 30,
    borderRadius: 26,
    boxShadow: "0 10px 30px rgba(91,61,39,0.06)",
    border: "1px solid #eadcc9",
  },
  testimonialText: {
    fontSize: 17,
    lineHeight: 1.9,
    color: "#5f4a38",
    marginBottom: 22,
  },
  testimonialName: {
    color: "#5a3d27",
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 24,
    color: "#5a3d27",
    margin: "0 0 12px",
  },
  infoLine: {
    fontSize: 17,
    lineHeight: 1.8,
    margin: "6px 0",
  },
  divider: {
    height: 1,
    background: "#d5bfa8",
    margin: "24px 0",
  },
  contactTitle: {
    fontSize: 46,
    marginBottom: 20,
  },
  contactText: {
    fontSize: 18,
    lineHeight: 2,
    marginBottom: 30,
  },
  contactButtons: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  contactButtonPrimary: {
    padding: "14px 28px",
    backgroundColor: "white",
    color: "#3f2b1d",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  contactButtonSecondary: {
    padding: "14px 28px",
    border: "1px solid white",
    color: "white",
    borderRadius: "999px",
    textDecoration: "none",
  },
};
