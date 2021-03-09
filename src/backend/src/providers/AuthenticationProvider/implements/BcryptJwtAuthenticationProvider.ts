import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { IAuthenticationProvider } from "../IAuthenticationProvider";

export class BcryptJwtAuthenticationProvider implements IAuthenticationProvider {
	async getHashPassword(password: string): Promise<string> {

		const salt = 8  // TODO: This const must to by in .env
		const passwordHash = await bcrypt.hash(password, salt)

		return passwordHash
	}

	async comparePassword(password: string, passwordHash: string): Promise<boolean> {
		return await bcrypt.compare(password, passwordHash)
	}

	async getJwt(user_email: string): Promise<string> {
		const my_secret = "secret"  // TODO: This const must to by in .env

		return jwt.sign({ email: user_email }, my_secret, { expiresIn: "1d" })
	}
}