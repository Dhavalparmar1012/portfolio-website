import React, { useRef, useState } from 'react'
import HomeIcon from '../images/navbar-icons/Home.png'
import ToggleIcon from '../images/navbar-icons/menu-icon.png'
import ProfileIcon from '../images/navbar-icons/Profile.png'
import WorkIcon from '../images/navbar-icons/Work.png'
import DocumentIcon from '../images/navbar-icons/Document.png'
import ChatIcon from '../images/navbar-icons/Chat.png'
import FlagIcon from '../images/navbar-icons/flag.png'
import UkFlagIcon from '../images/navbar-icons/uk-flag.png'
import SocialIcon from '../images/navbar-icons/social-icon.png'
import BulletPoint from '../images/navbar-icons/bullet-point-bg.png'
import Transparent from '../images/description-section/Transparent-zoomed.png'
import RatingIcon from '../images/description-section/Rating.png'
import CommunityIcon from '../images/cards-section/Community.png'
import ProfessionalIcon from '../images/cards-section/Professional.png'
import MeetUpIcon from '../images/cards-section/MeetUp.png'
import StarIcon from '../images/cards-section/Star.png'
import NextArrowIcon from '../images/port/NextIcon.png'
import ProfileImage from '../images/profile/ProfileImage.png'
import ProfileImage1 from '../images/profile/ProfileImage-1.png'
import ProfileImage2 from '../images/profile/ProfileImage-2.png'
import ProfileImage3 from '../images/profile/ProfileImage-3.png'
import ProfileImage4 from '../images/profile/ProfileImage-4.png'
import ProfileImage5 from '../images/profile/ProfileImage-5.png'
import MenProfileIcon from '../images/carousal/ProfileIcon.png'
import RatingGroupIcon from '../images/carousal/RatingGroup.png'
import RatingGroupsIcon from '../images/carousal/RatingGroup-1.png'
import BlogImage1 from '../images/blog/1.png'
import BlogImage2 from '../images/blog/2.png'
import BlogImage3 from '../images/blog/3.png'
import Square from '../images/blog/Squircle.png'
import NextIcon from '../images/icons/next-icon.png'


function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    const cardContainerRef = useRef(null);

    const handleNext = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft += cardContainerRef.current.offsetWidth;
        }
    };

    const handlePrev = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft -= cardContainerRef.current.offsetWidth;
        }
    };
    return (
        <>
            {/* Navbar */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-1 col-md-12 navbar-section p-0">
                        <div className="sidebar">
                            <div className="logo-details">
                                <div className="logo_name text-white">logo</div>
                                <div className="toggle-btn" onClick={toggleMenu}><img src={ToggleIcon} alt="error" /></div>
                            </div>
                            <div className='line'></div>

                            <nav>
                                <ul className={`nav-list list-unstyled ${isMenuVisible ? 'visible' : ''}`}>
                                    <li className={`icons ${activeIndex === 0 ? 'active' : ''}`}>
                                        <a href="/">
                                            <img src={HomeIcon} alt="Error_icon" className='img4' />
                                        </a>
                                    </li>
                                    <li className="icons">
                                        <a href="/">
                                            <img src={ProfileIcon} alt="Error_icon" />
                                        </a>
                                    </li>
                                    <li className="icons">
                                        <a href="/">
                                            <img src={WorkIcon} alt="Error_icon" />
                                        </a>
                                    </li>
                                    <li className="icons">
                                        <a href="/">
                                            <img src={DocumentIcon} alt="Error_icon" />
                                        </a>
                                    </li>
                                    <li className="icons">
                                        <a href="/">
                                            <img src={ChatIcon} alt="Error_icon" />
                                        </a>
                                    </li>
                                    <li className="profile bg-color">
                                        <div className="profile-details d-flex flex-nowrap align-items-center mx-3 gap-2">
                                            <img src={FlagIcon} alt="profileImg" />
                                            <img src={UkFlagIcon} alt="profileImg" />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 home-section d-flex flex-nowrap flex-column p-0">
                        <div className="main">
                            <p className="first-text">Hi</p>
                            <h2 className='content-text'>I’m Mohammad Reza. a Frontend developer.</h2>
                            <p className='content-dt'>Frontend developer based in tehran, Iran. <br />
                                I am coding with a clean and beautiful problem solving in mind.</p>
                            <div className="main1 d-flex">
                                <p className='follow'>Follow me</p>
                                <img src={SocialIcon} alt="error" className='social_img' />
                            </div>
                            <div className="button-req">
                                <button className='btn-send'>Send Request</button>
                                <button className='btn-cv'>Download CV</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 third-section p-0">
                        <div className="profile-img-container position-relative">
                            <img src={BulletPoint} className='photo bullet-points z-n1 position-absolute' alt="error" />
                            <img src={BulletPoint} className='photo bullet-points1 z-n1 position-absolute' alt="error" />
                            <img src="https://c.animaapp.com/OnpT7tpU/img/image@2x.png" className='photo men-1' alt="error" />
                        </div>
                    </div>
                </div>
            </div>

            {/* second */}
            <section className='d-flex justify-content-center'>
                <div className="rectangle-section d-flex flex-wrap justify-content-center row ">
                    <div className="col-md-5 mb-md-0 p-0">
                        <div className="rectangle-img">
                            <img
                                className="transparent"
                                alt="Transparent zoomed"
                                src={Transparent}
                            />
                        </div>
                    </div>
                    <div className="col-md-7 mb-md-0 p-0">
                        <ul className="list-unstyled increase-content">
                            <li>
                                <h2 className="increase text-white fw-semibold lh-1">120+</h2>
                                <p className="title-project text-white text-nowrap lh-lg fw-normal">Completed Projects</p>
                            </li>
                            <li>
                                <img
                                    src={RatingIcon}
                                    className="rate img-fluid"
                                    alt="error_rate"
                                />
                                <p className="pos text-white text-nowrap lh-lg fw-normal">Positive Review's</p>
                            </li>
                        </ul>
                        <ul className='list-unstyled p-0'>
                            <li>
                                <div className="f-content text-white fw-semibold lh-1">Glad to Help You!</div>
                                <div className="s-content text-white fw-normal">
                                    As a web developer, I'm very keen on learning new and pioneering technologies, programming languages, and development techniques.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <h2 className='hire text-center fw-bold text-dark'>Why Hire Me?</h2>

            {/* four card icon */}
            {/* <div className="container-fluid"> */}
            <section className="card-five">
                <div className="card-five-container">
                    <div className="column">
                        <div className="circle-2 rounded-circle">
                            <img src={CommunityIcon} className="card-img1 img-fluid" width={51} height={51.05} alt="loading..." />
                        </div>
                        <div className='title text-center'>Communicative</div>
                        <div className='card-text text-center'>Amet minim mollit non <br /> deserunt ullamcoest sit <br /> alliqua dolor do amet.</div>
                    </div>

                    <div className="column">
                        <div className="circle-2 rounded-circle">
                            <img src={ProfessionalIcon} className="card-img1 img-fluid bg-color" width={44.98} height={49} alt="loading..." />
                        </div>
                        <div className='title text-center'>Professional</div>
                        <div className='card-text text-center'>Amet minim mollit non <br /> deserunt ullamcoest sit <br /> alliqua dolor do amet.</div>
                    </div>

                    <div className="column">
                        <div className="circle-2 rounded-circle">
                            <img src={MeetUpIcon} className="coll-img img-fluid" width={69} height={40.35} alt="loading..." />
                        </div>
                        <div className='title text-center'>Collaborative</div>
                        <div className='card-text text-center'>Amet minim mollit non <br /> deserunt ullamcoest sit <br /> alliqua dolor do amet.</div>
                    </div>

                    <div className="column star">
                        <div className="circle-2 rounded-circle">
                            <img src={StarIcon} className="card-img1 img-fluid" width={50} height={47.75} alt="loading..." />
                        </div>
                        <div className='title text-center'>Client's Favourite</div>
                        <div className='card-text text-center'>Amet minim mollit non <br /> deserunt ullamcoest sit <br /> alliqua dolor do amet.</div>
                    </div>
                </div>
            </section>
            {/* </div> */}


            {/* Portfolio content */}
            <section>
                <div className="blog-content row desktop-view">
                    <div className="col-md-6 desktop-view d-flex justify-content-start">
                        <div className='blog-section fw-bold'>Portfolio</div>
                    </div>

                    <div className="col-md-6 desktop-view d-flex justify-content-end">
                        <a href='/' className='seeBtn text-decoration-none text-nowrap cursor-pointer fw-normal'>
                            See More <img src={NextArrowIcon} alt="error" />
                        </a>
                    </div>
                </div>
            </section>

            {/* card-img */}
            <div className="card-six">
                <div className="row">
                    <div className="col-lg-4 col-md-12 my-2 d-none d-md-flex">
                        <img src={ProfileImage} alt='img loading...' className="img-fluid img2" />
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <img src={ProfileImage1} alt='img loading...' className="img-fluid img2" />
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <img src={ProfileImage2} alt='img loading...' className="img-fluid img2" />
                    </div>

                    <div className="col-lg-4 col-md-12  d-none d-md-flex">
                        <img src={ProfileImage3} alt='img loading...' className="img-fluid img2" />
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <img src={ProfileImage4} alt='img loading...' className="img-fluid img2" />
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <img src={ProfileImage5} alt='img loading...' className="img-fluid img2" />
                    </div>
                </div>
            </div>



            <div className="blog-content1 row mobile-view lh-1">
                <div className="col-md-6 mobile-view text-start">
                    <a href='/' className='seeBtn text-decoration-none text-nowrap fw-normal'>
                        See More <img src={NextArrowIcon} className='icon-next' alt="error" />
                    </a>
                </div>
            </div>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <section id="pricing">
                            <div className="row carousel1">
                                <div className="loved text-light fw-semibold">
                                    I'm Loved By Users And Clients Worldwide
                                </div>
                                <div className="col-md-6 p-0 d-flex justify-content-center">
                                    <div className="interest11 mx-auto bg-white">
                                        <div className='interest-label1 fw-normal'>
                                            One of the best additions to our feedback loop has been the company-wide adoption of Fellow.
                                        </div>
                                        <div className="men-imag">
                                            <ul className='list-unstyled d-flex'>
                                                <li><img src={MenProfileIcon} alt='error' className='carousal-img' /></li>
                                                <li>
                                                    <p className='ronald text-nowrap fw-semibold'>Ronald Richards</p>
                                                    <p className='designer text-nowrap text-muted fw-normal'>UI/UX Designer</p>
                                                </li>
                                            </ul>
                                            <ul className='list-unstyled d-flex'>
                                                <li className='d-flex'>
                                                    <p className='rate-number fw-semibold'>4.5</p>
                                                    <img src={RatingGroupIcon} alt="error" className='rate1' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 p-0 d-none d-md-block">
                                    <div className="interest11 bg-white mx-auto">
                                        <div className='interest-label1 text-wrap'>
                                            It provides an amazing platform <br /> for constant conversations and <br /> direct feedback between <br /> managers and direct reports.
                                        </div>
                                        <div className="men-imag">
                                            <ul className='list-unstyled d-flex'>
                                                <li><img src={MenProfileIcon} alt="..." className='carousal-img' /></li>
                                                <li>
                                                    <p className='ronald text-nowrap'>Ronald Richards</p>
                                                    <p className='designer text-nowrap text-muted'>UI/UX Designer</p>
                                                </li>
                                            </ul>
                                            <ul className='list-unstyled d-flex'>
                                                <li className='d-flex'>
                                                    <p className='rate-number'>4.5</p>
                                                    <img src={RatingGroupsIcon} alt="error" className='rate1' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item">
                        <section id="pricing">
                            <div className="row carousel1">
                                <div className="loved text-light fw-semibold">
                                    I'm Loved By Users And Clients Worldwide
                                </div>
                                <div className="col-md-6 p-0 d-flex justify-content-center">
                                    <div className="interest11 bg-white">
                                        <div className='interest-label1 fw-normal'>
                                            One of the best additions to our feedback loop has been the company-wide adoption of Fellow.
                                        </div>
                                        <div className="men-imag">
                                            <ul className='list-unstyled d-flex'>
                                                <li><img src={MenProfileIcon} alt='error' className='carousal-img' /></li>
                                                <li>
                                                    <p className='ronald text-nowrap fw-semibold'>Ronald Richards</p>
                                                    <p className='designer text-nowrap text-muted fw-normal'>UI/UX Designer</p>
                                                </li>
                                            </ul>
                                            <ul className='list-unstyled d-flex'>
                                                <li className='d-flex'>
                                                    <p className='rate-number fw-semibold'>4.5</p>
                                                    <img src={RatingGroupIcon} alt="error" className='rate1' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 d-none d-md-block">
                                    <div className="interest11 bg-white mx-auto">
                                        <div className='interest-label1 text-wrap'>
                                            It provides an amazing platform <br /> for constant conversations and <br /> direct feedback between <br /> managers and direct reports.
                                        </div>
                                        <div className="men-imag">
                                            <ul className='list-unstyled d-flex'>
                                                <li><img src={MenProfileIcon} alt="..." className='carousal-img' /></li>
                                                <li>
                                                    <p className='ronald text-nowrap'>Ronald Richards</p>
                                                    <p className='designer text-nowrap text-muted'>UI/UX Designer</p>
                                                </li>
                                            </ul>
                                            <ul className='list-unstyled d-flex'>
                                                <li className='d-flex'>
                                                    <p className='rate-number'>4.5</p>
                                                    <img src={RatingGroupsIcon} alt="error" className='rate1' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item">
                        <section id="pricing">
                            <div className="row carousel1">
                                <div className="loved text-light fw-semibold">
                                    I'm Loved By Users And Clients Worldwide
                                </div>
                                <div className="col-md-6 p-0 d-flex justify-content-center">
                                    <div className="interest11 bg-white">
                                        <div className='interest-label1 fw-normal'>
                                            One of the best additions to our feedback loop has been the company-wide adoption of Fellow.
                                        </div>
                                        <div className="men-imag">
                                            <ul className='list-unstyled d-flex'>
                                                <li><img src={MenProfileIcon} alt='error' className='carousal-img' /></li>
                                                <li>
                                                    <p className='ronald text-nowrap fw-semibold'>Ronald Richards</p>
                                                    <p className='designer text-nowrap text-muted fw-normal'>UI/UX Designer</p>
                                                </li>
                                            </ul>
                                            <ul className='list-unstyled d-flex'>
                                                <li className='d-flex'>
                                                    <p className='rate-number fw-semibold'>4.5</p>
                                                    <img src={RatingGroupIcon} alt="error" className='rate1' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 d-none d-md-block">
                                    <div className="interest11 bg-white mx-auto">
                                        <div className='interest-label1 text-wrap'>
                                            It provides an amazing platform <br /> for constant conversations and <br /> direct feedback between <br /> managers and direct reports.
                                        </div>
                                        <div className="men-imag">
                                            <ul className='list-unstyled d-flex'>
                                                <li><img src={MenProfileIcon} alt="..." className='carousal-img' /></li>
                                                <li>
                                                    <p className='ronald text-nowrap'>Ronald Richards</p>
                                                    <p className='designer text-nowrap text-muted'>UI/UX Designer</p>
                                                </li>
                                            </ul>
                                            <ul className='list-unstyled d-flex'>
                                                <li className='d-flex'>
                                                    <p className='rate-number'>4.5</p>
                                                    <img src={RatingGroupsIcon} alt="error" className='rate1' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* pricing plans */}
            <div className="row justify-content-center text-center">
                <div className="col-lg-12">
                    <div className="price-name d-inline">
                        <h2 className="price-title text-center fw-semibold">Price Plans</h2>
                    </div>
                </div>
            </div>
            <footer>
                <div className="price-section row">
                    <div className="col-lg-4 d-none d-md-flex first-price text-center">
                        <div className="price-box-sliver">
                            <div className="pricing-name text-center">
                                <h4 className="pricing-title fw-semibold text-light tracking-0">Silver</h4>
                            </div>
                            <div className="plan-price text-center">
                                <div className='number text-dark'><b>$1.00</b><span className='hour text-muted fw-medium lh-1 text-capitalize'>/ Hour</span></div>
                            </div>

                            <div className="price-features mx-3">
                                <p><i className="mdi mdi-check mdi-color"></i> UI Designer </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Web Development </p>
                                <p><i className="mdi mdi-close "></i> Logo Design </p>
                                <p><i className="mdi mdi-close"></i> Sea Optimizatio</p>
                                <p><i className="mdi mdi-close"></i> WordPress Integration</p>
                                <p><i className="mdi mdi-close"></i> 5 Website </p>
                                <p><i className="mdi mdi-close"></i> Unlimited User </p>
                                <p><i className="mdi mdi-close"></i> 20 GB Bandwith </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 first-price text-center d-flex justify-content-center">
                        <div className="price-box-sliver">
                            <div className="pricing-name text-center">
                                <h4 className="pricing-title fw-semibold text-light tracking-0">Gold</h4>
                            </div>
                            <div className="plan-price text-center">
                                <div><b className='number text-dark'>$50.00</b><span className='hour text-muted fw-medium lh-1 text-capitalize'>/ Hour</span></div>
                            </div>
                            <div className="price-features mx-3">
                                <p><i className="mdi mdi-check mdi-color"></i> UI Designer </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Web Development </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Logo Design </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Sea Optimizatio</p>
                                <p><i className="mdi mdi-close"></i> WordPress Integration</p>
                                <p><i className="mdi mdi-close"></i> 5 Website </p>
                                <p><i className="mdi mdi-close"></i> Unlimited User </p>
                                <p><i className="mdi mdi-close"></i> 20 GB Bandwith </p>
                            </div>
                        </div> </div>

                    <div className="col-lg-4 first-price text-center d-flex justify-content-end">
                        <div className="price-box-sliver">
                            <div className="pricing-name text-center">
                                <h4 className="pricing-title fw-semibold text-light tracking-0">Dimond</h4>
                            </div>

                            <div className="plan-price text-center mt-4">
                                <div><b className='number text-dark'>$80.00</b><span className='hour text-muted fw-medium lh-1 text-capitalize'>/ Hour</span></div>
                            </div>
                            <div className="price-features mx-3">
                                <p><i className="mdi mdi-check mdi-color"></i> UI Designer </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Web Development </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Logo Design </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Sea Optimizatio</p>
                                <p><i className="mdi mdi-check mdi-color"></i> WordPress Integration</p>
                                <p><i className="mdi mdi-check mdi-color"></i> 5 Website </p>
                                <p><i className="mdi mdi-check mdi-color"></i> Unlimited User </p>
                                <p><i className="mdi mdi-check mdi-color"></i> 20 GB Bandwith </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Interest content */}
            <section id="interest">
                <div className="row interest-email">
                    <div className="col-md-6 p-0">
                        <h2 className='interest-label text-nowrap text-white fw-semibold tracking-0 lh-base'>Interested working <br /> with me?</h2>
                    </div>

                    <div className="col-md-6 p-0 interest-box1 d-flex">
                        <button className='email-btn1 btn btn-light text-center text-dark tracking-0 fw-semibold'>Email Me</button>
                    </div>
                </div>
            </section>

            {/* Blog content */}
            <section>
                <div className="blog-content row desktop-view">
                    <div className="col-md-6 desktop-view d-flex justify-content-start">
                        <div className='blog-section fw-bold'>Blog</div>
                    </div>

                    <div className="col-md-6 desktop-view d-flex justify-content-end text-center">
                        <a href='/' className='seeBtn text-decoration-none text-nowrap cursor-pointer fw-normal'>
                            See More <img src={NextArrowIcon} alt="error" />
                        </a>
                    </div>
                </div>

                <div className="blog-content row mobile-view">
                    <div className="col-md-6 mobile-view d-flex justify-content-start">
                        <div className='blog-section fw-bold'>Blog</div>
                    </div>
                </div>
            </section>

            {/* card display four */}
            <section className="card-four card-slider">
                <div className='card-container card-four-mobile' ref={cardContainerRef}>
                    <div className="card-size bg-white col-md-3">
                        <img src={BlogImage1} className="card-img-top blog-img" alt="Error" />

                        <div className="card-title-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-sm text-left">How to Make Web Templates</div>
                        <div className="card-text-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-small">Lorem Ipsum Dolor Sit Amet, <br /> Consectetur Adipisicing Elit. Vitae Nulla <br /> Diam In Ac Dictum A Urna</div>
                        <a href="/"><img src={NextIcon} className='next-icon rounded float-start' alt="error" /></a>
                    </div>

                    <div className="card-size bg-white col-md-3">
                        <img src={BlogImage2} className="card-img-top blog-img" alt="Error" />

                        <div className="card-title-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-sm text-left">How to Make Web Templates</div>
                        <div className="card-text-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-lg">Lorem Ipsum Dolor Sit Amet, <br /> Consectetur Adipisicing Elit. Vitae Nulla <br /> Diam In Ac Dictum A Urna</div>
                        <a href="/"><img src={NextIcon} className='next-icon rounded float-start' alt="error" /></a>
                    </div>

                    <div className="card-size bg-white col-md-3">
                        <img src={BlogImage3} className="card-img-top blog-img" alt="Error" />

                        <div className="card-title-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-sm text-left">How to Make Web Templates</div>
                        <div className="card-text-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-lg">Lorem Ipsum Dolor Sit Amet, <br /> Consectetur Adipisicing Elit. Vitae Nulla <br /> Diam In Ac Dictum A Urna</div>
                        <a href="/"><img src={NextIcon} className='next-icon rounded float-start' alt="error" /></a>
                    </div>

                    <div className="card-size bg-white col-md-3">
                        <img src={BlogImage1} className="card-img-top blog-img" alt="Error" />

                        <div className="card-title-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-sm text-left">How to Make Web Templates</div>
                        <div className="card-text-blog d-flex align-items-center justify-content-center fw-medium text-capitalize tracking-0 lh-lg">Lorem Ipsum Dolor Sit Amet, <br /> Consectetur Adipisicing Elit. Vitae Nulla <br /> Diam In Ac Dictum A Urna</div>
                        <a href="/"><img src={NextIcon} className='next-icon rounded float-start' alt="error" /></a>
                    </div>
                </div>

                {/* Next and prev icon */}
                <div className="next-button rounded-circle my-3 mx-3 float-start cursor-pointer" onClick={handleNext}>
                    <i className="bi bi-arrow-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </i>
                </div>
                <div className="prev-button rounded-circle my-3 mx-3 float-end cursor-pointer" onClick={handlePrev}>
                    <i className="bi bi-arrow-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </i>
                </div>
            </section>

            {/* footer  */}
            <footer>
                <div className="footer-section row desktop-view">
                    <div className="col-md-4 email-section desktop-view d-flex align-items-center justify-content-start text-secondary">
                        <img src={Square} className='email-icon' alt="Error_icon" />
                        <p className="email-title mb-0 lh-sm letter-spacing-0 fw-normal">mmr315@gmail.com</p>
                    </div>

                    <div className="col-md-4 logo-section desktop-view text-center d-flex align-items-center justify-content-center text-secondary">
                        <p className="logo-title mb-0 text-center text-dark text-decoration-none lh-normal letter-spacing-0 fw-medium">
                            © Copyright 2021 | mmrz3515
                        </p>
                    </div>

                    <div className="col-md-4 social-section desktop-view d-flex align-items-center justify-content-end text-center">
                        <img src="https://p7.hiclipart.com/preview/322/394/495/logo-computer-icons-instagram-logo.jpg" width={16} height={16} alt="Error_icon" />
                        <img src="https://seekicon.com/free-icon-download/telegram_4.svg" width={18} height={15} alt="Error_icon" />
                    </div>
                </div>
            </footer>

            {/* Mobile view */}
            <footer>
                <div className="footer-section1 row mobile-view">
                    <div className="col-12 email-section-m mobile-view text-center text-secondary">
                        <img src={Square} className='email-icon' alt="Error_icon" />
                        <p className="email-title mb-0 lh-sm letter-spacing-0 fw-normal">mmr315@gmail.com</p>
                    </div>

                    <div className="col-12 social-section-m text-center mobile-view">
                        <img src="https://p7.hiclipart.com/preview/322/394/495/logo-computer-icons-instagram-logo.jpg" width={16} height={16} alt="Error_icon" />
                        <img src="https://seekicon.com/free-icon-download/telegram_4.svg" width={18} height={15} alt="Error_icon" />
                    </div>

                    <div className="col-12 logo-section text-center mobile-view text-center d-flex align-items-center justify-content-center text-secondary">
                        <div className="logo-title mb-0 text-center text-dark text-decoration-none lh-normal letter-spacing-0 fw-medium">
                            © Copyright 2021 | mmrz3515
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomePage
