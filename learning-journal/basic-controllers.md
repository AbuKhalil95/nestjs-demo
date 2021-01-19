
### Controllers 
As the name implies, controllers do the HTTP request and response handling, with a twist addition to express routers by using decorators `@decorator` to add meta data and maybe middlewares?

Using `nest g controller cats` helps building a quick scaffold adding it to the apps module automatically. The route is automatically named `cats` in the following code block, so the end route of `localhost:3000/cats/` would send us the ***This action returns all cats*** output in the browser when calling the method of that route `findAll()` (*arbitrary*).

```
@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }
}
```

Additional request `@Req` decorator is possibly added inside `findAll(@Req req: Request)` which requires `Req` from `@nestjs/common` and `Request` from Express to handle http request properties manually, but I prefer [dedicated decorators](https://docs.nestjs.com/controllers#request-object). After that, normal `res.send('output')` that we are familiar with could be made.

Redirect with `@Redirect` and get your params using:

```
@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```
and at the end, its all by use case so check the guide!