import React, { useEffect } from 'react';
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


export interface Blog {
    title: string,
    author: string,
    date: string,
    preview: string,
}


export function BlogIndexPage({blogs}: {blogs: Blog[]}) {
    useEffect(() => {}, []);
    return (
        <Page title='Blogs'>
            {blogs.map(blog => {
                return (
                    <NavBox title={blog.title} theme="day">
                        {blog.preview}
                    </NavBox>
                );
            })}
        </Page>
    );
}

