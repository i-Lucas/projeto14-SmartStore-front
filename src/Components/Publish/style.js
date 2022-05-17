import styled from 'styled-components';

const PublishContainer = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.background_img});

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 1px solid black;
        border-radius: 20px;
    }

    .header {

        width: 95%;
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 10px;

        h1 {

            font-family: 'Raleway';
            font-weight: 700;
            font-size: 20px;
            color: #000000;
        }

        .back {

            ion-icon {

                font-size: 30px;
                cursor: pointer;
            }
        }
    }

    .img-container {

        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

        .img {

            width: 95%;
            height: 96%;
            border: 1px solid #000000;
            border-radius: 10px;
            background-image: url(${props => props.productImage});
            background-size: cover;
            background-position: center;
        }
    }

    .add-image {

        width: 100%;
        height: 5%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {

            width: 50%;
            height: 100%;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-family: 'Raleway';
            background: black;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }

    .form-container {

        width: 100%;
        height: 45%;
        display: flex;
        justify-content: center;
        align-items: center;

        form {

            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 5%;

            input {

                width: 95%;
                height: 10%;
                background: #FFFFFF;
                margin-bottom: 2%;
                border-radius: 4px;
                font-family: 'Raleway';                
                font-weight: 400;
                font-size: 20px;
                margin-top: 1%;
            }

            .category {

                width: 90%;
                height: 10%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                margin-top: 5%;
                margin-bottom: 5%;
                
                h1 {

                    margin-bottom: 5%;
                    font-family: 'Raleway';
                    font-weight: 700;
                    font-size: 18px;
                    color: #000000;
                }
            }

            button {

                width: 50%;
                height: 15%;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                font-family: 'Raleway';
                background: black;
                font-weight: 700;
                font-size: 20px;
                color: #FFFFFF;
                margin-top: 5%;
            }
        }
    }

`
export default PublishContainer;