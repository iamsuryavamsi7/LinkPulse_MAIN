import { WiproRouter } from "../AppRouter";
import { AccentureRouter } from "../AppRouter";
import { AppRouter } from "../AppRouter";

export const APPS = [
    {

        subdomain: "www",
        app: AppRouter,
        main: true

    },
    {

        subdomain: "accenture",
        app: AccentureRouter,
        main: false

    },
    {

        subdomain: "wipro",
        app: WiproRouter,
        main: false

    },
]