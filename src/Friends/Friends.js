import React from 'react';
import { Link } from 'react-router-dom'
import angel from '../images/angel.jpg'
import brito from '../images/brito.jpg'
import david from '../images/david.jpg'
import jurgen from '../images/jurgen.jpg'
import val from '../images/val.jpg'
import rabiul from '../images/rabiul.jpg'
import niko from '../images/niko.jpg'
import vivi from '../images/vivi2.jpeg'
import darys from '../images/darys.JPG'

import './Friends.css';

const Friends = () => {
    return (
        <div>

            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"><Link to="#custom-modal" className="btn btn-custom waves-effect waves-light mb-4" data-animation="fadein" data-plugin="custommodal" data-overlayspeed="200" data-overlaycolor="#36404a"><i className="mdi mdi-plus"></i> Add Friend</Link></div>

                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="drake" src={angel} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Angel</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="taylor" src={brito} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Brito</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="future" src={david} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>David</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="drake" src={jurgen} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Jurgen</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="taylor" src={val} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Val</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="future" src={rabiul} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Rabiul</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="drake" src={niko} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Niko</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="taylor" src={vivi} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Vivi</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img id="future" src={darys} className="rounded-circle img-thumbnail" alt="profile" /></div>
                                    <div className="">
                                        <h4>Darys</h4>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">View Profile</button>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}

                </div>
                {/* <!-- container --> */}
            </div>
        </div>
    );
};

export default Friends;