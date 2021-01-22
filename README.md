# Redis Cache

This Demo uses Node as a proxy server to query Swapi data.

The requested data is stored in a Redis db for 60 seconds.

It demonstrates the use of middleware to check for (hardcoded) api keys, verifies they aren't in the (hardcoded) blacklist, and then checks the Redis cache for data before making the request to Swapi.

To use:

1. Clone this repository

   > git clone https://github.com/semperry/redis-cache.git

2. Change into the newly created repo

   > cd redis-cache

3. Install the dependencies from Package.json

   > npm install

4. In a fresh command line, spin up a Redis server if it is not running as a network service

   > redis-server

5. Run the index.js via node, or with the dev script
   > npm run dev
   > Or
   > node index.js

### Running the dev script will allow Nodemon to reload on changes you make to the file system

That's it. Enjoy.

#### All of my documentation needs some styling help. Reach out to me to contribute!
