import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../../img/profile.png';
import skills from '../../img/skills.png';
import personality from '../../img/personality.png';

export default function ApplicantDemo() {
    return (
        <div className="applicant-demo"> 
            <div className = "flex-container u-margin-top-huge">
              <div className="flex-2-of-3">
                <div className="applicant-demo-text">
                    <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Crafting a Comprehensive Job Seeker Profile </h1>
                    <h1 className="heading_secondary u-margin-left-medium u-margin-right-huge">When creating your profile, job seekers write a short description of themselves, followed by their education background and any work experience they have. On the right side is the job seeker card which serves as a snapshot of their preferences.</h1>
                </div>
              </div>

                <div className="flex-1-of-3">
                    <img src={profile} alt='Fig Profile Demo' className="applicant-demo--fig-img-2"/>
                </div>
            </div>

            <div className = "flex-container u-margin-top-huge">
                <div className="flex-1-of-3">
                    <img src={skills} alt='Fig Skill Demo' className="applicant-demo--fig-img-2"/>
                </div>

                <div className="flex-2-of-3">
                    <div className="applicant-demo-text">
                        <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Simplifying  Technical Project Sharing</h1>
                        <h1 className="heading_secondary u-margin-left-huge u-margin-right-medium">Job seekers can link all of their technical projects, and with one click, the GitHub repo would be visible for recruiters to explore. One can tag all their skills and courses relating to their projects as well as mention them as listed on the right side. </h1>
                    </div>
                </div>
            </div>

            <div className = "flex-container u-margin-top-huge">
                <div className="flex-2-of-3">
                    <div className="applicant-demo-text">
                        <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Maximizing Job Opportunities through Personal Questionaires</h1>
                        <h1 className="heading_secondary u-margin-left-huge u-margin-right-medium">Job seekers are also asked to answer behavioral interview questions and take as many personality tests when they are creating their profile. Based on our MVPs, we believe that recruiters value their behavior analysis as well as technical performance. This way, recruiters will be able to see these holistic profiles to find their ideal candidate.</h1>
                    </div>
                </div>

                <div className="flex-1-of-3">
                    <img src={personality} alt='Fig Personality Demo' className="applicant-demo--fig-img-2"/>
                </div>
            </div>
        </div>
    );
}