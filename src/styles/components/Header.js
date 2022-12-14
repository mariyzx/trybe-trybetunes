import styled from 'styled-components';

export const MainHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #27c083;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  nav > a {
    text-decoration: none;
    color: #f2f2f2;
  }

  nav > a:hover {
    text-decoration:underline;
    text-decoration-color: #ddd;
  }


  @media (max-width: 400px) {
    height: 8%;

    nav, h3 {
      padding: 1rem;
    }
  }
`