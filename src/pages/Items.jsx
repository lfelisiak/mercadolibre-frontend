import React,{useState,useEffect} from "react";
import { withRouter } from 'react-router-dom';
import Content from '../components/Content';
import Item from '../components/Item/Item';
import { Breadcrumb, Card } from "react-bootstrap";
import MeliService from "../services/MeliService";

const Items = (props) =>{

    const [items,setItems] = useState([]);
    const [categories,setCategories] = useState([]);
        
    useEffect(()=>{
        const service = new MeliService();
        const fetchData = async ()=>{
            const apiResponse1 = await service.getItems(props.location.state.search);
            console.log("Response1",apiResponse1);
            return apiResponse1;
        }
        (async function(){
            const res = (await fetchData()).data;
            console.log(res);
            setItems(res.items);
            setCategories(res.categories);
        })();
    },[props.location.state.search]);
    
    return (
        <>
            <Content>
                <Breadcrumb>
                {
                     categories && categories.map(category => (
                        <Breadcrumb.Item>{category}</Breadcrumb.Item>
                    ))
                }                
                </Breadcrumb>
                {
                    items && items.map(item => (
                        <Item key={item.id}
                            title={item.title}
                            price={item.price}
                            picture={item.picture}
                            address={item.address}
                            free_shipping={item.free_shipping}
                        />
                    ))
                }
            </Content>
        </>
    )
}

export default withRouter(Items);