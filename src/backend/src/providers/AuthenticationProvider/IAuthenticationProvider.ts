export interface IAuthenticationProvider {
	getHashPassword(password: string): Promise<string>
	comparePassword(password: string, passwordHash: string): Promise<boolean>
	getJwt(user_email: string): Promise<string>
}