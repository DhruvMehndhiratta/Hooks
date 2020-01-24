import React from 'react';
import {
    Card
} from 'react-bootstrap';

// needs style wrapper
export default function (props) {
    const { item = {} } = props;
    return (
        <Card className='product-card'>
            <Card.Img variant="top" src={item && item.imageUrl} alt='noImage' />
            <Card.Body>
                <Card.Title>{item && item.title || ""}</Card.Title>
                <p>{item && item.merchant || ""}</p>
            </Card.Body>
            <Card.Footer>
                <p>{item && item.floatOriginalPrice || ""}</p>
            </Card.Footer>
        </Card>
    )

}