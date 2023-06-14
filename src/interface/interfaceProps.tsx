export interface InterfaceProps {
    padding?: string;
    background?: string;
    cursor?: string;
    columns?: number;
    width?: string;
    margin?: string;
    justify?:{
      content?: string;
      text?: string;
    },
    opacity?: string;
    shadow?: string;
    align?: string;
    height?: string;
    color?:string;
    fontSize?: string;
    index?: string;
    typeSubtitle?: string;
    fontWeight?:number;
    radius?: string;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    isAnimating?: boolean;
    border?:string;
    backface?: string;
    boxSizing?: string;
    animation?:{
      name?:string;
      duration?:string;
      recurrence?: string;
      start?: string;
      final?:string;
      origin?:{
        x?: string,
        y?:string,
      }
    };
    object?:{
      fit: string,
    };
    hover?:{
    
        scale?: string;
      
    }
    image?: string;
  }