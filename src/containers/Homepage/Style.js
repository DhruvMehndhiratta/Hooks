import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.div`
img{
   width:450px;
   height:auto;   
   margin:150px auto; 
}
`

const Style = (props) => {
    const { children } = props || {};
    return (
        <HomepageWrapper>
            {children}
        </HomepageWrapper >
    )
}

export default Style;