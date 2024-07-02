const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como faço para conseguir medicamentos não padronizados do sus?",

        alternativas: [
            "Encaminhar-se a regional de saude do seu município, munido dos seguintes documentos: cpf ou rg, comprovante de residencia, prescriçao atualizada, receituario medico.", 
            "Exigências quanto ao  relatório médico. Os documentox preenchidos pelo médico deverão conter carimbo legível, com nome e CRM do médico, data e assinatura"
          ]
    },
    {
        enunciado: "As fontes renováveis de energia são aquelas formas de produção de energia em que suas fontes são capazes de manter-se disponíveis durante um longo prazo, contando com recursos que se regeneram ou que se mantêm ativos permanentemente. Com base nisso, temos a energia geotérmica, que consiste em utilizar o calor manifestado em áreas próximas à superfície. Qual a sua opinião sobre esse modelo de energia renovável?",
        alternativas: [
            "A energia geotérmica precisa ser mais explorada visto que utiliza o calor interno da terra, pois não depende do clima e é inesgotável.",
 
            "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. "
        ]
    },
    {
        enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

        alternativas: [
            "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.", 
            "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões."
        ]
    }  
];