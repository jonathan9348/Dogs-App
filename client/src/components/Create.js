import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createDog, getTemperaments } from "../redux/actions";
import { Link } from "react-router-dom";
import validation from "./validation";

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();

  const temperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});

  const [dogs, setDogs] = useState({
    name: "",
    image: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    lifeSpan: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function changeInput(e){
    setDogs({
      ...dogs,
      [e.target.name]: e.target.value,
  });

  setErrors(
    validation({
      ...dogs,
      [e.target.name]: e.target.value,
    })
  );
}

  function handleSelect(e) {
    setDogs({
      ...dogs, //traeme lo que ya habia y concatenale el e.target.value --> agrega al arreglo todo lo que vaya seleccionando
      temperament: Array.from(new Set([...dogs.temperament, e.target.value])),
    });
    
  }

  function handleDelete(e) {
    setDogs({
      ...dogs,
      temperaments: dogs.temperament.filter((d) => d !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createDog(dogs));
    alert("Puppy created successfully");

    setDogs({
      name: "",
      image: "",
      weightMin: "",
      weightMax: "",
      heightMin: "",
      heightMax: "",
      life_span: "",
      temperament: [],
    });

    history.push("/home"); //histoy:navego en mi historial y con el push agrego el nombre de la ruta a donde se ubicara
  }

  const checkProperties = (obj) => {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] !== "") return false;
    }
    return true;
  };

  return (
    <div className="title">
      <h1 className="title-post">Create your own puppy</h1>

      <form className="form-name" noValidate onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <div >
              <div>
                <label className="tit">-Name-</label>
                <input
                  
                  className="label-input"
                  type="text"
                  name="name"
                  value={dogs.name}
                  onChange={(e) => changeInput(e)}
                />
                {errors.name ? (<p className="errors">{errors.name}</p>) : null}
              </div>
              <div >
              <label className="tit">-Weight-Min-</label>
                <input
                  
                  className="label-input"
                  type="text"
                  name="weightMin"
                  value={dogs.weightMin}
                  onChange={(e) => changeInput(e)}
                />
                {errors.weightMin ? (<p className="errors">{errors.weightMin}</p>) : null}
                    
                    
                </div>
              <div >
              <label className="tit">-Weight-Max-</label>
                <input
                  
                  className="label-input"
                  type="text"
                  name="weightMax"
                  value={dogs.weightMax}
                  onChange={(e) => changeInput(e)}
                />
                {errors.weightMax ? (<p className="errors">{errors.weightMax}</p>) : null}
                    
                    
                </div>
              <div>
                <label className="tit">-Height-Min-</label>
                <input
                  className="label-input"
                  type="text"
                  name="heightMin"
                  value={dogs.heightMin}
                  onChange={(e) => changeInput(e)}
                />
                {errors.heightMin ? (<p className="errors">{errors.heightMin}</p>) : null}
              </div>
              <div>
                <label className="tit">-Heigth-Max-</label>
                <input
                  className="label-input"
                  type="text"
                  name="heightMax"
                  value={dogs.heightMax}
                  onChange={(e) => changeInput(e)}
                />
                {errors.heightMax? (
                  <p className="errors">{errors.heightMax}</p>
                ) : null}
              </div>
            </div>
            <div>
              <label className="tit">-Image-</label>
              <input
                className="label-input"
                type="text"
                name="image"
                value={dogs.image }
                placeholder="URL..."
                onChange={(e) => changeInput(e)}
              />
            </div>
          </div>
          <div className="check">
            <label className="tit">-Temperaments-</label>
            <div className="tempdiv">
              <select className="label-input" onChange={(e) => handleSelect(e)}>
                {temperaments?.map((d) => ( //Reducer
                  <option value={d.name} key={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>

              <ul>
                <li>{dogs.temperament.map((e) => e)}</li> {/*estado inicial*/}
              </ul>
            </div>
          </div>

          {!Object.keys(errors).length  && !checkProperties(dogs) ? ( //SI EN ERRORS NO EXISTEN PROPIEDADES Y MI OBJETO RECIPES NO TIENE NINGUNA PROP NULL, ENTONCES HABILITAME EL BOTON
            <button type="submit" className="btn-post"> 
              <span>Create</span>
            </button>
          ) : (
            <button disabled type="submit" className="btn-post">
              <span>Create</span>
            </button>
          )}
        </div>
      </form>
      <Link to="/home">
        <button className="btn-back">Volver</button>
      </Link>
    </div>
  );
}
