import './works.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useState} from 'react'

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Game Development with Unity",
          desc:
            "Game is developed with Unity and C# Programming language. The concept of the game is simple where a bunny (player) drops from the sky and controlled with accelerometer.",
          img:
            "./assets/runnybunny.jpg",
          link:"https://play.google.com/store/apps/details?id=com.tarunapps.runnybunny&hl=en_US&gl=US",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "UT Dinder Web Application",
          desc:
            "Dating application developed with React and node.js. Mongo is used as a database for storing user and it's swipe status.",
          img:
            "./assets/utdinder.png",
          link:"https://github.com/vishnubapana/dating-app-website",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Machine Learning Fruits Classification",
          desc:
            "Fruits classification after parsing image data through skimage library. Decision Trees, SVM, ANN, Nearest Neighbour, bagging and boosting are used to classify.",
          img:
            "./assets/fruitsclassification.jpg",
          link:"https://github.com/tpunhani/MLProgrammingAssignments/tree/main/MLFinalProject",
        },
      ];


      const handleClick = (way) => {
          way === "left" 
          ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1) 
          : setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0)
      };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        <a href={d.link} target="_blank"><img src={d.img} alt="" /></a>
                        </div>
                    </div>
                </div>

            ))}
                
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={() => handleClick("left")}/>
            <ArrowBackIosIcon className="arrow right" onClick={() => handleClick()}/>
        </div>
    )
}
