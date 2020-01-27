import React from 'react';
import styled from 'styled-components'

const FiltersWrapper =  styled.div`
.filters{
    ul{
        padding:0;
        li{
            .accordian-list-item{
               width:100%;
               color: rgba(0,0,0,.87);
               padding:0;
                &:hover,&:focus{
                    text-decoration: none !important;
                } 
            }
            list-style:none;
            cursor:pointer;
            border: 1px solid rgba(34,36,38,.15);
            padding:10px;
            border-bottom:none;
            &:first-child{
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            &:last-child{
                border-bottom-left-radius: 5px;
                border-bottom: 1px solid rgba(34,36,38,.15);
                border-bottom-right-radius: 5px;
            }
            .filter-label{
                display:flex;
                justify-content:space-between;
                align-items:center;
                font-size:12px;
            }
            .filters-select{
                margin-top:5px;
                .filter{
                    display:flex;
                    align-items:center;
                    border:none;
                    padding:5px;
                    label{
                        width:100%;
                        font-size:12px;
                        margin-bottom:0;
                        padding-left:10px;
                        span{
                            color: darkgray;
                            float:right;
                                                
                        }
                    }
                }
            }
        }
    }
}
`

const Style = (props) => {
    const { children } = props || {};
    return(
        <FiltersWrapper>
            {children}
        </FiltersWrapper>
    )
}

export default Style