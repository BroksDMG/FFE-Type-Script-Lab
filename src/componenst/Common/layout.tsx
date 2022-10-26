import {FC} from 'react';
import styled from 'styled-components';
import {Nav} from './nav';

const Wrapper = styled.div`
    width:100%;
`;

const Content = styled.div`
    width:1024px;
    height:100%;
    margin:0 auto;
    padding:0 1rem;
`;


interface IProps{
    children:JSX.Element;
}

export const Layout: FC<IProps>= props =>{
    return(
        <Wrapper>
           
                    <Content>
                        {props.children}
                    </Content>
        </Wrapper>
    )
}