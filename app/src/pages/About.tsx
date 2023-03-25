import React from 'react';
import logo from './logo.svg';
import '../App.scss';
import "../../node_modules/nes.css/css/nes.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    // useRouteMatch,
    useParams
} from "react-router-dom";
import { Box, NavBox, Navbar, Footer, Page } from '../Components';


export function AboutPage() {
    return (
        <Page title='About me'>
            <h1>无可奉告</h1>
        </Page>
    );
}

