import { Key } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Timer.module.css';

interface TimerProps {
  key: Key
  duration: number
  timeFinished: () => void
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeFinished}
        colors={['#85DAF2', '#BCE596', '#F2C866', '#F266BA']}
        colorsTime={[props.duration, (props.duration / 4) * 3, (props.duration / 4) * 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}