import SearchBar from "@/components/SearchBar";
import "../styles/globals.scss";
import type { Metadata } from "next";
import grid from "@/styles/grid.module.scss";
import styles from "./app.module.scss";

export const metadata: Metadata = {
  title: "MercadoLibre",
  description: "Frontend Test",
};

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <>
      <SearchBar />
      <main className={styles.main}>
        <div className={grid.col10}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
