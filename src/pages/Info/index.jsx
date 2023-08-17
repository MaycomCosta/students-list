import React from 'react'
import { useHistory } from 'react-router-dom'

import * as C from './styles.js'

export function Info() {
  const history = useHistory()

  function handleBackPageClick() {
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }

  return (
    <C.SectionCenter>
      <h1>Hi, all good?</h1>
      <p>
        Welcome to my portfolio, where I showcase a collection of my diverse
        projects as a developer. Each project stands out with its own unique
        characteristics and innovative ideas, demonstrating my versatility and
        creativity in tackling various challenges.
      </p>

      <p>
        Also you can follow me on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/maycomcosta/"
        >
          Linkedin
        </a>
        ,
        <a
          href="https://github.com/MaycomCosta"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Github
        </a>{' '}
        and on
        <a
          href="https://twitter.com/DamnDolar"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Twitter
        </a>
      </p>
      <div>
        <button onClick={handleBackPageClick}>Back</button>
      </div>
    </C.SectionCenter>
  )
}
