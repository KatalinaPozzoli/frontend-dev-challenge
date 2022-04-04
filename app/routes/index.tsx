import HeroComponent from "~/components/hero.component";
import SectionCardComponent, {CardContent} from "~/components/sectionCard.component";
import TestimonialsComponent from "~/components/testimonialsComponent";

const cards: CardContent[] = [
    {
        illustration: "/assets/Atendimento online.png",
        alt: "atención medica online",
        backgroundColor: "#ffffff",
        textColor: "#191919",
        orientation: "right",
        title: "Fortalece tu salud mental con nuestros profesionales en linea",
        text: "Guardia médica online 24 hs. Evita la exposición, accede a la mejor atención desde la comodidad de tu casa, sin salas de espera ni demoras"
    },
    {
        illustration: "/assets/bienestar.png",
        alt: "persona buscando con una lupa",
        backgroundColor: "var(--primary-base)",
        textColor: "#ffffff",
        orientation: "left",
        title: "Utiliza tus pensamientos a favor de tus emociones",
        text: "Encontrarás un espacio anónimo y seguro para identificar y modificar tus pensamientos para que, por consecuencia, puedas transformar tus emociones"
    }
]

const Banners = [
    {
        image: "/assets/image-1.png",
        title: "Vive el ahora, disfruta cada momento",
    },
    {
        image: "/assets/image-2.png",
        title: "Tu primer paso hacia el bienestar emocional",
    },
    {
        image: "/assets/image-3.png",
        title: "Conviértete en la persona que quieres ser",
    }
]

const Testimonials = [
    {
        quote: "Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo",
        author: "~ Maria Montessori ~"
    },
    {
        quote: "En lo personal opino que es una excelente aplicación, la psicologa que me atendió fue como una amiga que nos ayuda a sentirnos mejor, que nos apoya y nos escucha, me ha ayudado mucho, excelente servicio",
        author: "~ Raquel Rodríguez ~"
    },
    {
        quote: "Me ha ayudado bastante con los pensamientos que llegó a tener, estaba a punto de rendirme, y luego conocí la app,  he mejorado mi perspectiva de vida y de todo",
        author: "~ Julian Gomez ~"
    }
]

export default function Index() {
    return (
        <>
            <HeroComponent banners={Banners}/>
            {cards.map((card, index) =>
                <SectionCardComponent card={card} key={index}/>
            )}
            <TestimonialsComponent testimonials= {Testimonials}/>
        </>
    );
}
