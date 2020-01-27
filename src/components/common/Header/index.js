
import React, { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Container

} from 'react-bootstrap';
import Style from './Style';
import { useDispatch,useSelector } from 'react-redux'
import actions from '../../../actions';
import _ from "lodash";
import { useHistory } from "react-router-dom";

function Header() {
    const dispatch = useDispatch()
    const [showOptions, handleSearchOptions] = useState(false);
    const [search,handleAutocomplete] = useState("");
    const autocomplete = useSelector(state => state.autocomplete);
    const { searchSuggestions =  []} = autocomplete;
    const delayedQuery = _.debounce(q => dispatch(actions.getAutocompleteResults(q)), 1000);

    const handleChange = e => {
      handleAutocomplete(e.target.value);
      delayedQuery(e.target.value);
    };

    let history = useHistory();

    const handleProducts = (item) => {
        history.push(`/products?product=${item}`)
    }

    return (
        <Style>
            <Container fluid className='header-section'>
                <Row>
                    <Col sm={12} md={2} lg={2}>
                        <img src={require('../../../assets/images/logo.png')} alt='logo'/>
                    </Col>
                    <Col sm={12} md={8} lg={8} className='position-relative'>
                        <Form.Control
                            type="text"
                            placeholder="What are you looking for?"
                            className='Form-control'
                            onFocus={() => handleSearchOptions(true)}
                            onBlur={(e) =>handleSearchOptions(false)}
                            value={search}
                            onChange={handleChange}
                        />
                        <i className="fal fa-search"></i>
                            {showOptions && <ul className='search-results'>{
                                searchSuggestions && searchSuggestions.length  ? 
                                    searchSuggestions.map((item,i)=> <li key={i} onMouseDown={() => handleProducts(item.title)}>
                                        <div className='d-flex justify-content-between align-items-center' >
                                            <div>
                                                <p>{item.title}</p> 
                                                    <div className='d-flex'>
                                                        <div>{item.originalPrice}</div>
                                                        <div className='ml-1'>{item.price}</div>
                                                    </div>
                                               
                                            </div>
                                            <div>
                                                <img src={item.imageUrl} alt='suggestions'/> 
                                            </div>
                                        </div>
                                    </li>)                                
                                : <li className='no-results'>NO RECENT SEARCHES YET...</li>
                            }
                            
                        </ul>}
                    </Col>
                </Row>
            </Container>
        </Style>
    )
}

export default Header;