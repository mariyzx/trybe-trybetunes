import styled from 'styled-components'

export const MainForm = styled.form `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  input {
    line-height: 25px;
    border: 2px solid transparent;
    border-bottom-color: #b4e564;
    padding: .2rem 0;
    outline: none;
    background-color: transparent;
    color: #b4e564;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  input:focus, input:hover {
    outline: none;
    padding: .2rem 1rem;
    border-radius: 1rem;
    border-color: #94dc34;
  }

  input::placeholder {
    color: #94dc34;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
  }

`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

`