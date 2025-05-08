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

  const Header = ({ name }) => <h1>{name}</h1>

  const Part = ({ name, exercises }) => (
    <p>{name} {exercises}</p>
  )

  const Content = ({ parts }) => (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )

  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p><strong>Total number of exercises: {total}</strong></p>
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default App
