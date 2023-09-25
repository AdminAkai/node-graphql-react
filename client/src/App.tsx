import './App.css'
import { useQuery } from '@apollo/client'
import { getStudents } from './graphql/queries/student.queries'

function App() {
  const { data, error } = useQuery(getStudents)

  console.log(data)
  console.log(error)

  return (
    <>
    test
    </>
  )
}

export default App
