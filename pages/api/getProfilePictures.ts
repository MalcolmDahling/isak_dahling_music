import type { NextApiRequest, NextApiResponse } from 'next'

const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const pictures = await client.getEntries({content_type:"profilePictures"});
    res.send(pictures);
}
