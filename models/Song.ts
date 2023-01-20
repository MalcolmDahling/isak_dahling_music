export interface Song{

    fields:{
        title:string;
        releaseDate:string;
        youtubeID:string;
        spotifyID:string;
        soundCloudLink:string;

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