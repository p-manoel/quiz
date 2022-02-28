import styles from '../styles/Statistic.module.css';

interface StatisticProps {
  value: number | string
  text: string
  backgroundColor?: string
  color?: string
}

export default function Statistic(props: StatisticProps) {
  return (
    <div className={styles.statistic}>
      <div className={styles.value} style={{
        backgroundColor: props.backgroundColor ?? '#FDD60F',
        color: props.color ?? '#333'
      }}>
        {props.value}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}