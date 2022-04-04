import type {MetaFunction} from "@remix-run/node";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";

import coreStyles from '~/styles/core.css';
import NavigationBarComponent from "~/components/navigationBar.component";
import FooterComponent from "~/components/footer.component";
import NewsletterComponent from "~/components/newsletter.component";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "WeRemoteTest",
    viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
    return [
        {rel: 'stylesheet', href: coreStyles},
        {rel: "icon", href: "/favicon.svg", type: "image/svg"},
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@400;700&display=swap"
        }
    ]
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <title> WeRemoteTest </title>
            <Links/>
            {
                typeof document === "undefined"
                    ? "__STYLES__"
                    : null
            }
        </head>
        <body>
        <header>
            <NavigationBarComponent/>
        </header>
        <Outlet/>
        <footer>
            <NewsletterComponent/>
            <FooterComponent/>
        </footer>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
