import Image from "next/image";
import Link from 'next/link';
import styles from "./seusdados.module.css";

export default function SeusDados() {
  return (
    <main className={styles.main}>
   <img public="/images/Group 116.png" alt="Group" className="group" />
    </main>
  );
}
