import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, "productos"), where("categoria", "==", categoryId))
        : collection(db, "productos")


        getDocs(collectionRef)
        .then(response => {
            const productAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId]);  

    return (
        <div>
            <h3> {greeting} </h3>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;