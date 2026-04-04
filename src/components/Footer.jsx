// import { useTranslation } from "react-i18next";

// function Footer() {
//   const { t } = useTranslation();

//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         <div className="footer-section">
//           <h3>GoTrip</h3>
//           <p>{t("footer_desc")}</p>
//         </div>

//         <div className="footer-section">
//           <h3>{t("quick_links")}</h3>
//           <p>{t("home")}</p>
//           <p>{t("destinations")}</p>
//           <p>{t("planner")}</p>
//           <p>{t("insights")}</p>
//         </div>

//         <div className="footer-section">
//           <h3>{t("popular_destinations")}</h3>
//           <p>{t("goa")}</p>
//           <p>{t("manali")}</p>
//           <p>{t("jaipur")}</p>
//           <p>{t("kerala")}</p>
//         </div>

//         <div className="footer-section">
//           <h3>{t("contact")}</h3>
//           <p>{t("email")}: support@gotrip.com</p>
//           <p>{t("phone")}: +91 98765 43210</p>
//           <p>{t("country")}</p>
//         </div>

//       </div>

//       <div className="footer-bottom">
//         <p>{t("copyright")}</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

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
          <span>{t("goa")}</span>
          <span>{t("manali")}</span>
          <span>{t("jaipur")}</span>
          <span>{t("kerala")}</span>
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