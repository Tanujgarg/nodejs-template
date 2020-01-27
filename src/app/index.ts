import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
// import cors from "cors";

const app = express();

// app.use(cors({origin: true}));
app.use( bodyParser.json() );


app.get( '/', ( req, res ) => {
  return res.send( 'Hello' );
} );

const server = http.createServer( app );
export default server;
