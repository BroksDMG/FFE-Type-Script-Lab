import { FC } from "react";
import { Link } from "react-router-dom";
import styled ,{css} from "styled-components";
import { colorStack } from "../style/colorStack";
import { SomeSpan } from "./Components";


const Wrapper = styled.div`
    <border:10px solid ${colorStack.black}
`

const SecondSpan = styled(SomeSpan)`
    border:3px solid yellow;
`

const ExampleDiv = styled.div<{isActive:boolean}>`
    bacground:yellow;
    ${props=>props.isActive&&css`
        bacground:blue;`}
`;

const NewLink= styled(Link)`

`;

export const TopMenu:FC=()=>{
    return(
        <Wrapper>
        <SecondSpan> Jakiuś tam tekst</SecondSpan>
        <ExampleDiv isActive>Jakis div</ExampleDiv>
        <ExampleDiv isActive={false}>Jakis div</ExampleDiv>
        <Link to="posts">Posts</Link>
        <Link to="/">Posts</Link>

        </Wrapper>
    )
}