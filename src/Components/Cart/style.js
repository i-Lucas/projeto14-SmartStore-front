import styled from 'styled-components';

const CartContainer = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${props => props.background});

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 2px solid black;
        border-radius: 20px;
    }

    .header {

        width: 95%;
        height: 10%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid black;
        border-radius: 12px;

        .title {

            width: 70%;
            height: 100%;

            display: flex;
            justify-content: space-evenly;
            align-items: center;

            h1 {

                font-family: 'Raleway';
                font-weight: 700;
                font-size: 20px;
                color: #000000;
            }
    
            ion-icon {

                font-size: 30px;
            }
        }

        .back {

            width: 30%;
            height: 100%;

            display: flex;
            justify-content: flex-end;
            align-items: center;
    
            ion-icon {
    
                margin-right: 10px;
                font-size: 30px;
                cursor: pointer;
            }
        }
    }


    .content-container {

        width: 95%;
        height: 60%;
        margin-top: 10px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        overflow-y: scroll;      
        
        .product {

            width: 95%;
            min-height: 100px;

            margin-top: 10px;
            margin-bottom: 10px;

            border: 1px solid black;
            border-radius: 10px;
            flex-wrap: wrap;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .product-image {

                width: 25%;
                height: 90%;
                border: 1px solid black;
                border-radius: 10px;
                margin-right: 5px;

                img {
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                }
            }

            .product-info {
                
                width: 70%;
                height: 90%;
                border: 1px solid black;
                border-radius: 10px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .product-name {

                    width: 100%;
                    height: 33%;

                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: #FFFFFF;
                    border-radius: 10px;

                    h1 {

                        font-family: 'Raleway';                
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        color: 000000; 
                        margin-left: 10px;
                    }
                }

                .product-price {

                    width: 100%;
                    height: 33%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: #FFFFFF;
                    
                    h1 {

                        font-family: 'Raleway';                
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        color: 000000; 
                        margin-left: 10px;
                    }
                }

                .product-date {

                    width: 100%;
                    height: 33%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: #FFFFFF;
                    border-radius: 10px;

                    h1 {

                        font-family: 'Raleway';                
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 23px;
                        color: 000000; 
                        margin-left: 10px;
                    }
                }
            }
        }
    }

    .finalize-purchase {

        width: 95%;
        height: 20%;

        border: 1px solid black;
        border-radius: 10px;
    }

`


export default CartContainer;