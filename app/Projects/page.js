import Script from "next/script";
export default function Home() {
  return (
    <main>
      <div className="headlinebox">
        <div className="headlinetext">PROJECTS</div>
      </div>
      <div
        id="projekt-cards-container"
        style={{ position: "sticky", top: "18%" }}
      >
        <div className="projekt-card">
          <b>Jimpu</b>, a Project by ZOCK-GAMES by ZOCK
          <a
            href="/Games/Jimpu/"
            style={{ color: "aliceblue", textDecoration: "none" }}
          >
            <span>
              <b>Jimpu</b>
            </span>
          </a>
        </div>

        <div className="projekt-card">
          <a
            href="/Projects/DialogSystem/"
            style={{ color: "aliceblue", textDecoration: "none" }}
          >
            <b>Z Dialog System by ZOCK-GAMES</b>, <br></br>
            Create manage, and trigger dialogues.
          </a>
        </div>

        <div className="projekt-card">
          Dinosaur, Avoiding Fate Project by ZOCK, Marrariche Lopes, Prince
          Yarjack
          <a
            href="https://zock8.itch.io/dinosaur-avoiding-fate"
            target="_blank"
            style={{ color: "aliceblue", textDecoration: "none" }}
          >
            Play on Itch.io
          </a>
        </div>
      </div>
      <img
        className="PlayerImage"
        id="scrollImage"
        src="/Images/Player_3.png"
        alt="Scroll-Anzeige"
      />

      <Script src="/Scripts/ScrollImageScript.js" />
    </main>
  );
}
