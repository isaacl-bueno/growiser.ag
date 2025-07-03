import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    company: "Tech Solutions Ltda",
    position: "CEO",
    review:
      "A Growiser transformou completamente nossa presença digital. Em apenas 3 meses, aumentamos nossas vendas em 150% e nossa visibilidade online disparou. André e sua equipe são profissionais excepcionais que realmente entendem o que é necessário para o sucesso no marketing digital.",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    company: "Restaurante Sabor & Arte",
    position: "Proprietário",
    review:
      "Como pequeno empresário, estava perdido no mundo digital. A Growiser não só criou uma estratégia personalizada para nosso restaurante, mas também nos ensinou como manter a presença online. Resultado: 200% mais pedidos online em 6 meses!",
    rating: 5,
    image: "👨‍🍳",
  },
  {
    id: 3,
    name: "Ana Costa",
    company: "Boutique Elegance",
    position: "Diretora de Marketing",
    review:
      "Profissionalismo e resultados são as palavras que definem a Growiser. Eles não apenas entregam campanhas, mas criam relacionamentos duradouros. Nossa marca nunca esteve tão forte no digital. Recomendo fortemente!",
    rating: 5,
    image: "👩‍💻",
  },
  {
    id: 4,
    name: "Roberto Almeida",
    company: "Consultoria Empresarial",
    position: "Sócio",
    review:
      "Investir na Growiser foi uma das melhores decisões que tomamos. Eles entenderam nossa necessidade de posicionamento no mercado B2B e criaram estratégias que realmente funcionam. ROI excepcional e atendimento de primeira linha.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    company: "Clínica Estética Beauty",
    position: "Proprietária",
    review:
      "A Growiser revolucionou nossa clínica! Eles criaram uma estratégia digital que nos posicionou como referência no mercado. Nossas consultas online aumentaram 300% e a confiança dos clientes disparou. André é um verdadeiro especialista!",
    rating: 5,
    image: "👩‍⚕️",
  },
  {
    id: 6,
    name: "Lucas Santos",
    company: "Startup Inovação",
    position: "Founder",
    review:
      "Como startup, precisávamos de uma estratégia digital que nos ajudasse a crescer rapidamente. A Growiser não só entregou isso, mas superou todas as expectativas. Eles são parceiros estratégicos, não apenas fornecedores.",
    rating: 5,
    image: "👨‍🚀",
  },
];

export function AvaliationsCarousel() {
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="flex flex-col p-6 h-full">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4">
                      <FaQuoteLeft className="text-4xl text-[#00384E] opacity-20" />
                    </div>
                    
                    {/* Review Text */}
                    <div className="flex-grow">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                        &ldquo;{review.review}&rdquo;
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="text-center border-t pt-4">
                      <div className="text-2xl mb-2">{review.image}</div>
                      <h4 className="font-semibold text-[#00384E] text-sm">{review.name}</h4>
                      <p className="text-gray-600 text-xs font-medium">{review.position}</p>
                      <p className="text-gray-500 text-xs">{review.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <CarouselPrevious className="relative translate-y-0 bg-[#00384E] border-[#00384E] hover:bg-[#002a3a] hover:border-[#002a3a] text-white" />
          <CarouselNext className="relative translate-y-0 bg-[#00384E] border-[#00384E] hover:bg-[#002a3a] hover:border-[#002a3a] text-white" />
        </div>
      </Carousel>
      
      {/* Progress Indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current - 1 ? "bg-[#00384E]" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
      
      {/* Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {current} de {count} avaliações
        </p>
      </div>
    </div>
  );
}
