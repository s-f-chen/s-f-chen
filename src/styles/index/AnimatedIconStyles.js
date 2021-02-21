import styled from 'styled-components';

const AnimatedIconWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    a:hover + span {
        opacity: 1;
        transform: translateY(0px);
    }

    span {
        font-size: 0.7rem;
        text-transform: lowercase;
        position: absolute;
        bottom: -1rem;

        transition: 0.4s;
        opacity: 0;
        transform: translateY(-0.25rem);

        overflow: auto;
    }
`;

export default AnimatedIconWrapper;