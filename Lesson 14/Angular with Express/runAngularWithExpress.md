
## Angular with Express setup

1. If you don't have already, create angular app: ``` ng new app-name ```

2. Install **express** and **@angular-devkit/build-angular**

3. Add *proxy.config.json* file into your root folder

4. Run Express server with  ``` node server-file.js ``` or ``` nodemon server-file.js ```

5. Run Angular through proxy you created in step 2: ``` ng serve --proxy-config proxy.config.json ```

Angular will run on one port, Express on another and you will be able to pick up Express API route in your Angular app.
