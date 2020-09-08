import React, { useState, useEffect } from 'react';

import infoImg from '../../assets/photo.png';
import avatar from '../../assets/avatar.png';

import facebook from '../../assets/icon-facebook.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import twitter from '../../assets/icon-twitter.svg';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open);
    }, [open])

    return (
        <Container>
            <img src={infoImg} alt="info" />
            <Content>
                <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>

                <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>

                <div className="profile">
                    <div className="details">
                        <img src={avatar} alt="avatar" />
                        <div className="descripton">
                            <strong>Michelle Appleton</strong>
                            <span>28 Jun 2020</span>
                        </div>
                    </div>
                    <div className="share">
                        <button className={open ? 'focused' : ''} onClick={() => setOpen(!open)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill={open ? '#fff' : '#6E8098'} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
                        </button>

                        <div className={open ? 'tooltip active' : 'tooltip'}>
                            <span>SHARE</span>
                            <a href="facebook">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="twitter">
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <a href="pinterest">
                                <img src={pinterest} alt="Pinterest" />
                            </a>
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    )
};

export default Dashboard;