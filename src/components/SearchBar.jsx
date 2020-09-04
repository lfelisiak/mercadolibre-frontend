import React,{useState} from "react"
import { useHistory } from 'react-router-dom'
import {InputGroup,FormControl,Button,Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props)=>{
    let history = useHistory();
    const [search,setSearch] = useState("");
    const handleChange = (value) => {
        console.log("HandleChange",value);
        setSearch(value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        redirect();
    }
    const redirect = () => {
        console.log("Redirect",search);
        if(search)
            history.push(`/items?search=${search}`,{search:search})
    } 
    return (
        <>
            <Form className="form-inline w-100" onSubmit={(e) => handleSubmit(e)}>
                <InputGroup className="mb-3 w-100">
                    <FormControl
                        placeholder="Nunca dejes de buscar..."
                        aria-label="search"
                        aria-describedby="searchbar"
                        onChange={(e) => { handleChange(e.target.value) }}
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
