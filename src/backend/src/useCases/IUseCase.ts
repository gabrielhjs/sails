import { DTO } from "./IDTO";

export interface UseCase {
	execute(data: DTO): Promise<any>
}