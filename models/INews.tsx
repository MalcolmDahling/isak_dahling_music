export interface INews{

    fields:{

        title:string;

        content:content[];

        image:{
            fields:{
                file:{
                    url:string;
                }
            }
        }
    }
}

interface content{

    content:{
        arr:arr[];
    }
}

interface arr{

    value:string;
}