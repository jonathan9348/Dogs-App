import React, { useEffect } from "react";
import { dogsDetails } from "../redux/actions";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style/DogDetails.css";


export default function DogDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() =>{
        dispatch(dogsDetails(id))
    }, [dispatch]);

    const detailDog = useSelector((state) => state.details);

    function handleClick(e) {
        e.preventDefault(e);
        history.push("/home");
      }

  return (
    <div>
      
      <div className="title-page">
        <h1 >
          Here you will find all the data of your puppy
        </h1>
      </div>
      
      <div>
        <h1 className="title-dog">
          {detailDog.name}
        </h1>
      </div>

      <img src={detailDog.image} alt='Image not found' className='img-st'/>

      <div>
        <h1 className="title-temp">
          Temperaments: {detailDog.temperament || detailDog.temperaments?.map(e => e.name + " ")}
        </h1>
      </div>

      <div>
      
      <h4 className="descr">
        Height: {`${detailDog.heightMin} - ${detailDog.heightMax}cm`}
      </h4>
      <hr/>
      
      <h4 className="descr">
        Weight: {`${detailDog.weightMin} - ${detailDog.weightMax}kg`}
      </h4>
      <hr/>
      
      <h4 className="descr">
        Life Span: {" "}
         {detailDog.createInDb ? `${detailDog.lifeSpan} years` : `${detailDog.lifeSpan}`}
      </h4>

      </div>

      <button onClick={handleClick} className="btnback">BACK HOME</button>

    </div>
  );
}
