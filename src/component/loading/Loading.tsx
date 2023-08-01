import { styled, keyframes } from "styled-components";
import {useState, useEffect} from "react";
import { BoxColumn } from "../box/Box";
import Title from "../texts/Title";

const updateTitleColor = keyframes`
0%{
    color:white;
 
   
}
45%{
    color: red;
    
}
75%{
    color: purple;
   
}
100%{
    color: green;
   
}
`



const TitleLoading = styled(Title)`
    animation: ${updateTitleColor} 2s  infinite;
display: flex;
justify-content: flex-start;
    width:310px;
`;

export const Loading = () =>{
    const [point, setPoint] = useState(".")
    useEffect(()=>{
    const interval = setInterval(()=>{
   
            setPoint((s)=>s.length<3? s + ".":".")
        }
        ,1000)
        
        return () => clearInterval(interval);
    },[])
  
 
    return(
        <BoxColumn>
            <TitleLoading>Carregando{point}</TitleLoading>
        </BoxColumn>
    )
}