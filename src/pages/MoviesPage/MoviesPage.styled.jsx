import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 28px;

  p {
    font-size: 18px;
  }
`;

export const SearchForm = styled.form`
  input {
    width: 250px;
    padding: 4px;
    font-size: 18px;
    outline: none;
    border: 1px solid black;

    &:focus {
      border-color: #706f6f;
    }
  }

  button {
    width: 75px;
    padding: 4px;
    font-size: 18px;
    font-weight: 600;
    border: 1px solid black;
    cursor: pointer;

    &:focus,
    &:hover {
      border-color: #c02b51;
      color: #c02b51;
    }
  }
`;
