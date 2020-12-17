import React, { useState } from 'react';
import axios from 'axios';
import wishes from '../images/Wishes.jpg'
import avatar from '../images/taylorswift.jpg'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function AddAWishList(props) {

    const [product, setProduct] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    function handleProductChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }
    function addProductHandler(event) {
        debugger
        event.preventDefault();
        axios.post("http://localhost:3000/products", product)
            .then((res) => {
                props.history.push("/profile")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Start Wishing!
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <form onSubmit={addProductHandler}>

                    <div className="form-group ">
                        <label>Item Name</label>
                        <input type="text" name="productName" value={product.productName} className="form-control" placeholder="Name of product" onChange={handleProductChange} />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" name="price" value={product.price} className="form-control" placeholder="Product price" onChange={handleProductChange} />
                    </div>

                    <div className="form-group">
                        <label>Notes</label>
                        <input type="text" name="email" value={product.notes} className="form-control" placeholder="ex. size, color, etc." onChange={handleProductChange} />
                    </div>

                    <div className="form-group">
                        <label>Product Image</label>
                        <input type="text" name="image" value={product.image} className="form-control" placeholder="Product Image Link" onChange={handleProductChange} />
                    </div>

                    <div className="form-group">
                        <label>Link</label>
                        <input type="text" name="url" value={product.link} className="form-control" placeholder="site link" onChange={handleProductChange} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Wish it!</button>
                    <br></br>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}









const ProfilePage = () => {
    const [modalShow, setModalShow] = React.useState(false);



    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     axios
    //         .get(get all users)
    //         .then((response){
    //             setUsers(response);
    //         })
    // })

    // const FoodBoxes = (food) => {
    //     return users.map((eachFood) => {
    //         return <FoodBox {...eachFood} />;
    //     });
    // };

    // const searchFriend = (event) => {
    //     console.log(event.target.value);
    //     let filteredFoods = allFoods.filter((eachFood) => {
    //         return eachFood.name
    //             .toUpperCase()
    //             .includes(event.target.value.toUpperCase());
    //     });
    //     setShowFoods(filteredFoods);
    // };

    return (
        // <div>

        //     {/* <form>
        //         <input onChange={searchFriend} type="text" placeholder="Search Here" />
        //     </form> */}

        //     <div>
        //         //Show users
        // </div>


        // </div>
        <>
            <div class="container">
                <div class="row-justify-content-center">
                    <div class="col text-center">
                        <br />
                        <h1>"When you wish upon a star"</h1>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm-6 text-center">
                        <img className="img-fluid d-block w-50 mx-auto" src={avatar} alt="Avatar" />
                        <br />
                        <h3>Taylor Swift</h3>
                        <h3>Friends</h3>
                        <br />
                        <input className="searchBar" placeholder="Search Friends" />
                    </div>
                    <div class="col-sm-6">
                        <h2 class="text-center">My Wish List</h2>
                        <br />
                        <div class="col-sm-12 text-center">

                            <Button variant="primary" onClick={() => setModalShow(true)} class="btn btn-primary btn-block">Add a Wish +</Button>

                            <AddAWishList
                                show={modalShow}
                                onHide={() => setModalShow(false)} />
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="row card-body">
                                            <img class="col-sm-6" src={wishes} alt="Product" />
                                            <div class="col-sm">
                                                <h5 class="card-title">Vivi's Shoes</h5>
                                                <p class="card-text"><strong>Price</strong></p>
                                                <p class="card-text"><strong>Details</strong></p>
                                                <a href="#" class="btn btn-primary">Gift it</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*                                     <div class="col-sm-6">
                                        <img className="d-block w-100" src={wishes} alt="Product" />
                                    </div>
                                    <div class="col-sm-6 text-height-0">
                                        <p><strong>Vivi's Shoes</strong></p>
                                        <p><strong>Price</strong></p>
                                        <p>$400</p>
                                        <p><strong>Details</strong></p>
                                        <p>Size 7 in women</p>
                                        <h4><strong>View</strong></h4>
                                    
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;