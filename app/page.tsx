import Image from "next/image";

const whatsappUrl = "https://wa.me/60126725549";

const courses = [
  {
    title: "3-Day Five Elements Reset",
    zh: "三天五大元素健康重启学习营",
    desc: "A guided experience combining Nadi balance assessment, Ayurvedic consultation and beginner-friendly classical Hatha Yoga.",
    price: "RM180 / Introductory Session",
    suitable: "For people who feel tired, imbalanced, mentally overloaded or ready to restart gently.",
  },
  {
    title: "Nadi Balance Scan",
    zh: "脉诊平衡检测",
    desc: "Understand your dosha tendency, current imbalance and receive personal guidance from an Ayurvedic doctor.",
    price: "RM180 with report & consultation",
    suitable: "For those who want to understand their body before beginning yoga, Panchakarma or lifestyle correction.",
  },
  {
    title: "Classical Hatha Yoga",
    zh: "经典哈他瑜伽中文课程",
    desc: "Learn authentic practices with clear Chinese guidance, proper alignment and a grounded approach to daily sadhana.",
    price: "From RM180",
    suitable: "For beginners, working women and Isha practitioners who want precise guidance.",
  },
];

const values = [
  "Chinese-language instruction for deeper clarity",
  "Classical Hatha Yoga taught with precision",
  "Ayurvedic doctor-supported body understanding",
  "Gentle, structured and suitable for beginners",
];

const testimonials = [
  "Yoga Sri explains in a way that feels clear, grounded and easy to follow.",
  "The combination of yoga and Ayurveda helped me understand my body better.",
  "A gentle but powerful space to restart my practice and daily rhythm.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] text-[#33261D]">
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-[#D8C8B5] pb-5 text-sm tracking-wide">
          <div className="font-serif text-xl italic">Yoga Sri</div>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-[#6F604F] md:flex">
            <a href="#programs" className="hover:text-[#B8894A]">Programs</a>
            <a href="#about" className="hover:text-[#B8894A]">About</a>
            <a href="#contact" className="hover:text-[#B8894A]">Contact</a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            className="rounded-full border border-[#B8894A] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[#5B3A20] transition hover:bg-[#B8894A] hover:text-white"
          >
            Book Now
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#8B6F47]">
              Classical Hatha Yoga × Ayurveda
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Return to your natural rhythm.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B5A4B]">
              用中文，准确学习经典哈他瑜伽，并结合阿育吠陀体质理解，重新建立身体、呼吸与生活的自然节奏。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                className="rounded-full bg-[#3A2A1E] px-8 py-4 text-center text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#B8894A]"
              >
                WhatsApp Enquiry
              </a>
              <a
                href="#programs"
                className="rounded-full border border-[#CDB89C] px-8 py-4 text-center text-sm uppercase tracking-[0.18em] text-[#3A2A1E] transition hover:border-[#B8894A] hover:text-[#B8894A]"
              >
                View Programs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#E7D7BD] blur-2xl" />
            <div className="relative rounded-[2rem] border border-[#E4D4BE] bg-[#EFE2D0]/60 p-4 shadow-2xl shadow-[#C8B79E]/30">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#D9C5A8]">
                <Image
                  src="/yogasriprofile.jpg"
                  alt="Yoga Sri classical hatha yoga teacher"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-8 right-4 rounded-3xl bg-[#F7F1E8] p-5 shadow-xl shadow-[#BCA98F]/30">
              <p className="font-serif text-3xl">1750+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#7B6A56]">Training Hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#33261D] px-6 py-16 text-[#F7F1E8] md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9A66B]">Featured Immersion</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">三天五大元素健康重启学习营</h2>
          </div>
          <div className="space-y-6 text-[#E7D8C5]">
            <p className="text-lg leading-8">
              结合 Nadi 气脉平衡检测、医生一对一咨询、阿育吠陀疗程建议与 Isha 哈他瑜伽练习，让身体从内在重新找到稳定、轻盈与清晰。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "29 May · 6pm–9pm",
                "30 May · 7am–3pm",
                "31 May · 7am–3pm",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#6A5847] p-4 text-sm text-[#F2E7D8]">
                  {item}
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              className="inline-flex rounded-full bg-[#B8894A] px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#D0A866]"
            >
              Reserve Seat
            </a>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B6F47]">Programs</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Begin gently. Practice precisely. Grow steadily.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group rounded-[2rem] border border-[#E0D0BA] bg-[#FBF7EF] p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C7B79C]/30"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#B8894A]">{course.zh}</p>
                <h3 className="font-serif text-3xl leading-tight">{course.title}</h3>
                <p className="mt-5 leading-7 text-[#6B5A4B]">{course.desc}</p>
                <div className="mt-6 border-t border-[#E3D3BD] pt-5">
                  <p className="text-sm font-medium text-[#3A2A1E]">{course.price}</p>
                  <p className="mt-3 text-sm leading-6 text-[#7A6A59]">{course.suitable}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[2.5rem] bg-[#EFE2D0] p-8 md:grid-cols-[0.85fr_1.15fr] md:p-14">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B6F47]">About Yoga Sri</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">A grounded bridge between classical yoga and everyday life.</h2>
          </div>
          <div className="space-y-7 text-[#5F4F41]">
            <p className="text-lg leading-8">
              Yoga Sri is an Isha Hatha Yoga teacher offering clear Chinese-language guidance for students who want to learn authentic practices with precision, patience and deeper understanding.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
                <div key={item} className="rounded-2xl bg-[#F8F1E7] p-5 text-sm leading-6">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B6F47]">Student Words</p>
              <h2 className="font-serif text-4xl">Quiet transformation, real practice.</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((quote) => (
              <blockquote key={quote} className="rounded-[2rem] border border-[#E0D0BA] bg-[#FBF7EF] p-7 font-serif text-2xl leading-snug text-[#4A3729]">
                “{quote}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#3A2A1E] px-8 py-16 text-center text-[#F7F1E8] md:px-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9A66B]">Start Your Practice</p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Learn with clarity, gentleness and proper guidance.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#E8D9C5]">
            适合初学者、忙碌女性、Isha 练习者，以及希望结合瑜伽与阿育吠陀重新调整身心节奏的人。
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-10 inline-flex rounded-full bg-[#B8894A] px-9 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#D0A866]"
          >
            WhatsApp Yoga Sri
          </a>
        </div>
      </section>
    </main>
  );
}
