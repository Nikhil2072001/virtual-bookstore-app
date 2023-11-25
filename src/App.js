import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import './App.css'
const App = () => {
  const[data,setData] = useState([]);
  const[openbook,setOpenbook] = useState();
useEffect(()=>{
const getData = async()=>{
  try {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
    const dummydata = await res.json();
    const res2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
    const dummydata2 = await res2.json();
    const combinedArray = [...dummydata.items, ...dummydata2.items];
    setData(combinedArray);
    // setData(dummydata.items);
    console.log(combinedArray);
  } catch (error) {
    console.log(error);
  }
}
getData()
console.log(openbook);
},[openbook])
// useEffect(()=>{
//   const getData = async()=>{
//     try {
//       const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
//       const dummydata = await res.json();
//       const combinedArray = [...data, ...dummydata.items];
//       setData(combinedArray);
//       console.log(dummydata);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   getData()
//   },[data])
const openBookPage = (bookIndex) => {
  const book = data[bookIndex];
  if (book && book.volumeInfo && book.volumeInfo.infoLink) {
    window.open(book.volumeInfo.infoLink, '_blank'); // Open book's original page in a new tab
  }
};
  return (
    <div className='app-main-div'>
      <Navbar/>
      { openbook && 
      <div className='open-book-div'>
       <img src={data[openbook].volumeInfo.imageLinks.smallThumbnail}/>
       <div className='book-left-part'>
        <div className='book-left-part1'>
          <h2>{data[openbook].volumeInfo.title}</h2>
          <p>{`published On: ${data[openbook].volumeInfo.publishedDate}`}</p>
        </div>
        <p>{data[openbook].volumeInfo.description.substring(0,250)}</p>
        <div className='rating-part'>
          <p><b>{`Avg Rating: 4.5`}</b></p>
          <p><b>{`Rating Count: 85`}</b></p>
          <p><b>{`Publisher: ${data[openbook].volumeInfo.publisher}`}</b></p>
          <p><b>{`language: ${data[openbook].volumeInfo.language}`}</b></p>
          </div>
          <div className='buttons-for-book'>
          <button onClick={() => openBookPage(openbook)}>Now Read!</button>
            <button onClick={() => openBookPage(openbook)}>More Info!</button>
          </div>
      </div>
      </div>
}
      <div className='main-books-image'>
          { data.length>0 && 
            data.map((book, index) => (
              <div key={index} onClick={()=>setOpenbook(index)}>
                {/* <p>{book.volumeInfo.title}</p> */}
                <img src={book.volumeInfo.imageLinks.smallThumbnail} />
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default App