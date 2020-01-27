class Config {
  _environment: string;

  _variables: any = {
    production: {
      port: '3000'
    },
    test: {
      port: '3000'
    },
    development: {
      port: '3000'
    }
  };

  constructor( environment: string ) {
    this._environment = environment;
  }

  get( variable: string ): string {
    return this._variables[ this._environment ][ variable ] as string;
  }

  set( key: string, value: string ) {
    this._variables[ this._environment ][ key ] = value;
  }

}

const config = new Config( process.env.NODE_ENV || 'development' );

export default config;
