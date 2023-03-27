import React from 'react';
import imgabout from '../../img/about.png';
import imgabout2 from '../../img/about2.png';

export default function SectionAbout() {
    return (
        <div className="section-about"> 
            <div className = "flex-container">
              <div className="flex-2-of-3">
                <div className="section-about--fig">
                    <img src={imgabout} alt='Fig about' className="section-about--fig-img"/>
                </div>
              </div>
              <div className="flex-1-of-3">
                <div className="section-about-text u-center-text">
                    <h1 className="heading-primary--main u-margin-top-huge">TalentPair </h1>
                    <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-big"> Matching Making for Tech Startups </h1>
                    <h1 className="heading_secondary u-margin-left-huge u-margin-right-huge">TalentPair aims to match tech job seekers with startup recruiters efficiently and affordably.</h1>
                </div>

                <div>
                    <img src={imgabout2} alt='Fig about' className="section-about--fig-img-2"/>
                </div>

              </div>
            </div>
        </div>
    );
}