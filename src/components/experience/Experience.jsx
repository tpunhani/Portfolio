import React from 'react'
import {useState, useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import { accenture, paytm, wynk, timesInternet, utd} from '../../data.js'
import './experience.scss'

export default function Experience() {

    const [selected, setSelected] = useState("grader")
    const [data, setData] = useState(accenture)

    const list = [{
        id: "accenture",
        title: "Accenture Solutions"
    },
    {
        id: "paytm",
        title: "Paytm"
    },
    {
        id: "wynk",
        title: "Wynk Pvt. Ltd."
    },
    {
        id: "timesinternet",
        title: "Times Internet"
    },
    {
        id: "grader",
        title: "UTD"
    }];


    useEffect(() => {
        switch(selected){
            case "accenture":
                setData(accenture);
                break;

            case "paytm":
                setData(paytm);
                break;

            case "wynk":
                setData(wynk);
                break;

            case "timesinternet":
                setData(timesInternet);
                break;

            case "grader":
                setData(utd);
                break;

            default:
                setData(accenture);

        }

    }, [selected])

    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title}
                    id={item.id}
                    active={selected === item.id}
                    setSelected = {setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {
                    <div className="item">
                        <h3>Job Title: <span>{data.jobTitle}</span></h3>
                        <h4>{data.time}</h4>
                        <ul>
                            {data.desc.map((d) => (
                                <li>{d.text}</li>
                            ))}
                            
                        </ul>
                    </div>
                }
                
                
            </div>
        </div>
    )
}
