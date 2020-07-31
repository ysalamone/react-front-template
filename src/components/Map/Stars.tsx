import React from 'react';
import IconStar from '../IconStar';
import styled from 'styled-components';

interface IProps {
    rating: number
}

const StyledContainer = styled.div`
    flex: 1;

    & > svg {
        width: 20px;
    }
`;

const Stars = ({ rating }: IProps): JSX.Element => {
    const noteBy5 = rating / 2;
    const decimalPart = rating % 1;
    const numberOfFullStars = Math.trunc(noteBy5);

    return (
        <StyledContainer>
            <IconStar type={numberOfFullStars >= 1 ? 'full' : (decimalPart < 0.5) ? 'empty' : 'half'} />
            <IconStar type={numberOfFullStars >= 2 ? 'full' : (decimalPart < 0.5 || numberOfFullStars < 1) ? 'empty' : 'half'} />
            <IconStar type={numberOfFullStars >= 3 ? 'full' : (decimalPart < 0.5 || numberOfFullStars < 2) ? 'empty' : 'half'} />
            <IconStar type={numberOfFullStars >= 4 ? 'full' : (decimalPart < 0.5 || numberOfFullStars < 3) ? 'empty' : 'half'} />
            <IconStar type={numberOfFullStars >= 5 ? 'full' : (decimalPart < 0.5 || numberOfFullStars < 4) ? 'empty' : 'half'} />
        </StyledContainer>
    );
};

export default Stars;