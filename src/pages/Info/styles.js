import styled from 'styled-components'

export const SectionCenter = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 8rem;

  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgb(4 98 173 / 39%);
  transition: all 0.3s linear;
  padding: 2rem;

  h1 {
    color: hsl(205, 86%, 17%);
    margin-bottom: 1.5rem;
    text-align: center;
    margin-top: 0;
    font-size: 4rem;
    text-transform: capitalize;
  }

  p {
    font-size: 20px;
    margin-bottom: 1.25rem;
    color: rgb(97, 125, 152);
    line-height: 1.5;
  }

  a {
    color: #ff9d00;
    text-decoration: none;

    :hover {
      color: #ff7c03;
    }
  }

  div {
    display: flex;
    justify-content: flex-end;

    button {
      background: #ff9d00;
      color: #ffffff;
      border-color: transparent;
      flex: 0 0 5rem;
      display: grid;
      align-items: center;
      padding: 0.25rem;
      text-transform: capitalize;
      letter-spacing: 2px;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: all 0.3s linear;
      font-size: 0.85rem;

      :hover {
        background: #ff7c03;
      }
    }
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`
// export const Container = styled.div`

// `
