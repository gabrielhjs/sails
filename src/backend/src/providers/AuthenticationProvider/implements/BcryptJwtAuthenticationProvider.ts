import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { IAuthenticationProvider } from "../IAuthenticationProvider";

export class BcryptJwtAuthenticationProvider implements IAuthenticationProvider {
	async getHashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 10)
			.catch((error: Error) => { throw new Error(error.message) })
			.then((hashPassword: string) => { return hashPassword })
	}

	async comparePassword(password: string, passwordHash: string): Promise<boolean> {
		return bcrypt.compare(password, passwordHash)
			.catch((error: Error) => { throw new Error(error.message) })
			.then((response: boolean) => { return response })
	}

	async getJwt(userId: string): Promise<string> {
		const my_secret = "secret"  // TODO: This const must to by in .env
		return jwt.sign({ id: userId }, my_secret, { expiresIn: "1d" })
	}
}
