import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
`

export const Container = styled.div`
  height: 250px;
  width: 400px;
  background-color: #02192b;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;

  h5 {
    color: #ffffff;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 50px;

    h2 {
      color: #ff9001;
    }

    img {
      border-radius: 50%;
      border: 1px solid #ffffff;
    }
  }

  .link {
    color: #1381f7;
    cursor: pointer;
  }

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: #ffffff;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`
