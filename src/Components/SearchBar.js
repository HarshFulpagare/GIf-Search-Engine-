import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.fDirection};
  text-align: center;
  justify-content: center;
  align-items: center;
  height: ${props => props.heightVal};
  width: 100%;
  transition:${props => props.transitionVal};
  padding:${props => props.paddingVal};
`;

export const SearchBar = (props) => {

   const {getStuffGiphy,annoyed,Update} = props;

   const [Search,OnSearch] = useState(false);

    return (
        <Div fDirection={Search ? "":"column"} heightVal={Search ? "20vh":"100vh"} transitionVal="0.5s height , 0.5s flex-Direction" paddingVal={Search ? "0 0 0 2rem":"0 0 0 0"} >
        <div className='Logo animate__animated animate__zoomInDown'>
            GetStuff
        </div>
        <div className="Search animate__animated animate__zoomInDown animate__delay-1s">
        <button type="button" onClick={() => {getStuffGiphy(); OnSearch(true); }} ><i class="fas fa-search"></i></button>
            <input type="text" id="search_query" name="search_query" placeholder={annoyed ? "Bruh type something first":"Search stuff here"} onChange={
                (e) => {
                    Update('query',e.target.value)
                    }
                    } />
        <select className="dropdown1" onChange={
            (e) =>{ 
                
                Update('mode',e.target.value) 
                getStuffGiphy()        
        
        }}>
                <option value="recent">Recent </option>
                <option value="relevant">Relevant </option>
            </select>
        </div>
        </Div>
    )
}
