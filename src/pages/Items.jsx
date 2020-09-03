import React,{useState,useEffect} from "react";
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Breadcrumb, Card } from "react-bootstrap";

const Items = (props) =>{

    const [items,setItems] = useState([]);
    const [categories,setCategories] = useState([]);

    const fetchData = async ()=>{
        const apiResponse = {
            "author": {
                "name": "Luciano",
                "lastname": "Felisiak"
            },
            "categories": [
                "Electrodomésticos y Aires Ac.",
                "Lavado",
                "Lavarropas y Lavasecarropas"
            ],
            "items": [
                {
                    "id": "MLA836880778",
                    "title": "Lavarropas Semiautomático Drean Family 096 A Blanco 5.5kg 220v",
                    "price": {
                        "currency": "ARS",
                        "amount": 16399,
                        "decimals": 0
                    },
                    "picture": "http://http2.mlstatic.com/D_787063-MLA32483664259_102019-I.jpg",
                    "condition": "new",
                    "free_shipping": false
                },
                {
                    "id": "MLA820984457",
                    "title": "Lavarropas Automático Drean Concept 5.05 Blanco 5kg 220v",
                    "price": {
                        "currency": "ARS",
                        "amount": 24990,
                        "decimals": 0
                    },
                    "picture": "http://http2.mlstatic.com/D_931523-MLA32483555407_102019-I.jpg",
                    "condition": "new",
                    "free_shipping": false
                },
                {
                    "id": "MLA820557938",
                    "title": "Lavarropas Automático Drean Next 6.06 Blanco 6kg 220v",
                    "price": {
                        "currency": "ARS",
                        "amount": 35999.9,
                        "decimals": 1
                    },
                    "picture": "http://http2.mlstatic.com/D_815697-MLA41764395937_052020-I.jpg",
                    "condition": "new",
                    "free_shipping": false
                },
                {
                    "id": "MLA853923178",
                    "title": "Lavarropas Automático Samsung Ww90j5410g Digital Inverter Plata 9kg 220v",
                    "price": {
                        "currency": "ARS",
                        "amount": 61899,
                        "decimals": 0
                    },
                    "picture": "http://http2.mlstatic.com/D_826613-MLA32542580234_102019-I.jpg",
                    "condition": "new",
                    "free_shipping": false
                }
            ]
        };
        return Promise.resolve(apiResponse);
    }
    useEffect(()=>{
        fetchData().then(res=>{
            setItems(res.items)
            setCategories(res.categories)
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
    
    return (
        <>
            <Content>
                <Breadcrumb>
                {
                    categories.map(category => (
                        <Breadcrumb.Item>{category}</Breadcrumb.Item>
                    ))
                }                
                </Breadcrumb>
                <Card>
                {
                    items.map(item => (
                        <div>
                            <p>{item.title}</p>
                            <p>{item.price.amount}</p>
                        </div>
                    ))
                }
                </Card>
            </Content>
        </>
    )
};

export default Items;