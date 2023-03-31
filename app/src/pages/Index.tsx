import React from 'react';
import '../App.scss';
import "../../node_modules/nes.css/css/nes.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    Link,
} from "react-router-dom";
import { Box, NavBox, Navbar, Footer, Page } from '../components/Components';


export function IndexPage() {
    let codeString = 
`function Box(
    {title, theme, children}: 
    {title: string, theme: "day" | "night", children: React.ReactNode}
) {
    let containterProps = 
        "nes-container with-title is-left" + (theme === "day" ? "" : " is-dark");
    return (
        <section className='Box'>
            <div className={containterProps}>
                <h1 className="nes-text title pixel-title">{title}</h1>
                <p>{children}</p>
            </div>
        </section>
    );
}`;
    return (
        <Page title="Dashboard函数式导航盘">
            <p className="pixel-title">Modules listed below:</p>

            <NavBox title="Blog" theme="day" linkTo="/blogs">
                <p className="pure-text">
                    The official Blog articles frowns upon the use of inline styling as a primary means of styling projects and recommends the use of the className attribute instead.
                </p>
            </NavBox>
            <br />

            <NavBox title="中文显示搭建过程" theme="night" linkTo="">
                <p className="pure-text">
                The official React documentation frowns upon the use of inline styling as a primary means of styling projects and recommends the use of the className attribute instead.
                </p>
            </NavBox>
            <br />

            <section className='pixel-text'>
            <b>般若波羅蜜多心經</b><br />

            觀自在菩薩，行深般若波羅蜜多時，照見五蘊皆空，度一切苦厄。<br />
            舍利子, 色不異空, 空不異色；色即是空, 空即是色。受、想、行、識，亦復如是。<br />
            舍利子，是諸法空相：不生、不滅；不垢、不凈；不增、不減。<br />
            是故空中無色。無受、想、行、識；無眼、耳、鼻、舌、身、意；無色、香、聲、味、觸、法。無眼界，乃至無意識界；<br />
            無無明，亦無無明盡；乃至無老死，亦無老死盡。無苦、集、滅、道。<br />
            無智亦無得，以無所得故，菩提薩埵。依般若波羅蜜多故。心無掛礙，無掛礙故。無有恐怖，遠離顛倒夢想、究竟涅磐。<br />
            三世諸佛，依般若波羅蜜多故。得阿耨多羅三藐三菩提。<br />
            故知般若波羅蜜多，是大神咒，是大明咒，是無上咒，是無等等咒。能除壹切苦，真實不虛。<br />
            故說般若波羅蜜多咒，即說咒曰：“揭諦！揭諦！波羅揭諦！波羅僧揭諦！菩提薩婆訶！”
            </section>
            
            <br />
            <div className='Code' id='mycode' style={{fontFamily: 'monospace'}}>
                
                <SyntaxHighlighter 
                    className="Code" 
                    language="javascript" 
                    style={shadesOfPurple}
                    wrapLines={true}
                    showLineNumbers={true}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </Page>
    );
}

