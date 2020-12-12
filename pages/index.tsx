import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/Header';
import background from '../assets/background-header.png';
import FirstSlide from '../components/FirstSlide';
import { Wrapper } from '../styled-compoents/Wrapper';
import SecondSlide from '../components/SecondSlide';
import Tariffs from '../components/Tariffs';
import ChooseUs from '../components/ChooseUs';
import CallUs from '../components/CallUs';

const WrapperBlock = styled.div`
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: black;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <WrapperBlock>
                <Wrapper>
                    <Header />
                    <FirstSlide />
                </Wrapper>
            </WrapperBlock>
            <SecondSlide />
            <Tariffs />
            <ChooseUs />
            <CallUs />
            {/*<Footer />*/}
        </>
    );
}
