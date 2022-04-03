import NewsletterComponent from "~/components/newsletter.component";
import NavigationBarComponent from "~/components/navigationBar.component";
import HeroComponent from "~/components/hero.component";

export default function Index() {
    return (
        <div>
            <NavigationBarComponent/>
            <HeroComponent/>
            <NewsletterComponent/>

        </div>
    );
}
