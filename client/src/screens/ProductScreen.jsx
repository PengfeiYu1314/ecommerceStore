import { Link } from 'react-router-dom' 
import { Row, Col , Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Products from '../products'
import {useState, useEffect} from 'react'
import axios from 'axios'

const ProductScreen = ({match}) => {
   const [product, setProduct] = useState({})

   useEffect(
       () => {
           const fetchProduct = async() => {
           const {data} = await axios.get(`/api/products/${match.params.id}`)
           setProduct(data)
       }
       fetchProduct()
       }
        ,[match]
   )

    return (
        <div>
            <Link className="btn btn-dark my-3" to='/'> Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={produclt.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card variant='flush'>
                        <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        status:
                                    </Col>
                                    <Col>
                                        {product.countInstock > 0 ? 'In stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type='button' disabled={product.countInstock === 0} >Add To Cart</Button>
                            </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}


export default ProductScreen;