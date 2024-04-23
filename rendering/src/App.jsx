import style from "./App.module.css";
import { Layout } from "./components/layout/layout";
import { products } from "./data/products-mock";
import { ProductCard } from "./components/productCard/productCard";

function App() {
  return (
    <Layout>
      <div className={style["margin"]}>
        <section>
          <h2 className="text-center">Rendering av Lister</h2>

          <div className="flex flex-col items-center">
            <h3>Products</h3>
            <ul className={style["product-list"]}>
              {products.map((product) => {
                return (
                  <li key={product.product_id}>
                    <ProductCard product={product} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
