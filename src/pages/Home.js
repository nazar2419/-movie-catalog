import React from 'react'
import {JumbotronContainer} from '../container/jumbotron';
import { FotterContainer } from '../container/footter';
import { FaqsContainer } from '../container/faqs';

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer/>
            <FotterContainer />
        </>
    )
}


