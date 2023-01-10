export interface Song{

    fields:{
        title:string;
        releaseDate:string;
        youtubeLink:string;
        spotifyID:string;
        soundCloudIFrame?:string;

        image:{
            fields:{
                title:string;
                file:{
                    url:string;
                }
            }
        }
    }
}