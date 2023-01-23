export interface INews{

    fields:{

        title:string;

        text:{
            content:content[];
        };

        image:{
            fields:{
                file:{
                    url:string;
                }
            }
        }
    }

    sys:{
        createdAt:Date;
    }
}

interface content{

    content:content2[];
}

interface content2{

    value:string;
}