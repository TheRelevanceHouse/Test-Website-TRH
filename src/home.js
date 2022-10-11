import React from 'react';
import Hero from './hero-section';
import Welcome from './welcome-section';
import './fonts/norwester.ttf';
import Approach from './approach-section';
import How from './how-section';
import What from './what-section';
import IsItAThing from './is-it-a-thing';
import TeamSection from './team-section';
import JobSection from './job-section';
import Testimonials from './testimonials';
import Map from './map';
import Numbers from './numbers';
import Clients from './clients';


function HomePage() {
    return (
    <div>
        <Hero />
        <Welcome />
        <Approach />
        <How />
        <What />
        <IsItAThing />
        <Clients />
        <Testimonials />
        <Numbers/>
        <Map/>
        <TeamSection />
        <JobSection />
    </div>
    );
}
export default HomePage;