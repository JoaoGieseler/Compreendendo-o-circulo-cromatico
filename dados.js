let introducao = [
    {
    utilidade : "O círculo cromático é como uma roda mágica que mostra todas as cores que existem e como elas se relacionam entre si. É uma ferramenta muito útil para quem gosta de desenhar, pintar, decorar ou até mesmo criar roupas!",
    convencimento : "Você irá compreender a como dar vida aos seus designs utilizando os conceitos do circulo cromático. Entender como as cores entram em harmonia e qual o sentimento que elas passam."
    }
];

let id = 0

let dados = [
    {
        id : 0,
        titulo : "A influência da harminia entre as cores",
        descricao :  "O círculo cromático é como uma roda mágica que mostra todas as cores que existem e como elas se relacionam entre si. É uma ferramenta muito útil para quem gosta de desenhar, pintar, decorar ou até mesmo criar roupas!",
        imagem : "https://www.bing.com/images/blob?bcid=Tt9XFSCA4oMHtX-P9be-M8LrAmcm.....2I",
        descricaoImagem : "Exemplo de design com circulo cromático"

    },
    {
        id : 1,
        titulo : "Circulo Cromático",
        descricao : "Ele é como uma roda onde todas as cores se encaixam, mostrando como elas se relacionam entre si. Ele te ajuda a escolher as cores que combinam bem e a criar desenhos, pinturas e até mesmo decorações mais bonitas e harmoniosas.",
        imagem : "https://www.bing.com/images/blob?bcid=TunKOtMK6noHtX-P9be-M8LrAmcm.....7o",
        descricaoImagem : "O circulo cromático"
    },
    {
        id : 2,
        titulo : "Cores Frias: A Calma e a Tranquilidade",
        descricao : "As cores frias, como o próprio nome sugere, transmitem sensações de calma, tranquilidade e serenidade. Elas nos remetem à natureza, ao mar, ao céu e a tudo que nos proporciona uma sensação de relaxamento.",
        imagem : "https://www.bing.com/images/blob?bcid=Tmx.1t7PVnoHtX-P9be-M8LrAmcm.....0s",
        descricaoImagem : "Cores frias"
    },
    {
        id : 3,
        titulo : "Cores Quentes: A Energia e a Alegria",
        descricao : "As cores quentes, por outro lado, transmitem sensações de energia, entusiasmo e alegria. Elas nos remetem ao fogo, ao sol e a tudo que nos proporciona calor e vitalidade.",
        imagem : "https://www.bing.com/images/blob?bcid=Tju4qCG5MHoHtX-P9be-M8LrAmcm......o",
        descricaoImagem : "Cores quentes"
    },
    {
        id: 5,
        titulo: "Cores Primárias: A Base de Tudo",
        descricao: "As cores primárias são as cores básicas que não podem ser criadas pela mistura de outras cores. Elas são o ponto de partida para todas as outras cores.",
        imagem : "https://www.bing.com/images/blob?bcid=TtNUlwzYq3oHtX-P9be-M8LrAmcm.....8w",
        descricaoImagem : "Cores primarias"
    },
    {
        id: 6,
        titulo: "Cores Secundárias: A Mistura das Primárias",
        descricao: "As cores secundárias são criadas pela mistura de duas cores primárias. Elas são mais suaves e menos intensas que as primárias.",
        imagem : "https://www.bing.com/images/blob?bcid=TkxuilAYIXoHtX-P9be-M8LrAmcm.....4s",
        descricaoImagem : "Cores secundárias"
    },
    {
        id: 7,
        titulo: "Cores Terciárias: A Mistura das Primárias e Secundárias",
        descricao: "As cores terciárias são criadas pela mistura de uma cor primária com uma cor secundária adjacente. Elas oferecem uma grande variedade de tons e nuances.",
        imagem : "https://www.bing.com/images/blob?bcid=TsEFnWY1U3oHtX-P9be-M8LrAmcm.....8A",
        descricaoImagem : "Cores terciárias"
    },
    {
        id : 8,
        titulo: "Combinações Monocromáticas",
        descricao: "As combinações monocromáticas utilizam diferentes tons de uma mesma cor, criando um efeito elegante e sofisticado.",
        imagem : "https://www.bing.com/images/blob?bcid=TsEFnWY1U3oHtX-P9be-M8LrAmcm.....8A",
        descricaoImagem : "Cores terciárias"
    },
    {
        id : 9,
        titulo: "Combinações Análogas",
        descricao: "As combinações análogas utilizam cores que estão lado a lado no círculo cromático, criando um efeito harmonioso e natural.",
        imagem : "https://www.bing.com/images/blob?bcid=Tk6Vqwc8kIMHtX-P9be-M8LrAmcm.....6Q",
        descricaoImagem : "Exemplo de combinação análoga"
    },
    {
        id : 10,
        titulo: "Combinações Complementares",
        descricao: "As combinações complementares utilizam cores opostas no círculo cromático, criando um alto contraste e impacto visual.",
        imagem : "https://www.bing.com/images/blob?bcid=TohwsW1kXXoHtX-P9be-M8LrAmcm.....yI",
        descricaoImagem : "Exemplo de combinação complementar"
    },
    {
        id : 11,
        titulo: "Combinações Triádicas",
        descricao: "As combinações triádicas utilizam três cores igualmente espaçadas no círculo cromático, criando um equilíbrio visual e harmonia.",
        imagem : "https://www.bing.com/images/blob?bcid=TkxuilAYIXoHtX-P9be-M8LrAmcm.....4s",
        descricaoImagem : "Exemplos de com"
    },
    {
        id : 12,
        titulo: "Combinações Complementares Divididas",
        descricao: "As combinações complementares divididas são uma variação das combinações complementares, utilizando as cores vizinhas da cor complementar para criar um efeito mais suave.",
        imagem : "https://www.bing.com/images/blob?bcid=TmTVp3mQnHoHtX-P9be-M8LrAmcm.....24",
        descricaoImagem : "Cores terciárias"
    },
    {
        id : 13,
        titulo: "Combinações em Quadrado",
        descricao: "As combinações tetrádicas utilizam quatro cores, sendo duas pares de cores complementares, criando um efeito vibrante e dinâmico.",
        imagem : "https://www.bing.com/images/blob?bcid=TmG43OvysXoHtX-P9be-M8LrAmcm.....14",
        descricaoImagem : "Exemplo de combinação em quadrado"
    }
];