import Image from "next/image";

const whatsappUrl = "https://wa.me/60126725549";

const programs = [
  {
    tag: "Featured",
    title: "3-Day Five Elements Reset",
    zh: "三天五大元素健康重启学习营",
    desc: "结合 Nadi 气脉平衡检测、阿育吠陀医生一对一咨询、疗程建议与 Isha 哈他瑜伽练习，帮助身体重新回到稳定、轻盈与清晰。",
    price: "29–31 May",
  },
  {
    tag: "Assessment",
    title: "Nadi Balance Scan",
    zh: "脉诊平衡检测",
    desc: "了解你的 Dosha 体质倾向、当前失衡状态，并获得医生解析与瑜伽顾问建议，适合作为瑜伽、Panchakarma 或日常养护前的第一步。",
    price: "RM180",
  },
  {
    tag: "Yoga",
    title: "Classical Hatha Yoga",
    zh: "经典哈他瑜伽中文课程",
    desc: "以中文准确学习经典哈他瑜伽，不只是运动，而是重新建立身体、呼吸、专注力与生命节奏。",
    price: "From RM180",
  },
];

const benefits = [
  "中文清楚引导，初学者也容易进入",
  "Isha 哈他瑜伽传统，重视精准与稳定",
  "结合阿育吠陀医生体质分析",
  "适合忙碌女性、上班族、Isha 练习者",
];

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .page {
          min-height: 100vh;
          background: #f7f1e8;
          color: #33261d;
          font-family: Arial, Helvetica, sans-serif;
        }
        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid rgba(58, 42, 30, 0.15);
        }
        .brand {
          font-family: Georgia, serif;
          font-size: 30px;
          font-style: italic;
          letter-spacing: 0.5px;
        }
        .navLinks {
          display: flex;
          gap: 28px;
          align-items: center;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .navLinks a {
          color: #6b5a4b;
          text-decoration: none;
        }
        .btnDark, .btnGold, .btnOutline {
          display: inline-block;
          border-radius: 999px;
          padding: 15px 28px;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all .25s ease;
        }
        .btnDark { background: #33261d; color: white; }
        .btnGold { background: #b8894a; color: white; }
        .btnOutline { border: 1px solid #b8894a; color: #5a3b22; }
        .hero {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 70px;
          align-items: center;
          padding: 86px 0 100px;
        }
        .eyebrow {
          color: #9a7842;
          letter-spacing: 4px;
          font-size: 13px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        h1 {
          font-family: Georgia, serif;
          font-size: 76px;
          line-height: 1.03;
          margin: 0 0 28px;
          font-weight: 500;
        }
        .heroText {
          font-size: 20px;
          line-height: 1.85;
          color: #675748;
          max-width: 610px;
          margin-bottom: 34px;
        }
        .heroActions { display: flex; gap: 16px; flex-wrap: wrap; }
        .heroImageWrap {
          position: relative;
          padding: 16px;
          border-radius: 40px;
          background: linear-gradient(145deg, #ead8bf, #fff8ed);
          box-shadow: 0 24px 70px rgba(92, 65, 40, .18);
        }
        .heroImage {
          overflow: hidden;
          border-radius: 30px;
          background: #d8c3a6;
        }
        .heroImage img { width: 100%; height: auto; display: block; }
        .badge {
          position: absolute;
          left: -22px;
          bottom: 36px;
          background: #fff8ef;
          border: 1px solid #ead9c2;
          border-radius: 24px;
          padding: 18px 22px;
          box-shadow: 0 18px 45px rgba(75, 52, 32, .16);
        }
        .badge strong {
          display: block;
          font-family: Georgia, serif;
          font-size: 34px;
          line-height: 1;
        }
        .badge span {
          color: #7b6a56;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .introStrip {
          background: #efe2d0;
          border-top: 1px solid #e0cdb4;
          border-bottom: 1px solid #e0cdb4;
          padding: 44px 0;
        }
        .stripGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .stripItem {
          background: rgba(255,255,255,.42);
          padding: 24px;
          border-radius: 24px;
          line-height: 1.65;
          color: #5f4f41;
        }
        .darkSection {
          background: #33261d;
          color: #f7f1e8;
          padding: 92px 0;
        }
        .featureGrid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 60px;
          align-items: start;
        }
        h2 {
          font-family: Georgia, serif;
          font-size: 52px;
          line-height: 1.16;
          margin: 0;
          font-weight: 500;
        }
        .darkText {
          color: #e7d8c5;
          font-size: 19px;
          line-height: 1.85;
        }
        .schedule {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 30px 0;
        }
        .schedule div {
          border: 1px solid rgba(242,231,216,.25);
          border-radius: 22px;
          padding: 20px;
          color: #f2e7d8;
        }
        .section { padding: 96px 0; }
        .sectionHeader { max-width: 760px; margin-bottom: 46px; }
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .card {
          background: #fbf7ef;
          border: 1px solid #e0d0ba;
          border-radius: 32px;
          padding: 30px;
          box-shadow: 0 14px 40px rgba(118, 92, 64, .08);
        }
        .tag {
          display: inline-block;
          color: #b8894a;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .card h3 {
          font-family: Georgia, serif;
          font-size: 30px;
          line-height: 1.18;
          margin: 0 0 8px;
          font-weight: 500;
        }
        .zh { color: #5f4a38; font-weight: 600; margin-bottom: 18px; }
        .card p { color: #6b5a4b; line-height: 1.75; }
        .price {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e3d3bd;
          color: #33261d !important;
          font-weight: 700;
        }
        .aboutBox {
          background: #efe2d0;
          border-radius: 42px;
          padding: 54px;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 50px;
        }
        .aboutBox p {
          font-size: 18px;
          line-height: 1.85;
          color: #5f4f41;
        }
        .quoteGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 34px;
        }
        .quote {
          background: #fff8ef;
          border: 1px solid #e0d0ba;
          border-radius: 28px;
          padding: 28px;
          font-family: Georgia, serif;
          font-size: 23px;
          line-height: 1.38;
          color: #4a3729;
        }
        .cta {
          margin: 20px 0 60px;
          background: linear-gradient(135deg, #33261d, #5b3a22);
          color: #f7f1e8;
          border-radius: 42px;
          padding: 76px 32px;
          text-align: center;
        }
        .cta h2 { max-width: 780px; margin: 0 auto; }
        .cta p {
          max-width: 720px;
          margin: 24px auto 34px;
          color: #e8d9c5;
          font-size: 18px;
          line-height: 1.8;
        }
        @media (max-width: 900px) {
          .navLinks { display: none; }
          .hero, .featureGrid, .aboutBox { grid-template-columns: 1fr; }
          h1 { font-size: 52px; }
          h2 { font-size: 38px; }
          .cards, .stripGrid, .quoteGrid, .schedule { grid-template-columns: 1fr; }
          .badge { left: 18px; bottom: 18px; }
        }
      `}</style>

      <div className="page">
        <header className="container">
          <nav className="nav">
            <div className="brand">Yoga Sri</div>
            <div className="navLinks">
              <a href="#programs">Programs</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <a className="btnOutline" href={whatsappUrl} target="_blank">Book Now</a>
          </nav>
        </header>

        <section className="container hero">
          <div>
            <div className="eyebrow">Classical Hatha Yoga × Ayurveda</div>
            <h1>Return to your natural rhythm.</h1>
            <p className="heroText">
              用中文，准确学习经典哈他瑜伽，并结合阿育吠陀体质理解，重新建立身体、呼吸与生活的自然节奏。
            </p>
            <div className="heroActions">
              <a className="btnDark" href={whatsappUrl} target="_blank">WhatsApp Enquiry</a>
              <a className="btnOutline" href="#programs">View Programs</a>
            </div>
          </div>

          <div className="heroImageWrap">
            <div className="heroImage">
              <Image src="/yogasriprofile.jpg" alt="Yoga Sri" width={900} height={1100} priority />
            </div>
            <div className="badge">
              <strong>1750+</strong>
              <span>Training Hours</span>
            </div>
          </div>
        </section>

        <section className="introStrip">
          <div className="container stripGrid">
            {benefits.map((item) => <div className="stripItem" key={item}>{item}</div>)}
          </div>
        </section>

        <section className="darkSection">
          <div className="container featureGrid">
            <div>
              <div className="eyebrow">Featured Immersion</div>
              <h2>三天五大元素健康重启学习营</h2>
            </div>
            <div>
              <p className="darkText">
                这不是一般的瑜伽体验课，而是一次从身体状态、气脉平衡、体质理解到日常练习的完整重启。适合长期疲惫、压力累积、身体节奏混乱，或想为 Panchakarma 与瑜伽 Sadhana 打好基础的人。
              </p>
              <div className="schedule">
                <div>29 May<br />6pm–9pm</div>
                <div>30 May<br />7am–3pm</div>
                <div>31 May<br />7am–3pm</div>
              </div>
              <a className="btnGold" href={whatsappUrl} target="_blank">Reserve Seat</a>
            </div>
          </div>
        </section>

        <section id="programs" className="container section">
          <div className="sectionHeader">
            <div className="eyebrow">Programs</div>
            <h2>Begin gently. Practice precisely. Grow steadily.</h2>
          </div>

          <div className="cards">
            {programs.map((program) => (
              <article className="card" key={program.title}>
                <span className="tag">{program.tag}</span>
                <h3>{program.title}</h3>
                <div className="zh">{program.zh}</div>
                <p>{program.desc}</p>
                <p className="price">{program.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="container section">
          <div className="aboutBox">
            <div>
              <div className="eyebrow">About Yoga Sri</div>
              <h2>A grounded bridge between classical yoga and everyday life.</h2>
            </div>
            <div>
              <p>
                Yoga Sri 是 Isha Hatha Yoga 老师，长期以中文教授经典哈他瑜伽。她的教学重点不是追求动作难度，而是让学生准确理解练习的细节、节奏与内在状态。
              </p>
              <p>
                结合阿育吠陀医生的体质分析，她希望帮助学生更清楚地认识自己的身体状态，找到适合自己的练习方式与日常养护方向。
              </p>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="sectionHeader">
            <div className="eyebrow">Student Words</div>
            <h2>Quiet transformation, real practice.</h2>
          </div>
          <div className="quoteGrid">
            <div className="quote">“Yoga Sri 的中文讲解很清楚，让我终于知道自己哪里做错了。”</div>
            <div className="quote">“结合阿育吠陀分析后，我更明白为什么身体一直很累。”</div>
            <div className="quote">“练习不是变更用力，而是变得更稳定、更清楚。”</div>
          </div>
        </section>

        <section id="contact" className="container">
          <div className="cta">
            <div className="eyebrow">Start Your Practice</div>
            <h2>Learn with clarity, gentleness and proper guidance.</h2>
            <p>
              适合初学者、忙碌女性、Isha 练习者，以及希望结合瑜伽与阿育吠陀重新调整身心节奏的人。
            </p>
            <a className="btnGold" href={whatsappUrl} target="_blank">WhatsApp Yoga Sri</a>
          </div>
        </section>
      </div>
    </main>
  );
}
