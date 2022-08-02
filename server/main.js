"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var xfunction_1 = require("./functions/xfunction");
var http_1 = require("http");
var client_1 = require("@prisma/client");
var apiresponse_1 = require("./apiresponse");
var BIT_1 = require("./BIT");
var fun = new xfunction_1.XFun();
var bit = new BIT_1.BIT();
var prisma = new client_1.PrismaClient();
var port = 80;
var server = (0, http_1.createServer)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, headerToken, bearerToken, tokenh, tokenb, respon, posts, xdata, newitem_1, i, dogname, xdata;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Headers': 'Content-Type,Content-Length,Authorization,Accept, x-requested-with,cache-control,token',
                    'Access-Control-Max-Age': '3600',
                    'Content-Type': 'application/json'
                };
                if (req.method == "OPTIONS") {
                    res.writeHead(200, headers).write('PREFLIGHT OK');
                    console.log("Opt OK");
                }
                headerToken = req.headers['token'];
                bearerToken = req.headers['authorization'];
                tokenh = "token123";
                tokenb = 'Bearer token123';
                console.log(headerToken);
                console.log(bearerToken);
                respon = new apiresponse_1.IApiResponse();
                if (!(headerToken == tokenh || bearerToken == tokenb)) return [3 /*break*/, 6];
                if (!(req.url === '/')) return [3 /*break*/, 1];
                respon = {
                    status: 200,
                    message: 'OK',
                    data: []
                };
                res.end(JSON.stringify(respon));
                return [3 /*break*/, 5];
            case 1:
                if (!(req.url === '/getData')) return [3 /*break*/, 4];
                //await prisma.user.create({data:{id:1,email:'rubenintikom@gmail.com',name:'Ruben'}});
                //await prisma.profile.create({data:{userId:1,bio:'make it simple !'}});
                return [4 /*yield*/, prisma.post.create({ data: { authorId: 1, title: 'post 1', content: 'post 1 content' } })];
            case 2:
                //await prisma.user.create({data:{id:1,email:'rubenintikom@gmail.com',name:'Ruben'}});
                //await prisma.profile.create({data:{userId:1,bio:'make it simple !'}});
                _a.sent();
                return [4 /*yield*/, prisma.post.findMany()];
            case 3:
                posts = _a.sent();
                respon = { status: res.statusCode, message: 'okok' + res.statusMessage, data: posts };
                res.writeHead(200, "OK", headers).end(JSON.stringify(respon));
                return [3 /*break*/, 5];
            case 4:
                if (req.url === '/getDatax') {
                    xdata = [
                        { id: 1, name: 'John' }
                    ];
                    newitem_1 = { id: 2, name: 'Jane' };
                    xdata.push.apply(xdata, [newitem_1]);
                    for (i = 0; i < 1000; i++) {
                        newitem_1 = { id: i, name: 'John' + i };
                        if (xdata.filter(function (x) { return x.id === newitem_1.id; }).length === 0) {
                            xdata.unshift.apply(xdata, [newitem_1]);
                        }
                    }
                    respon = { status: res.statusCode, message: 'Success', data: xdata };
                    res.writeHead(200, headers).end(JSON.stringify(respon));
                }
                else if (req.url == "/bit") {
                    bit.prosesAngkaAjaib(2143);
                    dogname = bit.prosesHotdog("hit dig");
                    xdata = [
                        { id: 1, name: dogname }
                    ];
                    respon = { status: res.statusCode, message: 'Success', data: xdata };
                    res.writeHead(200, headers).end(JSON.stringify(respon));
                }
                else {
                    console.error("Invalid url");
                    res.writeHead(403, headers).end(JSON.stringify({ status: res.statusCode, message: res.statusMessage, data: [] }));
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                console.error("Invalid token");
                res.writeHead(200, headers).end(JSON.stringify({ status: res.statusCode, message: 'INVALID TOKEN', data: [] }));
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); });
server.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
server.on('error', function (err) {
    console.error("server on error: " + err);
});
server.on('connection', function (socket) {
    console.log('server on connection: ' + socket.remoteAddress);
});
server.on('close', function () {
    console.log('server on close');
});
