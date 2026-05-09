import Image from "next/image";

const whatsappUrl = "https://wa.me/60126725549";

export default function Home() {
  return (
    <main
      style={{
        background: "#F7F1E8",
        color: "#33261D",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "600",
              fontFamily: "Georgia, serif",
            }}
          >
            Yoga Sri
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            style={{
              padding: "14px 28px",
              borderRadius: "999px",
              background: "#3A2A1E",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            WHATSAPP
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#B8894A",
                letterSpacing: "4px",
                fontSize: "13px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Classical Hatha Yoga × Ayurveda
            </p>

            <h1
              style={{
                fontSize: "72px",
                lineHeight: "1.05",
                fontFamily: "Georgia, serif",
                marginBottom: "30px",
              }}
            >
              Return to your natural rhythm.
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#6B5A4B",
                marginBottom: "40px",
              }}
            >
              用中文，准确学习经典哈他瑜伽，并结合阿育吠陀体质理解，重新建立身体、呼吸与生活的自然节奏。
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              style={{
                padding: "18px 34px",
                borderRadius: "999px",
                background: "#B8894A",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "2px",
              }}
            >
              BOOK A SESSION
            </a>
          </div>

          <div>
            <div
              style={{
                borderRadius: "36px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/yogasriprofile.jpg"
                alt="Yoga Sri"
                width={900}
                height={1100}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#33261D",
          color: "#F7F1E8",
          padding: "100px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#C9A66B",
              letterSpacing: "4px",
              fontSize: "13px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Featured Immersion
          </p>

          <h2
            style={{
              fontSize: "54px",
              lineHeight: "1.2",
              fontFamily: "Georgia, serif",
              marginBottom: "30px",
            }}
          >
            三天五大元素健康重启学习营
          </h2>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#E7D8C5",
              marginBottom: "40px",
            }}
          >
            结合 Nadi 气脉平衡检测、医生一对一咨询、阿育吠陀疗程建议与 Isha 哈他瑜伽练习，让身体从内在重新找到稳定、轻盈与清晰。
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {[
              "29 May · 6pm–9pm",
              "30 May · 7am–3pm",
              "31 May · 7am–3pm",
            ].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid #6A5847",
                  padding: "18px 24px",
                  borderRadius: "20px",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            style={{
              padding: "18px 34px",
              borderRadius: "999px",
              background: "#B8894A",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            RESERVE YOUR SEAT
          </a>
        </div>
      </section>
    </main>
  );
}
