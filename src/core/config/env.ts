import 'dotenv-safe/config'
import env from 'env-var'

export const envs = {
	PORT: env.get('PORT').default(3000).asPortNumber(),
	NODE_ENV: env.get('NODE_ENV').default('development').asString(),
	HOST: env.get('HOST').default('0.0.0.0').asString(),
}
