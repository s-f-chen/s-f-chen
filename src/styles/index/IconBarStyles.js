import styled from 'styled-components';

const IconBarWrapper = styled.div`
    width: ${props => props.numIcons * 2.5}rem;
    display: flex;
    justify-content: space-between;
    margin-right: 1.5rem;
    flex-direction: row;
`;

export default IconBarWrapper;