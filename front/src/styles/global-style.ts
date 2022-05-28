import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    * {
        margin: 0;
    }
    
    li {
        list-style: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
`;
