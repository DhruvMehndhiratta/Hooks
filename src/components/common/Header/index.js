
import React, { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Container

} from 'react-bootstrap';
import Style from './Style';

function Header() {
    const [showOptions, handleSearchOptions] = useState(false);
    console.log(showOptions , "show")
    
    return (
        <Style>
            <Container fluid className='header-section'>
                <Row>
                    <Col sm={12} md={2} lg={2}>
                        <img src={require('../../../assets/images/logo.png')} />
                    </Col>
                    <Col sm={12} md={8} lg={8} className='position-relative'>
                        <Form.Control
                            type="text"
                            placeholder="What are you looking for?"
                            className='Form-control'
                            onFocus={() => handleSearchOptions(true)}
                            onBlur={() => handleSearchOptions(false)}
                        />
                        <i className="fal fa-search"></i>
                      {showOptions &&  <ul className='search-results'>
                            <span className='no-results'>NO RECENT SEARCHES YET...</span>
                        </ul>}
                    </Col>

                </Row>
            </Container>
        </Style>
    )
}

export default Header;