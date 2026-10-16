import { useState } from 'react'

const TopAnecdote = ({ votes, list }) => {

  return (
    <div>

    </div>
  )

}

const Anecdote = ({ header, anecdote, voteCount}) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{anecdote}</p>
      <DisplayVotes voteCount={voteCount}/>
    </div>
  )
}

const ButtonRandomSelect = ({ setter, list }) => {
  return (
    <button onClick={() => {
      const randomItem = Math.floor(Math.random() * list.length)
      setter(randomItem)
    }}>next anecdote</button>
  )
}

const ButtonVote = ({ setter, votes, voteIndex }) => {
  const newVotes = {...votes}
  newVotes[voteIndex]++

  return (
    <button onClick={() => setter(newVotes)}>vote</button>
  )
}

const DisplayVotes = ({ voteCount }) => (<p>Has {voteCount} votes</p>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const defaultVotes = Object.fromEntries(
    anecdotes.map((_, i) => [i, 0])
  )
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(defaultVotes)

  const topAnecdoteIndex = Object.entries(votes).reduce((max, curr) =>
  curr[1] > max[1] ? curr : max)[0]


  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} header='Anecdote of the day' voteCount={votes[selected]}/>
      <ButtonVote setter={setVotes} votes={votes} voteIndex={selected}/>
      <ButtonRandomSelect setter={setSelected} list={anecdotes}/>

      <Anecdote anecdote={anecdotes[topAnecdoteIndex]} header='Anecdote with most votes' voteCount={votes[topAnecdoteIndex]}/>
    </div>
  )
}

export default App
