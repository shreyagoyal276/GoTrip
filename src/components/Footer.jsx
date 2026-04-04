import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-ai">

      {/* BACKGROUND DOODLES */}
      <div className="footer-doodle plane">✈️</div>
      <div className="footer-doodle map">📍</div>
      <div className="footer-doodle camera">📷</div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section brand">
          <h2>GoTrip</h2>
          <p>{t("footer_desc")}</p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h4>{t("quick_links")}</h4>
          <span>{t("home")}</span>
          <span>{t("insights")}</span>
          <span>{t("budget")}</span>
          <span>{t("dashboard")}</span>
        </div>

          {/* DESTINATIONS */}
          <div className="footer-section">
            <h4>{t("popular_destinations")}</h4>

            <a 
              href="https://goa-tourism.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              {t("goa")}
            </a>

            <a 
              href="https://himachaltourism.gov.in/destination/manali/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              {t("manali")}
            </a>

            <a 
              href="https://www.tourism.rajasthan.gov.in/jaipur.html" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              {t("jaipur")}
            </a>

            <a 
              href="https://www.keralatourism.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              {t("kerala")}
            </a>
          </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>{t("contact")}</h4>
          <span>📧 support@gotrip.com</span>
          <span>📞 +91 98765 43210</span>
          <span>{t("country")}</span>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>{t("copyright")}</p>
      </div>

    </footer>
  );
}

export default Footer;