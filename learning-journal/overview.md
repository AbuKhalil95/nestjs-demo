# Starting off with the django of nodejs!

You might as well say that, with the new [nestjs-admin](https://blog.theodo.com/2019/08/why-theodo-is-investing-in-an-admin-for-nestjs/) that was heavily inspired by yours truly. 

## CLI Installation

```
$ npm i -g @nestjs/cli
$ nest new project-name
```

Running the command above pops out the following directory.

```
src
└─ app.controller.spec.ts
└─ app.controller.ts
└─ app.module.ts
└─ app.service.ts
└─ main.ts
```
Starting from top to bottom, the controller acts as the controller for an initially a single route, with spec being its unit test. 
Service providing the content of the proposed app to the specified route in controller, with module being the root of the app sending it all as an object to main.
Main that uses NestFactory to create a nest instance that will run as soon as the command is sent through the specified port.

### *Note that nestjs is built on platforms such as either express or fastify to improve ease of use / speed of building HTTP request handlers respectively using their api's.*

NestFactory is the driver that makes your app, a class with few static methods such as create(). INestApplication instance is the desired object that is run by nestjs. 
