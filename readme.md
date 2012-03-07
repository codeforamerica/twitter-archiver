# twitter logger -- Simplified way to store archival tweets in a couchdb using node.js

if you want to log tweets for a search such as "macon georgia" you can use this!

1. clone this repository
2. edit index.js to add your couch + twitter credentials (see the ntwitter readme for specific instructions)
3. run `node index.js`

deploy to nodejitsu by editing package.json and doing `jitsu create` and `jitsu deploy`!