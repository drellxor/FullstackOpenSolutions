const Header = (props) => {
  console.log(props.course)
  return (<h1>{props.course}</h1>)
}

const Part = ( { item }) => {
  return (<p>{item.part} {item.exercise}</p>)
}

const Content = ({ items }) => {
  return (items.map(item => (
      <Part key={item.part} item={item}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content items={course.content}/>
      <Total items={course.content}/>
    </div>
  )
}

export default App
