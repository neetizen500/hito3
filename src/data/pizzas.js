import pizzaImg from "../assets/pizzas/pepperoni.png";

// Array de pizzas para el catálogo (Home / CardPizza).
// Tip: reemplaza "image: pizzaImg" por tus propias fotos cuando las tengas.
export const pizzas = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Salsa de tomate, mozzarella fresca y albahaca.",
    price: 8990,
    image: pizzaImg,
    ingredients: ["Salsa de tomate", "Mozzarella fresca", "Albahaca", "Aceite de oliva"],
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: "Doble mozzarella y pepperoni clásico americano.",
    price: 9990,
    image: pizzaImg,
    ingredients: ["Salsa de tomate", "Mozzarella", "Pepperoni", "Orégano"],
  },
  {
    id: 3,
    name: "Pizza Cuatro Quesos",
    description: "Mozzarella, gorgonzola, parmesano y provolone.",
    price: 10990,
    image: pizzaImg,
    ingredients: ["Mozzarella", "Gorgonzola", "Parmesano", "Provolone"],
  },
  {
    id: 4,
    name: "Pizza Vegetariana",
    description: "Pimentón, champiñones, cebolla morada y aceitunas.",
    price: 9490,
    image: pizzaImg,
    ingredients: ["Pimentón", "Champiñones", "Cebolla morada", "Aceitunas", "Mozzarella"],
  },
  {
    id: 5,
    name: "Pizza Napolitana",
    description: "Tomate, mozzarella, anchoas y orégano.",
    price: 9990,
    image: pizzaImg,
    ingredients: ["Tomate", "Mozzarella", "Anchoas", "Orégano"],
  },
  {
    id: 6,
    name: "Pizza Hawaiana",
    description: "Jamón, piña y mozzarella.",
    price: 9490,
    image: pizzaImg,
    ingredients: ["Jamón", "Piña", "Mozzarella"],
  },
];

// Simulación del carrito de compras (Cart.jsx).
export const pizzaCart = [
  { id: 101, name: "Napolitana", price: 5950, quantity: 1, image: pizzaImg },
  { id: 102, name: "Española", price: 7250, quantity: 1, image: pizzaImg },
  { id: 103, name: "Salame", price: 5990, quantity: 1, image: pizzaImg },
];
