import styles from "./Breadcrumbs.module.scss";

export default function Breadcrumbs({ categories }: { categories: string[] }) {
  return categories ? (
    <section className={styles.breadcrumbs}>
      {categories.map((category) => (
        <span key={category} className={styles.breadcrumbs__item}>
          {category}
        </span>
      ))}
    </section>
  ) : null;
}
