import { IAuthenticationMiddleware } from "./providers/AuthenticationProvider/IAuthenticationProvider";
import { JwtAuthenticationMiddleware } from "./providers/AuthenticationProvider/implements/JwtMiddlewareProvider";
import { multerImageMiddleware } from "./providers/FilesMiddlewareProvider/implements/MulterMiddlewareProvider";


const authMiddleware: IAuthenticationMiddleware = new JwtAuthenticationMiddleware
const imageMiddleware = multerImageMiddleware

export { authMiddleware, imageMiddleware }
