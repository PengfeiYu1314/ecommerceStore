import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import {useState, useEffect} from 'react'
import axios from "axios";


const HomeScreen = () => {
    const [products, SetProducts] = useState([])

    const fetchProducts = async() => {
        const { data } = await axios.get('./api/products');
        SetProducts(data)
    }

    useEffect(
        () => {
          fetchProducts()
        }, []
    )

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {Products.map(product => {
                    <Col key={product._id} sm={12} md={6} lg={4} xlg={3}>
                        <Product product={product} />
                    </Col>
                })}

            </Row>


        </>
    )
}