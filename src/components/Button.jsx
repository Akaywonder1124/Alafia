import styles from "../styles/Button.module.css";

export default function Button({ type, label }) {
  return <button className={`${styles[type]} outfit-medium`}>{label}</button>;
}
