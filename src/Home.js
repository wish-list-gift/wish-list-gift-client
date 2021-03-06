import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import giftIcon from './images/giftIcon.png'
import starsIcon from './images/starsIcon.png'
import listIcon from './images/listIcon.png'
import bigPresent from './images/bigPresent.png'
import secondSlide from './images/secondSlide.jpg'


const Home = () => {
    return (
        <>
            <div className='container '>
                <div className="row no-gutters" >
                    <div className="col-sm-12 d-flex justify-content-center ">
                        <Carousel>
                            <Carousel.Item>
                                <img className=" w-100"
                                    src={bigPresent}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" w-100"
                                    src={secondSlide}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className="row no-gutters ">
                    <div className="col-sm-4 d-flex justify-content-center ">
                        <div className="cardHome" >
                            <img className="card-img-top img-fluid" src={starsIcon} alt="Wish Icon" />
                            <h3 className="card-title">Wish It</h3>
                            <hr />
                            <p className="card-text">Got a wish? Have all your wishes come true by creating a profile full of all your hearts desires!</p>

                        </div>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center ">
                        <div className="cardHome">
                            <img className="card-img-top img-fluid" src={listIcon} alt="List Icon " />
                            <h3 className="card-title">List It</h3>
                            <hr />
                            <p className="card-text">Make a list of all your wishes and have your friends and family checkout what you'd love most for any occasion.</p>

                        </div>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <div className="cardHome">
                            <img className="card-img-top img-fluid " src={giftIcon} alt="Gift Icon" />
                            <h3 className="card-title">Gift It</h3>
                            <hr />
                            <p className="card-text">No idea what to get your friends/family? Check out their wish list to gift them everything they've ever wanted!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;
