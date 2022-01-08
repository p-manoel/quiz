import styles from "../styles/Utterance.module.css";

interface UtteranceProps {
  text: string
}

export default function Utterance(props: UtteranceProps) {
  return (
    <div className={styles.utterance}>
      <span className={styles.text}>{props.text}</span>
    </div>
  )
}