// import { useState } from 'react'
import { useQuery } from 'react-query'

import { StudentsCard } from '../'
import { api } from '../../api/api'
import * as C from './styles.js'

export function StudentsList() {
  const { data, isError, isLoading } = useQuery(
    'students-list',
    api.getStudents
  )

  // console.log(data)

  // const [displayedStudents, setDisplayedStudents] = useState(5)

  // const loadMoreStudents = () => {
  //   setDisplayedStudents(displayedStudents + 5)
  // }
  return (
    <C.Container>
      <h1>Students List</h1>
      {isLoading && <h3 className="loadingAndError">Carregando...</h3>}
      {isError && (
        <h3 className="loadingAndError">Ocorreu algum problema :(</h3>
      )}
      {data &&
        data
          // .slice(0, displayedStudents)
          .map((student) => (
            <StudentsCard key={student.login.uuid} student={student} />
          ))}
      {/* <button onClick={loadMoreStudents}>Carregar mais</button> */}
    </C.Container>
  )
}
