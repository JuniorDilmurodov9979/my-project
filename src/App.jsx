import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./componets/Header/Header";
import { List } from "./componets/List/List";
import "./index.css";
import { Main } from "./componets/Main/Main";
import "./main.css";
export default function App() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="hero">
          <div className="container">
            <h1 className="visually-hidden">Country flag</h1>
            <h2 className="visually-hidden">Country flag list</h2>
            <Main />
            <List />
          </div>
        </section>
      </main>
    </>
  );
}
