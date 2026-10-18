const Header = (props) => {
  console.log(props)
  return (<h1>{props.course}</h1>)
}

const Part = ( { item }) => {
  return (<p>{item.name} {item.exercises}</p>)
}

const Content = ({ items }) => {
  return (items.map(item => (
      <Part key={item.name} item={item}/>
  )))
}

const Total = ({ items }) => {
  return (
      <p>
        Number of exercises: {items.reduce((sum, item) => { return sum + item.exercises }, 0)}
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
      <Content items={course.parts}/>
      <Total items={course.parts}/>
    </div>
  )
}

export default App
