export default function Home() {
  return (
    <main>

    <div className="headlinebox">
        <div className="headlinetext">GAMES</div>
    </div>

    <div className="card-container" href="./Games/Jimpu" >
        <a href="./Games/Jimpu">
            <div className="card">
                <span></span>
                <div className="content">Jimpu</div>
            </div>
        </a>
    </div>



    <footer className="footer-info">
        Mail: <a href="mailto:zock868@gmail.com">zock868@gmail.com</a> &nbsp;|&nbsp;
        Github: <a href="https://github.com/ZOCK8" target="_blank">ZOCK8</a> &nbsp;|&nbsp;
        Discord: <a href="https://discord.gg/wxDANpJueU" target="_blank">Discord</a>
    </footer>

    <img className="PlayerImage" id="scrollImage" src="/Images/Player_3.png" alt="Scroll-Anzeige"
        style={{width:"5%", height: "5%", transform: "translateX(-50%) rotate(-90deg)"}}/>
    <script src="/Scripts/ScrollImageScript.js"></script>
    </main>
  );
}
