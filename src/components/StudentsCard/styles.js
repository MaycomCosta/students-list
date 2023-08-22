import styled from 'styled-components'

export const Container = styled.div`
  /* height: 100%; */
  width: 400px;

  background-color: #02192b;
  box-shadow: rgba(4, 98, 173, 0.39) 0px 5px 15px;
  transition: all 0.3s linear 0s;

  padding: 1rem;
  border: 1px solid;
  border-radius: 1rem;

  margin-bottom: 2rem;

  &:hover {
    box-shadow: rgb(4 98 173 / 75%) 0px 5px 15px;
  }

  h3 {
    color: #ff9001;
  }

  h4 {
    color: #ffffff;
    font-style: bold;
  }

  p {
    color: #f5f5f5;
    font-style: italic;
  }

  .buttonInfo {
    border: none;
    cursor: pointer;
    color: #ffffff;
    background-color: #ff9001;
    transition: all 0.3s linear 0s;
    height: 40px;
    width: 100px;
    border-radius: 5px;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .studentInfo {
    display: flex;
    flex-direction: column;
  }

  .button {
    display: flex;
    align-items: center;
  }
`
