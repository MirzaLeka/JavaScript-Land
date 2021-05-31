# PM2 CLI Commands

Start app

```pm2 start app.js```

![image](https://user-images.githubusercontent.com/23176181/120230725-3fe3d480-c250-11eb-9e9c-2bf3df9337de.png)

Start app with 2 instances/processes

```pm2 start app.js -i 2```

Start app with max number of instances/processes (max == number of logical CPUs on your machine)

```pm2 start app.js -i max```

![image](https://user-images.githubusercontent.com/23176181/120230894-8afde780-c250-11eb-9347-a0be84cf6fc3.png)

#

When PM2 Starts the app it exits out of terminal. This means the app is running in the background and won't stop if we hit CTRL+C.

Stop app

```pm2 stop app.js```

![image](https://user-images.githubusercontent.com/23176181/120230780-55f19500-c250-11eb-97b0-f99536011273.png)

Stop all apps on PC

```pm2 stop all```

#

If you previously started an app with x number of instances and now you to run with a different number of instances, you need to stop the app and clean the cache.

Delete app (clean cache)

```pm2 delete app.js```

![image](https://user-images.githubusercontent.com/23176181/120230839-71f53680-c250-11eb-94d2-ca6185616fd6.png)

Delete all apps (clean cache)

```pm2 delete all```

#

To watch for file changes like Nodemon does, use *--watch*

```pm2 start app.js --watch```

To see list of active processes, monitor logs and incoming requests, run app in the separate terminal with *monit* flag

```pm2 monit app.js```

 ![image](https://user-images.githubusercontent.com/23176181/120231158-17100f00-c251-11eb-9d42-dc29291620df.png)

