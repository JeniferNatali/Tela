import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Bem vindo ao Aquanerdz</h1>
    <br />

    <Link href={'/tela'}>Usuario</Link>
    </main>
  );
}
