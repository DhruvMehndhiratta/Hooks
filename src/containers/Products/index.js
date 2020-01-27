import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import qs from 'query-string';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {
    PrimaryCard,
    Filters
} from '../../components';
import Style from './Style';


export default function () {
    const dispatch = useDispatch()
    const results = useSelector(state => state.products);
    const { productsResults = {} } = results;
    const { hits = [], aggregations = {}, total = 0 } = productsResults;
    const { product = '' } = qs.parse(window.location.search);

    useEffect(() => {
        dispatch(actions.getSearchResults(product));
    },[])

    return (
        <Style>
            <Container className='products-container my-3'>
                <Col sm={12} lg={12}>
                    <Row>
                        <Col sm={3} md={3} lg={3}>
                            <div className='results-info'>
                                <span>{`${total} items`}</span>
                            </div>

                        </Col>
                        <Col sm={9} md={9} lg={9}>
                            <div className='results-info'> 
                                <span>{product}</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12}>
                    <Row>
                        <Col sm={12} md={3} lg={3} xs={12} className="border-required">
                            <Filters aggregations={aggregations} />
                        </Col>
                        <Col sm={12} md={9} lg={9} xs={12}>
                            <Row className="mx-0">
                                {
                                    hits && hits.length ? hits.map((item, i) => {
                                        return (

                                            <Col sm={6} md={4} lg={4} xs={6} key={i}>
                                                <PrimaryCard item={item} />
                                            </Col>
                                        )
                                    }) : null
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </Style>
    )
}