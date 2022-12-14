import styled from 'styled-components';

export const MainDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  margin-top: 4rem;
  gap: 2rem;
`

export const InfoDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
`

export const MusicList = styled.ul`
  list-style-type: none;
  display: flex; 
  margin-top: 2rem;
`