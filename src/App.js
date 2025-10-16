import { useState } from "react";

export default function App() {
  const [showContact, setShowContact] = useState(false);

  const products = [
    {
      name: "חולצת כדורגל קצרה",
      img: "https://images.unsplash.com/photo-1606813902779-9a4d3c84b2b7?w=600",
      price: "₪99",
    },
    {
      name: "חולצת כדורסל רטרו",
      img: "https://images.unsplash.com/photo-1620641788421-7a1c4561b3a6?w=600",
      price: "₪119",
    },
    {
      name: "חולצת חורף ארוכה",
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba1?w=600",
      price: "₪129",
    },
    {
      name: "סט קיץ מלא",
      img: "https://images.unsplash.com/photo-1627483262530-081ddf6ed8f5?w=600",
      price: "₪149",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#1a1a1a", color: "white", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "20px", borderBottom: "1px solid #555" }}>
        <h1 style={{ fontSize: "24px" }}>Jersey Home</h1>
        <button onClick={() => setShowContact(!showContact)} style={{ padding: "8px 16px", cursor: "pointer" }}>הזמן עכשיו</button>
      </header>

      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>ברוך הבא ל־Jersey Home</h2>
        <p style={{ color: "#aaa", maxWidth: "600px", margin: "0 auto" }}>
          אצלנו תמצאו את כל החולצות — קיץ, חורף, כדורגל, כדורסל, קצרות וארוכות. איכות גבוהה, מחירים נוחים.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "0 20px 40px" }}>
        {products.map((p, i) => (
          <div key={i} style={{ background: "#333", borderRadius: "10px", overflow: "hidden", textAlign: "center" }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3 style={{ margin: "10px 0" }}>{p.name}</h3>
            <p style={{ color: "#aaa", marginBottom: "10px" }}>{p.price}</p>
            <button onClick={() => setShowContact(true)} style={{ marginBottom: "10px", padding: "6px 12px", cursor: "pointer" }}>
              הזמן עכשיו
            </button>
          </div>
        ))}
      </section>

      {showContact && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ background: "#222", padding: "20px", borderRadius: "15px", textAlign: "center", width: "300px" }}>
            <h3 style={{ marginBottom: "15px" }}>איך תרצה להזמין?</h3>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <a href="https://wa.me/972532864493" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none" }}>וואטסאפ</a>
              <a href="https://www.instagram.com/jerseyhome" target="_blank" rel="noopener noreferrer" style={{ color: "#C13584", textDecoration: "none" }}>אינסטגרם</a>
            </div>
            <button onClick={() => setShowContact(false)} style={{ marginTop: "15px", padding: "6px 12px", cursor: "pointer" }}>סגור</button>
          </div>
        </div>
      )}

      <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #555", color: "#777" }}>
        © 2025 Jersey Home — כל הזכויות שמורות
      </footer>
    </div>
  );
}
