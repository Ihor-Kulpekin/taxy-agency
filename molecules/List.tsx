import React from 'react';
import styled from 'styled-components';
import ListItem from '../atoms/ListItem';

const WrapperList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const List = () => {
    return (
        <WrapperList>
            <ListItem heading="home pickup" />
            <ListItem heading="fast booking" />
            <ListItem heading="bonuses for ride" />
            <ListItem heading="gps searching" />
        </WrapperList>
    );
};

export default List;
