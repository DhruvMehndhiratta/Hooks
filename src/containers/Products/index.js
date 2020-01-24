import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import qs from 'query-string';
import actions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {
    PrimaryCard
} from '../../components';


export default function () {
    const dispatch = useDispatch()
    const results = useSelector(state => state.products);
    const { productsResults = {} } = results;
    const { hits = [] } = productsResults;
    console.log(productsResults, "productsResults")

    useEffect(() => {
        const { product = '' } = qs.parse(window.location.search);
        dispatch(actions.getSearchResults(product));
    }, [])

    return (
        <Container className='my-3'>
            <Col sm={12} md={12}>
                <Row>
                    <Col sm={3} md={3} lg={3}>
                        Filters
                </Col>
                    <Col sm={9} md={9} lg={9}>
                        <Row>
                        {
                            hits && hits.length  ? hits.map((item,i)=> {
                                return(
                                   
                                    <Col sm={4} md={4} lg={4} key={i}>
                                        <PrimaryCard item={item}/>
                                    </Col>
                                )
                            }) : null
                        }
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}