import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #ff9001;
    margin-top: 10rem;
    margin-bottom: 5rem;
    font-size: 50px;
  }

  .loadingAndError {
    color: #ffffff;
    font-size: 40px;
  }
`

export const Content = styled.div`
  background-color: #0d1c26;
  padding: 1rem 1rem 0 1rem;
  border-radius: 10px;
  box-shadow: rgb(4 75 131 / 39%) 0px 5px 15px;
  transition: all 0.3s linear 0s;
  margin-bottom: 2rem;

  display: ${(props) => (props.isLoading || props.isError ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: rgb(4 98 173 / 75%) 0px 5px 15px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #ff9001;
  transition: all 0.3s linear 0s;
  height: 50px;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.7;
  }
`
