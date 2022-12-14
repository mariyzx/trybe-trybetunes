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
  margin-bottom: 3rem;

`

export const MusicList = styled.ul`
  list-style-type: none;
  display: flex; 
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

export const CardMusic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  label > input {
    display: none;
  }

  img {
    margin-top: 1rem;
  }
`