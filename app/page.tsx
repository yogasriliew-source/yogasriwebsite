export default function Home() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSci4EDJSBAJdEmNlbB6GE646IMkrdEhEvZvEZjrj6vJ31Yr7A/viewform?usp=dialog";

  const packages = [
    {
      name: "Nadi Balance Scan",
      zh: "脉诊平衡检测",
      date: "可预约",
      price: "RM180",
      icon: "✦",
      tone: "bg-[#5b6f5a] text-white",
    },
    {
      name: "一日健康重启体验",
      zh: "Nadi Scan + Hatha Yoga + Brunch + Treatment",
      date: "5月23日",
      price: "RM1080",
      icon: "☀",
      tone: "bg-[#bf754c] text-white",
    },
    {
      name: "4天健康重启基础配套",
      zh: "建立身体觉察与瑜伽基础",
      date: "5月21–24日",
      price: "RM1880",
      icon: "✺",
      tone: "bg-[#a86645] text-white",
    },
    {
      name: "4天深度重启配套",
      zh: "五大元素净化 · 饮食 · 居家养护 · Panchakarma",
      date: "5月28–31日",
      price: "RM2580",
      icon: "☘",
      tone: "bg-[#7e8a70] text-white",
    },
    {
      name: "8天健康重启完整系列",
      zh: "最完整 · 最推荐",
      date: "5月21–31日",
      price: "RM3580",
      icon: "◈",
      tone: "bg-[#455d48] text-white",
    },
  ];

  const journey = [
    "检测",
    "理解",
    "练习",
    "饮食",
    "净化",
    "养护",
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
    "五大元素净化课程",
    "元素净化概论",
    "居家养护法",
    "阿育吠陀饮食与瑜伽饮食课",
    "阿育吠陀料理 Brunch",
    "Panchakarma 阿育吠陀疗程",
    "哈他瑜伽基础体式",
    "带领冥想",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7efe4] text-[#263428]">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#e7c9a6]/35 blur-3xl" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#d8e0cf]/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#c4774d]/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-12">
        <div className="absolute left-0 top-0 hidden h-full w-full opacity-40 md:block">
          <div className="absolute left-16 top-24 h-px w-96 rotate-[-8deg] bg-gradient-to-r from-transparent via-[#c49b6c] to-transparent" />
          <div className="absolute left-40 top-36 h-px w-[520px] rotate-[4deg] bg-gradient-to-r from-transparent via-[#d9b783] to-transparent" />
          <div className="absolute bottom-24 left-10 h-px w-[420px] rotate-[9deg] bg-gradient-to-r from-transparent via-[#c49b6c] to-transparent" />
        </div>

        <div className="relative z-10 pt-8">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d9c3a2] bg-white/55 px-4 py-2 text-sm tracking-[0.2em] text-[#6b7a61] shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#bd754f]" />
            YOGA SRI WELLNESS
          </div>

          <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-wide text-[#435a45] md:text-7xl lg:text-8xl">
            五月
            <span className="block font-serif text-[#a65f3f]">健康重启系列</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5b4e] md:text-xl">
            Nadi Balance Scan × Hatha Yoga × Ayurveda × 五大元素净化
          </p>

          <div className="my-7 h-px w-64 bg-gradient-to-r from-[#a65f3f] via-[#d8ba85] to-transparent" />

          <p className="max-w-2xl text-base leading-8 text-[#4d564b] md:text-lg">
            从身体检测开始，重新理解你的体质、能量、呼吸与生活节奏。通过
            Nadi Balance Scan、阿育吠陀医生讲解、Isha 哈他瑜伽、阿育吠陀饮食、五大元素净化与
            Panchakarma 疗程，帮助身体慢慢回到更轻盈、稳定、清明的状态。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {packages.slice(0, 4).map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-[#e2cfb3] bg-white/55 px-4 py-3 text-sm text-[#41513f] shadow-sm backdrop-blur"
              >
                <div className="text-xs text-[#9b6a4d]">{item.name}</div>
                <div className="mt-1 font-serif text-xl text-[#425941]">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#packages"
              className="rounded-full border border-[#52684e] bg-[#52684e] px-8 py-4 text-center text-white shadow-lg shadow-[#52684e]/20 transition hover:-translate-y-0.5 hover:bg-[#425541]"
            >
              了解课程
            </a>
            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#b66b43] bg-[#b66b43] px-8 py-4 text-center text-white shadow-lg shadow-[#b66b43]/20 transition hover:-translate-y-0.5 hover:bg-[#9f5a39]"
            >
              立即报名
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -left-8 top-10 h-72 w-72 rounded-full bg-[#f0ddbf]/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/35 p-3 shadow-2xl shadow-[#5a4638]/10 backdrop-blur">
            <img
              src="/yogasriprofile.jpg"
              alt="Yoga Sri"
              className="h-[620px] w-full rounded-[2.4rem] object-cover object-center"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-[2rem] border border-white/50 bg-[#f8f0e5]/85 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-4">
                <img
                  src="/HYTLogo.png"
                  alt="Sadhguru Gurukulam Certified Hatha Yoga Teacher"
                  className="h-16 w-16 rounded-full bg-white object-contain p-2 shadow-sm"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#9c6a48]">
                    Certified Teacher
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#41513f]">
                    Sadhguru Gurukulam 认证哈他瑜伽老师
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-[#dac8ad] bg-[#4c604c] px-6 py-8 text-white shadow-xl shadow-[#364235]/10 md:px-10">
          <div className="grid gap-6 md:grid-cols-6">
            {journey.map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b982]/60 bg-white/10 font-serif text-xl">
                  {index + 1}
                </div>
                <p className="tracking-[0.2em] text-[#f0dcc1]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-[#a65f3f]">Program Options</p>
          <h2 className="mt-4 text-4xl font-light text-[#425941] md:text-6xl">
            选择适合你的重启方式
          </h2>
          <p className="mt-5 leading-8 text-[#5a6357]">
            第一次接触，可以从 Nadi Balance Scan 开始；想完整调整身体、能量、饮食与生活节奏，最推荐 8天健康重启完整系列。
          </p>
        </div>

        <div className="grid gap-5">
          {packages.map((item) => (
            <div
              key={item.name}
              className="group grid gap-4 rounded-[2rem] border border-[#e0cfb5] bg-white/55 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#765640]/10 md:grid-cols-[90px_1fr_180px_180px] md:items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf0e6] font-serif text-3xl text-[#5d7058]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#3f513e]">{item.name}</h3>
                <p className="mt-1 text-[#6f7469]">{item.zh}</p>
              </div>
              <div className="rounded-2xl bg-[#f4e8d8] px-5 py-4 text-center text-lg text-[#9b6243]">
                {item.date}
              </div>
              <div className={`rounded-2xl px-5 py-4 text-center font-serif text-3xl ${item.tone}`}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-[#dfcfb6] bg-white/55 p-8 shadow-xl shadow-[#75553c]/10 backdrop-blur">
          <div className="mb-6 inline-flex rounded-full bg-[#b66b43] px-4 py-2 text-sm tracking-[0.16em] text-white">
            5月21–24日｜RM1880
          </div>
          <h3 className="text-4xl font-light text-[#415640]">健康重启基础配套</h3>
          <p className="mt-4 leading-8 text-[#5d675a]">
            适合零基础、想开始瑜伽、想了解体质，并建立身体觉察与练习基础的学员。
          </p>
          <div className="mt-8 grid gap-3">
            {basicItems.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-[#eadcc7] pb-3 text-[#4d584d]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dfe7d8] text-[#536a51]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[#dfcfb6] bg-[#4d604b] p-8 text-white shadow-xl shadow-[#364235]/15">
          <div className="mb-6 inline-flex rounded-full bg-[#f2dfc4] px-4 py-2 text-sm tracking-[0.16em] text-[#9b5c3b]">
            5月28–31日｜RM2580
          </div>
          <h3 className="text-4xl font-light text-[#f7ead7]">深度重启配套</h3>
          <p className="mt-4 leading-8 text-[#efe4d1]">
            适合想深入学习五大元素净化、阿育吠陀饮食、居家养护与 Panchakarma 疗程的人。
          </p>
          <div className="mt-8 grid gap-3">
            {deepItems.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-white/15 pb-3 text-[#fbf3e7]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f2d8a8]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature 8 days */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#dfcfb6] bg-[#fdf8ee] p-8 shadow-2xl shadow-[#6e513d]/10 md:p-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#d9c094]/35 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-[#b66b43] px-5 py-2 text-sm tracking-[0.18em] text-white">
                最完整 · 最推荐
              </div>
              <h2 className="text-4xl font-light leading-tight text-[#40553f] md:text-6xl">
                8天健康重启完整系列
              </h2>
              <p className="mt-5 font-serif text-5xl text-[#a65f3f]">RM3580</p>
              <p className="mt-6 leading-8 text-[#5a6357]">
                系统性了解身体、建立瑜伽基础、学习五大元素净化，并结合阿育吠陀饮食与疗程进行深度养护。
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-[#e2cfb3] bg-white/70 p-6">
                <p className="text-sm tracking-[0.2em] text-[#a65f3f]">第一阶段</p>
                <h3 className="mt-2 text-2xl text-[#425941]">建立身体觉察与瑜伽基础</h3>
                <p className="mt-3 text-[#657064]">了解体质 · 平衡能量 · 建立稳定基础</p>
              </div>
              <div className="rounded-[2rem] border border-[#e2cfb3] bg-white/70 p-6">
                <p className="text-sm tracking-[0.2em] text-[#a65f3f]">第二阶段</p>
                <h3 className="mt-2 text-2xl text-[#425941]">深入五大元素净化与阿育吠陀养护</h3>
                <p className="mt-3 text-[#657064]">净化 · 饮食 · 居家养护 · Panchakarma 疗程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 rounded-[3rem] border border-[#dfcfb6] bg-white/55 p-8 shadow-xl shadow-[#765640]/10 backdrop-blur md:grid-cols-[1fr_360px] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#a65f3f]">Registration & Payment</p>
            <h2 className="mt-4 text-4xl font-light text-[#415640] md:text-5xl">报名与付款</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#5d675a]">
              请先填写报名表格，并完成银行转账或使用 TNG QR 付款。付款后可将转账截图保留，方便确认名额。
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-[#f6ead9] p-6">
                <p className="text-sm tracking-[0.18em] text-[#a65f3f]">银行转账</p>
                <h3 className="mt-3 text-2xl font-medium text-[#40553f]">YOGASRI ENTERPRISE</h3>
                <p className="mt-3 text-lg text-[#5d675a]">Public Bank</p>
                <p className="mt-1 font-serif text-3xl text-[#a65f3f]">3231265424</p>
              </div>

              <div className="rounded-[2rem] bg-[#eef0e7] p-6">
                <p className="text-sm tracking-[0.18em] text-[#a65f3f]">报名表格</p>
                <h3 className="mt-3 text-2xl font-medium text-[#40553f]">填写资料确认名额</h3>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[#52684e] px-6 py-3 text-white transition hover:bg-[#41543e]"
                >
                  打开报名表格
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e3d3bd] bg-[#fdf7ed] p-5 text-center">
            <p className="mb-4 text-sm tracking-[0.18em] text-[#a65f3f]">TNG QR PAYMENT</p>
            <img
              src="/TNG.jpg"
              alt="TNG QR Code"
              className="mx-auto aspect-square w-full max-w-[290px] rounded-2xl object-contain shadow-sm"
            />
            <p className="mt-4 text-sm text-[#657064]">请使用 TNG 扫描付款</p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[3rem] bg-[#425941] px-8 py-14 text-center text-white shadow-2xl shadow-[#364235]/20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8cf9d]">May Wellness Reset</p>
          <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
            从听懂身体开始，
            <span className="block text-[#f0d3a1]">重新建立稳定与清明。</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#f7ead7]">
            这是一套从检测、理解、练习、饮食、净化到养护的完整健康重启过程。
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex rounded-full bg-[#b66b43] px-9 py-4 text-white transition hover:-translate-y-0.5 hover:bg-[#9f5a39]"
          >
            立即填写报名表格
          </a>
        </div>
      </section>
    </main>
  );
}
