import type { NextApiRequest, NextApiResponse } from 'next'

const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    //fetch all
    if(req.body.limit === 0){

        const news = await client.getEntries({content_type:"news"});
        res.send(news); 
    }

    //fetch 5
    else{

        const news = await client.getEntries({
            content_type:"news",
            limit: req.body.limit
        });
        res.send(news);
    }

    
    
}
