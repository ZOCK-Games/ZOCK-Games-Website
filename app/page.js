import GameShowcase from '../components/GameShowcase';
export default function Home() {
  return (
    <main>
      {/* Headline*/}
      <div className="headlinebox">
        <div className="headlinetext">ZOCK-GAMES</div>
      </div>

      {/* Player images */}
      <img 
        src="/Images/Player_1.png" 
        alt="player1" 
        className="PlayerImage"
        style={{ left: '76%', width: '5%', rotate: '175deg', top: '-2%', position: 'absolute' }} 
      />
      
      <img 
        src="/Images/Player_4.png" 
        alt="player2" 
        className="PlayerImage"
        style={{ width: '5%', top: '30%', left: '33%', zIndex: -1, transform: 'translateX(-50%) rotate(-100deg)', position: 'absolute' }} 
      />

      {/* Infos and buttons*/}
      <div className="Infos">
        <div className="InfoText">
          Hello this is ZOCK Games <br /> by ZOCK <br /> currently i work on my first game<br /> it
          will be probably out <br />by December 22 2025

          {/* Button 1: JIMPU */}
          <div className="box-button" style={{ top: "30%", backgroundColor: "#963f3e" }}>
            <div className="button-text">
              <a href="./Games/Jimpu" style={{ color: "white", textDecoration: "none" }}>
                <div className="tooltip-wrapper">
                  JIMPU
                  <div className="tooltip">Our first BIG Game!</div>
                </div>
              </a>
            </div>
          </div>

          {/* Button 2: About Us */}
          <div className="box-button" style={{ top: "45%", backgroundColor: "#0F2854" }}>
            <div className="button-text" style={{ border: "4px solid #1C4D8D", backgroundColor: "#4988C4" }}>
              <a href="/AboutUs" style={{ color: "#dee3eb", textDecoration: "none" }}>
                <span><b>About us</b></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hole-Effekt / News */}
      <div className="hole64x64" style={{ top: "100%" }}>
        <div style={{ top: "0%", left: "0%", position: "relative" }}><GameShowcase /></div>
      </div>

      <div className="hole64x64" style={{ top: "130%", right: "10%" }}>
        <div style={{ transform: "scale(0.7)", top: "10%", position: 'relative' }}><GameShowcase /></div>
        <a href="/News">
          <div style={{ top: "60%", transform: "translateX(-50%)", position: "relative" }} className="box-button">
            <div className="button-text" style={{ color: '#ffffff' }}><b>News</b></div>
          </div>
        </a>
      </div>

      {/* Scroll-View Image */}
      <img 
        className="PlayerImage" 
        id="scrollImage" 
        src="/Images/Player_3.png" 
        alt="Scroll-Anzeige"
        style={{ width: "5%", height: "5%", transform: "translateX(-50%) rotate(-90deg)" }} 
      />
    </main>
  );
}