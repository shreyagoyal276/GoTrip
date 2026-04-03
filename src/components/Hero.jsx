import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const places = ["Goa", "Manali", "Gwalior", "Rajahmundry", "Ladakh", "Tirupati", "Kerala"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPlace = places[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPlace.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentPlace.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentPlace.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % places.length);
        }
      }
    }, isDeleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="hero-ai">

      {/* DOODLES */}
      <div className="doodle map">📍</div>
      <div className="doodle plane">✈️</div>
      <div className="doodle ticket">🎟️</div>
      <div className="doodle camera">📷</div>

      {/* LEFT */}
      <div className="hero-left">

        <h1 className="hero-title">
          Plan Your Next Journey <br />
          <span className="with-brand">
            with <span className="brand">GoTrip</span>
          </span>
        </h1>

        <h2 className="typing-line">
          {t("hero_title")}{" "}
          <span className="highlight">{text}</span>
        </h2>

        <p>{t("hero_desc")}</p>

        <button className="primary-btn">
          {t("hero_button")}
        </button>

      </div>

      {/* RIGHT */}
      <div className="hero-right">

        {/* BLOB */}
        <div className="blob"></div>

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="travel"
        />

        {/* FLOATING CARDS */}
        <div className="floating-card card-1">
          📍 Goa <br /> ₹12,000
        </div>

        <div className="floating-card card-2">
          ⭐ 4.8 Rating
        </div>

      </div>

    </section>
  );
}

export default Hero;