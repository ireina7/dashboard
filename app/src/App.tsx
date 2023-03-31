import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import "../node_modules/nes.css/css/nes.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";
// import { Box, NavBox, Navbar, Footer, Page } from './components/Components';
import { ErrorPage } from './pages/Error';
import { AboutPage } from './pages/About';
import { IndexPage } from './pages/Index'; 
import { BlogIndexPage, Blog, BlogPage, BlogHeader, LinkBlogPage, BlogWritingPage } from './pages/Blog';




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
    // useEffect(() => {
    //     dotenv.config()
    //     console.log(process.env)
    // }, [])
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<IndexPage />} />
                <Route path={"/blogs"} element={<BlogIndexPage blogs={blogs}/>} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/contact"} element={<AboutPage />} />
                <Route path={"/error"} element={<ErrorPage error="Test error"/>} />
                <Route path={"/blog/:id"} element={<LinkBlogPage />} />
                <Route path={"/blogwriting"} element={<BlogWritingPage />} />
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