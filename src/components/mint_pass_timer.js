import React, { useState, useEffect } from "react"
import "./mint_pass_timer.scss"

const MintDate = new Date("2021-11-27T00:00:00")

function calcDate(date) {
  const day = 86400000
  const hour = 3600000
  const minute = 60000
  const second = 1000

  const daysLeft = Math.floor(date / day)
  const hoursLeft = Math.floor((date % day) / hour)
  const minutesLeft = Math.floor((date % hour) / minute)
  const secondsLeft = Math.floor((date % minute) / second)

  return {
    days: daysLeft,
    hours: hoursLeft,
    minutes: minutesLeft,
    seconds: secondsLeft,
  }
}

export default function MintPassTimer() {
  const dateDiifference = MintDate - Date.now()
  const [timer, setTimer] = useState(calcDate(dateDiifference))

  useEffect(() => {
    setTimeout(() => {
      setTimer(calcDate(dateDiifference))
    }, 1000)
  }, [timer])

  return (
    <div className="mint-pass-timer-container">
      <p>Until the mint-pass is left:</p>
      <div className="mint-pass-timer">
        <div className="mint-pass-timer-item">
          <b> {timer.days}</b>
          <span>days</span>
        </div>
        <div className="mint-pass-timer-item">
          <b> {timer.hours}</b>
          <span>hours</span>
        </div>
        <div className="mint-pass-timer-item">
          <b> {timer.minutes}</b>
          <span>minutes</span>
        </div>
        <div className="mint-pass-timer-item">
          <b> {timer.seconds}</b>
          <span>seconds</span>
        </div>
      </div>
    </div>
  )
}
