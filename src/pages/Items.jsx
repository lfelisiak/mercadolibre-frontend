import React,{useState,useEffect} from "react";
import { withRouter,useHistory } from 'react-router-dom';
import Content from '../components/Content';
import Item from '../components/Item/Item';
import Breadcrumb from '../components/Breadcrumb';
import { Card } from "react-bootstrap";
import MeliService from "../services/MeliService";

const Items = (props) =>{

    const [items,setItems] = useState([]);
    const [categories,setCategories] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        let urlParam = new URLSearchParams(props.location.search).get(
            "search"
        );
        console.debug(urlParam);
        const service = new MeliService();
        const fetchData = async ()=>{
            const apiResponse = await service.getItems(urlParam);
            return apiResponse;
        }
        (async function(){
            try{
                const res = (await fetchData()).data;
                setItems(res.items);
                setCategories(res.categories);
            }catch(error){
                history.push('error');
            }
        })();
    },[props.location.search]);
    
    return (
        <>
            <Breadcrumb items={categories}></Breadcrumb>
            <div className="itemsContainer">
            {
                items && items.map(item => (
                    <Item key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        picture={item.picture}
                        address={item.address}
                        free_shipping={item.free_shipping}
                    />
                ))
            }
            </div>
        </>
    )
}

export default withRouter(Items);