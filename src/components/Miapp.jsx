import '../App.css';
import SearchBar from './SearchBar'
import BooksData from '../Data.json'



const Miapp = () => {
  return (

    <div className="App2">
        <h1>Práctica 29</h1>
        <p className='mip'>Consulta tu biblioteca:</p>
        <SearchBar placeHolder="Ingrese título o autor del libro..." data={BooksData} />
    </div>

  )
}

export default Miapp;
