import { MongoClient } from 'mongodb';
import { DBContext } from './DBContext';
// tslint:disable-next-line:max-line-length
const connStr = "mongodb://ecms:evIgpuK2HtdTVS0amk5uZoXSsCvdu9g5448zQ7ejlfCcoff3cOc8awcojJXpA795oMSwX905qQbhD7Qz1I0anQ==@ecms.mongo.cosmos.azure.com:10255/?ssl=true&appName=@ecms@";
let config = {
  url: connStr,
  dbName: 'cmsdb'
};

async function createConnection(): Promise<DBContext> {
  // tslint:disable-next-line:typedef
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true
  });
  const db = connection.db(config.dbName);
  return {
    connection,
    db
  };
}

export const createDBConnection = createConnection;
