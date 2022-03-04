import styled from "styled-components";

export const UnorderedList = styled.ul`
  list-style: none;
  text-align: left;
  width: 100%;
  height: 0;
  opacity: 0;
  pointer-events: none;
  transition: all .2s ease-in-out;
  margin: 0 auto;
  background:#005f73;
  color:white;
  & ul {
    background:#0a9396;
  }
  ${(props) =>
    props.isHidden
      ? ""
      : `height:100%; 
    opacity:1;
    transition: all .2s ease-in-out;
    pointer-events:auto;
    cursor:pointer; 
   
    `}


`;

export const Li = styled.li`
  text-align: left;
  border: 1px solid black;
`;

export const Link = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem;
`;

export const Plus = styled.span`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
`;

export const MenuContainer = styled.div`
  width: 50%;
  margin: 2rem auto;
`;
