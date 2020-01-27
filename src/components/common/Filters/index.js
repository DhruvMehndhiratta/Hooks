import React from 'react';
import Style from './Style';
import {
    Accordion,
    Button,
} from 'react-bootstrap';

const Filters = (props) => {
    const { aggregations = {} } = props;
    const filteredResults = Object.keys(aggregations).filter((item, index) => aggregations[item] && aggregations[item].buckets && aggregations[item].buckets.length).map((val) => { return { label: val, ...aggregations[val] } })

    return (
        <Style>
            <div className='filters'>
                <h6>Filter up search results</h6>
                <ul>
                    <Accordion>
                        {
                            filteredResults && filteredResults.length ? filteredResults.map((item, index) => {
                                const { buckets = [] } = item;
                                return <li key={index}>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={`${index}`} className='accordian-list-item'>
                                        <span className='filter-label'>{item.label} <i className="fas fa-chevron-right"></i></span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={`${index}`} className="panel panel-default">
                                        <ul className='filters-select'>
                                            {
                                                buckets && buckets.length ? buckets.map((val, i) => <li key={i} className='filter'>
                                                    <input
                                                        type={"checkbox"}

                                                    />
                                                    <label>{val.key}<span>{`(${val.doc_count})`}</span></label>

                                                </li>) : null
                                            }
                                        </ul>
                                    </Accordion.Collapse>
                                </li>
                            }) : null
                        }
                    </Accordion>
                </ul>
            </div>
        </Style>
    );
};

export default Filters;