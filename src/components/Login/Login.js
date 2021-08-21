import React from 'react';

const Login = () => {
    return (
        <>
        <div className="offcanvas-overlay"></div>

        <div className="loginSignupModal modal fade" id="loginSignupModal" tabIndex="-1" role="dialog"
             aria-labelledby="loginSignupModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">

                        <ul className="loginSignupNav nav">
                            <li><a className="nav-link active" data-toggle="tab" href="#login">Login</a></li>
                            <li><a className="nav-link" data-toggle="tab" href="#signup">Sign up</a></li>
                        </ul>

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div className="modal-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="login">
                                {/*<form>
                                <div className="row mb-n3">
                                    <div className="col-12 mb-3"><input type="email" placeholder="Email"></div>
                                    <div className="col-12 mb-3"><input type="password" placeholder="Password"></div>
                                    <div className="col-12 mb-3">
                                        <div className="row justify-content-between mb-n2">
                                            <div className="col-auto mb-2">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="remember-me" id="remember-me"
                                                           value="checkedValue" className="custom-control-input">
                                                        <label className="custom-control-label" htmlFor="remember-me">Remember
                                                            me</label>
                                                </div>
                                            </div>
                                            <div className="col-auto mb-2"><a href="#">Forgot Password?</a></div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3"><input className="btn btn-primary w-100" type="submit"
                                                                        value="Login"></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col text-center">
                                        <p className="text-muted">Or Login With</p>
                                        <div className="login-reg-social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </form>*/}
                            </div>
                            <div className="tab-pane fade" id="signup">
                                {/*<form>
                                <div className="row mb-n3">
                                    <div className="col-12 mb-3"><input type="text" placeholder="Your Name"></div>
                                    <div className="col-12 mb-3"><input type="email" placeholder="Your Email Address">
                                    </div>
                                    <div className="col-12 mb-3"><input type="password" placeholder="Choose a Password">
                                    </div>
                                    <div className="col-12 mb-3"><input className="btn btn-primary w-100" type="submit"
                                                                        value="Sign Up"></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col text-center">
                                        <p className="text-muted">Or Register With</p>
                                        <div className="login-reg-social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </form>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Login;