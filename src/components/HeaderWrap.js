import React from 'react'
import NavigateButton from './NavigateButton';
import '../styles/headerWrap.css';
import image from "../images/slug2.png";

const HeaderWrap = ({ headerName, dashboard, children }) => {
    return (
        <div>
            <div className="row m-4">
                <h1 className="h2 header m-2 font-weight-bold">
                    {headerName}
                </h1>
            </div>
            <div className="row m-4">
                <div className={`card w-100 outer-wrap-card ${dashboard && "mb-4"}`}>
                    <div className="card py-2 px-2 m-2 inner-wrap-card">
                        {children}
                    </div>
                </div>
            </div>
            {!dashboard &&
                <div className="row justify-content-center m-4">
                    <NavigateButton buttonName="Back To Dashboard" url="/" />
                </div>
            }

            {/* FOOTER */}
            <footer className="footer p-4">
                <section className="border-bottom">
                    <div className="container-fluid">
                        <div className="row d-flex">
                            <div className="col-4 my-4">
                                <h6 className="text-uppercase mb-3 footer-header">
                                    Thomas Jefferson Elementary School
                                </h6>
                                <div>
                                    <i className="fas fa-home me-3" />
                                    <div>
                                        <div>601 South Oak Street</div>
                                        <div>Falls Church, Virginia</div>
                                        <div>22046</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-5 my-4">
                                <h6 className="text-uppercase mb-4">
                                    Contact Us
                                </h6>
                                <p><i className="fas fa-phone me-3"></i> (703) 248-5661</p>
                                <p><i className="fas fa-phone me-3"></i> (703) 248-5666</p>
                                <p><i className="fas fa-envelope me-3"></i> info@tjschool.org</p>
                            </div>

                            <div className="col mb-4 d-flex justify-content-right">
                                <div>
                                    <img className="img-fluid w-75" src={image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-4">
                    ?? 2021 Thomas Jefferson Elementary School
                </div>
            </footer>

        </div>
    )
}

export default HeaderWrap
