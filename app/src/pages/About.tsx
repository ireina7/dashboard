import React from 'react';
import '../App.scss';
import "../../node_modules/nes.css/css/nes.css"
import {
    Link,
} from "react-router-dom";
import { Page } from '../components/Components';


export function AboutPage() {
    return (
        <Page title='About me'>
            <h1>无可奉告</h1>
        </Page>
    );
}

