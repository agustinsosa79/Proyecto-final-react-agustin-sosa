import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
    const {id} = producto;

    return (
        <div className="producto">
            <img className="imagen" src={producto.imagen} alt={producto.nombre} />
            <div className='info'>
                <h4>{producto.nombre}</h4>
                <p>Categoría: {producto.categoria} </p>
                <p>Precio: ${producto.precio} </p>
                <footer>
                    <Link to={`/item/${id}`} className='Option'>Ver Detalle </Link>
                </footer>
            </div>
        </div>
    );
}


export default Item;