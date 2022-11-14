import styled from "styled-components";

export const StyledFav = styled.div`
flex: 1;
width: 100%;
padding: 16px;
overflow: hidden;
section {
    padding: 16px;
}

h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

section>div {
    display: flex;
    gap: 8px;
}

.fav-cards>a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
}

a img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

`