import React from 'react'
import { useRef } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import About from '../About';

const RestaurantDetails = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();
    const openModal = () => {
        ref.current.click();
    }
    return (
        <>
            <div className="container">
                <img src={location.state.image} alt="hotel" className="img-fluid my-3" />
            </div>
            
            <div className="container">
                <h1 className='primaryHeading'>{location.state.name}</h1>
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>{props.name}</h1>
                <p className='smallpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente perferendis rerum architecto animi recusandae vero neque, sint ducimus. Sequi animi reiciendis soluta impedit dolorem maiores maxime, cupiditate necessitatibus et quaerat sed quia tempora veritatis, quae eveniet dolorum modi explicabo natus aliquam iusto similique! Voluptatum assumenda alias tenetur veritatis praesentium?</p>
                <p className='smallpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta in reiciendis quae et excepturi voluptatem est architecto suscipit quod. Quas suscipit repudiandae ea molestias numquam nisi eligendi reiciendis esse?</p>
            </div>
            <div className="container my-2">
                <div className="row my-3">
                    <div className="col-md-6">
                        <img src={location.state.image} alt="hotel" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <img src={location.state.image} alt="hotel" className="img-fluid" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4">
                        <img src={location.state.image} alt="hotel" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={location.state.image} alt="hotel" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={location.state.image} alt="hotel" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container packages">
                <span>Our Restaurant's Menu</span>
                <div className='d-flex gap-2'>
                    <span>Menu</span>
                </div>
            </div>

            <div className="container my-3">
                <button className="readmore mx-2" onClick={openModal}>Call Us</button>
                <button className="readmore mx-2" onClick={() => { navigate('/Restaurants') }}>Go Back</button>
            </div>

            <div className="container">
                <About />
            </div>

        </>
    )
}

export default RestaurantDetails