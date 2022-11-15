import React from "react";


export default function Pagination({
  allDogs,
  dogsPage,
  setPagination,
  actualPage,
}) {
  const numberPage = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPage); i++) {
                        //Math.ceil devuelve el entero mayor o igual mas proximo de un numero dado.
    numberPage.push(i); // Ejemplo: Math.ceil(0.95) ==> (1)
  }

  return (
    <nav>
      <div className="grid-container">
        {allDogs < 8 ? (
          <div> {setPagination(1)} </div>
        ) : (
          numberPage &&
          numberPage.map((n) => (
            <button
              onClick={() => setPagination(n)}
              className={
                actualPage === n ? "active items letters" : "items letters"
              }>
              {n}
            </button>
          ))
        )}
      </div>
    </nav>
  );
}