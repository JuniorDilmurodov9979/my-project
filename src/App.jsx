import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./componets/header/Header";
// import { Main } from "./componets/main/main";
import { Search } from "./componets/search/search";
import { List } from "./componets/list/list";
import "./index.css";
import { Main } from "./componets/main/main";
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
