import style from "./productCard.module.css";
import { ExclamationMark } from "../icons/exclamationMark";

export function ProductCard({ product }) {
  console.log(product);

  return (
    <article className={style["container"]}>
      <p className={style["name"]}>{product.name}</p>
      <p className={style["price"]}>{product.price}</p>

      {!product.available ? (
        <div className={style["stock"]} style={{ stroke: "yellow" }}>
          <ExclamationMark size="sm" />
          <p>Out of stock</p>
        </div>
      ) : null}
    </article>
  );
}
