import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import 'bootstrap/dist/css/bootstrap.min.css';

import './FAQ.scss'

const FAQ_text = [
  {
    question: "Lorem ipsum dolor?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis"
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis"
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
  }
]

const FAQ = () => {
  return (
    <Layout>
      <Seo title="FAQ" />
      <h2>FAQ</h2>
      <div className="FAQ-container">
        {FAQ_text.map((x, i) =>
            <div className="FAQ-element" key={i}>
              <p className="FAQ-question">{x.question}</p>
              <p className="FAQ-answer">{x.answer}</p>
            </div>
        )}
      </div>
    </Layout>
  )
}

export default FAQ