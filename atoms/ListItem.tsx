import React from 'react';
import styled from 'styled-components';

const WrapperListItem = styled.div`
    display: flex;
    margin-right: 60px;
    margin-bottom: 80px;

    .circle {
        width: 81px;
        height: 81px;
        border-radius: 41px;
        background-color: #ffc61a;
        margin-right: 30px;
    }

    .text {
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 25px;
            color: #ffc61a;
            font-weight: 900;
            font-family: 'Lato', serif;
            text-transform: uppercase;
            margin-bottom: 15px !important;
        }

        p {
            max-width: 367px;
            line-height: 27px;
            height: 82px;
            font-size: 18px;
            color: #ffffff;
            font-weight: 400;
            font-family: 'Lato', serif;
        }
    }

    :nth-child(2),
    :nth-child(4) {
        margin-right: 0;
    }

    @media (max-width: 1015px) {
        margin-right: 0;
    }

    @media (max-width: 500px) {
        .circle {
            width: 68px;
            height: 65px;
        }
    }
`;

interface ListItem {
    heading?: string;
}

const ListItem: React.FC<ListItem> = ({ heading }) => {
    return (
        <WrapperListItem>
            <div className="circle" />
            <div className="text">
                <h1>{heading}</h1>
                <p>
                    Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus
                    hendrerit, massa efficitur.
                </p>
            </div>
        </WrapperListItem>
    );
};

export default ListItem;
