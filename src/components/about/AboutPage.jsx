import React from 'react';
import HeaderSection from './HeaderSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import RecentWorkSection from './RecentWorkSection';

const AboutPage = () => {
    return (
        <main>
            <HeaderSection/>
            <SkillSection />
            <ExperienceSection />
            <RecentWorkSection />
        </main>
    );
};

export default AboutPage;