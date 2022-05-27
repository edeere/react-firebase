import React, {useEffect} from "react"
import firebase from "../configs/firebaseConfig"
import { useSelector, useDispatch } from "react-redux";
import { updateItems } from "../redux/slice/itemsSlice";


const ItemList = () => {
    const {items} = useSelector((state) => state.items)
    const dispatch = useDispatch()
    
    useEffect(() => {
        function getItems() {
        let itemsRef = firebase.database().ref('items')
        return itemsRef.once('value', (snapshot) => {
            const data = snapshot.val()
            dispatch(updateItems(data))
        })
        }
        getItems()
    }, [dispatch])

    return (
        <>
            <p>Look at these great items</p>
            {items && Object.keys(items).map((keyName, i) => (
                <div key={i}>
                <p>{keyName}</p>
                <p>{items[keyName].name}</p>
                <p>{items[keyName].description}</p>
                </div>
            ))}
        </>
    )
}

export default ItemList