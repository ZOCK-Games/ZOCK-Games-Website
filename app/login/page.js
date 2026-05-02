"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [user, setUser] = useState(null);
  const [lib, setLib] = useState(null);

  return (
    <main>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => {
          const netlify = window.netlifyIdentity;
          if (netlify) {
            console.log("Netlify Script geladen!");
            
            netlify.init({ locale: "de" });
            
            setUser(netlify.currentUser());

            netlify.on("login", (u) => {
              setUser(u);
              netlify.close();
            });
            netlify.on("logout", () => setUser(null));

            setLib(netlify);
          }
        }}
      />

      {/* Headline */}
      <div className="headlinebox">
        <div className="headlinetext">ZOCK-GAMES</div>
      </div>

      {/* Login Sektion */}
      <div style={{ top: "60%", position: "relative", zIndex: 100, padding: "20px" }}>
        {user ? (
          <button className="box-button" onClick={() => lib?.logout()}>
            Logout ({user.user_metadata?.full_name || user.email})
          </button>
        ) : (
          <button className="box-button" onClick={() => lib?.open()}>
            {lib ?  "Login / Registrieren" : "Lädt..."}
          </button>
        )}
      </div>

      {/* Player images */}
      <img
        src="/Images/Player_1.png"
        alt="player1"
        className="PlayerImage"
        style={{
          left: "76%",
          width: "5%",
          rotate: "175deg",
          top: "-2%",
          position: "absolute",
        }}
      />

      <img
        src="/Images/Player_4.png"
        alt="player2"
        className="PlayerImage"
        style={{
          width: "5%",
          top: "30%",
          left: "33%",
          zIndex: -1,
          transform: "translateX(-50%) rotate(-100deg)",
          position: "absolute",
        }}
      />
    </main>
  );
}