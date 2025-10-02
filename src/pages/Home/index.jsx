import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Titulo from "../../components/Titulo";

function Home() {
    return (
        <>
            <Header />
            <Titulo /> 
            <Card></Card>
            <Link to="/carrinho">Carrinho</Link>
        </>
    )
}

export default Home;