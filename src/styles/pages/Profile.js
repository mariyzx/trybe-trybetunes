import styled from 'styled-components';

export const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  a {
    color: #27c083;
    font-weight: bold;
  }

  img {
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 30px;
  }
`

export const MainEdit = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
  }

  label {
    width: 100%;
  }

  label > input {
    width: 100%;
  }
`