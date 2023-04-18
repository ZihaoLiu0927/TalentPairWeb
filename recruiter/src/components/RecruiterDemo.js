import React from 'react';
import { Link } from 'react-router-dom';

import filtering from '../../img/filtering.png';
import job from '../../img/job.png';
import recommendation from '../../img/recommendation.png';

export default function RecruiterDemo() {
    return (
        <div className="recruiter-demo"> 
            <div className = "flex-container u-margin-top-huge">
              <div className="flex-2-of-3">
                <div className="recruiter-demo-text">
                    <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Enhancing Recruitment with a Holistic Matching Algorithm </h1>
                    <h1 className="heading_secondary u-margin-left-medium u-margin-right-huge">TalentPair generates a list of potential candidates, computed from our matching algorithm, that not only takes in technical skills as a factor, but also company culture and job responsibility compatibility based on their past experiences as well as results from the behavior questionnaires and personality tests. Once interested in a particular candidate, the recruiter can explore their profile further and contact them for an interview.</h1>
                    <Link to="/auth/signin" className='recruiter-demo--signlink'>Sign up today! &rarr; </Link>
                </div>
              </div>

                <div className="flex-1-of-3">
                    <img src={recommendation} alt='Fig Recommendation Demo' className="recruiter-demo--fig-img-2"/>
                </div>
            </div>

            <div className = "flex-container u-margin-top-huge">
                <div className="flex-1-of-3">
                    <img src={filtering} alt='Fig Filter Demo' className="recruiter-demo--fig-img-2"/>
                </div>

                <div className="flex-2-of-3">
                    <div className="recruiter-demo-text">
                        <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Efficient and Personalized Job Seeker Filtering </h1>
                        <h1 className="heading_secondary u-margin-left-huge u-margin-right-medium">Recruiters also have access to a complete pool of job seekers, which they can filter based on different categories. These categories will use data from job seeker’s card about their preferences and generate a list of search results. Recruiters also have access to a complete pool of job seekers, which they can filter based on different categories. These categories will use data from job seeker’s card about their preferences and generate a list of search results.</h1>
                        <Link to="/auth/signin" className='recruiter-demo--signlink u-margin-left-huge'>Sign up for a free trial today &rarr; </Link>
                    </div>
                </div>
            </div>

            <div className = "flex-container u-margin-top-huge">
                <div className="flex-2-of-3">
                    <div className="recruiter-demo-text">
                        <h1 className="heading-primary--sub u-margin-left-small u-margin-right-small u-margin-bottom-medium u-center-text"> Streamlining the Hiring Process </h1>
                        <h1 className="heading_secondary u-margin-left-huge u-margin-right-medium">But it’s efficient to add new job opportunities to their profile and let the algorithm do its work in finding the best match not only for the specific job but also for the company overall. This way, recruiters can skip the few tedious steps of a regular application process and improve their hiring process. </h1>
                        <Link to="/auth/signin" className='recruiter-demo--signlink u-margin-left-huge'>Sign up for a free trial today &rarr; </Link>
                    </div>
                </div>

                <div className="flex-1-of-3">
                    <img src={job} alt='Fig Job Demo' className="recruiter-demo--fig-img-2"/>
                </div>
            </div>
        </div>
    );
}