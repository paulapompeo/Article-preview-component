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

        font-weight: bold;
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

        button {
            border: 0;
            border-radius: 50%;
            width: 32px;  
            height: 32px;
            margin-top: 8px;

        }

    }


`;
