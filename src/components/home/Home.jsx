import React from 'react';
import Header from './Header';
import SkillList from './SkillList';
import Experience from './Experience';
import RecentWork from './RecentWork';

const Home = () => {
    return (
        <div>
            <Header/>
            <SkillList />
            <Experience />
            <RecentWork />
        </div>
    );
};

export default Home;