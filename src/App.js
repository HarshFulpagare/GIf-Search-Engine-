import React,{useState,useEffect} from 'react';
import './App.css';
import { Data } from './Components/Data';
import { SearchBar } from './Components/SearchBar';

function App() {

  const Giphyapi ="yPnwrH8lyHgS1j99J6Mg091Z8OX7VVQ8";
  const [Height,setHeight] = useState(0);

    const [state , setState] = useState({

        query:"",
        mode:"recent",
        page:1
     });

     const [annoyed,setMood] = useState(false)

     const [Giphy,setGiphyState]=useState({      
        data:[],
        pagination:[],
        meta:[]
    });

    useEffect(() => {
      getHeight();
    });

    function getHeight()
    {
      var body = document.body,
    html = document.documentElement;
     var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight ); 
     setHeight(height);
    }

    function Update(type,newdata)
    {
      setState(data =>{
    
        return{
          ...data,[type]:newdata
        }
  
      });
    };

    function getStuffGiphy()
 {

    if(state.query=== "" || typeof(state.query) === "undefined")
    {
        setMood(!annoyed);
    } 
    
    else
   {
    fetch("https://api.giphy.com/v1/gifs/search?api_key="+ Giphyapi+"&q="+state.query+"&limit=25&offset="+ 0+"&rating=g&lang=en&sort="+state.mode)
     .then(res => res.json())
     .then((newdata) =>{
         setGiphyState(() =>({
             data:newdata.data,
             pagination:newdata.pagination,
             meta:newdata.meta
         })
     )})
     .catch(console.log)
       }
 }

   function prev()
   {
       fetch("https://api.giphy.com/v1/gifs/search?api_key="+ Giphyapi+"&q="+state.query+"&limit=25&offset="+ (((state.page - 1) * 25) - 1)+"&rating=g&lang=en")
     .then(res => res.json())
     .then((newdata) =>{
         setGiphyState(() =>({
             data:newdata.data,
             pagination:newdata.pagination,
             meta:newdata.meta
         })
     )})
     .catch(console.log)
     Update('page',state.page-1)
   }

   function next()
   {
       fetch("https://api.giphy.com/v1/gifs/search?api_key="+ Giphyapi+"&q="+state.query+"&limit=25&offset="+ (state.page*25)+"&rating=g&lang=en")
       .then(res => res.json())
       .then((newdata) =>{
           setGiphyState(() =>({
               data:newdata.data,
               pagination:newdata.pagination,
               meta:newdata.meta
           })
       )})
       .catch(console.log)
       Update('page',state.page+1)
   }

  return (
    <div className="App" >
       <div className="context">
       <SearchBar getStuffGiphy={getStuffGiphy} annoyed={annoyed} Update={Update} />
       <Data Giphy={Giphy} state={state} prev={prev} next={next} />
       </div>


<div className="area" style={{'height':Height}} >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>

    </div>
  );
}

export default App;
