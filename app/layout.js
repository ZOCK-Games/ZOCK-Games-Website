"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const [lib, setLib] = useState(null);

  useEffect(() => {
    const netlify = window.netlifyIdentity;
    if (netlify && !lib) {
      setLib(netlify);
    }
  }, [lib]);

  return (
    <html lang="de">
      <head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
          onLoad={() => {
            const netlify = window.netlifyIdentity;
            if (netlify) {
              netlify.init({
                locale: "de"
              });

              const tokenExists = window.location.hash.includes("recovery_token");
              
              if (tokenExists) {
                setTimeout(() => {
                  window.netlifyIdentity.open("recovery");
                }, 2000);
              }

              setUser(netlify.currentUser());
              netlify.on("login", (u) => {
                setUser(u);
                netlify.close();
              });
              netlify.on("logout", () => {
                setUser(null);
              });
              setLib(netlify);
            }
          }}
        />
      </head>
      <body>
        <div className="navigationbar">
          <a href="/" className="HomeNav">Home</a>
          <a href="/Games" className="HomeNav">Games</a>
          <a href="/Projekts" className="HomeNav">Projects</a>
          {user ? (
            <div
              className="HomeNav"
              style={{ cursor: "pointer" }}
              onClick={() => lib?.logout()}
            >
              Logout ({user.user_metadata?.full_name || user.email})
            </div>
          ) : (
            <div
              className="HomeNav"
              style={{ cursor: "pointer" }}
              onClick={() => lib?.open()}
            >
              {lib ? "Login / Register" : "Lädt..."}
            </div>
          )}
        </div>
        {children}
        <footer className="footer-info">
          Mail: <a href="mailto:zock868@gmail.com">zock868@gmail.com</a>
          &nbsp;|&nbsp; Github:{" "}
          <a href="https://github.com/ZOCK8" target="_blank" rel="noreferrer">
            ZOCK8
          </a>
          &nbsp;|&nbsp; Discord:{" "}
          <a href="https://discord.gg/wxDANpJueU" target="_blank" rel="noreferrer">
            Discord
          </a>
        </footer>
      </body>
    </html>
  );
}