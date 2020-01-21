import React from 'react';
import styled from 'styled-components';


const HeaderWraper = styled.div`
.header-section{
    padding-top: 25px;
    padding-bottom: 25px;
    border-bottom:1px solid lightgray;
    img{
        width:110px;
    }
        .Form-control{
            border-radius:20px;
            padding: 21px;
            border: 1px solid rgba(34,36,38,.15);
        }
        i.fal.fa-search {
            position: absolute;
            top: 15px;
            right: 29px;
        }
    }
   
}
`

const Style = props => {

    const { children } = props || {};

    return (
        <HeaderWraper>
            {children}
        </HeaderWraper >
    )
};

export default Style;