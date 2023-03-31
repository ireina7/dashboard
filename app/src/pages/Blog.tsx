import React, { useEffect, useRef, useState } from 'react';
import '../App.scss';
import "../../node_modules/nes.css/css/nes.css"
import {
    BrowserRouter as Router,
    Link,
    // useRouteMatch,
    useParams,
} from "react-router-dom";
import { NavBox, Page, InnerHtml } from '../components/Components';
import { ErrorPage } from './Error';
import { marked } from 'marked';
import { todo, unimplemented } from '../utils/Utils';
import { urls } from '../fetch/Urls';
// import { config } from '../utils/Config';
import axios from 'axios';


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
    useEffect(() => {
        axios.get(urls.blogHeaders).then((res) => {
            console.log("Blogs loaded")
        });
    }, []);
    return (
        <Page title='Blogs'>
            <p className="pixel-font">
                Totally <b>{blogs.length}</b> {blogs.length > 1 ? "blogs" : "blog"}.
            </p>
            <Link to="/blogwriting">Add new blog</Link>
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

/**
 * Page to show a blog content
 * @param {Blog} blog
 * @returns JSX
 */
export function BlogPage({blog}: {blog: Blog}) {
    return (
        <Page title={blog.header.title}>
            <p className='pixel-font'>Author: {blog.header.author}</p>
            <InnerHtml htmlText={marked.parse(blog.content)} />
        </Page>
    );
}

/**
 * Page for blog writing
 * @returns JSX
 */
export function BlogWritingPage() {
    const [value, setValue] = useState("Text here");
    const textRef = useRef<HTMLTextAreaElement>(null);

    // Listen textarea content changing
    const handleChange = (event: any) => {
        setValue(event.target.value);
        const target = event.target as HTMLTextAreaElement;
        if(!textRef.current) {
            return;
        }
        textRef.current.style.height = "30px";
        textRef.current.style.height = `${target.scrollHeight + 30}px`;
    };

    // Submit handler
    const submit = () => {
        axios.get(urls.submit).then((res) => {
            console.log("Article submitted")
            alert("Blog submitted")
        })
    }

    // The page
    return (
        <Page title="Blog writing">
            <textarea 
                id="textarea_field" 
                className="nes-textarea" 
                value={value} 
                ref={textRef}
                onChange={handleChange} 
            />
            <div id="markdown-preview">
                <InnerHtml htmlText={marked.parse(value)} /> 
            </div>
            <button type="button" className="nes-btn is-success" onClick={submit}>
                Submit
            </button>
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
    // let [blog, setBlog] = useState(null);
    useEffect(() => {
        if (!id) {
            console.log("Id is not defined");
        }
        axios.get(urls.blog + "/" + id).then((res) => {
            console.log("Blog loaded")
        });
    }, []);
    if(!id) {
        return <ErrorPage error="Blog id not found"/>;
    }
    
    console.log(id);
    let blog = fetchBlog(id);
    return <BlogPage blog={blog}/>
}


