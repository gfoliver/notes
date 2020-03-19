import styled from 'styled-components'

const button = styled.button`
    border: none;
    background: ${props => props.background || '#fff'};
    padding: 20px 50px;
    font-weight: bold;
    color: #404040;
    border-radius: 4px;
    font-size: 25px;

    & + button {
        margin-left: 30px;
    }

    @media only screen and (max-width: 750px) {
        padding: 10px 30px;
        font-size: 18px;
    }

    @media only screen and (max-width: 455px) {
        padding: 5px 10px;
        font-size: 15px;
    }
`;

export default button