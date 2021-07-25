import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import icon from '../images/anakin.jpg'
import arrow from '../images/arrow.svg'
import hat from '../images/itemHat.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';

import './landing.scss'

const roadmap_text = [
    {
        image: icon,
        number: 1,
        arrow: "roadmap-arrow",
        header: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
    },
    {
        image: icon,
        number: 2,
        arrow: "roadmap-arrow",
        header: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
      },
      {
        image: icon,
        number: 3,
        arrow: "roadmap-arrow",
        header: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
      },
      {
        image: icon,
        number: 4,
        arrow: "roadmap-arrow",
        header: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      },
      {
        image: icon,
        number: 5,
        arrow: "roadmap-none",
        header: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      }
]

const landing = () => {
    return (
        <Layout>
            <Seo title="landing" />
            <h2>О продукте</h2>
            <div className="items-container">
                <h3 className="items-header">
                    10,000 unique NFTs
                </h3>
                <h3 className="items-header">
                    100 unique properies
                </h3>
                <div className="items-list">
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Common items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Wild items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Cyber items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Rasta items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Protection items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Superhero items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Afterlife items
                        </p>
                    </div>
                    <div className="item">
                        <img className="item-image" alt="item" src={hat}></img>
                        <p className="item-description">
                            Precious items
                        </p>
                    </div>
                </div>
                <div className="parts-list">
                    <p className="part"><span className="part-number">9</span><br/>
                        Backgrounds
                    </p>
                    <p className="part"><span className="part-number">12</span><br/>
                        Skins
                    </p>
                    <p className="part"><span className="part-number">8</span><br/>
                        Eyes
                    </p>
                    <p className="part"><span className="part-number">13</span><br/>
                        Mouthes
                    </p>
                    <p className="part"><span className="part-number">6</span><br/>
                        Neckles
                    </p>
                    <p className="part"><span className="part-number">16</span><br/>
                        Heads
                    </p>
                    <p className="part"><span className="part-number">11</span><br/>
                        Eyewears
                    </p>
                    <p className="part"><span className="part-number">5</span><br/>
                        Bodies
                    </p>
                </div>
            </div>
           

            <div className="roadmap-container">
                {roadmap_text.map((x, i) =>
                    <div className="roadmap-element" key={i}>
                        <p class="roadmap-number">{x.number}</p>
                        <img class={x.arrow} src={arrow}></img>
                        <img class="roadmap-image" src={x.image}></img>
                        <div key={i}>
                            <h4 class="roadmap-header">{x.header}</h4>
                            <p className="roadmap-text">{x.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default landing