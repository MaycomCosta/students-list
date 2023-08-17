import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #ff9001;
    margin-top: 10rem;
    margin-bottom: 5rem;
  }

  .loadingAndError {
    color: #ffffff;
    font-size: 40px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: #ff9001;
    margin-top: 10rem;
  }
`
