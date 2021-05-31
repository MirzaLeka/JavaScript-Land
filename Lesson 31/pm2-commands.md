# PM2 CLI Commands

Start app
```pm2 start app.js```

Start app with 2 instances/processes
```pm2 start app.js -i 2```

Start app with max number of instances/processes (max == number of logical CPUs on your machine)
```pm2 start app.js -i max```

#

When PM2 Starts the app it exits out of terminal. This means the app is running in the background and won't stop if we hit CTRL+C.

Stop app
```pm2 stop app.js```

Stop all apps on PC
```pm2 stop all```

#

If you previously started an app with x number of instances and now you to run with a different number of instances, you need to stop the app and clean the cache.

Delete app (clean cache)
```pm2 delete app.js```

Delete all apps (clean cache)
```pm2 delete all```

#

To watch for changes like Nodemon does, use *--watch*
```pm2 start app.js --watch```

To see list of active processes, monitor logs and incoming requests, run app in the separate terminal with *monit* flag
```pm2 monit app.js```
