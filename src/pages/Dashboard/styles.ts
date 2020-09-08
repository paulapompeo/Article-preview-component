import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    max-width: 730px;
    > img {
        width: 285px;
        height: 280px;
        border-radius: 10px 0 0 10px;
        box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.503415);
    }
`;

export const Content = styled.div`
    flex: 1;
    height: 280px;
    background: #FFFFFF;
    padding: 32px 40px;
    border-radius: 0 10px 10px 0;
    box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.503415);

    h3 {
        width: 390px;
        height: 84px;
        margin-bottom: 12px;

        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.25px;
        color: #48556A;
    }

    p {
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0.121875px;

        color: #6E8098;
    }

    .profile {
        display: flex;
        align-content: center;
        justify-content: space-between;

        margin-top: 20px;

        .details {
            display: flex;

            img {
                width: 40px;
                border-radius: 50%;
                margin-right: 16px;
            }

            .descripton {
                display: flex;
                flex-direction: column;

                strong {
                    font-weight: bold;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: 0.121875px;

                    color: #48556A;

                }

                span {
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: 0.121875px;

                    color: #9DAEC2;
                }
            }
        }

        .share {
            position: relative;
            display: flex;
            justify-content: center;

            button {
            border: 0;
            border-radius: 50%;
            width: 32px;  
            height: 32px;
            margin-top: 8px;

                &.focused {
                    background:  #48556A;
                }
            }
            
            .tooltip {
                position: absolute;
                left: 50%;
                transform: translateX(-65%);
                bottom: calc(
                    100% + 12px
                );


                display: flex;
                align-items: center;
                justify-content: space-evenly;
                margin: 18px 36px;
                visibility: hidden;

                width: 248px;
                height: 55px;
                background:  #48556A;
                border-radius: 10px;
                box-shadow: 0px 10px 10px rgba(201, 213, 225, 0.503415);

                font-weight: 500;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: 5px;

                color: #9DAEC2;

                &::before {
                    content: '';
                    border-style: solid;
                    border-color: #48556A transparent;
                    border-width: 12px 12px 0 12px;
                    top: 100%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
                    
                &.active {
                    visibility: visible;
                    opacity: 1;
                } 
            }

        }
        
    }
`;
