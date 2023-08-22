import { useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'

import { StudentsCard } from '../'
import * as C from './styles.js'
const URL = 'https://randomuser.me/api/'

async function getStudents({ pageParam }) {
  return await fetch(`${URL}?page=${pageParam}&results=5`).then((res) =>
    res.json()
  )
}

export function StudentsList() {
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    'students-list',
    ({ pageParam = 1 }) => getStudents({ pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.results.length ? allPages.length + 1 : undefined
      }
    }
  )

  const items = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      // console.log(acc, page.results)
      return [...acc, ...page.results]
    }, [])
  }, [data])

  return (
    <C.Container>
      <h1>Students List</h1>
      {isLoading && <h3 className="loadingAndError">Carregando...</h3>}
      {isError && (
        <h3 className="loadingAndError">Ocorreu algum problema :(</h3>
      )}
      <C.Content isLoading={isLoading} isError={isError}>
        {items &&
          items.map((student) => (
            <StudentsCard key={student.login.uuid} student={student} />
          ))}
      </C.Content>
      {hasNextPage && (
        <C.Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Carregando...' : 'Carregar Mais'}
        </C.Button>
      )}
    </C.Container>
  )
}
