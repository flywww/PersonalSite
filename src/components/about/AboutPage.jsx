import React from 'react';
import HeaderSection from './HeaderSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import RecentWorkSection from './RecentWorkSection';

const AboutPage = () => {
    return (
        <div>
            <HeaderSection/>
            <SkillSection />
            <ExperienceSection />
            <RecentWorkSection />
        </div>
    );
};

export default AboutPage;