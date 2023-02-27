import express, { Application, Request, Response } from 'express';

const HOST: string = '127.0.0.1';
const PORT: number = 4000;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {

    if (userAgentCheck(req.headers['user-agent']))
    {
        res.status(200).json({
            message: "Hello Visitor",
            agent: req.headers['user-agent'],
        })
    } else {
        res.status(200).json({
            message: "Who are you?",
            agent: "unkown",
        });
    }

});

app.listen(PORT, HOST, () => {
    console.log(`server listening on: http://${HOST}:${PORT}`);
});
