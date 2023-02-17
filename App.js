import { useState } from "react"

/*This app will take grades and average them, equally weighted.
1. input scores X
2. retain scores
3. calculate average
4. display message if failing
*/

export default function (App) {
  //Input range, 0-100
  const min = 0
  const max = 100
  const [value, setValue] = useState()
  const forceNumber = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value)
  }
  
  //save scores in an array for later calculation & show on-screen
  const [gradebook, setGradebook] = useState([])
  const [grades,setGrade] = useState(0)
  
  const handleChange = (event) => {
    setGrade(event.target.value)
  }

  //currently attempting to make button save input on-screen and in gradebook array; can I have a second onChange that allows such?
  return (
    <div>
      <input
        type="number"
        placeholder="Numeric Score"
        value={value}
        onChange={forceNumber}
      />
    <button>Enter</button>

    <button>Calculate Average</button>
    </div>
  )
}
//calculate average button must have onClick that allows the averaging of objects in array.  Add array and divide by length?






//Below is code that I migrated from a to-do list and attempted to alter

// export default function App() {
//   const [gradebook, setGradebook] = useState ([]);
//   const [newScore, setNewScore] = useState('')

//   const [val, setVal] = useState(0);

//   const handleChange = (event) => {
//     setNewScore(event.target.value)
//   }

//   const addScore = () => {
//     const score = {
//       id: gradebook.length === 0 ? 1 :
//       gradebook[gradebook.length - 1].id + 1,
//       scoreName: newScore
//     }
//     setGradebook([...gradebook, score])
//   }

//   const deleteScore = (id) => {
//     setGradebook(gradebook.filter((score) => score.id != id))
//   }

//   return (
//     <div className="App">
//       <div className='addScore'>
//         <input onChange={handleChange}
//           type='text'
//           pattern='[0-9]*'
//           value={val}
//           onChange={(e) =>
//             setVal((v) =>
//             (e.target.validity.valid ? e.target.value :v))}/>
//         <button onClick={addScore}>Add Score</button>
//       </div>
//       <div className="list">
//         {gradebook.map((score) => {
//           return (
//             <score
          
//           )
//         })}
//       </div>
//     </div>
//   )
// }