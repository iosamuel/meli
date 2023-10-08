import styles from "./ItemsList.module.scss";
import Image from "next/image";
import { formatPrice } from "@/utils";
import grid from "@/styles/grid.module.scss";
import classNames from "classnames";
import Link from "next/link";

export default function ItemsList({ items: { items } }: { items: Items }) {
  return (
    <section className={styles.itemsList}>
      {items.length ? (
        items.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.id}`}
            className={styles.itemsList__item}
          >
            <Image
              src={item.picture}
              alt={item.title}
              width={180}
              height={180}
            />
            <div className={grid.col12}>
              <div className={styles.itemsList__item__top}>
                <div>
                  <span className={styles.itemsList__item__price}>
                    {formatPrice(item.price.amount, item.price.currency)}
                  </span>
                  {item.free_shipping ? (
                    <span>
                      <Image
                        src="/ic_shipping@2x.png"
                        alt="Envío gratis"
                        width={18}
                        height={18}
                      />
                    </span>
                  ) : null}
                </div>
                <div
                  className={classNames(
                    grid.col3,
                    styles.itemsList__item__condition
                  )}
                >
                  {item.condition === "new" ? "Nuevo" : "Usado"}
                </div>
              </div>
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))
      ) : (
        <h2>No se encontraron resultados</h2>
      )}
    </section>
  );
}
