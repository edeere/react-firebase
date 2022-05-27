import ItemList from "../components/ItemList";
import firebase from "../configs/firebaseConfig"

const Home = () => {
  function createItem() {
    const itemId = crypto.randomUUID()
    firebase.database().ref('items/' + itemId).set({
      description: itemId,
      name: itemId,
      timestamp: Date.now()
    })
  }

  return (
    <>
      <h1>Homepage can see everyone!</h1>
      <button onClick={() => createItem()}>Make an item</button>
      <ItemList />
    </>
  )
}

export default Home;
