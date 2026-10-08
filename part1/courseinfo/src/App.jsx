const Header = (props) => {
  console.log(props.course)
  return (<h1>{props.course}</h1>)
}

const Content = ({ items }) => {
  return (items.map(item => (
      <p key={item.part}>{item.part} {item.exercise}</p>
  )))
}

const Total = ({ items }) => {
  return (
      <p>
        Number of exercises: {items.reduce((sum, item) => { return sum + item.exercise }, 0)}
      </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part:'Fundamentals of React', exercise: 10},
    {part:'Using props to pass data', exercise: 7},
    {part:'State of a component', exercise: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content items={content}/>
      <Total items={content}/>
    </div>
  )
}

export default App
