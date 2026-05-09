export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f5f2",
        color: "#2b2b2b",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Yoga Sri
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Classical Hatha Yoga · Ayurveda · Chinese Guidance
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.9",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          通过经典哈他瑜伽与阿育吠陀智慧，
          帮助现代人在忙碌生活中，
          重新建立身体、呼吸与内在的平衡。
        </p>

        <a
          href="https://wa.me/60126725549"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "16px 32px",
            backgroundColor: "#2b2b2b",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          WhatsApp 预约课程
        </a>
      </section>

      {/* About */}
      <section
        style={{
          backgroundColor: "white",
          padding: "80px 20px",
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
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            关于 Yoga Sri
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2",
              marginBottom: "20px",
            }}
          >
            Yoga Sri 自 2017 年起教授 Isha Classical Hatha Yoga，
            长期以中文指导来自马来西亚、中国、台湾、日本与线上学员。
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
          </p>
        </div>
      </section>

      {/* Courses */}
      <section
        style={{
          padding: "80px 20px",
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
              fontSize: "40px",
              marginBottom: "40px",
              textAlign: "center",
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
            {[
              {
                title: "Yoga for Joints",
                desc: "适合初学者与身体僵硬的人。",
              },
              {
                title: "Hatha for Beginners",
                desc: "建立正确、安全的瑜伽基础。",
              },
              {
                title: "Yogasanas",
                desc: "经典哈他瑜伽体式课程。",
              },
              {
                title: "Bhuta Shuddhi",
                desc: "五大元素净化练习。",
              },
              {
                title: "Nadi Balance Scan",
                desc: "阿育吠陀体质分析与咨询。",
              },
              {
                title: "Yoga × Ayurveda",
                desc: "瑜伽与阿育吠陀整合课程。",
              },
            ].map((course) => (
              <div
                key={course.title}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "24px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "12px",
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    lineHeight: "1.8",
                    fontSize: "16px",
                  }}
                >
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          backgroundColor: "#2b2b2b",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          联系 Yoga Sri
        </h2>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
            lineHeight: "1.8",
          }}
        >
          欢迎预约课程、私人咨询、
          企业课程与静修营合作。
        </p>

        <a
          href="https://wa.me/60126725549"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "16px 32px",
            backgroundColor: "white",
            color: "#2b2b2b",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          WhatsApp 联系
        </a>
      </section>
    </main>
  );
}
