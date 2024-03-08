import { DIService } from "./services/di.service.ts";
import { dotenv } from "./deps.ts";


export class App {
    constructor() {
        this.setEnvVariables();
        const diService = DIService.getClassInstance();
        diService.initializeAll().then(() => {
            this.launch();
        });
    }

    private setEnvVariables(): void {
        const nodeEnv = Deno.env.get("NODE_ENV");
        const envs = dotenv.config({ path: `.env.${nodeEnv}` });
        for (const [key, value] of Object.entries(envs.parsed as Record<string, string>)) {
            Deno.env.set(key, value);
        }
    }

    private launch(): void {
        console.log("App is launched");
    }

}