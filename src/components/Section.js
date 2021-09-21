import React from 'react';
import styled  from 'styled-components';
import Header from './Header';

function Section() {
    return (
        <Wrap>
            <Header />
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover !important;
    background-position: center;
    background: url('./images/model-s.jpg');
`
