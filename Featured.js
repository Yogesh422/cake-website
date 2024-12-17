import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img2 from '../assets/images/slide7.jpg';
import img3 from '../assets/images/slide16.jpg';
import img4 from '../assets/images/slide17.jpg';
import img5 from '../assets/images/slide19.jpg';

export default function AppFeatured() {
    return (
        <section id='featured' className='block featured-block'>
            <Container fluid>
                <div className='title'>
                    <h2 id="he1">Our Featured Cakes  ___</h2>
                </div>
                <p id="p4">Love at first bite..</p>
                <Row>
                    <Col sm={3}>
                        <Image className='mt-2' src={img2} />
                        <p id="p5">Cotton Candy</p>
                        <div className='text-center'>
                            <a id='butn' href="#" className="btn btn-info" role="button" data-bs-toggle="button">Add to cart</a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <Image className='mt-2' src={img3} />
                        <p id="p5">Strawberry Cupcake</p>
                        <div className='text-center'>
                            <a id='butn' href="#" className="btn btn-info" role="button" data-bs-toggle="button">Add to cart</a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <Image className='mt-2' src={img4} />
                        <p id="p5">Chocolate Brownie</p>
                        <div className='text-center'>
                            <a id='butn' href="#" className="btn btn-info" role="button" data-bs-toggle="button">Add to cart</a>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <Image className='mt-2' src={img5} />
                        <p id="p5">Cranberry Cupcakes</p>
                        <div className='text-center'>
                            <a id='butn' href="#" className="btn btn-info" role="button" data-bs-toggle="button">Add to cart</a>
                        </div>
                    </Col>
                </Row>    
            </Container>
        </section>            
    );
}
