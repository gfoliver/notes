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
`;

export default button