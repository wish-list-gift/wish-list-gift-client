import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import firstSlide from './images/presents.jpg'
import giftIcon from './images/giftIcon.png'
import starsIcon from './images/starsIcon.png'
import listIcon from './images/listIcon.png'


const Home = () => {
    return (
        <>
            <div className='container '>
                <div className="row no-gutters d-flex justify-content-center" >
                    <div className="col-sm-10">
                        <Carousel >
                            <Carousel.Item>
                                <img className=" w-100"
                                    src={firstSlide}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h1>Wish it, List it, Gift it!</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" w-100"
                                    src={firstSlide}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" w-100"
                                    src={firstSlide}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-sm-4 cardhome d-flex justify-content-center">
                        <div className="cardHome" >
                            <img className="card-img-top img-fluid" src={starsIcon} alt="Wish Icon" />
                            <h3 className="card-title">Wish It</h3>
                            <hr/>
                            <p className="card-text">Got a wish? Have all your wishes come true by creating a profile full of all your hearts desires!</p>

                        </div>
                    </div>
                    <div className="col-sm-4  cardhome d-flex justify-content-center">
                        <div className="cardHome">
                            <img className="card-img-top img-fluid" src={listIcon} alt="List Icon " />
                            <h3 className="card-title">List It</h3>
                            <hr/>
                            <p className="card-text">Make a list of all your wishes and have your friends and family checkout what you'd love most for any occasion.</p>

                        </div>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <div className="cardHome">
                            <img className="card-img-top img-fluid " src={giftIcon} alt="Gift Icon" />
                            <h3 className="card-title">Gift It</h3>
                            <hr/>
                            <p className="card-text">No idea what to get your friends/family? Check out their wish list to gift them everything they've ever wanted!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
 );
}


export default Home;
