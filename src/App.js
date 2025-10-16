import { useState } from "react";

// Jersey Home: 3 visual styles in one component
// No external libraries – pure React + inline styles

const PRODUCTS = [
  { name: "חולצת בית 24/25", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800", price: "₪129" },
  { name: "חולצת חוץ קצרה", img: "https://images.unsplash.com/photo-1606813902779-9a4d3c84b2b7?w=800", price: "₪99" },
  { name: "חולצת כדורסל רטרו", img: "https://images.unsplash.com/photo-1620641788421-7a1c4561b3a6?w=800", price: "₪119" },
  { name: "סט אימון חורף", img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba1?w=800", price: "₪149" },
];

const THEME_NAMES = {
  minimal: "Minimal Modern",
  street: "Street Sport",
  retro: "Retro Jerseys",
};

export default function JerseyHomeStyles() {
  const [theme, setTheme] = useState("minimal");
  const t = THEMES[theme];

  return (
    <div style={{
      fontFamily: t.font,
      background: t.page.bg,
      color: t.page.fg,
      minHeight: "100vh",
      transition: "all .3s ease",
      direction: "rtl",
    }}>
      {/* Top Bar */}
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: 16, position: "sticky", top: 0, zIndex: 10,
        background: t.header.bg, borderBottom: t.header.border,
        backdropFilter: t.header.backdrop ? "blur(8px)" : undefined,
      }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: t.brand.badge,
            boxShadow: t.brand.shadow,
          }} />
          <h1 style={{ margin: 0, letterSpacing: t.brand.tracking, fontWeight: 800 }}>
            Jersey Home
          </h1>
        </div>

        {/* Theme Switcher */}
        <div style={{ display: "flex", gap: 8 }}>
          {Object.entries(THEME_NAMES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              style={{
                padding: "8px 12px",
                background: theme === key ? t.cta.bg : "transparent",
                color: theme === key ? t.cta.fg : t.muted,
                border: `1px solid ${t.cta.border}`,
                borderRadius: 999,
                cursor: "pointer",
                transition: "transform .15s ease, background .2s ease",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "48px 20px 8px", textAlign: "center" }}>
        <h2 style={{
          margin: 0, fontSize: 40, lineHeight: 1.1,
          textTransform: t.title.transform,
          letterSpacing: t.title.letter,
          textShadow: t.title.shadow,
        }}>
          קולקציות ספורט פרימיום
        </h2>
        <p style={{ color: t.muted, maxWidth: 720, margin: "12px auto 0" }}>
          עיצוב ייחודי ל־Jersey Home. בחר סגנון למעלה כדי לראות שלושה כיוונים שונים לחלוטין.
        </p>
      </section>

      {/* Grid */}
      <main style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
        padding: 20,
        maxWidth: 1200,
        margin: "0 auto 64px",
      }}>
        {PRODUCTS.map((p, i) => (
          <article key={i} style={{
            background: t.card.bg,
            color: t.card.fg,
            border: t.card.border,
            borderRadius: t.card.radius,
            overflow: "hidden",
            position: "relative",
            boxShadow: t.card.shadow,
            transform: "translateZ(0)",
            transition: "transform .2s ease, box-shadow .2s ease",
          }}
          onMouseEnter={(e)=> e.currentTarget.style.transform = t.card.hoverScale}
          onMouseLeave={(e)=> e.currentTarget.style.transform = "translateZ(0)"}
          >
            {/* Accent Bar / Tape / Retro stripe */}
            {t.card.accent && (
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                ...t.card.accent,
              }} />
            )}

            <div style={{ position: "relative" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: 220, objectFit: "cover" }} />
              {t.badge && (
                <span style={{
                  position: "absolute", top: 10, left: 10,
                  padding: "4px 8px", borderRadius: 6,
                  background: t.badge.bg, color: t.badge.fg, fontSize: 12,
                  boxShadow: t.badge.shadow,
                }}>
                  חדש
                </span>
              )}
            </div>
            <div style={{ padding: 14 }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{p.name}</h3>
              <p style={{ margin: 0, color: t.muted }}>{p.price}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <a href="https://wa.me/972532864493" target="_blank" rel="noreferrer" style={buttonStyle(t)}>
                  וואטסאפ
                </a>
                <a href="https://www.instagram.com/jerseyhome" target="_blank" rel="noreferrer" style={buttonOutlineStyle(t)}>
                  אינסטגרם
                </a>
              </div>
            </div>
          </article>
        ))}
      </main>

      <footer style={{ textAlign: "center", padding: 24, color: t.muted, borderTop: t.footer.border }}>
        © 2025 Jersey Home — עיצוב דמו בשלושה סגנונות
      </footer>
    </div>
  );
}

function buttonStyle(t){
  return {
    padding: "8px 12px",
    background: t.cta.bg,
    color: t.cta.fg,
    border: `1px solid ${t.cta.border}`,
    borderRadius: 8,
    textDecoration: "none",
    transition: "transform .15s ease, filter .2s ease",
  };
}
function buttonOutlineStyle(t){
  return {
    padding: "8px 12px",
    background: "transparent",
    color: t.cta.bg,
    border: `1px solid ${t.cta.border}`,
    borderRadius: 8,
    textDecoration: "none",
    transition: "transform .15s ease, filter .2s ease",
  };
}

// Theme definitions
const THEMES = {
  // 1) Minimal Modern – נקי, פרימיום
  minimal: {
    font: "Inter, Arial, sans-serif",
    page: { bg: "#0e0e11", fg: "#fff" },
    header: { bg: "rgba(14,14,17,.7)", border: "1px solid #1f1f26", backdrop: true },
    brand: { badge: "linear-gradient(135deg,#6366f1,#22d3ee)", shadow: "0 6px 16px rgba(99,102,241,.4)", tracking: ".5px" },
    title: { transform: "none", letter: ".5px", shadow: "0 0 0 transparent" },
    muted: "#9aa0aa",
    cta: { bg: "#22d3ee", fg: "#0b0e13", border: "#22d3ee" },
    card: {
      bg: "#15151b", fg: "#fff", border: "1px solid #22232b", radius: 16,
      hoverScale: "translateZ(0) scale(1.015)", shadow: "0 6px 18px rgba(0,0,0,.25)",
    },
    badge: { bg: "#22d3ee", fg: "#0b0e13", shadow: "0 2px 10px rgba(34,211,238,.35)" },
    footer: { border: "1px solid #1f1f26" },
  },

  // 2) Street Sport – נועז, חי
  street: {
    font: "Montserrat, Arial, sans-serif",
    page: { bg: "#0b0b0b", fg: "#fff" },
    header: { bg: "#0b0b0b", border: "1px solid #232323" },
    brand: { badge: "conic-gradient(from 120deg, #ffcc00, #ff2d2d, #111)", shadow: "0 6px 16px rgba(255,45,45,.35)", tracking: "2px" },
    title: { transform: "uppercase", letter: "2px", shadow: "0 6px 20px rgba(255,204,0,.2)" },
    muted: "#b3b3b3",
    cta: { bg: "#ffcc00", fg: "#111", border: "#ffcc00" },
    card: {
      bg: "#121212", fg: "#fff", border: "1px solid #2a2a2a", radius: 14,
      hoverScale: "translateZ(0) scale(1.02)", shadow: "0 10px 24px rgba(0,0,0,.35)",
      accent: { background: "repeating-linear-gradient(135deg, transparent 0 10px, rgba(255,204,0,.08) 10px 20px)" },
    },
    badge: { bg: "#ff2d2d", fg: "#fff", shadow: "0 2px 10px rgba(255,45,45,.35)" },
    footer: { border: "1px solid #232323" },
  },

  // 3) Retro Jerseys – רטרו חם ונוסטלגי
  retro: {
    font: "'Rubik', Arial, sans-serif",
    page: { bg: "#111014", fg: "#fffbea" },
    header: { bg: "#16151b", border: "1px solid #2a2735" },
    brand: { badge: "linear-gradient(135deg,#ff9f1c,#ffbf69)", shadow: "0 6px 16px rgba(255,191,105,.35)", tracking: "1px" },
    title: { transform: "none", letter: "1px", shadow: "0 2px 0 rgba(0,0,0,.35)" },
    muted: "#ded7c3",
    cta: { bg: "#ffbf69", fg: "#241f1a", border: "#ffbf69" },
    card: {
      bg: "#1a1822", fg: "#fffbea", border: "1px solid #2d2a36", radius: 18,
      hoverScale: "translateZ(0) scale(1.02)", shadow: "0 12px 28px rgba(0,0,0,.35)",
      accent: { background: "linear-gradient(90deg, rgba(255,191,105,.08), transparent 60%)" },
    },
    badge: { bg: "#ff9f1c", fg: "#121212", shadow: "0 2px 10px rgba(255,159,28,.35)" },
    footer: { border: "1px solid #2a2735" },
  },
};

