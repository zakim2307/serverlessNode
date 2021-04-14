"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
exports["default"] = new pg_1.Pool({
    max: 20,
    connectionString: 'postgres://zaki:root@localhost:5432/inventory',
    idleTimeoutMillis: 30000
});
