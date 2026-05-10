export default function Home() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

  const packages = [
    {
      title: "Nadi Balance Scan",
      subtitle: "脉诊平衡检测｜可预约",
      date: "可预约",
      price: "RM180",
      icon: "✦",
      color: "green",
    },
    {
      title: "一日健康重启体验",
      subtitle: "Nadi Scan + Hatha Yoga + Brunch + Treatment",
      date: "5月23日",
      price: "RM1080",
      icon: "☀",
      color: "terracotta",
    },
    {
      title: "4天健康重启基础配套",
      subtitle: "建立身体觉察与瑜伽基础",
      date: "5月21–24日",
      price: "RM1880",
      icon: "✺",
      color: "terracotta",
    },
    {
      title: "4天深度重启配套",
      subtitle: "五大元素净化 · 饮食 · 居家养护 · Panchakarma",
      date: "5月28–31日",
      price: "RM2580",
      icon: "☘",
      color: "sage",
    },
    {
      title: "8天健康重启完整系列",
      subtitle: "最完整 · 最推荐",
      date: "5月21–31日",
      price: "RM3580",
      icon: "◈",
      color: "deepGreen",
    },
  ];

  const basicItems = [
    "Nadi Balance Scan 脉诊平衡检测",
    "阿育吠陀医生一对一报告讲解",
    "哈他瑜伽介绍与基础体式",
    "瑜伽合十礼",
    "Miracle of Mind",
    "带领冥想",
    "Surya Shakti / Surya Kriya 练习",
    "阿育吠陀料理 Brunch",
    "平衡瑜伽与幸福冥想",
  ];

  const deepItems = [
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
  ];

  return (
    <main>
      <style>{`
        :root {
          --cream: #f7efe4;
          --ivory: #fffaf1;
          --sage: #64745f;
          --deep: #3f543f;
          --terracotta: #b66b43;
          --copper: #9f5d3d;
          --gold: #d6b77c;
          --line: #e4d0b5;
          --text: #263428;
          --muted: #5d675a;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 10% 10%, rgba(216, 183, 124, 0.28), transparent 28%),
            radial-gradient(circle at 90% 12%, rgba(100, 116, 95, 0.18), transparent 32%),
            linear-gradient(180deg, #f8f0e6 0%, #fbf6ec 45%, #f3eadc 100%);
          color: var(--text);
          font-family: Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          overflow: hidden;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          padding: 54px 0 70px;
        }

        .hero::before {
          content: "";
          position: absolute;
          left: -18%;
          top: -12%;
          width: 680px;
          height: 680px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.52);
          z-index: -1;
        }

        .hero::after {
          content: "";
          position: absolute;
          right: -18%;
          bottom: 8%;
          width: 620px;
          height: 620px;
          border-radius: 999px;
          background: rgba(213, 192, 153, 0.18);
          filter: blur(4px);
          z-index: -1;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.55);
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
          margin: 34px 0 0;
          color: var(--deep);
          font-size: clamp(54px, 8vw, 98px);
          line-height: 0.98;
          font-weight: 400;
          letter-spacing: 0.05em;
        }

        h1 strong {
          display: block;
          color: var(--terracotta);
          font-weight: 400;
        }

        .subtitle {
          margin-top: 28px;
          max-width: 720px;
          color: var(--copper);
          font-size: 21px;
          line-height: 1.7;
        }

        .divider {
          width: 280px;
          height: 1px;
          margin: 28px 0;
          background: linear-gradient(90deg, var(--terracotta), var(--gold), transparent);
        }

        .heroText {
          max-width: 720px;
          color: #455045;
          font-size: 18px;
          line-height: 2;
        }

        .heroChips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .chip {
          min-width: 145px;
          padding: 14px 16px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.58);
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
          font-size: 22px;
          font-weight: 400;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          padding: 16px 30px;
          border-radius: 999px;
          font-size: 17px;
          transition: 0.25s ease;
          box-shadow: 0 18px 42px rgba(63, 84, 63, 0.14);
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btnGreen {
          background: var(--deep);
          color: white;
        }

        .btnOrange {
          background: var(--terracotta);
          color: white;
        }

        .photoWrap {
          position: relative;
        }

        .photoGlow {
          position: absolute;
          inset: -28px;
          background: linear-gradient(135deg, rgba(214, 183, 124, 0.36), rgba(255,255,255,0));
          border-radius: 56px;
          z-index: -1;
        }

        .photoCard {
          position: relative;
          padding: 12px;
          border-radius: 46px;
          border: 1px solid rgba(255, 255, 255, 0.72);
          background: rgba(255, 255, 255, 0.38);
          box-shadow: 0 30px 80px rgba(67, 49, 35, 0.16);
          overflow: hidden;
        }

        .profileImg {
          display: block;
          width: 100%;
          height: min(70vh, 680px);
          object-fit: cover;
          object-position: center;
          border-radius: 36px;
        }

        .certBox {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.68);
          background: rgba(255, 250, 241, 0.88);
          box-shadow: 0 18px 48px rgba(70, 50, 34, 0.14);
        }

        .certBox img {
          width: 68px;
          height: 68px;
          border-radius: 999px;
          object-fit: contain;
          background: white;
          padding: 8px;
          flex: 0 0 auto;
        }

        .certBox small {
          display: block;
          color: var(--copper);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 11px;
          margin-bottom: 6px;
        }

        .certBox b {
          color: var(--deep);
          font-size: 18px;
          font-weight: 500;
        }

        .journey {
          margin: 0 auto 76px;
          padding: 30px;
          border-radius: 36px;
          background: var(--deep);
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
          letter-spacing: 0.22em;
        }

        .section {
          padding: 72px 0;
        }

        .sectionTitle {
          max-width: 760px;
          margin-bottom: 44px;
        }

        .sectionTitle small {
          color: var(--terracotta);
          letter-spacing: 0.32em;
          text-transform: uppercase;
          font-size: 12px;
        }

        h2 {
          margin: 16px 0 0;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.15;
          font-weight: 400;
          color: var(--deep);
        }

        .sectionTitle p {
          margin-top: 18px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
        }

        .packageList {
          display: grid;
          gap: 16px;
        }

        .packageRow {
          display: grid;
          grid-template-columns: 84px 1fr 170px 170px;
          align-items: center;
          gap: 18px;
          padding: 18px;
          border-radius: 30px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.55);
          box-shadow: 0 12px 36px rgba(74, 54, 38, 0.06);
          transition: 0.25s ease;
        }

        .packageRow:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 56px rgba(74, 54, 38, 0.12);
        }

        .packageIcon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: #e8eddf;
          color: var(--deep);
          font-size: 30px;
        }

        .packageInfo h3 {
          margin: 0;
          color: var(--deep);
          font-size: 24px;
          font-weight: 500;
        }

        .packageInfo p {
          margin: 6px 0 0;
          color: #687266;
        }

        .dateBox {
          padding: 18px;
          border-radius: 20px;
          text-align: center;
          background: #f4e7d6;
          color: var(--copper);
          font-size: 18px;
        }

        .priceBox {
          padding: 18px;
          border-radius: 20px;
          text-align: center;
          color: white;
          font-size: 30px;
          line-height: 1;
        }

        .priceBox.green { background: var(--deep); }
        .priceBox.terracotta { background: var(--terracotta); }
        .priceBox.sage { background: var(--sage); }
        .priceBox.deepGreen { background: #344836; }

        .twoCards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .programCard {
          padding: 34px;
          border-radius: 42px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.56);
          box-shadow: 0 24px 64px rgba(72, 53, 38, 0.09);
        }

        .programCard.dark {
          background: var(--deep);
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
          letter-spacing: 0.14em;
          margin-bottom: 18px;
        }

        .programCard.dark .badge {
          background: #f1dfc3;
          color: var(--copper);
        }

        h3 {
          margin: 0;
          color: var(--deep);
          font-size: 38px;
          line-height: 1.2;
          font-weight: 400;
        }

        .programCard.dark h3 {
          color: #f9ecd8;
        }

        .programCard p {
          color: var(--muted);
          line-height: 1.9;
          font-size: 16px;
        }

        .programCard.dark p {
          color: #efe4d1;
        }

        .checkList {
          display: grid;
          gap: 11px;
          margin-top: 26px;
        }

        .checkItem {
          display: flex;
          gap: 12px;
          align-items: center;
          padding-bottom: 11px;
          border-bottom: 1px solid #eadcc7;
          color: #4d584d;
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
          flex: 0 0 auto;
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
          background: rgba(255, 250, 241, 0.82);
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
          font-size: 56px;
          line-height: 1;
        }

        .stageGrid {
          display: grid;
          gap: 18px;
        }

        .stage {
          border-radius: 28px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.7);
          padding: 24px;
        }

        .stage small {
          color: var(--terracotta);
          letter-spacing: 0.2em;
        }

        .stage h4 {
          margin: 10px 0 0;
          color: var(--deep);
          font-size: 24px;
          font-weight: 400;
        }

        .stage p {
          margin: 10px 0 0;
          color: #687266;
        }

        .payment {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
          padding: 38px;
          border-radius: 48px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 24px 64px rgba(72, 53, 38, 0.09);
        }

        .paymentCards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-top: 28px;
        }

        .paymentCard {
          padding: 24px;
          border-radius: 30px;
          background: #f5e7d4;
        }

        .paymentCard:nth-child(2) {
          background: #edf1e5;
        }

        .paymentCard small,
        .qrBox small {
          color: var(--terracotta);
          letter-spacing: 0.18em;
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
          font-size: 32px;
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
          max-width: 920px;
          padding: 58px 36px;
          border-radius: 48px;
          background: var(--deep);
          color: white;
          text-align: center;
          box-shadow: 0 30px 80px rgba(49, 65, 49, 0.22);
        }

        .closing small {
          color: #f0d3a1;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        .closing h2 {
          color: white;
        }

        .closing h2 span {
          display: block;
          color: #f0d3a1;
        }

        .closing p {
          max-width: 680px;
          margin: 22px auto 0;
          color: #f8ead5;
          line-height: 1.9;
        }

        .closing .btn {
          margin-top: 34px;
          background: var(--terracotta);
          color: white;
        }

        @media (max-width: 900px) {
          .hero,
          .twoCards,
          .signatureGrid,
          .payment {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 34px;
            gap: 34px;
          }

          .profileImg {
            height: 520px;
          }

          .journeyGrid {
            grid-template-columns: repeat(3, 1fr);
          }

          .packageRow {
            grid-template-columns: 70px 1fr;
          }

          .dateBox,
          .priceBox {
            grid-column: span 1;
          }

          .paymentCards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          h1 {
            font-size: 48px;
          }

          h2 {
            font-size: 36px;
          }

          h3 {
            font-size: 30px;
          }

          .subtitle {
            font-size: 18px;
          }

          .profileImg {
            height: 430px;
          }

          .certBox {
            left: 18px;
            right: 18px;
            bottom: 18px;
            padding: 14px;
          }

          .certBox img {
            width: 56px;
            height: 56px;
          }

          .certBox b {
            font-size: 15px;
          }

          .journeyGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .packageRow {
            grid-template-columns: 1fr;
          }

          .packageIcon {
            width: 58px;
            height: 58px;
          }

          .signature,
          .payment,
          .programCard {
            padding: 24px;
            border-radius: 32px;
          }
        }
      `}</style>

      <div className="page">
        <section className="container hero">
          <div>
            <div className="eyebrow">
              <span /> Yoga Sri Wellness
            </div>

            <h1>
              五月
              <strong>健康重启系列</strong>
            </h1>

            <p className="subtitle">
              Nadi Balance Scan × Hatha Yoga × Ayurveda × 五大元素净化
            </p>

            <div className="divider" />

            <p className="heroText">
              从身体检测开始，重新理解你的体质、能量、呼吸与生活节奏。通过
              Nadi Balance Scan、阿育吠陀医生讲解、Isha 哈他瑜伽、阿育吠陀饮食、五大元素净化与
              Panchakarma 疗程，帮助身体慢慢回到更轻盈、稳定、清明的状态。
            </p>

            <div className="heroChips">
              <div className="chip">
                <small>单项体验</small>
                <b>RM180 起</b>
              </div>
              <div className="chip">
                <small>一日体验</small>
                <b>RM1080</b>
              </div>
              <div className="chip">
                <small>4天配套</small>
                <b>RM1880 / RM2580</b>
              </div>
              <div className="chip">
                <small>8天完整系列</small>
                <b>RM3580</b>
              </div>
            </div>

            <div className="buttons">
              <a href="#packages" className="btn btnGreen">
                了解课程
              </a>
              <a href={formUrl} target="_blank" rel="noreferrer" className="btn btnOrange">
                立即报名
              </a>
            </div>
          </div>

          <div className="photoWrap">
            <div className="photoGlow" />
            <div className="photoCard">
              <img src="/yogasriprofile.jpg" alt="Yoga Sri" className="profileImg" />
              <div className="certBox">
                <img src="/HYTLogo.png" alt="Sadhguru Gurukulam Certified Hatha Yoga Teacher" />
                <div>
                  <small>Certified Teacher</small>
                  <b>Sadhguru Gurukulam 认证哈他瑜伽老师</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container journey">
          <div className="journeyGrid">
            {['检测', '理解', '练习', '饮食', '净化', '养护'].map((item, index) => (
              <div key={item}>
                <div className="journeyIcon">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="container section">
          <div className="sectionTitle">
            <small>Program Options</small>
            <h2>选择适合你的重启方式</h2>
            <p>
              第一次接触，可以从 Nadi Balance Scan 开始；想完整调整身体、能量、饮食与生活节奏，最推荐 8天健康重启完整系列。
            </p>
          </div>

          <div className="packageList">
            {packages.map((item) => (
              <div className="packageRow" key={item.title}>
                <div className="packageIcon">{item.icon}</div>
                <div className="packageInfo">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="dateBox">{item.date}</div>
                <div className={`priceBox ${item.color}`}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container section twoCards">
          <div className="programCard">
            <div className="badge">5月21–24日｜RM1880</div>
            <h3>健康重启基础配套</h3>
            <p>
              适合零基础、想开始瑜伽、想了解体质，并建立身体觉察与练习基础的学员。
            </p>
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
            <div className="badge">5月28–31日｜RM2580</div>
            <h3>深度重启配套</h3>
            <p>
              适合想深入学习五大元素净化、阿育吠陀饮食、居家养护与 Panchakarma 疗程的人。
            </p>
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
                <div className="badge">最完整 · 最推荐</div>
                <h2>8天健康重启完整系列</h2>
                <div className="priceBig">RM3580</div>
                <p className="heroText">
                  系统性了解身体、建立瑜伽基础、学习五大元素净化，并结合阿育吠陀饮食与疗程进行深度养护。
                </p>
              </div>

              <div className="stageGrid">
                <div className="stage">
                  <small>第一阶段</small>
                  <h4>建立身体觉察与瑜伽基础</h4>
                  <p>了解体质 · 平衡能量 · 建立稳定基础</p>
                </div>
                <div className="stage">
                  <small>第二阶段</small>
                  <h4>深入五大元素净化与阿育吠陀养护</h4>
                  <p>净化 · 饮食 · 居家养护 · Panchakarma 疗程</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="payment">
            <div>
              <div className="sectionTitle" style={{ marginBottom: 0 }}>
                <small>Registration & Payment</small>
                <h2>报名与付款</h2>
                <p>
                  请先填写报名表格，并完成银行转账或使用 TNG QR 付款。付款后请保留转账截图，方便确认名额。
                </p>
              </div>

              <div className="paymentCards">
                <div className="paymentCard">
                  <small>银行转账</small>
                  <h3>YOGASRI ENTERPRISE</h3>
                  <p>Public Bank</p>
                  <div className="account">3231265424</div>
                </div>

                <div className="paymentCard">
                  <small>报名表格</small>
                  <h3>填写资料确认名额</h3>
                  <a href={formUrl} target="_blank" rel="noreferrer" className="btn btnGreen" style={{ marginTop: 18 }}>
                    打开报名表格
                  </a>
                </div>
              </div>
            </div>

            <div className="qrBox">
              <small>TNG QR Payment</small>
              <img src="/TNG.jpg" alt="TNG QR Code" />
              <p>请使用 TNG 扫描付款</p>
            </div>
          </div>
        </section>

        <section className="container closing">
          <small>May Wellness Reset</small>
          <h2>
            从听懂身体开始，<span>重新建立稳定与清明。</span>
          </h2>
          <p>
            这是一套从检测、理解、练习、饮食、净化到养护的完整健康重启过程。
          </p>
          <a href={formUrl} target="_blank" rel="noreferrer" className="btn">
            立即填写报名表格
          </a>
        </section>
      </div>
    </main>
  );
}
