import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata = {
	title: {
	default: "SOCMA | Empilhadeira de 30 toneladas projetada para seus maiores desafios",
	template: "SOCMA Empilhadeira 30 Toneladas"
	},
	description: "Impulsione suas operações com uma empilhadeira de 30 toneladas projetada para indústrias pesadas. Do manuseio de pneus na mineração de carvão à fundição de aço com eletroímãs, extração de pedras e logística de contêineres, a HNF-300 da SOCMA oferece confiabilidade incomparável. Procurando uma empilhadeira de 30 toneladas à venda ou para aluguel? Temos o que você precisa – esteja você em Sydney, Montgomery ou além.",
	openGraph: {
	title: "SOCMA Empilhadeira 30 Toneladas",
	description: "Impulsione suas operações com uma empilhadeira de 30 toneladas projetada para indústrias pesadas. Do manuseio de pneus na mineração de carvão à fundição de aço com eletroímãs, extração de pedras e logística de contêineres, a HNF-300 da SOCMA oferece confiabilidade incomparável. Procurando uma empilhadeira de 30 toneladas à venda ou para aluguel? Temos o que você precisa – esteja você em Sydney, Montgomery ou além.",
	images: [
	{
	url: "/opengraph-image.png",
	width: 1200,
	height: 630,
	alt: "SOCMA Empilhadeira 30 Toneladas"
	}
	],
	locale: "pt_BR",
	type: "website"
	},
	twitter: {
	card: "summary_large_image",
	title: {
	default: "SOCMA Empilhadeira 30 Toneladas",
	template: "SOCMA Empilhadeira 30 Toneladas"
	},
	description: "Impulsione suas operações com uma empilhadeira de 30 toneladas projetada para indústrias pesadas. Do manuseio de pneus na mineração de carvão à fundição de aço com eletroímãs, extração de pedras e logística de contêineres, a HNF-300 da SOCMA oferece confiabilidade incomparável. Procurando uma empilhadeira de 30 toneladas à venda ou para aluguel? Temos o que você precisa – esteja você em Sydney, Montgomery ou além.",
	images: [
	{
	url: "/opengraph-image.png",
	alt: "SOCMA Empilhadeira 30 Toneladas"
	}
	]
	}
	};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<CTA />
				<Footer />
				<ScrollToTop />
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
