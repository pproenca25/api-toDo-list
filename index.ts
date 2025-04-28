import express from 'express';
import router from './routes';



const server = express();
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(router);



server.listen(3000, () =>{
    console.log('Server iniciado na porta 3000')
    console.log('http://localhost:3000')
})