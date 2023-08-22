import { AiOutlineClose } from 'react-icons/ai'

import * as C from './styles'

export function Modal({ myCourse, student, setShowModal }) {
  // console.log(student.picture.medium)
  return (
    <C.Overlay onClick={() => setShowModal(false)}>
      <C.Container>
        <button className="closeButton">
          <AiOutlineClose />
        </button>
        <div>
          <img src={student.picture.medium} />
          <h2>
            {student.name.first} {student.name.last}
          </h2>
        </div>
        <h5>Studing: {myCourse}</h5>
        <h5>
          Phone number: <a className="link"> {student.cell}</a>
        </h5>
        <h5>
          Email:{' '}
          <a className="link" href={`mailto:${student.email}`}>
            {student.email}
          </a>
        </h5>
        <h5>City: {student.location.city}</h5>
        <h5>State: {student.location.state}</h5>
      </C.Container>
    </C.Overlay>
  )
}
