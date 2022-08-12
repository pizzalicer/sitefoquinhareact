import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${colors.primary};
    h1 {
        color: ${colors.white};
        font-weight: 800;
        margin-bottom: 2rem;
        font-size: 3rem;
    
    }
    form {
        background-color: ${colors.white};
        border: 0.2rem solid ${colors.secondary};
        border-radius: 1rem;
        padding: 1.5rem;
        div {
            background-color: ${colors.white};
            border: 0.15rem solid ${colors.secondary};
            border-radius: 0.6rem;
            display: flex;
            margin: 0.5rem 0;
            svg {
                height: 3rem;
                width: 3rem;
                padding: 0.3rem;
                color: ${colors.secondary};
            }
            input {
                width: 100%;
                font-size: 1rem;
                border: 0;
                background-color: transparent;
            }
        }
        p{
            margin-top: 1rem;
            a{
                text-decoration: none;
                color : ${colors.black};
                font-weight: bold;
            }
        }
    }
`