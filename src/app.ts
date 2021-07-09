import {ConnectionOptions,createConnection} from 'typeorm';
import express,{Express,Request,Response} from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';


const app = express();

export default function appInit(typeormConfig:ConnectionOptions):Promise<Express>{
  return new Promise(async(resolve)=>{
    app.use(cors({
      origin:'*',
      methods:['GET','POST','PATCH','DELETE'],
      allowedHeaders:['Content-Type','Authorization'],
    }));

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    const swaggerHtml = swaggerUi.generateHTML(await import('./swagger.json'));
    app.use('/docs', swaggerUi.serve, (_: Request, res: Response) => res.send(swaggerHtml));

    await createConnection(typeormConfig);

    return resolve(app);
  })
}
