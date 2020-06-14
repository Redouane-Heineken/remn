import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setcounter] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setcounter(counter + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setcounter(counter + 0)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setcounter(counter - 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good'></Button>
        <Button handleClick={handleNeutralClick} text='neutral'></Button>
        <Button handleClick={handleBadClick} text='bad'></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} counter={counter}/>
    </div>
  )
}

const Button = ({ handleClick, text}) => (
  <button 
    onClick={handleClick}>
      {text}
  </button>
)

const Statistic = ({value, text}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = ({ good, neutral, bad, counter }) => {
  let all = bad + neutral+ good
  let average = counter/(bad + neutral+ good)
  let positive = `${(good/all)*100} %`
  
  if (all === 0) return <p>No feedback given</p>

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={all} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={positive} />
        </tbody>
      </table> 
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)