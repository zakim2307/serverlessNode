import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://zaki:root@localhost:5432/inventory',
    idleTimeoutMillis: 30000
});