import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.palette.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;

  h1 {
    margin: 0;
    color: white;
  }

  a {
    color: ${(props) => props.theme.palette.primary.main};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  li > a:active {
    color: ${(props) => props.theme.palette.success.light};
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      list-style: none;

      li {
        margin-left: 1rem;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    a {
      color: ${(props) => props.theme.palette.secondary.main};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-top: 1rem;

    h1 {
      margin-bottom: 1rem;
    }

    ul {
      padding: 0;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchInput = styled.input`
  width: 250px;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
`;

export const SearchList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  z-index: 2;
`;

export const SearchListItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid grey;

  &:last-child {
    border-bottom: none;
  }
`;
