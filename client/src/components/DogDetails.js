import React, { useEffect } from "react";
import { dogsDetails } from "../redux/actions";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


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
    <div className="content">
      
      <div>
        <h1 className="title-page">
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
        <h1 className="title-dog">
          {detailDog.temperament || detailDog.temperaments?.map(e => e.name + " ")}
        </h1>
      </div>

      <div>
      
      <h4>
        Height: {`${detailDog.heightMin} - ${detailDog.heightMax}cm`}
      </h4>
      
      <h4>
        Weight: {`${detailDog.weightMin} - ${detailDog.weightMax}kg`}
      </h4>
      
      <h4>
        Life Span: {" "}
         {detailDog.createInDb ? `${detailDog.life_span} years` : detailDog.weightMax}
      </h4>

      </div>

      <button onClick={handleClick}>BACK HOME</button>

    </div>
  );
}
