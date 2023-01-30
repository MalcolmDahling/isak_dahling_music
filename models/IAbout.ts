export interface IAbout{

    fields:{
        text:{
            content:content[];
        }
    }
}

interface content{
    content:content2[];
}

interface content2{
    value:string;
}