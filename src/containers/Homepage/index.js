import React from 'react';
import {
    Container
} from 'react-bootstrap'
import Style from './Style'
 export default function(){
     return(
         <Style>
            <Container className='d-flex'> 
                <img src={require("../../assets/images/banner.png")} alt='banner'/>
            </Container>
         </Style>
     )
 }
