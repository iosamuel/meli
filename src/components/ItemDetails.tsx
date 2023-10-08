import styles from "./ItemDetails.module.scss";
import grid from "@/styles/grid.module.scss";
import classNames from "classnames";
import { formatPrice } from "@/utils";

export default function ItemDetails({ item }: { item: Item["item"] }) {
  return (
    <section className={styles.itemDetails}>
      <div className={styles.itemDetails__top}>
        <figure className={grid.col8}>
          <img src={item.picture} alt={item.title} />
        </figure>
        <div className={classNames(grid.col3, styles.itemDetails__top__info)}>
          <div className={styles.itemDetails__top__info__details}>
            <span>{item.condition === "new" ? "Nuevo" : "Usado"}</span>
            {" - "}
            <span>{item.sold_quantity} vendidos</span>
          </div>
          <h2>{item.title}</h2>
          <span className={styles.itemDetails__top__info__price}>
            {formatPrice(item.price.amount, item.price.currency)}
          </span>
          <button>Comprar</button>
        </div>
      </div>
      <div className={classNames(grid.col8, styles.itemDetails__description)}>
        <h3>Descripción del producto</h3>
        <p>{item.description}</p>
      </div>
    </section>
  );
}
