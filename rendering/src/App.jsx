import "./App.css";
import { Layout } from "./components/layout/layout";
import { products } from "./data/products-mock";

function ProductCard({ product }) {
  return (
    <article>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </article>
  );
}

function App() {
  const names = [
    "James",
    "Robert",
    "John",
    "Michael",
    "David",
    "William",
    "Richard",
    "Joseph",
    "Thomas",
    "Christopher",
  ];

  return (
    <Layout>
      <section>
        <h2 className="text-center">Rendering av Lister</h2>

        <div className="flex flex-col items-center">
          <ul>
            {names.map((name) => {
              return <li key={name}>{name}</li>;
            })}
          </ul>

          <h3>Products</h3>
          <ul>
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
    </Layout>
  );
}

export default App;
