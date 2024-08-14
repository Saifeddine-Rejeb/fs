import { useState } from 'react'

const History = ({allClicks}) => {
  if (allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
  }
  
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />
    </div>
  ) // ^JOIN METHOD TO JOIN ARRAY ELEMENTS INTO A STRING SEPARATED BY 
    // WHATEVER WE PASS AS AN ARGUMENT
}
export default App



// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })
  
//   const handleLeftClick = () =>
//     setClicks({ ...clicks, left: clicks.left + 1 })
                  // ^OBJECT SPREAD SYNTAX
//   const handleRightClick = () =>
//     setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }