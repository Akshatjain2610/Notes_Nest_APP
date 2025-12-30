import { NestMiddleware } from '@nestjs/common';
export declare class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
}
