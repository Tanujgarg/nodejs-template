import dotEnv from 'dotenv';
import app from './src/app';

dotEnv.config();

const PORT: number = parseInt( String( process.env.PORT ), 10 ) || 3000;

app.listen( PORT, '0.0.0.0',
  (): void => {
    console.log( '\n' );
    console.log( `Application is running :-` );
    console.log( `\tName: ${process.env.npm_package_name}` );
    console.log( `\tVersion: ${process.env.npm_package_version}` );
    console.log( `\tPort: ${PORT}` );
    console.log( `\tProcess id: ${process.pid}` );
    console.log( `\tEnvironment: ${process.env.NODE_ENV}` );
  } );
