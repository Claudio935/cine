import { render, screen, act } from "@testing-library/react";
import BodyView from "./BodyView";
import { } from '../../../contexts/movieProvider/context'

import "@testing-library/jest-dom";



jest.mock('../../../contexts/movieProvider/context', () => ({
  __esModule: true,
  default: {
    state:{
      title:"teste",
      backdrop_path:"",
      overview: "",
  },
  setState: ()=>{}
  },
}));

describe("<BodyView />", () => {


  it("should render BodyView with title", () => {
   
     render(<BodyView />);
  
   
    const textDicas = screen.getByText("Carregando...");
    expect(textDicas).toBeInTheDocument();
  
  });
  it("should render BodyView with title", () => {
    
   
   
    const textDicas = screen.getByText("Dicas");
    expect(textDicas).toBeInTheDocument();
  
  });
  
});
