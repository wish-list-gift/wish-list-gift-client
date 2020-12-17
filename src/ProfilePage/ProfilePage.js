import React,{ useState }from 'react';
import axios from 'axios';
import wishes from '../images/Wishes.jpg'
import avatar from '../images/taylorswift.jpg'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function addAWishList(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
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
                        <div class="col-sm-12 text-center">
                            <Button variant="primary" onClick={() => setModalShow(true)} class="btn btn-primary btn-block">Add a Wish +</Button>
                            <addAWishList 
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