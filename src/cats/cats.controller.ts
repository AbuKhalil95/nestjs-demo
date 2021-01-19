import { Controller, Get, Redirect, Param } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('cats')
export class CatsController {
	@Get()
	findAll(): string {
		return 'This action returns all cats';
	}
	@Get('*td')
	delear() {
		return 'This route uses a wildcard';
	}

	@Get('nest')
	@Redirect('https://nestjs.com', 301)
	moveTo(){}

	@Get(':id')
	findOne(@Param() params): string {
		console.log(params.id);
		return `This action returns a #${params.id} cat`;
	}
}
