import { useState } from 'react'

const Header = ({ text }) => (<h1>{text}</h1>)

const IncButton = (props) => (<button onClick={() => props.callFunc(props.callValue + 1)}>{props.text}</button>)

const StatRow = ({ text, value, afterText }) => (
  <tr>
    <td>{text}</td>
    <td>{value} {afterText}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad}) => {
  const total = good + neutral + bad
  let content = (<p>No feedback given</p>)
  if (total > 0) {
    content = (
      <>
        <table>
          <tbody>
            <StatRow text='good' value={good}/>
            <StatRow text='neutral' value={neutral}/>
            <StatRow text='bad' value={bad}/>
            <StatRow text='all' value={total}/>
            <StatRow text='average' value={(good - bad) / total}/>
            <StatRow text='positive' value={good / total} afterText='%'/>
          </tbody>
        </table>
      </>
    )
  }
  return (
    <div>
      <Header text='statistics'/>
      {content}
    </div>
  )
}

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
      <Statistics bad={bad} good={good} neutral={neutral}/>
    </div>
  )
}

export default App
