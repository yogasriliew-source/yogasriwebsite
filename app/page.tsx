export default function HomePage() {
  const courses = [
    {
      title: "Yoga for Joints",
      desc: "温和、安全、适合初学者与身体僵硬的人。",
    },
    {
      title: "Hatha for Beginners",
      desc: "建立正确呼吸、动作与身体基础。",
    },
    {
      title: "Yogasanas",
      desc: "Isha Classical Hatha Yoga 经典体式课程。",
    },
    {
      title: "Bhuta Shuddhi",
      desc: "五大元素净化练习与日常建立。",
    },
    {
      title: "Nadi Balance Scan",
      desc: "阿育吠陀体质分析与生活建议。",
    },
    {
      title: "Yoga × Ayurveda",
      desc: "瑜伽与阿育吠陀整合式课程。",
    },
  ];

  const testimonials = [
    {
      name: "台湾学员",
      text: "第一次真正理解什么是经典哈他瑜伽，不只是拉筋，而是身体与能量的调整。",
    },
    {
      name: "吉隆坡学员",
      text: "长期肩颈紧绷与睡眠问题，在持续练习后明显改善。",
    },
    {
      name: "中国学员",
      text: "中文指导让我第一次真正听懂练习细节，也终于能够稳定持续。",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#f7f3ef",
        color: "#2c2c2c",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#7b6d62",
            marginBottom: "20px",
          }}
        >
          Classical Hatha Yoga · Ayurveda
        </p>

        <h1
          style={{
            fontSize: "72px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Yoga Sri
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: "1.8",
            maxWidth: "720px",
            margin: "0 auto 40px",
          }}
        >
          用中文，深入而准确地学习经典哈他瑜伽，
          结合阿育吠陀智慧，
          重新建立身体、呼吸与生命的平衡。
        </p>

        <a
          href="https://wa.me/60126725549"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "18px 36px",
            backgroundColor: "#2c2c2c",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          WhatsApp 预约课程
        </a>
      </section>

      {/* ABOUT */}
      <section
        style={{
          backgroundColor: "white",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "30px",
            }}
          >
            关于 Yoga Sri
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2",
              marginBottom: "24px",
            }}
          >
            Yoga Sri 自 2017 年起教授 Isha Classical Hatha Yoga，
            持续在马来西亚、中国、台湾、日本与线上带领中文课程。
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2",
            }}
          >
            她特别理解中文学员学习经典瑜伽时的困难，
            因此课程特别强调：
            清晰、安全、准确、适合长期练习。
            近年来也结合阿育吠陀医生支持，
            提供更完整的身体与生活方式调整。
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section
        style={{
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            课程介绍
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {courses.map((course) => (
              <div
                key={course.title}
                style={{
                  backgroundColor: "white",
                  padding: "32px",
                  borderRadius: "28px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "14px",
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#555",
                  }}
                >
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          backgroundColor: "#efe7df",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            学员分享
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "24px",
                }}
              >
                <p
                  style={{
                    lineHeight: "1.9",
                    marginBottom: "20px",
                    color: "#444",
                  }}
                >
                  “{item.text}”
                </p>

                <strong>{item.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SADHGURU FUNNEL */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              marginBottom: "24px",
            }}
          >
            Sadhguru Malaysia 2026
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "2",
              marginBottom: "40px",
            }}
          >
            为迎接 2026 薩古魯马来西亚活动，
            Yoga Sri 也将带领一系列：
            身体准备课程、经典哈他瑜伽、
            五大元素净化与静修支持课程。
          </p>

          <a
            href="https://wa.me/60126725549"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "18px 36px",
              backgroundColor: "#2c2c2c",
              color: "white",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            询问 2026 课程与静修
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          backgroundColor: "#2c2c2c",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          联系 Yoga Sri
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "2",
            marginBottom: "30px",
          }}
        >
          欢迎预约课程、私人咨询、
          企业课程与 Retreat 合作。
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/60126725549"
            target="_blank"
            style={{
              padding: "14px 28px",
              backgroundColor: "white",
              color: "#2c2c2c",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            WhatsApp
          </a>

          <a
            href="https://facebook.com/YogaSriNowYoga"
            target="_blank"
            style={{
              padding: "14px 28px",
              border: "1px solid white",
              color: "white",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Facebook
          </a>
        </div>
      </section>
    </main>
  );
}
