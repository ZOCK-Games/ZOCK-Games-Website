import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navigationbar">
          <a href="/" className="HomeNav">
            Home
          </a>
          <a href="/Games/" className="HomeNav">
            Games
          </a>
          <a href="/Projekts/" className="HomeNav">
            Projects
          </a>
        </div>

        <footer className="footer-info">
          Mail:
          <a href="mailto:zock868@gmail.com">zock868@gmail.com</a> &nbsp;|&nbsp;
          Github:
          <a href="https://github.com/ZOCK8" target="_blank">
            ZOCK8
          </a>{" "}
          &nbsp;|&nbsp; Discord:
          <a href="https://discord.gg/wxDANpJueU" target="_blank">
            Discord
          </a>
        </footer>
        {children}
      </body>
    </html>
  );
}
