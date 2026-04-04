import { useTranslation } from "react-i18next";

function Navbar({ setPage, currentPage }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <nav className="navbar-modern">

      {/* LEFT - LOGO */}
      <div className="nav-left" onClick={() => setPage("home")}>
        <span className="logo-text">GoTrip</span>
      </div>

      {/* CENTER - LINKS */}
      <div className="nav-center">

        <span
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          {t("Home")}
        </span>

        <span
          className={currentPage === "insights" ? "active" : ""}
          onClick={() => setPage("insights")}
        >
          {t("Insights")}
        </span>

        <span
          className={currentPage === "budget" ? "active" : ""}
          onClick={() => setPage("budget")}
        >
          {t("Budget")}
        </span>

        <span
          className={currentPage === "friend-family-pass" ? "active" : ""}
          onClick={() => setPage("friend-family-pass")}
        >
          {t("Family")}
        </span>

        {/* <span
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          {t("dashboard")}
        </span> */}



        <span
  className={currentPage === "groups" ? "active" : ""}
  onClick={() => setPage("groups")}
>
  Groups
</span>



<span
  className={currentPage === "quick-plan" ? "active" : ""}
  onClick={() => setPage("quick-plan")}
>
  Quick Plan
</span>

        {/* <span
          className={currentPage === "about" ? "active" : ""}
          onClick={() => setPage("about")}
        >
          {t("about")}
        </span> */}

        <span
          className={currentPage === "profile" ? "active" : ""}
          onClick={() => setPage("profile")}
        >
          {t("Profile")}
        </span>

      </div>

      {/* RIGHT - ACTIONS */}
      <div className="nav-right">

        {/* <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button> */}

        {/* LANGUAGE (optional small) */}
        <select
          className="lang"
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="gu">GU</option>
          <option value="ta">TA</option>
          <option value="mr">MR</option>
        </select>

      </div>

    </nav>
  );
}

export default Navbar;



