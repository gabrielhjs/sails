import { BcryptJwtAuthenticationProvider } from "../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider"
import { TypeOrmCompanyRepository } from "../../repositories/implements/typeorm/Company/CompaniesRepository"
import { TypeormProductRepository } from "../../repositories/implements/typeorm/Products/ProductsRepository"
import { TypeormProductStockRepository } from "../../repositories/implements/typeorm/Products/ProductStockRepository"
import { TypeormUsersRepository } from "../../repositories/implements/typeorm/Users/UsersRepository"


const authenticationProvider = new BcryptJwtAuthenticationProvider
const usersRepository = new TypeormUsersRepository
const productRepository = new TypeormProductRepository
const productStockRepository = new TypeormProductStockRepository
const companyRepository = new TypeOrmCompanyRepository
const encryptProvider = new BcryptJwtAuthenticationProvider

export {
	authenticationProvider,
	usersRepository,
	productRepository,
	productStockRepository,
	companyRepository,
	encryptProvider
}