import styles from "./Chip.module.scss";

export default function Chip({ text }: { text: string }) {
  return (
    <div className={styles.Chip}>
      <span className={styles.Chip__Text}>{text}</span>
    </div>
  );
}
