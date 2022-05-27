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
        return itemsRef.on('value', (snapshot) => {
            const data = snapshot.val()
            dispatch(updateItems(data))
        })
        }
        getItems()
    }, [dispatch])

    return (
        <>
            <p>Look at these great items</p>
            {items && Object.keys(items).map((keyName, i) => {
                const item = items[keyName]
                return (
                    <div key={i}>
                    <p>{keyName}</p>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ItemList