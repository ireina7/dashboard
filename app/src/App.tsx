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
import { Box, NavBox, Navbar, Footer, Page } from './Components';
import { ErrorPage } from './pages/Error';
import { AboutPage } from './pages/About';
import { IndexPage } from './pages/Index'; 
import { BlogIndexPage, Blog, BlogPage, BlogHeader, LinkBlogPage } from './pages/Blog';




const blogs: BlogHeader[] = [
    {
        title: "Test blog",
        author: "Ireina",
        date: "2023-03-25",
        preview: "# Marked in the browser\n\nRendered by **marked**.",
        link: "/blog/0"
    }
]

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<IndexPage />} />
                <Route path={"/blogs"} element={<BlogIndexPage blogs={blogs}/>} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/contact"} element={<AboutPage />} />
                <Route path={"/error"} element={<ErrorPage error="Test error"/>} />
                <Route path={"/blog/:id"} element={<LinkBlogPage />} />
            </Routes>
        </Router>
    );
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }