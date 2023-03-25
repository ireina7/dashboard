import React from 'react';
import logo from './logo.svg';
import './App.scss';
import "../node_modules/nes.css/css/nes.css"
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




export function Box(
    {title, theme, children}: 
    {title: string, theme: "day" | "night", children: React.ReactNode}
) {
    let containterProps = 
        "nes-container with-title is-left" + (theme === "day" ? "" : " is-dark");
    return (
        <section className='Box'>
            <div className={containterProps}>
                <h1 className="nes-text title pixel-title">{title}</h1>
                {children}
            </div>
        </section>
    );
}



export function NavBox(
    {title, theme, children}: 
    {title: string, theme: "day" | "night", children: React.ReactNode}
) {
    let buttonProps = 
        "nes-btn showcode pixel-title" + (theme === "day" ? " is-primary" : " is-warning");
    return (
        <Box title={title} theme={theme}>
            {children}
            <button type="button" className={buttonProps}>
                &gt;&gt;=
            </button>
        </Box>
    );
}



export function Navbar() {
    return (
        <div>
        <ul className="Navbar center">
            <li><Link to="/" className="nes-text is-primary pixel-title">Home</Link></li>
            <li><Link to="/blogs" className="nes-text is-success pixel-title">Blogs</Link></li>
            <li><Link to="/contract" className="nes-text is-warning pixel-title">Contact</Link></li>
            <li><Link  to="/about" className="nes-text is-error pixel-title">About</Link></li>
        </ul>
        
        </div>
    );
}


export function Footer() {
    return (
        <div className='Footer'>
            <p className='pixel-title'>Powered by</p>
            <footer className="icon-list">
                <i className="nes-mario"></i>
                <i className="nes-ash"></i>
                <i className="nes-pokeball"></i>
                <i className="nes-bulbasaur"></i>
                <i className="nes-charmander"></i>
                <i className="nes-squirtle"></i>
                <i className="nes-kirby"></i>
                <button type="button" className="nes-btn is-error scroll-btn active">
                    <span>&lt;</span>
                </button>
            </footer>
        </div>
        
    );
}


export function Page({title, children}: {title: string, children: React.ReactNode}) {
    return (
        <div className="App Page">
            <h1 className="center pixel-title">{title}</h1>
            <Navbar />
            <hr /><br />
            {children}
            <br />
            <br />
            <hr />
            <Footer />
        </div>
    );
}
