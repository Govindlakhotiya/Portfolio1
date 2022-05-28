import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import {
    AboutDiv,
    Column,
    Img,
    AboutInfo,
    AboutInfoP,
    HeaderUl,
    HeaderLi,
    JelloHori,
} from './Styles';

import { Container, H1 } from '../../SharedStyles/SharedStyles';
const socialMediaLinks = [
    {
        id: 0,
        link: 'https://www.linkedin.com/in/govind-lakhotiya-531a2214a/',
        icon: <FaLinkedin />,
    },
    {
        id: 1,
        link: 'https://github.com/Govindlakhotiya',
        icon: <FaGithub />,
    },
    {
        id: 2,
        link: '#',
        icon: <FaTwitter />,
    },
    /* {
        id: 3,
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode />,
    }, */
];
const About = () => {
    return (
        <Container className='about'>
            <AboutDiv>
                <Column>
                    <Img src='https://github.com/Govindlakhotiya/Portfolio-/blob/main/public/ProjectImages/profile-1.jpg?raw=true' alt='my image' />
                </Column>
                <Column>
                    <H1>About Me</H1>
                    <AboutInfo>
                        <AboutInfoP>
                        Hello Everyone, I am Govind lakhotiya from Bundi. I graducted in BCA in Cloud technology in 2018 from Poornima University,Jaipur. During my BCA. I was part of a team that was building a platform for placement service. This exposure excited me and I was keen to build a career in coding.
                       
                        </AboutInfoP>
                        <AboutInfoP>
                            I am adaptable, proficient in remote collaboration,
                            and committed to achieving organizational goals.
                            With a knack for problem-solving and analytics, I am
                            passionate about solving Algorithmic problems with a
                            good hold on Data Structures.
                        </AboutInfoP>
                    </AboutInfo>
                    <HeaderUl>
                        {socialMediaLinks.map((item) => (
                            <JelloHori key={item.id}>
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <HeaderLi>{item.icon}</HeaderLi>
                                </a>
                            </JelloHori>
                        ))}
                    </HeaderUl>
                </Column>
            </AboutDiv>
        </Container>
    );
};

export default About;
