// this import should be first in order to load some required settings (like globals and reflect-metadata)

// import { AppModule } from "./app.module";
// platformNativeScriptDynamic().bootstrapModule(AppModule);

import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);


