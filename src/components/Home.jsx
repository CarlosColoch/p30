//import '../App.css';
import SearchBar from '../components/SearchBar'
import BooksData from '../Data.json'


const Home = () => {

    return (

        <div className="App">
            <h1>Práctica 29</h1>
            <p className='mip'>Consulta tu biblioteca.</p>
            <SearchBar placeHolder="Ingrese título o autor del libro..." data={BooksData} />
            <p></p>
        </div>);
    }

export default Home;


