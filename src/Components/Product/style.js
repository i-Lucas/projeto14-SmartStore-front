import styled from 'styled-components';

const ProductContainer = styled.div`

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
        height: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 5px;

        h1 {

            font-family: 'Raleway';
            font-weight: 700;
            font-size: 20px;
            color: #000000;
        }

        ion-icon {

            font-size: 30px;
            cursor: pointer;
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

    .options {

        width: 100%;
        height: 5%;

        display: flex;
        justify-content: center;

        .buy {

            width: 95%;
            height: 100%;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;
            border: 1px solid black;
            border-radius: 10px;

            h1 {

                font-family: 'Raleway';
                font-weight: 700;
                font-size: 16px;
                color: #000000;
                cursor: pointer;
            }

            .red   {  color: red;     }
            .green {  color: green;   }

            ion-icon {

                font-size: 20px;
            }
        }

        .edit-delete {

            width: 95%;
            height: 100%;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
            border: 1px solid black;
            border-radius: 10px;

            .edit {

                width: 50%;
                height: 100%;

                display: flex;
                justify-content: space-evenly;
                align-items: center;
                cursor: pointer;

                h1 {

                    font-family: 'Raleway';
                    font-weight: 700;
                    font-size: 16px;
                    color: #000000;
                    cursor: pointer;
                }

                ion-icon {

                    font-size: 20px;
                }
            }

            .delete {

                width: 50%;
                height: 100%;

                display: flex;
                justify-content: space-evenly;
                align-items: center;
                cursor: pointer;

                h1 {

                    font-family: 'Raleway';
                    font-weight: 700;
                    font-size: 16px;
                    color: #000000;
                    cursor: pointer;
                }

                ion-icon {

                    font-size: 20px;
                }
            }
        }
    }

    .content {

        width: 95%;
        height: 50%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h1 {

            font-family: 'Raleway';
            font-weight: 700;
            font-size: 14px;
            color: #000000;
            cursor: pointer; 
        }

        .product-name {

            width: 100%;
            height: 10%;

            display: flex;
            align-items: center;
            border: 1px solid black;
            border-radius: 10px;

            h1 {

                color: blue;
                margin-left: 10px;
            }
        }
        
        .product-price {

            width: 100%;
            height: 10%;

            display: flex;
            align-items: center;
            border: 1px solid black;
            border-radius: 10px;

            h1 {

                color: blue;
                margin-left: 10px;
            }
        }

        .product-description {

            width: 100%;
            height: 20%;
            border: 1px solid black;
            border-radius: 10px;
            
            h1 {

                margin-top: 10px;
                color: blue;
                margin-left: 10px;
            }
        }

        .product-owner {

            width: 100%;
            height: 10%;
            border: 1px solid black;
            border-radius: 10px;

            h1 {

                margin-top: 10px;
                color: blue;
                margin-left: 10px;
            }
        }

        .product-category {

            width: 100%;
            height: 10%;

            display: flex;
            align-items: center;
            border: 1px solid black;
            border-radius: 10px;

            h1 {

                color: blue;
                margin-left: 10px;
            }
        }
    }


`

export default ProductContainer;