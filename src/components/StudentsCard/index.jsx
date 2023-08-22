import { useEffect, useState } from 'react'

import { Modal } from '../'
import courses from '../../data/data'
import * as C from './styles'

export function StudentsCard({ student }) {
  const [showModal, setShowModal] = useState(false)
  const [myCourse, setMyCourse] = useState(false)

  useEffect(() => {
    function generateRandomCourse() {
      const randomIndex = Math.floor(Math.random() * courses.length)
      return setMyCourse(courses[randomIndex])
    }
    generateRandomCourse()
  }, [])

  return (
    <>
      <C.Container>
        {showModal && (
          <Modal
            myCourse={myCourse}
            student={student}
            setShowModal={setShowModal}
          />
        )}
        <C.Content>
          <div className="studentInfo">
            <h3>{`${student.name.first} ${student.name.last}`}</h3>
            <h4>Course: {myCourse}</h4>
            <p>Age: {student.dob.age}</p>
            <p>Country: {student.location.country}</p>
          </div>

          <div className="button">
            <button
              onClick={() => setShowModal(true)}
              style={{ width: '100px' }}
              className="buttonInfo"
            >
              More info
            </button>
          </div>
        </C.Content>
      </C.Container>
    </>
  )
}
