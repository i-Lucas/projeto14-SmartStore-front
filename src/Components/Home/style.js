import styled from 'styled-components';

const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
    background-image: url(${props => props.background_img});

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 2px solid black;
        border-radius: 20px;
    }

    .search-product {

        width: 100%;
        height: 5%;

        display: flex;
        justify-content: center;
        align-items: center;

        input {

            width: 85%;
            height: 80%;
            border-radius: 10px;
        }

        img {

            width: 15%;
            height: 80%;
        }

        .exit {

            cursor: pointer;

            ion-icon {

                margin-left: 5px;
                margin-right: 10px;
                font-size: 25px;
            }
        }
    }

    .categories-filters {

        width: 100%;
        height: 5%;

        display: flex;
        background-color: #000000;
        
        .categories {

            width: 50%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            h1 {

                font-family: 'Raleway';                
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;
            }
        }

        .filters {

            width: 50%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        
            h1 {
                
                font-family: 'Raleway';                
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;
            }
        }
    }

    .products {

        width: 100%;
        height: 85%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        overflow: scroll;
        margin-top: ${props => props.showFilters || props.showCategories ? '50px' : '0px'};

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

    .footer {

        width: 100%;
        height: 5%;
        display: flex;
        background-color: #000000;
        border-radius: 18px;

        .publish-product {

            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;

            h1 {
                
                font-family: 'Raleway';                
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;
            }

            ion-icon {

                color: #FFFFFF;
                font-size: 25px;
            }
        }

        .my-cart {

            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;

            h1 {
                
                font-family: 'Raleway';                
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #FFFFFF;
            }

            ion-icon {

                color: #FFFFFF;
                font-size: 25px;
            }
        }
    }


`
export default HomeContainer;