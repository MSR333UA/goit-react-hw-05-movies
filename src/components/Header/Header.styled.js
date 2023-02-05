import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  color: black;
  text-decoration: none;

  width: 100%;
  height: 60px;
  border-bottom: 1px cyan solid;
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  padding: 5px 10px;

  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  border: 1px solid orange;
  &:hover {
    background-color: cyan;
  }
  color: orange;
  text-decoration: none;

  &.active {
    border: 1px solid cyan;
    color: darkcyan;
    background-color: cyan;
  }
`;
