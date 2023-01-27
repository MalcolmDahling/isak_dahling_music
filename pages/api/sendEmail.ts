import type { NextApiRequest, NextApiResponse } from 'next'

const mailgun = require('mailgun-js');
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

export default function handler(req: NextApiRequest, res: NextApiResponse){

    console.log(req.body);
    
    const data = {
        from: `${req.body.name} <${req.body.emailAddress}>`,
        to: req.body.sendTo,
        subject: req.body.subject,
        text: req.body.message
    }

    mg.messages().send(data, function (error:any, body:any){

        console.log(body);
        
        if(error){
            console.log(error); 
        }
    });

    res.send('success');
}
