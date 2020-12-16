import React from 'react';
import { Link } from 'react-router-dom'
import drake from '../images/drake.jpg'
import taylor from '../images/taylorswift.jpg'
import future from '../images/future.jpg'
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="drake" src={drake} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Drake</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="taylor" src={taylor} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Taylor Swift</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="future" src={future} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Future</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="drake" src={drake} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Drake</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="taylor" src={taylor} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Taylor Swift</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="future" src={future} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Future</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="drake" src={drake} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Drake</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="taylor" src={taylor} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Taylor Swift</h4>
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
                                    <div className="thumb-lg member-thumb mx-auto"><img id="future" src={future} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                    <div className="">
                                        <h4>Future</h4>
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