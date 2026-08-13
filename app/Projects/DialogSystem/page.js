import Script from "next/script";
export default function Home() {
  return (
    <main>
      <div style={{ width: "43%" }} className="headlinebox">
        <div className="headlinetext">Z Dialog System</div>
      </div>
      <div
        id="projekt-cards-container"
        style={{ position: "sticky", top: "18%" }}
      >
        <div className="projekt-card">
          Z Dialog System is a A lightweight, visual node-based system to
          create, manage, and trigger interactive dialogues.
          <a href="" style={{ color: "aliceblue", textDecoration: "none" }}>
            <span>
              <b>Dialog System</b>
            </span>
          </a>
        </div>
        <div
          className="projekt-card"
          style={{ maxWidth: "2000px", width: "50%" }}
        >
          <a style={{ color: "aliceblue", textDecoration: "none" }}>
            Documentation:
          </a>
          <pre>
            {`## Setup
1. Create a Dialog Window in the hierarchy (Dialog -> Dialog Window) 
2. Open the Dialog Editor via Window > Dialog Editor
3. Create your nodes with Rightclick 
3. Save your dialog in Resources (wont work in other)
4. Select The File in the trigger and Chose your trigger 

## How to use
- Create / Delete / Load / Duplicate dialogue nodes in the editor
- Connect nodes with edges to create a Dialog
- The start node needs to be at the beginning and an end node must be 
  at each end of the last nodes 
- Save the dialogue file
- You can edit the Dialog Element in DialogSystem/Elements
- Audio Files must be saved in Resources/
- Create Characters to display them via the action node

## Requirements
- Unity 2021.3+
`}
          </pre>
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
