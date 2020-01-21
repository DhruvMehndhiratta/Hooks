import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.div`

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