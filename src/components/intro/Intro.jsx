import './intro.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init( textRef.current, {
            showCursor: false,
            typeSpeed: 100,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Developer", "Engineer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man_transparent.png" alt="My Picture" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Tarun Punhani</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                    <h4>I'm having more than 6 years of IT experience. Currently doing my Master's from University of Texas At Dallas.</h4>
                    <button>My Resume</button>
                </div>
                <a href="#experience">
                    <ExpandMoreIcon className="expandButton"/>
                </a>
                
                
            </div>
        </div>
    )
}
