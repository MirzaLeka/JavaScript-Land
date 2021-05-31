# Process Managers

Process Managers allow us to monitor the running services locally and in production and run common system administration tasks. These tasks include starting and stopping application, reloading server instances without downtime, logging performance metrics, etc.
Top three choices for monitoring Node.js applications are:

* PM2
* StrongLoop
* Forever

#

# PM2

With PM2 we can split our application into processes and create a load balancer, just like we’d do with cluster module or Nginx, only that with PM2 we don’t need to modify the code ourselves.

There is an obvious downside the we cannot send messages between processes. This can be resolved with a message queue.

### Advantages of PM2:

* When a process fails, PM2 will restart it
* We can run multiple processes just by typing commands in the terminal
* We can configure PM2 using config file
* When process is overwhelmed, PM2 will spread load across other processes (load-balancer)
* Logging & Monitoring

### Get Started:

``` npm i pm2 -g ```

[Official Docs](https://pm2.keymetrics.io/)
