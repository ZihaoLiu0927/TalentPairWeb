import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../../img/profile.png';
import skills from '../../img/skills.png';
import personality from '../../img/personality.png';

export default function ApplicantDemo() {
    return (
        <div className="applicant-demo"> 
            <div className = "flex-container">
              <div className="flex-2-of-3">
                <div className="applicant-demo-text">
                    <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Why job seekers love us </h1>
                    <h1 className="heading_secondary u-margin-left-medium u-margin-right-huge">TalentPair matches your personality to the best fit job. With just a few simple steps, you can create an account that can be viewed by hiring managers for all companies. All you have to do is wait for HRs to reach out to you! You already have a big chance of landing the job when they do. It is never too late to find a job.</h1>
                    <Link to="/auth/signin" className='applicant-demo--signlink'>Sign up today! &rarr; </Link>
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
                        <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Matching Making for Tech Startups </h1>
                        <h1 className="heading_secondary u-margin-left-huge u-margin-right-medium">TalentPair has pool of new CS undergraduates eager to look for jobs. At TalantPair, you can sift through applicants using precise filters, and our algorithm can list the best-matching candidates. This fast, easy process finds you the most qualified candidates regarding skills and personality. Best of all, we are free to browse and only charge a little when you have found your perfect candidate. </h1>
                        <Link to="/auth/signin" className='applicant-demo--signlink u-margin-left-huge'>Sign up for a free trial today &rarr; </Link>
                    </div>
                </div>
            </div>

            <div className = "flex-container u-margin-top-huge">
                <div className="flex-2-of-3">
                    <div className="applicant-demo-text">
                        <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Matching Making for Tech Startups </h1>
                        <h1 className="heading_secondary u-margin-left-huge u-margin-right-medium">TalentPair has pool of new CS undergraduates eager to look for jobs. At TalantPair, you can sift through applicants using precise filters, and our algorithm can list the best-matching candidates. This fast, easy process finds you the most qualified candidates regarding skills and personality. Best of all, we are free to browse and only charge a little when you have found your perfect candidate. </h1>
                        <Link to="/auth/signin" className='applicant-demo--signlink u-margin-left-huge'>Sign up for a free trial today &rarr; </Link>
                    </div>
                </div>

                <div className="flex-1-of-3">
                    <img src={personality} alt='Fig Personality Demo' className="applicant-demo--fig-img-2"/>
                </div>
            </div>
        </div>
    );
}