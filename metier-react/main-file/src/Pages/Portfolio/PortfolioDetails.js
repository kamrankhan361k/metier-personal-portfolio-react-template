import React from 'react';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderFour';
import { pageTitle } from '../PageTitle';

const PortfolioDetails = () => {
    pageTitle('Portfolio Details');
    return (
        <>
            <Header></Header>
            <div className="portfolio__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 lg-mb-30">
                            <div className="all__sidebar mr-30 xl-mr-0">
                                <div className="all__sidebar-item details">
                                    <h4>Portfolio Details</h4>
                                    <div className="all__sidebar-item-details">
                                        <div className="all__sidebar-item-details-list">
                                            <h6>Client :</h6>
                                            <span>ThemeOri agency</span>
                                        </div>
                                        <div className="all__sidebar-item-details-list">
                                            <h6>Category :</h6>
                                            <span>Brochure Design</span>
                                        </div>
                                        <div className="all__sidebar-item-details-list">
                                            <h6>Date :</h6>
                                            <span>27 March, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="portfolio__details-left">
                                <div className="portfolio__details-left-content">
                                    <h2 className="mb-30">Best Brochure Design Print Designer</h2>
                                    <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vitae ex orci. Nulla nec malesuada odio. Morbi nunc risus, condimentum vel congue et,</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="portfolio__details-image">
                                <img src="assets/img/portfolio/details.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterThree></FooterThree>
        </>
    );
};

export default PortfolioDetails;