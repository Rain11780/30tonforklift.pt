import CustomizableOptions from "@/components/features/customizable-options";
import CustomizableProcess from "@/components/features/customizable-process";
import FeaturedCategories from "@/components/features/featured-categories";
import ProductionCapacity from "@/components/features/production-capacity";
import Testimonials from "@/components/features/testimonials";
import Hero from "@/components/features/hero";
import FAQ from "@/components/features/faq";

// Metadata
export const metadata = {
	title: "SOCMA | Empilhadeira de 30 Toneladas Feita para Seus Maiores Desafios",
	description: "Impulsione suas operações com uma empilhadeira de 30 toneladas projetada para indústrias pesadas. De manuseio de pneus na mineração de carvão à fundição de aço com eletroímãs, extração de pedras e logística de contêineres – a HNF-300 da SOCMA oferece confiabilidade incomparável. Procurando por uma empilhadeira de 30 toneladas à venda ou para aluguel? Nós temos a solução, seja em Sydney, Montgomery ou além."
  };

// Structured Data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: `${process.env.ROOT_URL}`
		}
	]
};

export default function Home() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Hero />
			<FeaturedCategories />
			<CustomizableOptions />
			<CustomizableProcess />
			<ProductionCapacity />
			<FAQ />
			<Testimonials />
		</>
	);
}
