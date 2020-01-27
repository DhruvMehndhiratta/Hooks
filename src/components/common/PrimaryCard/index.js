import React from 'react';
import {
    Card
} from 'react-bootstrap';
import Style from './Styles'

// needs style wrapper
export default function (props) {
    const { item = {} } = props;
    return (
        <Style>
        <Card className='product-card'>
            <Card.Img variant="top" src={(item && item.imageUrl)} alt='noImage' />
            <Card.Body>
                <Card.Title>{(item && item.title) || ""}</Card.Title>
                <div className="meta">
                    <span className='merchant-label'>{(item && item.merchant) || ""}</span>
                </div>
            </Card.Body>
            <Card.Footer>
                <span><i className="fas fa-money-bill-alt"></i> {(item && item.price) || ""}</span>
            </Card.Footer>
        </Card>
        </Style>
    )

}

