import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to ={'/product/${product._id}'}>
                <Card.Img   src={Product.img} variant='top' /> 
            </Link>
            <Card.Body>
                <Link to={'/product/${product._id}'}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link> 
                <Card.text as='div'>
                    <Rating  value={product.rating} text={`${product.Reviews} reviews`}/>
                </Card.text>
                <Card.text as="h3">
                    ${product.price}
                </Card.text>
            </Card.Body>
        </Card>
    )
}