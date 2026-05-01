import Script from 'next/script'
export default function Home() {
    return (
        <main>
            <div className="headline">
                <div className="headlinebox">
                    <div className="headlinetext" style={{ fontSize: "50px" }}>
                        Work with us
                    </div>
                </div>
            </div>

            <img
                src="../Images/Player_1.png"
                alt="player1"
                className="PlayerImage"
                style={{zIndex: 0, top: "140%", left: "-16%", width: "2%", rotate: "-80deg" }} />
            <img
                src="../Images/Player_4.png"
                alt="player4"
                className="PlayerImage"
                style={{ top: -"1%", left: "10%", width: "2.5%", rotate: "14deg", position: "fixed" }}
            />

            <div className="Middel">
                <div className="Infos">
                    <div className="InfoText">
                        Status <span style={{ color: "red" }}>⬤</span>
                        <br />
                        We can create your game!
                        <br />
                        We specialize in 2D and 3D pixel games.
                        <br />
                        <br />
                        Just send us an email at:
                        <br />
                        Mail:{" "}
                        <a style={{ color: "#ffffff" }} href="mailto:zock868@gmail.com">
                            <b>zock868@gmail.com</b>
                        </a>
                        <br />
                        <br />
                        We work very precisely
                        <br />
                        to ensure you get a great game.
                        <br />
                        <br />
                        We use Unity as our game engine
                        <br />
                        and can develop for
                        <br />
                        mobile, console, web, and PC.
                        <br />
                    </div>
                </div>
            </div>

            <img
                className="PlayerImage"
                id="scrollImage"
                src="/Images/Player_3.png"
                alt="Scroll-Anzeige"
            />
            <Script src="/Scripts/ScrollImageScript.js" />

        </main >
    );
}
