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
            &:focus{
                border-color: #85b7d9;
                box-shadow: none;
            }
        }
        i.fal.fa-search {
            position: absolute;
            top: 15px;
            right: 29px;
        }
    }
    .search-results{
        position: absolute;
        top: 100%;
        left: 13px;
        z-index: 200;
        background-color: white;
        width: calc(100% - 26px);
        border: 1px solid rgb(211, 211, 211);
        margin-top:10px;
        border-radius: 10px;
        padding:0;
            li{
                list-style: none;
                padding: 10px;
                cursor: pointer;
                display: block;
                overflow: hidden;
                font-size: 1em;
                padding: .85714286em 1.14285714em;
                color: rgba(0,0,0,.87);
                line-height: 1.33;
               
                z-index: 99999;
                border-bottom: 1px solid rgba(34,36,38,.1);
                    &:last-child{
                        border-bottom:none;
                    }
                    img{
                        width: 4em;
                        height: auto;
                    }
                    &:hover{
                         background: #f9fafb;
                    }
            }
        .no-results{
            padding:20px 0px 20px 10px;
            color:gray;
            font-size:14px;
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