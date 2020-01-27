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
            height:90px;
            .card-title{
                font-size:16px;
                margin-bottom:0;
                font-weight:700;
            }
            .merchant-label{
                font-size: 13px;
                color: rgba(0,0,0,.4);
            }
    }
        .card-footer{
            background-color:#fff;
            span{
                font-size:13px;
                color:rgba(0,0,0,.4);
            }
        }
    &:hover{
        cursor: pointer;
        z-index: 5;
        background: #fff;
        border: none;
        -webkit-box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
        box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
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