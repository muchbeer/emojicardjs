import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojiapedia";

function createEmoji(objemoji) {
    return <Entry 
        key = {objemoji.id}
        emoji = {objemoji.emoji}
        name = {objemoji.name}
        description = {objemoji.meaning}
    />
}


function App() {
    return <div>
            <h1>
            <span>emojipedia</span>
          </h1>
    
          <dl className="dictionary">
                {emojipedia.map(createEmoji)}
          </dl>
    </div>
}

export default App;