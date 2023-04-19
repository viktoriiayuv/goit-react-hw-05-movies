import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin-left: 12px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 2px solid black;
  padding: 8px;
  font-size: 20px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #c02b51;
    border-color: #c02b51;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  box-shadow: 0px 2px 5px #706f6f;
  img {
    max-width: 350px;
  }
`;

export const MovieInfo = styled.div`
  padding: 12px;
  margin-bottom: 28px;

  h1,
  h2,
  h3 {
    margin: 0;
  }

  p {
    font-size: 18px;
  }
`;

export const AddInfoContainer = styled.div`
  padding: 12px;
  box-shadow: 0px 2px 5px #706f6f;

  p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  li {
    padding: 4px 0;
  }
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;

  &:hover,
  &:focus,
  &:active {
    color: #c02b51;
  }
`;
