import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
    <main className="container">
      <Header />

      <section className="row g-4 pb-5">
        {pizzas.map((pizza) => (
          <div className="col-12 col-sm-6 col-lg-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
              image={pizza.image}
              ingredients={pizza.ingredients}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
