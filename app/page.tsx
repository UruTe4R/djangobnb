import Image from "next/image";
import styles from "./page.module.css";
import { inter } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      Django bnb

      <h2 className={styles.airbnb}>Django and next rules</h2>
    </main>
  );
}
