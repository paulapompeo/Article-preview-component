import React from 'react';

import { Container, Content } from './styles';

import infoImg from '../../assets/photo.png';
import avatar from '../../assets/avatar.png';
import share from '../../assets/icon-share.svg';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <img src={infoImg} alt="info"/>
            <Content>
                <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>

                <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            
                <div className="profile">
                    <div className="details">
                        <img src={avatar} alt="avatar"/>
                        <div className="descripton">
                            <strong>Michelle Appleton</strong>
                            <span>28 Jun 2020</span>
                        </div>
                    </div>
                    <button>
                        <img src={share} alt="share"/>
                    </button>
                </div>
            </Content>
        </Container>
    )
};

export default Dashboard;