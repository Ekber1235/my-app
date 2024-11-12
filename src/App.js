
import './App.css'
import { useState, useEffect } from 'react';
function App(){
  const [item, setItem] = useState({
    itemName: "",
    itemPrice: "",
    itemImg: ""
  })
  const [allItems,setAllItems] = useState([])
  const [searchInp, setSearchInp] = useState("")
  const [priceInp, setPriceInp] = useState("")
  const takeItem = (e) =>{
    setItem({...item, [e.target.name]: e.target.value})
  }

  const showItem = () =>{
    setAllItems([...allItems, item])
  }
  
  const orderItem = () =>{
    setAllItems([...allItems.sort((a,b) => a.itemPrice - b.itemPrice)])
    console.log(allItems);
  }

  const searchItem = (e) =>{
    setSearchInp(e.target.value)
  }

  const searchPrice = (e) =>{
    setPriceInp(e.target.value)
  }
  
  const filteredItems = allItems.filter(item => 
    (searchInp === "" || item.itemName.toLowerCase().includes(searchInp.toLowerCase())) &&
    (priceInp === "" || item.itemPrice.includes(priceInp))
  );
  
  
      return(
   <div>
    <input onChange={takeItem} type='text' placeholder='item name' name='itemName' />
    <input onChange={takeItem} type='text' placeholder='item price' name='itemPrice' />
    <input onChange={takeItem} type='text' placeholder='item image' name='itemImg' />
      <button onClick={showItem}>Show items</button>
      <button onClick={orderItem}>Order items</button>
      <input onChange={searchItem} type='text' placeholder='search item' />
      <input onChange={searchPrice} type='text' placeholder='search price' />

      <br/>
      <div className='cards'>
        {
          allItems.length == 0 ? null :
          filteredItems.length > 0 ?
          filteredItems.map((oneItem, i )=> {
            return (
             <div className='card' key={i}>
               <img src={oneItem.itemImg} alt=''/>
               <h1>{oneItem.itemName}</h1>
               <h4>{oneItem.itemPrice}</h4>
             </div>
            )
          }) : "hec bir melumat tapilmadi....."
        }
      </div>

   </div>
  
  )
}

export default App
  



