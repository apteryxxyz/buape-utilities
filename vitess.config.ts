import { defineConfig } from "vitest/config"

export default defineConfig({
	optimizeDeps: {
		disabled: false
	},
	build: {
		commonjsOptions: {
			include: []
		}
	}
})
