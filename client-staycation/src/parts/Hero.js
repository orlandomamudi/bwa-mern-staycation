import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasures from 'assets/images/icons/icon-treasures.svg'

import Button from 'elements/Button'
import formatNumber from 'utilities/formatNumber'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{ width: 532 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Your Work, <br/>
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                    We provide what you need to enjoy  your holiday with family.
                    Time to make memorable moments
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className="row" style={{ marginTop: 54 }}>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img 
                                width="36" 
                                height="36"
                                src={IconTraveler} 
                                alt={`${props.data.travelers} Travelers`} 
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}
                                <span className="ml-1 text-gray-500 font-weight-light">
                                    travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img 
                                width="36" 
                                height="36"
                                src={IconTreasures} 
                                alt={`${props.data.treasures} Treasures`} 
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)}{" "}
                                <span className="ml-1 text-gray-500 font-weight-light">
                                    treasures
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img 
                                width="36" 
                                height="36"
                                src={IconCities} 
                                alt={`${props.data.cities} Cities`} 
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)}{" "}
                                <span className="ml-1 text-gray-500 font-weight-light">
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5 mt-4">
                    <div style={{ width: 540, height: 370 }}>
                        <img src={ImageHero} alt="Great Villa" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}/>
                        <img src={ImageHero_} alt="Great Villa Frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0' }}/>
                    </div>
                </div>

            </div>
        </section>
    )
}
