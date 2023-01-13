export interface ISocialMedia{

    fields:{

        title:string;
        link:string;
        
        image:{
            fields:{
                file:{
                    url:string;
                }
            }
        }
    }
}