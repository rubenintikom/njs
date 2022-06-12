import { createServer, IncomingMessage, ServerResponse } from 'http';
import { dataModel } from './dataModel';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const port = 9999;

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/') {
    //await prisma.user.create({data:{id:1,email:'rubenintikom@gmail.com',name:'Ruben'}});
    //await prisma.profile.create({data:{userId:1,bio:'make it simple !'}});
    await prisma.post.create({data:{authorId:1,title:'post 1',content:'post 1 content'}});
    const posts= await prisma.post.findMany();
    res.end(JSON.stringify(posts));
    //res.end('Hello world!');
  } else if (req.url === '/getDatax') {
    const xdata: dataModel[] = [
      { id: 1, name: 'John' }
    ];
    let newitem: dataModel = { id: 2, name: 'Jane' };
    xdata.push(...[newitem]);
    for (let i = 0; i < 1000; i++) {
      newitem = { id: i, name: 'John' + i };
      if(xdata.filter(x => x.id === newitem.id).length === 0) {     
         xdata.unshift(...[newitem]);
      }
    }
    res.end(JSON.stringify(xdata));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});