import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfoBox = styled.section`
  display: flex;
  align-items: center;
  padding: 100px;
  border-bottom: 1px grey solid;
`;

export const InfoBox = styled.div`
  margin-left: 30px;
`;

export const BtnLink = styled(Link)`
  padding: 5px 10px;
  background-color: cyan;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 10px;
  &:hover {
    color: cadetblue;
    background-color: darkcyan;
  }
`;
