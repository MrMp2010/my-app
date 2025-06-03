"use client"
import "./AboutPage.css"

const AboutPage = ({ darkMode }) => {
  return (
    <div className={`about-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="page-header">
          <h1>درباره ما</h1>
          <p>آشنایی با فروشگاه TechShop</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>داستان ما</h2>
            <p>
              فروشگاه TechShop از سال 1400 با هدف ارائه بهترین محصولات دیجیتال و تکنولوژی به مشتریان عزیز فعالیت خود را
              آغاز کرد. ما معتقدیم که تکنولوژی باید در دسترس همه باشد و به همین دلیل تلاش می‌کنیم تا محصولات با کیفیت را
              با بهترین قیمت‌ها ارائه دهیم.
            </p>
          </div>

          <div className="about-section">
            <h2>ماموریت ما</h2>
            <p>
              ماموریت ما ارائه تجربه‌ای بی‌نظیر از خرید آنلاین محصولات دیجیتال است. ما تلاش می‌کنیم تا با ارائه محصولات
              اصل، خدمات پس از فروش عالی و ارسال سریع، اعتماد شما را جلب کنیم.
            </p>
          </div>

          <div className="values-section">
            <h2>ارزش‌های ما</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>کیفیت</h3>
                <p>ارائه محصولات با بالاترین کیفیت</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>اعتماد</h3>
                <p>ایجاد رابطه‌ای مبتنی بر اعتماد با مشتریان</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h3>سرعت</h3>
                <p>ارائه خدمات سریع و به‌موقع</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>نوآوری</h3>
                <p>همیشه در جستجوی راه‌حل‌های نوآورانه</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>تیم ما</h2>
            <p>
              تیم TechShop متشکل از افرادی متخصص و با تجربه در حوزه تکنولوژی است که همیشه آماده ارائه بهترین خدمات به
              شما هستند. ما معتقدیم که موفقیت ما در گرو رضایت شما عزیزان است.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
