import { Link } from 'react-router-dom' 
import { Row, Col , Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Products from '../products'
import { useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { listProductsDetails } from '../actions/productActions' 
import { productDetailsReducer } from '../reducers/productReducers'


const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector( state => state.productDetails)
    const { loading, error, product } = productDetails
   useEffect(
       () => {
        dispatch(listProductsDetails(match.params.id))   
       },[dispatch, match]
   )
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    return (
        <div>
            <Link className="btn btn-dark my-3" to='/'> Go Back</Link>
            {
                loading ? (<Loader />) : error ? (<Message variant='danger'>{ error }</Message>) : (
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

                                { product.countInstock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control  as='select' value={qty} onChange={ e => setQty(e.target.value)}>
                                                    {
                                                    [...Array(product.countInstock).keys()].map( x => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {X + 1}
                                                        </option>
                                                    ) )
                                                    }       
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button 
                                    onClick={addToCartHandler} 
                                    className="btn-block" type='button' disabled={product.countInstock === 0} >Add To Cart</Button>
                                </ListGroup.Item>
                        </Card>
                    </Col>
                </Row>
                )
            }
            
        </div>
    )

}


export default ProductScreen;