import styled from 'styled-components';

const colorInput = styled.div`
    border-radius: 4px;
    height: 20px;
    width: 20px;
    background-color: ${props => props.color};
    opacity: ${props => props.selected ? 1 : .5};
    margin-right: 15px;
    transition: all .3s ease;
`;

export default colorInput;