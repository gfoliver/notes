import styled from 'styled-components';

const Modal = styled.div`
    
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #000;
        opacity: .4;
        z-index: 999;
        transition: all .5s ease;
        animation: fadeInHalf .5s forwards;
    }

    .content {
        position: fixed;
        z-index: 1000;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 4px;
        padding: 30px;
        transition: all .5s ease;
        animation: fadeInFull .5s forwards;
        min-width: 30vw;
        max-width: 100%;
        max-height: 90%;
        overflow: auto;

        @media only screen and (max-width: 1200px) {
            min-width: 50vw;
        }

        @media only screen and (max-width: 950px) {
            min-width: 70vw;
        }
        
        @media only screen and (max-width: 500px) {
            min-width: 100vw;
            max-height: 100%;
            height: 100%;
        }

        &.noteModal {
            padding: 50px 30px;
        }

        .buttons {
            margin-top: 50px;
        }

        .cancel {
            padding: 15px 80px;
            background-color: #242424;
            color: #fff;
            border-radius: 4px;
            font-weight: bold;
            font-size: 20px;
            border: none;
        }

        .save {
            padding: 15px 80px;
            background-color: #13DD1B;
            color: #fff;
            border-radius: 4px;
            font-weight: bold;
            font-size: 20px;
            border: none;
            float: right;
        }

        h2 {
            margin-bottom: 30px;
        }

        .fullContent {
            white-space: pre-line;
        }

        .delete {
            cursor: pointer;
        }

        .inputGroup {
            margin-bottom: 30px;

            label {
                display: block;
                font-size: 20px;
                margin-bottom: 5px;
            }

            input,
            textarea {
                background-color: #E4E4E4;
                border: none;
                border-radius: 4px;
                padding: 15px 20px;
                display: block;
                width: 100%;
                resize: none;
                font-family: 'Roboto';
                font-weight: regular;
                font-size: 16px;

                &:focus,
                &:active {
                    outline: none;
                    box-shadow: none;
                }
            }
        }

        .colorsWrapper {
            display: flex;
        }
    }

    @keyframes fadeInFull {
        0% {
            opacity: 0;
            transition: all .5s ease;
        }

        100% {
            transition: all .5s ease;
            opacity: 1;
        }
    }

    @keyframes fadeInHalf {
        0% {
            opacity: 0;
            transition: all .5s ease;
        }

        100% {
            transition: all .5s ease;
            opacity: .4;
        }
    }
`

export default Modal