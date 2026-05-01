import Script from 'next/script'
export default function Home() {
  return (
    <main>
        <div className="headlinebox">
            <div className="headlinetext">About US</div>
            <img src="../Images/Player_1.png" alt="player1" className="PlayerImage" style={{top: "290%", left: "-54%", width: "15%", rotate: "-80deg"}} />
            <img src="../Images/Player_2.png" alt="player2" className="PlayerImage" style={{top: "-1%", left: "80%", width: "4%", rotate: "184deg", position: "fixed"}} />
            <img src="../Images/Player_4.png" alt="player4" className="PlayerImage" style={{top: "200%", left: "56%", width: "18%", rotate: "60deg"}} />
        </div>

        <div className="Middel">
            <div className="Infos">
                <div className="InfoText">
                    Hello, this is ZOCK-GAMES!<br />
                    We are a small game studio<br />
                    that creates exciting games.<br />
                    <br />
                    We want our players to follow<br />
                    our development progress <br />
                    and give feedback,<br />
                    so they can actively participate<br />
                    in shaping our games.<br />
                    <br />
                    <div className="box-button" style={{top: "60%"}}>
                        <div className="button-text">
                            <a href="./AboutUs/WorkWithUs" style={{color: "rgb(19, 41, 61)", textDecoration: "none"}}>
                                <span><b>Work with Us</b></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <img className="PlayerImage" id="scrollImage" src="/Images/Player_3.png" alt="Scroll-Anzeige"/>
        <Script src="/Scripts/ScrollImageScript.js" />
    </main>
  );
}
