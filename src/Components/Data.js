import React from 'react';

export const Data = (props) => {

    const {Giphy, state , prev ,next} = props;

    return (
        <div className="Giphy">

        <div className="data">
        {
            Giphy.data && Giphy.data.map(data =><div className="card animate__animated animate__jackInTheBox" key={data.id}><video src={data.images.preview.mp4} autoPlay loop/>
        <span id="firstline">From: {data.username}</span> <span id="secondline">Source: <a href={data.bitly_url}>{data.bitly_url}</a></span></div>)
        
        }

        </div>
    {
        Giphy.data.length !==0 &&
        <div className="buttons">
           { state.page > 1 ? <button onClick={prev}>Prev</button> :"" }
           {state.page > 1 ? state.page :""}
           { Giphy.data.length !==0 ? <button onClick={next}>Next</button> :"" } 
        </div>
    }  
        </div>
    )
}
