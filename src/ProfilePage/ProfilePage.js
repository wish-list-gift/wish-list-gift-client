import React from 'react';
import wishes from '../images/Wishes.jpg'
import avatar from '../images/taylorswift.jpg'

const ProfilePage = () => {
    return (
        <>
            <div class="container">
                <div class ="row-justify-content-center">
                    <div class="col text-center">
                <h1>"When you wish upon a star"</h1>
                </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 text-center">
                    <img className="img-fluid d-block w-50 mx-auto" src={avatar} alt="Avatar" />
                    <h3>Taylor Swift</h3>
                    <h3>Friends</h3>
                    </div>
                    <div class="col-sm-6">
                        <h2 class="text-center">User's Wish List</h2>
                            <div class="col-sm-12">
                                <button class="btn-default">Add a Wish +</button>                            
                                <div class="row">
                                    <div class="col-sm-6">
                                    <img className="d-block w-100" src={wishes} alt="Product" />
                                    </div>
                                    <div class="col-sm-6 text-height-0">
                                        <p><strong>Vivi's Shoes</strong></p>
                                        <p><strong>Price</strong></p>
                                        <p>$400</p>
                                        <p><strong>Details</strong></p>
                                        <p>Size 7 in women</p>
                                        <h4><strong>View</strong></h4>
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;