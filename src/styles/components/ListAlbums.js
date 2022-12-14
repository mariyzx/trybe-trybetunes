import styled from 'styled-components';

export const MainAlbums = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`

export const DivAlbums = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 3rem;

  div {
    background-color: #035f49;
    border: 2px solid transparent;
    border-radius: 13px;
    min-height: 300px;
    width: 20%;
    overflow: hidden;
    flex-wrap: wrap;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    a {
      color:  #27c083;
    }
  }

  @media (max-width:  890px) {
    width: 100%;

    div {
      width: 40%;
    }
  }

  @media (max-width: 495px) {
    div {
      width: 60%
    }
  }
`