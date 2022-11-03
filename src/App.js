import "../src/index.css";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <body className="App-body">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
