import React from 'react';
import styled from 'styled-components';

const ProductsWrapper = styled.div`
.products-container{
    .results-info{
        padding:10px;
        border-bottom: 1px solid rgb(211, 211, 211);
        margin-bottom:15px;
            span{
                font-size:13px;
                font-weight:500;
            }
    }
    .border-required{
        border-right: 1px solid rgb(211, 211, 211); 
    }
}
`

const Style = (props) => {
    const { children } = props || {};
    return(
        <ProductsWrapper>
            {children}
        </ProductsWrapper>
    )
}

export default Style