const Header1 = ({ text }) => {
  return (<h1>{text}</h1>)
}

const Header2 = ({ text }) => {
  console.log(text)
  return (<h2>{text}</h2>)
}

const Part = ( { item }) => {
  return (<p>{item.name} {item.exercises}</p>)
}

const Content = ({ items }) => {
  return (items.map(item => (
      <Part key={item.id} item={item}/>
  )))
}

const Total = ({ items }) => {
  return (
      <p>
        Number of exercises: {items.reduce((sum, item) => { return sum + item.exercises }, 0)}
      </p>
  )
}

const Course = ( { name, parts }) => {
  return (
    <div>
      <Header2 text={name}/>
      <Content items={parts}/>
      <Total items={parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header1 text='Web development curriculum'/>
      {courses.map((course) => <Course name={course.name} parts={course.parts} key={course.id}/>)}
    </div>
  )
}

export default App
