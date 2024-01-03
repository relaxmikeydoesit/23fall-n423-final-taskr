import React from "react";


fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())  
    .then(data => 
        console.log(data)
        // document.getElementById("activity-name").textContent = data.activity 
    )

export default function BoredBot() {
    return (
        <>
        <div>
            <h1>BoredBot</h1>

            <h2 id="activity-name"></h2>
        </div>
        </>
    );
    }