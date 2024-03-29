import React from "react";

import { connect } from "react-redux";

import './PartnersPage.scss';

import whiteBgImg from '../assets/bg-images/case-study-home/fevo-bg-white.png';
import heroImg from '../assets/bg-images/fevo_shot.jpeg';
import lastImg from '../assets/bg-images/about_fevo-brands/group-4.png';
import ticketImg1 from '../assets/bg-images/partners/ticketmaster-5-logo.png';
import ticketImg2 from '../assets/bg-images/partners/tickets.com.png';
import ticketImg3 from '../assets/bg-images/partners/paciolan-fc-wbg.png';

import {dataSelector} from "../modules/app";


const PartnersPage = () => {

  return (
    <>
      <section className="partners-hero-section" 
        style={{backgroundImage: `linear-gradient(#000000ad, #000000cc), url(${heroImg})`}}
      >
        <div className="d-flex flex-column flex-md-row justify-content-evenly w-100">
          <div className="">
            <div className="content-container">
              <div className="content px-4">
                <h1 className="mb-4">Our Partners</h1>
                Proud to support our growing community of FEVO partners
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-content">
              Watching groups form organically within FEVO made our festival even more social.
            </div>
            <div className="hero-subcontent">
              Ashley Foster, Director of Ticketing at C3 Presents
            </div>
          </div>
        </div>
      </section>
      <section className="partners-collective-section" style={{backgroundImage: `url(${whiteBgImg})`}}>
        <div className="d-flex flex-column-reverse flex-md-row justify-content-evenly w-100">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className="d-flex flex-column pb-5 pb-md-0 px-4 imgs">
              <div className="img-content">
                <img src={ticketImg1} alt="" className="mb-5"/>
                <img src={ticketImg2} alt="" className="mb-5"/>
                <img src={ticketImg3} alt="" className=""/>
              </div>
            </div>
          </div>
          <div className="content-container px-4">
            <div className="content" >
              <h1>FEVO  Integrations</h1>
              <div>
                We integrate into the major  inventory systems, including  
                Ticketmaster, Paciolan, and  Tickets.com. This allows our  
                clients to offer experiences, goods,  and services all in 
                one place — giving consumers the most  seamless digital 
                experience all fully integrated with your existing inventory system. 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-fevo-way-section"  style={{backgroundImage: `url(${lastImg})`}}>
        <div className="d-flex flex-column-reverse flex-md-row justify-content-evenly w-100">
          <div className="content-container px-4" >
            <div className="content right-pan">
              With our proprietary Social Cart, we turn consumers 
              into communities of buyers right on your brand. Proven 
              to deliver results for our partners, it’s easy to see 
              why the biggest brands in the world trust us with their consumer experience.
            </div>
            <div className="for-content-navs">
              <a href="mailto:bd@fevo.com">Connect with FEVO.</a>
            </div>
          </div>
          <div className="content-container left-pan px-4" >
            <div className="sub-title" >
              <div className="sub-title-content top-bar">
                <h1>FEVO Clients</h1> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(PartnersPage);
