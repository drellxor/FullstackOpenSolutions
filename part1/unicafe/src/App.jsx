import { useState } from 'react'

const Header = ({ text }) => (<h1>{text}</h1>)

const IncButton = (props) => (<button onClick={() => props.callFunc(props.callValue + 1)}>{props.text}</button>)

const StatRow = ({ text, value, afterText }) => (<p>{text} {value} {afterText}</p>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback'/>
      <IncButton callFunc={setGood} callValue={good} text='Good'/>
      <IncButton callFunc={setNeutral} callValue={neutral} text='Neutral'/>
      <IncButton callFunc={setBad} callValue={bad} text='Bad'/>
      <Header text='statistics'/>
      <StatRow text='good' value={good}/>
      <StatRow text='neutral' value={neutral}/>
      <StatRow text='bad' value={bad}/>
      <StatRow text='all' value={good + neutral + bad}/>
      <StatRow text='average' value={(good - bad) / (good + neutral + bad)}/>
      <StatRow text='positive' value={good / (good + neutral + bad)} afterText='%'/>
    </div>
  )
}

export default App
