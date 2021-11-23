import React, { useState, useEffect } from "react"
import "./mint_pass_timer.scss"

function makeDateDiffObj(dateDiff) {
  if (dateDiff > 0) {
    const day = 86400000
    const hour = 3600000
    const minute = 60000
    const second = 1000

    const daysLeft = Math.floor(dateDiff / day)
    const hoursLeft = Math.floor((dateDiff % day) / hour)
    const minutesLeft = Math.floor((dateDiff % hour) / minute)
    const secondsLeft = Math.floor((dateDiff % minute) / second)

    return {
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    }
  }
  return {
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  }
}

let mintDate = 28800000

export default function MintPassTimer({ windowWidth }) {
  const [timer, setTimer] = useState(makeDateDiffObj(mintDate))

  useEffect(() => {
    setTimeout(() => {
      setTimer(makeDateDiffObj(mintDate))
      mintDate -= 1000
    }, 1000)
  }, [timer])

  return windowWidth < 500 ? (
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
          <span>mins</span>
        </div>
        <div className="mint-pass-timer-item">
          <b> {timer.seconds}</b>
          <span>secs</span>
        </div>
      </div>
    </div>
  ) : (
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
