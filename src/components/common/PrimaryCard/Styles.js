import React from 'react';
import styled from 'styled-components';

const CardWrapper =  styled.div`
.product-card{
    max-width:200px;
    margin: 10px 0px;
    img{
        display: block;
        width: 100%;
        height: auto;
        border-radius: inherit;
    }
    .card-body{
        .card-title{
            font-size:14px;
        }
    }
   
}


`

const Style = props => {

    const { children } = props || {};

    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
};

export default Style;