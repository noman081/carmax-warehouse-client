import React from 'react';
import { Carousel } from 'react-bootstrap';
import audi from '../../../images/audi.jpg';
import bmw from '../../../images/bmw.jpg';
import mercedes from '../../../images/mercedes.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={audi}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Audi</h3>
                        <p>" Ambition is the very step to success and the second step is to buy an Audi."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bmw}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>BMW</h3>
                        <p>" We at BMW do not build cars as consumer objects, just to drive from A to B. We build mobile works of art."
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mercedes}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mercedes</h3>
                        <p>" You can't develop a great car and sell it as an independent. You can develop a great car and make a deal with Mercedes."</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;