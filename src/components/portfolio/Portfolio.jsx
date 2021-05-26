import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {useState, useEffect} from 'react'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../../data.js'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState(featuredPortfolio)

    const list = [{
        id: "featured",
        title: "featured"
    },
    {
        id: "web",
        title: "Web App"
    },
    {
        id: "mobile",
        title: "Mobile App"
    },
    {
        id: "design",
        title: "design"
    },
    {
        id: "branding",
        title: "branding"
    }];


    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;

            case "web":
                setData(webPortfolio);
                break;

            case "mobile":
                setData(mobilePortfolio);
                break;

            case "design":
                setData(designPortfolio);
                break;

            case "branding":
                setData(contentPortfolio);
                break;

            default:
                setData(featuredPortfolio);

        }

    }, [selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
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
                {data.map((d) => (
                    <div className="item">
                        <img 
                        src={d.img} 
                        alt="" />

                        <h3>{d.title}</h3>
                    </div>
                ))}
                
                
            </div>
        </div>
    )
}
