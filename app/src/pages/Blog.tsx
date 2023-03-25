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
    useParams,
    useSearchParams
} from "react-router-dom";
import { Box, NavBox, Navbar, Footer, Page, InnerHtml } from '../Components';
import { ErrorPage } from './Error';
import { marked } from 'marked';
import { todo, unimplemented } from '../Utils';


export interface BlogHeader {
    title: string,
    author: string,
    date: string,
    preview: string,
    link: string,
}

export interface Blog {
    header: BlogHeader,
    content: string,
}


export function BlogIndexPage({blogs}: {blogs: BlogHeader[]}) {
    useEffect(() => {}, []);
    return (
        <Page title='Blogs'>
            <p className="pixel-font">
                Totally <b>{blogs.length}</b> {blogs.length > 1 ? "blogs" : "blog"}.
            </p>
            {blogs.map(blog => {
                return (
                    <NavBox title={blog.title} theme="day" linkTo={blog.link}>
                        {/* {blog.preview}<br /> */}
                        <InnerHtml htmlText={marked.parse(blog.preview)} />
                    </NavBox>
                );
            })}
        </Page>
    );
}


export function BlogPage({blog}: {blog: Blog}) {
    return (
        <Page title={blog.header.title}>
            <p className='pixel-font'>Author: {blog.header.author}</p>
            <InnerHtml htmlText={marked.parse(blog.content)} />
        </Page>
    );
}



function fetchBlog(id: string): Blog {
    return todo();
}

function fetchBlogHeaders(): BlogHeader[] {
    return todo();
}


export function LinkBlogPage() {
    let { id } = useParams();
    useEffect(() => {
        if (id) {
            console.log(id);
        }
    }, []);
    if(!id) {
        return <ErrorPage error="Blog id not found"/>;
    }
    
    console.log(id);
    let blog = fetchBlog(id);
    return <BlogPage blog={blog}/>
}


