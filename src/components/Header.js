import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <div className="header-wrapper" style={{"--img": "url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80')"}}>
            <div className="main-info">
                <h1>Freelance Developer</h1>
                <h3>I design and develop Experience that make people's lives simple</h3>
                <ReactTypingEffect className="typed-text" text={["Web Development", "Web Design"]} speed={100} eraseSpeed={100} eraseDelay={3000} typingDelay={500}></ReactTypingEffect>
                <button href="#" className="btn-main-offer btn-lg">hire me</button>
            </div>
            
        </div>
    )
}

export default Header
