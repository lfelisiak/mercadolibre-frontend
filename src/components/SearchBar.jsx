import React,{useState} from "react"
import { useHistory } from 'react-router-dom'
import {InputGroup,FormControl,Button,Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props)=>{
    let history = useHistory();
    const [search,setSearch] = useState("");
    const redirect = () => {
        if(search)
            history.push('/about?search='+search)
    } 
    return (
        <>
            <Form className="form-inline w-100">
                <InputGroup className="mb-3 w-100">
                    <FormControl
                        placeholder="Nunca dejes de buscar..."
                        aria-label="search"
                        aria-describedby="searchbar"
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <InputGroup.Append>
                        <Button variant="light" onClick={()=>{redirect()}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </>
    )
};

export default SearchBar;
