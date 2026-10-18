import { Header2 } from './Header.jsx'

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

export default Course
