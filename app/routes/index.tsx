import NewsletterComponent from "~/components/newsletter.component";
import NavigationBarComponent from "~/components/navigationBar.component";
import HeroComponent from "~/components/hero.component";
import SectionCardComponent, {CardContent} from "~/components/sectionCard.component";
import TestimonialsComponent from "~/components/testimonialsComponent";
import FooterComponent from "~/components/footer.component";

const cards: CardContent[] = [
    {
        illustration: "/assets/Atendimento online.png",
        alt: "atención medica online",
        backgroundColor: "#ffffff",
        textColor: "#191919",
        title: "Fortalece tu salud mental con nuestros profesionales en linea",
        text: "Guardia médica online 24 hs. Evita la exposición, accede a la mejor atención desde la comodidad de tu casa, sin salas de espera ni demoras"
    },
    {
        illustration: "/assets/bienestar.png",
        alt: "persona buscando con una lupa",
        backgroundColor: "var(--primary-base)",
        textColor: "#ffffff",
        title: "Utiliza tus pensamientos a favor de tus emociones",
        text: "Encontrarás un espacio anónimo y seguro para identificar y modificar tus pensamientos para que, por consecuencia, puedas transformar tus emociones"
    }
]

export default function Index() {
    return (
        <div>
            <header>
                <NavigationBarComponent/>
            </header>
            <HeroComponent/>
            {cards.map((card)=>
                <SectionCardComponent card={card}/>
            )}
            <TestimonialsComponent/>
            <NewsletterComponent/>
            <FooterComponent/>
        </div>
    );
}
