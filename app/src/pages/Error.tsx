import React from 'react';
import '../App.scss';
import "../../node_modules/nes.css/css/nes.css"
import {
    Link,
} from "react-router-dom";
import { Page } from '../components/Components';


export function ErrorPage({error}: {error: string}) {
    return (
        <Page title="Error page">
            <h1>Error: {error}</h1>
        </Page>
    );
}