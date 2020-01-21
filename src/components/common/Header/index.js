
import React from 'react';
import {
    Row,
    Col,
    Form,
    Container

} from 'react-bootstrap';
import Style from './Style';

function Header() {

    return (
        <Style>

            <Container fluid className='header-section'>
                <Row>
                    <Col sm={12} md={2} lg={2}>
                        <img src={require('../../../assets/images/logo.png')} />
                    </Col>
                    <Col sm={12} md={8} lg={8} className='position-relative'>
                        <Form.Control type="text" placeholder="What are you looking for?" className='Form-control'>
                        </Form.Control>
                        <i className="fal fa-search"></i>
                    </Col>

                </Row>
            </Container>
        </Style>
    )
}

export default Header;