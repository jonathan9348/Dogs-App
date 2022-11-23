import React, { useEffect, useState } from 'react'
import { filterTemp, getDogs, getTemperaments, orderAlf, filterDb, orderWeigth } from '../redux/actions';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './style/Home.css';


export default function Home() {

  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);

  //--------------PAGINADO---------------//
  const [actualPage, setActualPage] = useState(1);
  const [dogsPage, setDogsPage] = useState(8);
  const last = actualPage * dogsPage;
  const first = last - dogsPage;
  const result = dogs.slice(first, last);

  //-----------ORDENAMIENTO--------------//
  const [order, setOrder] = useState("");
  const [orWeigth, setOrWeight] = useState("");

  const setPagination = (page) => {
    return setActualPage(page);
  };

  useEffect(() =>{
    dispatch(getDogs())
    dispatch(getTemperaments())
  }, [dispatch]);

  //CONTROLADORES DE EVENTOS//
  function handleClick(e){
    e.preventDefault();
    dispatch(getDogs())
  };

  function handleFilterTempera(e){
    e.preventDefault();
    dispatch(filterTemp(e.target.value))
  };

  function handleFilterPost(e){
    dispatch(filterDb(e.target.value))
    setOrder(e.target.value)
  };

  function handleSortAlf(e){
    e.preventDefault();
    dispatch(orderAlf(e.target.value))
    
    setOrder(`Order ${e.target.value}`)
  };

  function handleSortedWeight(e){
    e.preventDefault();
    dispatch(orderWeigth(e.target.value))
    setOrWeight(`Order ${e.target.value}`)
  };

  return (
    <div className='cont1'>
      
      <div className='cont2'>
    
        <div className='btn-btn'>
          
          <button className='btn-1' onClick={(e) => {handleClick(e)}}>
            Load Puppy's
          </button>
          <Link to = '/create' >
            <button className='btn-1'>
              Create Puppy
            </button>
          </Link>
          <div className='search'>
          <SearchBar/>
        </div>
        </div>
        <hr/>
        

        <div>
          <h1 className='tit-page'>Hello! watch the dogs</h1>
          <hr/>
        </div>

        

        {/*--------FILTRADO Y ORDEN----------*/}
        <div className='filter'>
          <div>
            <div className='tit-filt'>Filter by temperaments</div>
            <select className='sbFilter' onChange={(e) => {handleFilterTempera(e)}}>
              <option value="All" default>All Temperaments</option>
              {temperaments.map((e) => (
                <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          <div>
          <div className='tit-filt'>Filter by name</div>
            <select className="sbFilter" onChange={(e) => {handleSortAlf(e)}}>
              <option value="All" default>All</option>
              <option value="asc_name">Sort(A-Z)</option>
              <option value="des_name">Sort(Z-A)</option>
            </select>
          </div>

          <div>
            <div className='tit-filt'>Filter by Weight</div>
            <select className="sbFilter" onChange={(e) => {handleSortedWeight(e)}}>
              <option value="All" default>All</option>
              <option value="asc_weight">Sort(min-max)</option>
              <option value="des_weight">Sort(max-min)</option>
            </select>
          </div>

          <div>
            <div className='tit-filt'>Created/Existing</div>
            <select className="sbFilter" onChange={(e) => {handleFilterPost(e)}}>
              <option value="All" default>All Dogs</option>
              <option value="Api">Puppy's in API</option>
              <option value="Created">Puppy's in DB</option>
            </select>
          </div>
        </div>
        <hr/>

        

        <div className="layout">
        { result?.map((e) => {
          return (
            <div key={e.id}>
              <Link to={"/home/" + e.id} className='link-card'>
                <Card
                  key={e.id}
                  name={e.name}
                  image={e.image}
                  temperament={e.temperament || e.temperaments?.map(e => e.name + " ")}
                  weight={`${e.weightMin} - ${e.weightMax}`}
                />
              </Link>
            </div>
          );
        })}
        

        
      </div>
      <div>
        {
          <Pagination
            dogsPage={dogsPage}
            allDogs={dogs.length}
            setPagination={setPagination}
            actualPage={actualPage}
            className="cont4"
          />
        }
      </div>

        
      </div>
    </div>
  )
}
