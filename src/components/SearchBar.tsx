import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./SearchBar.module.scss";
import grid from "@/styles/grid.module.scss";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (search) {
      router.push(`/items?search=${search}`);
    }
  }

  return (
    <header className={styles.searchBar}>
      <div className={classNames(grid.col10, styles.searchBar__container)}>
        <Image
          src="/Logo_ML@2x.png"
          alt="MercadoLibre"
          width={53}
          height={36}
          priority
        />
        <form className={styles.searchBar__form} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <Image
              src="/ic_Search@2x.png"
              alt="Buscar"
              width={18}
              height={18}
              priority
            />
          </button>
        </form>
      </div>
    </header>
  );
}
