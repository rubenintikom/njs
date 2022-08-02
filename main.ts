import { XFun } from './functions/xfunction';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { dataModel } from './dataModel';
import { PrismaClient } from '@prisma/client';
import { IApiResponse } from './apiresponse';
import { BIT } from './BIT';


const fun = new XFun();
const bit = new BIT();
const prisma = new PrismaClient();
const port = 80;

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Content-Length,Authorization,Accept, x-requested-with,cache-control,token',
    'Access-Control-Max-Age': '3600',
    'Content-Type': 'application/json'
  }
  if (req.method == "OPTIONS") {
    res.writeHead(200, headers).write('PREFLIGHT OK');
    console.log("Opt OK");
  }

  const headerToken = req.headers['token'];
  const bearerToken = req.headers['authorization'];
  const tokenh = "token123";
  const tokenb = 'Bearer token123';
  console.log(headerToken);
  console.log(bearerToken);

  var respon: IApiResponse = new IApiResponse();
  if (headerToken == tokenh || bearerToken == tokenb) {
    if (req.url === '/') {
      respon = {
        status: 200,
        message: 'OK',
        data: []
      }
      res.end(JSON.stringify(respon));
    } else if (req.url === '/getData') {
      //await prisma.user.create({data:{id:1,email:'rubenintikom@gmail.com',name:'Ruben'}});
      //await prisma.profile.create({data:{userId:1,bio:'make it simple !'}});
      await prisma.post.create({ data: { authorId: 1, title: 'post 1', content: 'post 1 content' } });
      const posts = await prisma.post.findMany();
      respon = { status: res.statusCode, message: 'okok' + res.statusMessage, data: posts };
      res.writeHead(200, "OK", headers).end(JSON.stringify(respon));
    } else if (req.url === '/getDatax') {
      const xdata: dataModel[] = [
        { id: 1, name: 'John' }
      ];

      let newitem: dataModel = { id: 2, name: 'Jane' };
      xdata.push(...[newitem]);
      for (let i = 0; i < 1000; i++) {
        newitem = { id: i, name: 'John' + i };
        if (xdata.filter(x => x.id === newitem.id).length === 0) {
          xdata.unshift(...[newitem]);
        }
      }
      respon = { status: res.statusCode, message: 'Success', data: xdata };
      res.writeHead(200, headers).end(JSON.stringify(respon));
    } else if (req.url == "/bit") {
      bit.prosesAngkaAjaib(2143);
      const dogname = bit.prosesHotdog("hit dig");
      const xdata: dataModel[] = [
        { id: 1, name: dogname }
      ];
      respon = { status: res.statusCode, message: 'Success', data: xdata };
      res.writeHead(200, headers).end(JSON.stringify(respon));
    }

    else {
      console.error("Invalid url");
      res.writeHead(403, headers).end(JSON.stringify({ status: res.statusCode, message: res.statusMessage, data: [] }));
    }

  } else {
    console.error("Invalid token");
    res.writeHead(200, headers).end(JSON.stringify({ status: res.statusCode, message: 'INVALID TOKEN', data: [] }));
  }

});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.on('error', (err) => {
  console.error("server on error: " + err);
});

server.on('connection', (socket) => {
  console.log('server on connection: ' + socket.remoteAddress);
});

server.on('close', () => {
  console.log('server on close');
});