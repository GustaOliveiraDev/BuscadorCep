import { FiSearch } from "react-icons/fi";
import "./style.css";
import { useState } from "react";
import api from "./services/api";

function App() {
  const [sentCep, setinput] = useState("");
  const [cep, setCep] = useState({});

  async function searchCep() {
    if (sentCep === "") {
      alert("escreva algum cep");
    }
    try {
      const response = await api.get(`${sentCep}/json`);
      setCep(response.data);
      setinput("");
    } catch {
      <div className="error">
        <span> Obs não conseguimos buscar seu cep </span>
      </div>
    }
  }
  return (
    <div className="container">
      <h3 className="title">Buscador de CEP</h3>
      <div className="question">
        <input
          type="text"
          value={sentCep}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Digite seu cep"
        />
        <button className="search" onClick={searchCep}>
          {" "}
          <FiSearch size={25} color="#FFF" />{" "}
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="result">
          <h2> Cep:{cep.cep} </h2>
          <span>Estado:{cep.uf}</span>
          <span>Bairro:{cep.bairro}</span>
          <span>Logradouro:{cep.logradouro}</span>
          <span>Complemento:{cep.complemento}</span>
        </main>
      )}

    </div>
  );
}

export default App;
