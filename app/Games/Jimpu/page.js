"use client"; // Wichtig in Next.js, wenn wir Buttons klicken (Interaktivität) wollen!

import { useState } from "react";

export default function JimpuPage() {
    // Hier steuern wir, ob das Info-Panel offen oder zu ist
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    // Diese Funktion schaltet das Panel um
    const toggleUI = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    return (
        <main>
            <div className="headline">
                <div className="headlinebox">
                    <div className="headlinetext">Jimpu</div>
                    <img src="/Images/Player_1.png" alt="player1" className="PlayerImage"
                        style={{ left: "10%", top: "1%", rotate: "184deg", position: "fixed" }} />
                    <img src="/Images/Player_2.png" alt="player2" className="PlayerImage"
                        style={{ left: "16%", top: "144%", rotate: "4deg" }} />
                </div>
            </div>

            <div className="Infos">
                <div className="InfoText">
                    Hello I am ZOCK, <br />
                    This is my first game<br />
                    that will be published by <br />
                    December 22, 2025

                    <div className="box-button" style={{ top: "38%" }}>
                        <div className="button-text">
                            <a href="/404">
                                <span><b>Download</b></span>
                            </a>
                        </div>
                    </div>

                    <div className="box-button" style={{ top: "25%", backgroundColor: "#0F2854" }}>
                        {/* Hier rufen wir unsere React-Funktion auf */}
                        <div className="button-text" onClick={toggleUI}
                            style={{ border: "4px solid #1C4D8D", backgroundColor: "#4988C4", cursor: "pointer" }}>
                            <span><b>Info</b></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* UI Panel */}

            <div id="InfoPanel" className="Info-Panel"
                style={{
                    opacity: isInfoOpen ? "1" : "0",
                    display: isInfoOpen ? "block" : "none",
                    transition: "opacity 0.2s",
                }}>

                <div className="CloseButton" onClick={toggleUI} style={{ cursor: "pointer", scale: "1.5" }}>
                </div>

                    <div style={{ fontSize: "60px", color: "#ffffff" }}><b> <br /> Jimpu</b>
                        <div className= "InfoPanelText" style={{ color: "#ffffff" }}>
                            <p><br /><br />Is about a player landing on <br />
                            a planet named Jimpo there the player <br />
                            has to survive but theres one think <br />
                            he doesn't know...
                            </p>

                            {/* Download-Buttons */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}></div>
                            <div className="box-button" style={{ top: "35%" }}>
                                <div className="button-text">
                                    <a href="https://github.com/ZOCK8/Jimpu" target="_blank" rel="noopener noreferrer"
                                        style={{ color: "rgb(19, 41, 61)", textDecoration: "none" }}>
                                        <span><b>Github</b></span>
                                    </a>
                                </div>
                            </div>
                            <div className="box-button" style={{ top: "45%" }}>
                                <div className="button-text">
                                    <a href="/Jimpu/GDD" target="_blank" rel="noopener noreferrer"
                                        style={{ color: "rgb(19, 41, 61)", textDecoration: "none" }}>
                                        <span><b>GDD</b></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <img className="PlayerImage" id="scrollImage" src="/Images/Player_3.png" alt="Scroll-Anzeige"
                style={{ width: "5%", height: "5%", transform: "translateX(-50%) rotate(-90deg)" }} />

            <script src="/Scripts/ScrollImageScript.js"></script>

        </main >
    );
}