import styled from 'styled-components';

const card = styled.div`
    border-radius: 4px;
    padding: 50px 20px;
    position: relative;
    background: #fff;

    .colorBar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background-color: ${props => props.color || '#fff'};
        border-radius: 4px 4px 0 0;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .delete {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 6px;
        color: #fff;
        background-color: #FF3F3F;
        border-radius: 4px;
        width: 30px;
        height: 30px;
        text-align: center;
    }

    .complete {
        position: absolute;
        right: 10px;
        bottom: 10px;
        padding: 6px 8px;
        background-color: #242424;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        z-index: 2;
        border-radius: 4px;
        border: none;
    }
`;

export default card;