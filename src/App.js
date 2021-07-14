import React, {useState} from 'react'
import "./style.css"

const App = () =>{

    let [score, setScore] = useState(0)
    return(
        <div>
            <h1>Hey This Is My Counter App</h1>
            <h2>The value of score is {score}</h2>
            <div className="buttons">
                <button onClick = {()=>(score < 25)?setScore(score+1) : ""}> Increment </button>
                <button onClick = {()=>(score > 0)?setScore(score-1) : "" } > Decrement </button>
                <button onClick = {()=>{setScore(0)}}> Reset </button>
            </div>
        </div>
    )
}

export default App