import React, { useEffect, useState } from 'react';
import axios from 'axios'
import avatar from '../images/giftIcon.png'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import redgift from '../images/redgift.png'


function AddAWishList(props) {
    const [setModalShow] = useState(false);

    const [product, setProduct] = useState({
        productName: "",
        price: "",
        notes: "",
        image: "",
        link: "",
    })
    function handleProductChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }
    function addProductHandler(event) {

        // event.preventDefault();
        axios.post("http://localhost:3000/profile", product, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }

        }
        )

            .then((res) => {
                setModalShow(false)
                console.log(res.data)
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
                    Start Wishing!<img className='redgift' src={redgift} style={{ height: '3vh' }} alt="redgift" />
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
                        <input type="text" name="notes" value={product.notes} className="form-control" placeholder="ex. size, color, etc." onChange={handleProductChange} />
                    </div>

                    <div className="form-group">
                        <label>Product Image</label>
                        <input type="url" name="image" value={product.image} className="form-control" placeholder="Product Image Link" onChange={handleProductChange} />
                    </div>

                    <div className="form-group">
                        <label>Link</label>
                        <input type="url" name="link" value={product.link} className="form-control" placeholder="Site link" onChange={handleProductChange} />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block">Wish it!</button>
                    <br />
                </form>
            </Modal.Body>

        </Modal>
    );
}



const ProfilePage = () => {
    const [modalShow, setModalShow] = useState(false);
    const [productList, setProductList] = useState();
    const [userList, setUserList] = useState();

    useEffect(() => {
        // debugger
        axios.get("http://localhost:3000/profile", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then((res) => {
                // debugger
                console.log(res.data)
                setProductList(res.data)
            })
            .catch(err => {
                // debugger
                console.log(err)
            })
    }, [])
    console.log(productList)
    //map through productList in a separate function orrrrr

    useEffect(() => {
        // debugger
        axios.get("http://localhost:3000/user-profile", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then((res) => {
                // debugger
                console.log(res.data)
                setUserList(res.data)
            })
            .catch(err => {
                // debugger
                console.log(err)
            })
    }, [])
    console.log(userList)

    return (
        <>
            <div className="container">
                <div className="row-justify-content-center">
                    <div className="col text-center">
                        <br />
                        <h1 style={{ color: '#df744a', fontFamily: 'Dancing Script, cursive' }}>happiness is the same price as my wishlist </h1>
                    </div>
                </div>
                <br />
                {userList &&

                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <img className="img-fluid d-block w-50 mx-auto" src={avatar} alt="Avatar" />
                            <br />
                            <h3 style={{ color: '#df744a', fontFamily: 'Dancing Script, cursive' }}>
                                {userList[0].firstName} {userList[0].lastName}
                            </h3>
                            {/* <h3>Friends</h3> */}
                            <br />

                        </div>



                        <div className="col-sm-6">
                            <h2 style={{ color: '#df744a' }} className="text-center">My Wish List</h2>
                            <br />
                            <div className="col-sm-12 text-center">
                                <Button variant="warning" block onClick={() => setModalShow(true)} /* className="btn btn-primary btn-block" */>Add a Wish +</Button>
                                <AddAWishList
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} />
                                {productList && productList.map(eachProd => {
                                    return (
                                        <>


                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="card">
                                                        <div className="row card-body">
                                                            <img className="col-sm-6" src={eachProd.image} alt="Product" />
                                                            <div className="col-sm">
                                                                <h5 className="card-title">{eachProd.productName}</h5>
                                                                <p className="card-text"><strong>{eachProd.price}</strong></p>
                                                                <p className="card-text"><strong>{eachProd.notes}</strong></p>
                                                                <a href={eachProd.link} className="btn btn-warning">Gift it</a>
                                                                {/* <br />
                                                                <button>edit</button>
                                                                <br />
                                                                <button>delete</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </>
                                    )

                                })}
                            </div>
                        </div>
                    </div>



                }

            </div>
        </>



    );
};

export default ProfilePage;




