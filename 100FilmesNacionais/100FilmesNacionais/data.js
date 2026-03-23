// data.js — 100 Filmes Nacionais
// Fonte: curadoria baseada em listas de críticos brasileiros (Abraccine, Cahiers du Cinéma Brasil, etc.)

const FILMES = [
  {
    rank: 1, titulo: "Terra em Transe", ano: 1967,
    diretor: "Glauber Rocha", genero: "drama",
    nota: 9.8, duracao: 107,
    sinopse: "Um poeta e jornalista político se debate entre dois candidatos e a decadência da política latino-americana. Obra-prima do Cinema Novo, considerada o maior filme brasileiro de todos os tempos.",
    elenco: ["Jardel Filho", "Paulo Autran", "José Lewgoy"]
  },
  {
    rank: 2, titulo: "Cidade de Deus", ano: 2002,
    diretor: "Fernando Meirelles e Kátia Lund", genero: "crime",
    nota: 9.7, duracao: 130,
    sinopse: "A história de Buscapé, jovem que cresce na Cidade de Deus, complexo de favelas do Rio de Janeiro nos anos 60-80, enquanto o crime e a violência tomam conta do lugar.",
    elenco: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"]
  },
  {
    rank: 3, titulo: "Deus e o Diabo na Terra do Sol", ano: 1964,
    diretor: "Glauber Rocha", genero: "drama",
    nota: 9.7, duracao: 125,
    sinopse: "Manuel, um vaqueiro sertanejo, mata seu patrão e foge com a esposa Rosa, peregrinando pelo nordeste árido entre o misticismo e o cangaço.",
    elenco: ["Geraldo Del Rey", "Yoná Magalhães", "Othon Bastos"]
  },
  {
    rank: 4, titulo: "O Bandido da Luz Vermelha", ano: 1968,
    diretor: "Rogério Sganzerla", genero: "crime",
    nota: 9.5, duracao: 92,
    sinopse: "Inspirado no criminoso real João Acácio Pereira da Costa, o filme retrata a ascensão e queda de um ladrão marginal na São Paulo dos anos 60, com estética radicalmente pop.",
    elenco: ["Paulo Villaça", "Helena Ignez", "Pagano Sobrinho"]
  },
  {
    rank: 5, titulo: "Macunaíma", ano: 1969,
    diretor: "Joaquim Pedro de Andrade", genero: "aventura",
    nota: 9.4, duracao: 108,
    sinopse: "Adaptação do romance de Mário de Andrade sobre o herói sem nenhum caráter, que viaja do Amazonas a São Paulo, uma alegoria antropofágica da identidade brasileira.",
    elenco: ["Grande Otelo", "Paulo José", "Dina Sfat"]
  },
  {
    rank: 6, titulo: "O Pagador de Promessas", ano: 1962,
    diretor: "Anselmo Duarte", genero: "drama",
    nota: 9.3, duracao: 98,
    sinopse: "Zé do Burro percorre quilômetros carregando uma cruz para cumprir uma promessa a Santa Bárbara. Único filme brasileiro a ganhar a Palma de Ouro em Cannes.",
    elenco: ["Leonardo Villar", "Glória Menezes", "Dionísio Azevedo"]
  },
  {
    rank: 7, titulo: "Tropa de Elite", ano: 2007,
    diretor: "José Padilha", genero: "crime",
    nota: 9.2, duracao: 115,
    sinopse: "O capitão Nascimento do BOPE precisa encontrar um substituto antes do nascimento do filho. Um retrato brutal e controverso das forças policiais do Rio de Janeiro.",
    elenco: ["Wagner Moura", "Caio Junqueira", "André Ramiro"]
  },
  {
    rank: 8, titulo: "Central do Brasil", ano: 1998,
    diretor: "Walter Salles", genero: "drama",
    nota: 9.2, duracao: 110,
    sinopse: "Dora, uma ex-professora que escreve cartas para analfabetos, atravessa o Brasil com Josué, um menino órfão que busca o pai no sertão nordestino.",
    elenco: ["Fernanda Montenegro", "Vinícius de Oliveira", "Marília Pêra"]
  },
  {
    rank: 9, titulo: "O Dragão da Maldade contra o Santo Guerreiro", ano: 1969,
    diretor: "Glauber Rocha", genero: "aventura",
    nota: 9.1, duracao: 95,
    sinopse: "O retorno do cangaceiro Antônio das Mortes ao nordeste, onde enfrenta o coronelismo e a opressão popular. Premiado em Cannes como melhor direção.",
    elenco: ["Othon Bastos", "Maurício do Valle", "Odete Lara"]
  },
  {
    rank: 10, titulo: "Bye Bye Brasil", ano: 1979,
    diretor: "Carlos Diegues", genero: "drama",
    nota: 9.0, duracao: 110,
    sinopse: "Uma trupe de artistas ambulantes percorre o Brasil na era da televisão, retratando o contraste entre a modernidade e as tradições populares.",
    elenco: ["José Wilker", "Betty Faria", "Fábio Jr."]
  },
  {
    rank: 11, titulo: "Pixote: A Lei do Mais Fraco", ano: 1980,
    diretor: "Hector Babenco", genero: "drama",
    nota: 9.0, duracao: 128,
    sinopse: "Pixote é um menino de rua de São Paulo que, após fugir de um reformatório, entra no mundo do crime. Um retrato visceral da violência e da pobreza urbana.",
    elenco: ["Fernando Ramos da Silva", "Marília Pêra", "Jorge Julião"]
  },
  {
    rank: 12, titulo: "Aquarius", ano: 2016,
    diretor: "Kleber Mendonça Filho", genero: "drama",
    nota: 8.9, duracao: 145,
    sinopse: "Clara, crítica musical aposentada, resiste à pressão de uma construtora que quer demolir seu apartamento em Recife, onde viveu toda sua história.",
    elenco: ["Sônia Braga", "Humberto Carrão", "Irandhir Santos"]
  },
  {
    rank: 13, titulo: "O Sonho não Acabou", ano: 1982,
    diretor: "Sérgio Rezende", genero: "drama",
    nota: 8.8, duracao: 105,
    sinopse: "Retrato de jovens brasileiros durante a ditadura militar, entre sonhos, amor e repressão.",
    elenco: ["Paulo Betti", "Cristina Ache", "André Mello"]
  },
  {
    rank: 14, titulo: "O Auto da Compadecida", ano: 2000,
    diretor: "Guel Arraes", genero: "comedia",
    nota: 8.8, duracao: 104,
    sinopse: "João Grilo e Chicó, dois nordestinos espertos e humildes, enfrentam o coronelismo, a hipocrisia e até o próprio diabo em uma série de aventuras hilariantes.",
    elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga"]
  },
  {
    rank: 15, titulo: "Bacurau", ano: 2019,
    diretor: "Kleber Mendonça Filho e Juliano Dornelles", genero: "aventura",
    nota: 8.8, duracao: 131,
    sinopse: "Em um futuro próximo, os habitantes do pequeno município de Bacurau, no sertão, descobrem que estão sendo caçados por forasteiros.",
    elenco: ["Bárbara Colen", "Thomas Aquino", "Silvero Pereira"]
  },
  {
    rank: 16, titulo: "O Beijo no Asfalto", ano: 1981,
    diretor: "Bruno Barreto", genero: "drama",
    nota: 8.7, duracao: 104,
    sinopse: "Arandir beija um desconhecido atropelado ao ser solicitado por ele. O gesto de compaixão desencadeia uma série de calúnias que destroem sua vida.",
    elenco: ["Ney Latorraca", "Tarcísio Meira", "Vera Fischer"]
  },
  {
    rank: 17, titulo: "Gaijin: Caminhos da Liberdade", ano: 1980,
    diretor: "Tizuka Yamasaki", genero: "drama",
    nota: 8.7, duracao: 105,
    sinopse: "A história dos primeiros imigrantes japoneses no Brasil, que chegaram no início do século XX em busca de uma vida melhor nas fazendas de café.",
    elenco: ["Kyoko Tsukamoto", "Jiro Kawarazaki", "Rossana Ghessa"]
  },
  {
    rank: 18, titulo: "Carandiru", ano: 2003,
    diretor: "Hector Babenco", genero: "crime",
    nota: 8.7, duracao: 147,
    sinopse: "Baseado no livro do médico Drauzio Varella, o filme retrata a vida de presos na maior penitenciária da América Latina antes do massacre de 1992.",
    elenco: ["Luiz Carlos Vasconcelos", "Ivan de Almeida", "Ailton Graça"]
  },
  {
    rank: 19, titulo: "Como Era Gostoso o Meu Francês", ano: 1971,
    diretor: "Nelson Pereira dos Santos", genero: "aventura",
    nota: 8.6, duracao: 84,
    sinopse: "Um soldado francês é capturado pelos índios Tupinambás no século XVI e vive entre eles por meses antes de seu destino ser selado. Visão antropológica da colonização.",
    elenco: ["Arduino Colasanti", "Ana Maria Magalhães", "Eduardo Imbassahy"]
  },
  {
    rank: 20, titulo: "Eu Sei que Vou Te Amar", ano: 1986,
    diretor: "Arnaldo Jabor", genero: "drama",
    nota: 8.6, duracao: 107,
    sinopse: "Um casal em processo de separação passa uma noite juntos, revivendo memórias, paixões e ressentimentos em um duelo emocional intenso.",
    elenco: ["Fernanda Torres", "Thales Pan Chacon"]
  },
  {
    rank: 21, titulo: "O Quatrilho", ano: 1995,
    diretor: "Fábio Barreto", genero: "drama",
    nota: 8.5, duracao: 100,
    sinopse: "Na Serra Gaúcha do início do século, dois casais de imigrantes italianos trocam de parceiros em busca de felicidade. Primeiro filme brasileiro indicado ao Oscar.",
    elenco: ["Glória Pires", "Alexandre Paternost", "Patrícia Pillar"]
  },
  {
    rank: 22, titulo: "Dona Flor e Seus Dois Maridos", ano: 1976,
    diretor: "Bruno Barreto", genero: "comedia",
    nota: 8.5, duracao: 110,
    sinopse: "Após a morte do marido boêmio Vadinho, Dona Flor casa-se com o farmacêutico Teodoro — mas o espírito de Vadinho retorna para reclamar seus direitos conjugais.",
    elenco: ["Sônia Braga", "José Wilker", "Mauro Mendonça"]
  },
  {
    rank: 23, titulo: "Menino Maluquinho", ano: 1994,
    diretor: "Helvécio Ratton", genero: "comedia",
    nota: 8.4, duracao: 93,
    sinopse: "Baseado nos personagens de Ziraldo, o filme acompanha as aventuras de Maluquinho e seus amigos em Belo Horizonte nos anos 50.",
    elenco: ["Guga Coelho", "Eduardo Cavalcanti", "Cassio Gabus Mendes"]
  },
  {
    rank: 24, titulo: "Estômago", ano: 2007,
    diretor: "Marcos Jorge", genero: "drama",
    nota: 8.4, duracao: 100,
    sinopse: "Raimundo Nonato, um cozinheiro nordestino, usa seu talento culinário para ascender socialmente, da rua à prisão, onde se torna figura respeitada.",
    elenco: ["João Miguel", "Leandra Leal", "Babu Santana"]
  },
  {
    rank: 25, titulo: "O Homem que Copiava", ano: 2003,
    diretor: "Jorge Furtado", genero: "comedia",
    nota: 8.4, duracao: 123,
    sinopse: "André trabalha como copiador e se apaixona pela vizinha Sílvia. Para conseguir dinheiro e conquistá-la, envolve-se em um esquema de falsificação de dinheiro.",
    elenco: ["Lázaro Ramos", "Leandra Leal", "Pedro Cardoso"]
  },
  {
    rank: 26, titulo: "Abril Despedaçado", ano: 2001,
    diretor: "Walter Salles", genero: "drama",
    nota: 8.4, duracao: 105,
    sinopse: "No sertão do início do século XX, Tonho deve vingar a morte do irmão matando o rival de sua família — uma lenda de honra, sangue e liberdade.",
    elenco: ["Rodrigo Santoro", "Ravi Ramos Lacerda", "Flavia Marco Antonio"]
  },
  {
    rank: 27, titulo: "Xica da Silva", ano: 1976,
    diretor: "Carlos Diegues", genero: "aventura",
    nota: 8.3, duracao: 117,
    sinopse: "A história da escrava Francisca da Silva, que usou sua sensualidade para conquistar João Fernandes, o contratador de diamantes mais poderoso do Brasil colonial.",
    elenco: ["Zezé Motta", "Walmor Chagas", "Altair Lima"]
  },
  {
    rank: 28, titulo: "Narradores de Javé", ano: 2003,
    diretor: "Eliane Caffé", genero: "comedia",
    nota: 8.3, duracao: 100,
    sinopse: "Para salvar a cidadezinha de Javé, que será inundada por uma usina, os moradores precisam escrever sua história. O problema: ninguém sabe escrever direito.",
    elenco: ["José Dumont", "Matheus Nachtergaele", "Nelson Dantas"]
  },
  {
    rank: 29, titulo: "Walter Salles: A Linha Torta", ano: 2004,
    diretor: "Walter Salles", genero: "drama",
    nota: 8.3, duracao: 126,
    sinopse: "Adaptação de Diários de Motocicleta, a viagem formativa do jovem Che Guevara pela América do Sul, que moldou sua visão política.",
    elenco: ["Gael García Bernal", "Rodrigo De la Serna"]
  },
  {
    rank: 30, titulo: "Zuzu Angel", ano: 2006,
    diretor: "Sérgio Rezende", genero: "drama",
    nota: 8.3, duracao: 107,
    sinopse: "A história real da estilista Zuzu Angel, que lutou incansavelmente para descobrir o paradeiro do filho Stuart desaparecido durante a ditadura militar.",
    elenco: ["Patrícia Pillar", "Daniel de Oliveira", "Werner Schünemann"]
  },
  {
    rank: 31, titulo: "O Cangaceiro", ano: 1953,
    diretor: "Lima Barreto", genero: "aventura",
    nota: 8.2, duracao: 105,
    sinopse: "Um bando de cangaceiros semeia o terror pelo nordeste. Quando o líder se apaixona pela professora raptada, conflitos eclodem. Primeiro grande filme brasileiro de gênero.",
    elenco: ["Alberto Ruschel", "Milton Ribeiro", "Marisa Prado"]
  },
  {
    rank: 32, titulo: "O Casamento", ano: 1975,
    diretor: "Arnaldo Jabor", genero: "drama",
    nota: 8.2, duracao: 110,
    sinopse: "A luxuosa festa de casamento de Glorinha é o palco para revelar as neuroses, hipocrisias e desejos reprimidos da elite brasileira.",
    elenco: ["Joana Fomm", "Tarcísio Meira", "Paulo Sacks"]
  },
  {
    rank: 33, titulo: "Sargento Getúlio", ano: 1983,
    diretor: "Hermano Penna", genero: "drama",
    nota: 8.2, duracao: 99,
    sinopse: "Um sargento nordestino é encarregado de transportar um prisioneiro político pelo interior do Brasil, mas descobre que os chefes mudaram de ideia. Adaptação do romance de João Ubaldo Ribeiro.",
    elenco: ["Lima Duarte", "Rogério Fróes", "Haroldo de Oliveira"]
  },
  {
    rank: 34, titulo: "O Invasor", ano: 2001,
    diretor: "Beto Brant", genero: "crime",
    nota: 8.2, duracao: 97,
    sinopse: "Dois sócios contratam um matador para eliminar o terceiro parceiro. Mas o assassino decide se aproximar da família das vítimas, desestabilizando a vida burguesa paulistana.",
    elenco: ["Alexandre Borges", "Marco Ricca", "Paulo Miklos"]
  },
  {
    rank: 35, titulo: "Madame Satã", ano: 2002,
    diretor: "Karim Aïnouz", genero: "drama",
    nota: 8.2, duracao: 105,
    sinopse: "A história de João Francisco dos Santos, personagem lendário da boemia carioca dos anos 30, que se tornou ícone transgressor e temido da Lapa.",
    elenco: ["Lázaro Ramos", "Marcélia Cartaxo", "Flávio Bauraqui"]
  },
  {
    rank: 36, titulo: "Tieta do Agreste", ano: 1996,
    diretor: "Carlos Diegues", genero: "comedia",
    nota: 8.1, duracao: 140,
    sinopse: "Tieta retorna rica ao pequeno Agreste, onde foi expulsa pelo pai quando jovem. Sua presença perturba a hipocrisia moral da cidadezinha nordestina.",
    elenco: ["Sônia Braga", "Marília Pêra", "Chico Anysio"]
  },
  {
    rank: 37, titulo: "Eu Recebi as Flores que Você Mandou", ano: 2017,
    diretor: "Karim Aïnouz", genero: "drama",
    nota: 8.1, duracao: 95,
    sinopse: "Uma mulher decide transformar sua vida após descobrir que seu marido se casou com outra no exterior. Uma jornada de autodescoberta e libertação.",
    elenco: ["Carol Duarte", "Gero Camilo", "Silvero Pereira"]
  },
  {
    rank: 38, titulo: "Não Olhe Para Cima", ano: 1976,
    diretor: "Arnaldo Jabor", genero: "drama",
    nota: 8.1, duracao: 100,
    sinopse: "Um retrato amargo e irônico da classe média brasileira durante o milagre econômico, expondo suas angústias e contradições.",
    elenco: ["Paulo Gracindo", "Nuno Leal Maia", "Ruthinéia de Moraes"]
  },
  {
    rank: 39, titulo: "O Bem-Amado", ano: 1973,
    diretor: "Dias Gomes / Paulo Gil Soares", genero: "comedia",
    nota: 8.1, duracao: 110,
    sinopse: "Odorico Paraguaçu, prefeito de Sucupira, promete construir um cemitério em campanha, mas ninguém morre. Uma sátira política brilhante da obra de Dias Gomes.",
    elenco: ["Paulo Gracindo", "Ana Maria Magalhães", "José de Abreu"]
  },
  {
    rank: 40, titulo: "Cronicamente Inviável", ano: 2000,
    diretor: "Sérgio Bianchi", genero: "drama",
    nota: 8.1, duracao: 101,
    sinopse: "Um retrato cruel e fragmentado das desigualdades brasileiras, mostrando como diferentes classes sociais se relacionam e exploram umas às outras.",
    elenco: ["Dira Paes", "Dan Stulbach", "Umberto Magnani"]
  },
  {
    rank: 41, titulo: "Eles Não Usam Black-Tie", ano: 1981,
    diretor: "Leon Hirszman", genero: "drama",
    nota: 8.0, duracao: 134,
    sinopse: "Durante uma greve de operários do ABC paulista, um pai sindicalista confronta o filho que se recusa a participar. Baseado na peça de Gianfrancesco Guarnieri.",
    elenco: ["Gianfrancesco Guarnieri", "Fernanda Montenegro", "Carlos Alberto Riccelli"]
  },
  {
    rank: 42, titulo: "Vidas Secas", ano: 1963,
    diretor: "Nelson Pereira dos Santos", genero: "drama",
    nota: 8.0, duracao: 103,
    sinopse: "Uma família de retirantes nordestinos foge da seca em busca de uma vida melhor. Adaptação do romance de Graciliano Ramos, marco do Cinema Novo.",
    elenco: ["Átila Iório", "Maria Ribeiro", "Orlando Macedo"]
  },
  {
    rank: 43, titulo: "O Coronel e o Lobisomem", ano: 1979,
    diretor: "Alcino Diniz", genero: "aventura",
    nota: 7.9, duracao: 100,
    sinopse: "Adaptação do romance de José Candido de Carvalho, misturando realismo mágico, folclore brasileiro e a decadência de um coronel fluminense.",
    elenco: ["Paulo Gracindo", "Flávio Migliaccio", "Juca de Oliveira"]
  },
  {
    rank: 44, titulo: "Mauá: O Imperador e o Rei", ano: 1999,
    diretor: "Sérgio Rezende", genero: "drama",
    nota: 7.9, duracao: 132,
    sinopse: "A saga do empresário Irineu Evangelista de Sousa, o Barão de Mauá, que construiu um império industrial no Brasil do século XIX contra a resistência da elite conservadora.",
    elenco: ["Paulo Betti", "Othon Bastos", "Ana Paula Arósio"]
  },
  {
    rank: 45, titulo: "Lamarca", ano: 1994,
    diretor: "Sérgio Rezende", genero: "drama",
    nota: 7.9, duracao: 135,
    sinopse: "A história do capitão Carlos Lamarca, ex-oficial do Exército que se tornou guerrilheiro urbano durante a ditadura militar brasileira.",
    elenco: ["Paulo Betti", "Carla Camurati", "Nildo Parente"]
  },
  {
    rank: 46, titulo: "Fernando Pessoa: Uma Quasi Memória", ano: 2000,
    diretor: "Carlos Ferreiro", genero: "drama",
    nota: 7.9, duracao: 90,
    sinopse: "Uma exploração ficcional da vida e dos heterônimos do poeta Fernando Pessoa, misturando drama, poesia e reflexão sobre identidade.",
    elenco: ["Joaquim de Almeida", "Leonor Silveira"]
  },
  {
    rank: 47, titulo: "O Primeiro Dia", ano: 1998,
    diretor: "Walter Salles e Daniela Thomas", genero: "drama",
    nota: 7.9, duracao: 74,
    sinopse: "Na virada do milênio, dois personagens de mundos opostos — uma prostituta e um preso foragido — se encontram no Rio de Janeiro.",
    elenco: ["Fernanda Torres", "Luiz Carlos Vasconcelos"]
  },
  {
    rank: 48, titulo: "O Que É Isso, Companheiro?", ano: 1997,
    diretor: "Bruno Barreto", genero: "drama",
    nota: 7.8, duracao: 105,
    sinopse: "Baseado no livro de Fernando Gabeira, o filme reconstrói o sequestro do embaixador americano Charles Burke Elbrick pelos guerrilheiros MR-8 em 1969.",
    elenco: ["Pedro Cardoso", "Alan Arkin", "Fernanda Torres"]
  },
  {
    rank: 49, titulo: "Bicho de Sete Cabeças", ano: 2000,
    diretor: "Laís Bodanzky", genero: "drama",
    nota: 7.8, duracao: 74,
    sinopse: "Neto é internado pelo pai em um manicômio após ser encontrado com maconha. O filme expõe os horrores do sistema psiquiátrico brasileiro nos anos 70.",
    elenco: ["Rodrigo Santoro", "Othon Bastos", "Cássia Kiss"]
  },
  {
    rank: 50, titulo: "Não por Acaso", ano: 2007,
    diretor: "Philippe Barcinski", genero: "drama",
    nota: 7.8, duracao: 95,
    sinopse: "Pedro, engenheiro de trânsito em São Paulo, descobre que tem um filho que não conhecia. Um olhar delicado sobre paternidade, casualidade e conexões humanas.",
    elenco: ["Leonardo Medeiros", "Goiá Melani", "Leandra Leal"]
  },
  {
    rank: 51, titulo: "Cinema, Aspirinas e Urubus", ano: 2005,
    diretor: "Marcelo Gomes", genero: "aventura",
    nota: 7.8, duracao: 99,
    sinopse: "Um alemão e um nordestino percorrem o sertão vendendo aspirinas de porta em porta. Um road movie poético sobre dois estranhos e um Brasil desconhecido.",
    elenco: ["Johann Myers", "Ranvisson Melo"]
  },
  {
    rank: 52, titulo: "Quase Dois Irmãos", ano: 2004,
    diretor: "Lúcia Murat", genero: "drama",
    nota: 7.8, duracao: 100,
    sinopse: "A amizade entre dois homens — um filho de diplomata e um filho de favela — atravessa décadas, da prisão política dos anos 70 às facções criminosas dos anos 90.",
    elenco: ["Werner Schünemann", "Flávio Bauraqui", "Rogerio Bebe Duran"]
  },
  {
    rank: 53, titulo: "O Homem do Pau-Brasil", ano: 1982,
    diretor: "Joaquim Pedro de Andrade", genero: "comedia",
    nota: 7.7, duracao: 95,
    sinopse: "Biografia ficcional do poeta Oswald de Andrade, figura central do modernismo brasileiro, retratado em suas contradições entre burguesia e vanguarda.",
    elenco: ["Flávio Galvão", "Ítala Nandi", "Cláudia Jimenez"]
  },
  {
    rank: 54, titulo: "Viagem ao Fim do Mundo", ano: 1968,
    diretor: "Fernando Coni Campos", genero: "aventura",
    nota: 7.7, duracao: 90,
    sinopse: "Uma família viaja pelo interior do Brasil em busca de uma terra prometida. Uma fábula poética sobre sonhos, pobreza e esperança.",
    elenco: ["Hugo Carvana", "Arduíno Colasanti", "Ítala Nandi"]
  },
  {
    rank: 55, titulo: "O Dia em que Dorival Caymmi Chegou de Barco", ano: 1978,
    diretor: "Carlos Diegues", genero: "drama",
    nota: 7.7, duracao: 88,
    sinopse: "Cenas do cotidiano baiano se entrelaçam com a música de Caymmi, em um retrato poético da cultura e da identidade nordestina.",
    elenco: ["Dorival Caymmi", "Vanda Lacerda", "Nelson Xavier"]
  },
  {
    rank: 56, titulo: "Tropa de Elite 2: O Inimigo Agora É Outro", ano: 2010,
    diretor: "José Padilha", genero: "crime",
    nota: 7.7, duracao: 115,
    sinopse: "O ex-capitão Nascimento enfrenta agora a corrupção sistêmica do Estado e as milícias que controlam as favelas cariocas após deixar o BOPE.",
    elenco: ["Wagner Moura", "Irandhir Santos", "André Ramiro"]
  },
  {
    rank: 57, titulo: "O Amor Natural", ano: 1996,
    diretor: "Heddy Honigmann", geneto: "drama",
    genero: "drama",
    nota: 7.7, duracao: 77,
    sinopse: "Documentário onde idosos cariocas leem e comentam os poemas eróticos inéditos de Carlos Drummond de Andrade, revelando uma visão da sexualidade e da velhice.",
    elenco: []
  },
  {
    rank: 58, titulo: "Hans Staden", ano: 1999,
    diretor: "Luiz Alberto Pereira", genero: "aventura",
    nota: 7.6, duracao: 100,
    sinopse: "Baseado nos escritos do aventureiro alemão Hans Staden, que foi capturado pelos índios Tupinambás no século XVI e sobreviveu para contar a história.",
    elenco: ["Carlos Evelyn", "Stênio Garcia", "José Dumont"]
  },
  {
    rank: 59, titulo: "A Hora e a Vez de Augusto Matraga", ano: 1965,
    diretor: "Roberto Santos", genero: "drama",
    nota: 7.6, duracao: 107,
    sinopse: "Baseado no conto de Guimarães Rosa, a história de um fazendeiro violento que, após ser quase morto, se regenera espiritualmente e busca redenção.",
    elenco: ["Leonardo Villar", "Jece Valadão", "Myrian Pires"]
  },
  {
    rank: 60, titulo: "Linha de Passe", ano: 2008,
    diretor: "Walter Salles e Daniela Thomas", genero: "drama",
    nota: 7.6, duracao: 113,
    sinopse: "Quatro irmãos e sua mãe solteira buscam seus caminhos em São Paulo. Um retrato sensível e contemporâneo da periferia paulistana.",
    elenco: ["Sandra Corveloni", "João Baldasserini", "Kaique de Jesus Santos"]
  },
  {
    rank: 61, titulo: "São Paulo Sociedade Anônima", ano: 1965,
    diretor: "Luís Sérgio Person", genero: "drama",
    nota: 7.6, duracao: 108,
    sinopse: "Carlos, funcionário da indústria automobilística na São Paulo dos anos 50, debate-se entre o sucesso profissional e suas aspirações artísticas e amorosas.",
    elenco: ["Walmor Chagas", "Nydia Licia", "Eva Wilma"]
  },
  {
    rank: 62, titulo: "2 Filhos de Francisco", ano: 2005,
    diretor: "Breno Silveira", genero: "drama",
    nota: 7.6, duracao: 100,
    sinopse: "A história real de Francisco, pai humilde do interior de Minas Gerais que sonhou e batalhou para que seus filhos Zezé di Camargo e Luciano se tornassem cantores.",
    elenco: ["Ângelo Antônio", "Dira Paes", "Márcio Kieling"]
  },
  {
    rank: 63, titulo: "A Febre do Rato", ano: 2011,
    diretor: "Cláudio Assis", genero: "drama",
    nota: 7.5, duracao: 110,
    sinopse: "Zizo é um jornaleiro e poeta marginal do Recife que vive intensamente entre amores, amigos e sua visão de um mundo alternativo ao capitalismo.",
    elenco: ["Ranvisson Melo", "Matheus Nachtergaele", "Sylvia Prado"]
  },
  {
    rank: 64, titulo: "Anjos do Sol", ano: 2006,
    diretor: "Rudi Lagemann", genero: "drama",
    nota: 7.5, duracao: 90,
    sinopse: "Maria, uma menina nordestina de 12 anos, é vendida pela família e cai nas mãos de traficantes de mulheres. Um retrato corajoso da exploração sexual infantil.",
    elenco: ["Fernanda Carvalho", "Chico Diaz", "Rômulo Arantes Neto"]
  },
  {
    rank: 65, titulo: "Feliz Natal", ano: 2008,
    diretor: "Selton Mello", genero: "drama",
    nota: 7.5, duracao: 108,
    sinopse: "Em uma noite de Natal, as relações de uma família brasileira disfuncional entram em colapso durante o jantar, revelando traumas e ressentimentos antigos.",
    elenco: ["Selton Mello", "Dira Paes", "Caio Blat"]
  },
  {
    rank: 66, titulo: "A Ostra e o Vento", ano: 1997,
    diretor: "Walter Lima Jr.", genero: "drama",
    nota: 7.5, duracao: 115,
    sinopse: "Marcela vive isolada com o pai em um farol. Quando um marinheiro chega, as tensões entre pai e filha explodem em uma trama de desejo e possessão.",
    elenco: ["Leandra Leal", "Lima Duarte", "Floriano Peixoto"]
  },
  {
    rank: 67, titulo: "O Cheiro do Ralo", ano: 2007,
    diretor: "Heitor Dhalia", genero: "drama",
    nota: 7.5, duracao: 97,
    sinopse: "Um comprador de joias e objetos usados conduz negociações humilhantes com pessoas desesperadas, enquanto se obsessiona com a garçonete de um bar.",
    elenco: ["Selton Mello", "Évelyn Castro", "Danton Mello"]
  },
  {
    rank: 68, titulo: "Bendito Fruto", ano: 2005,
    diretor: "Sérgio Goldenberg", genero: "comedia",
    nota: 7.5, duracao: 82,
    sinopse: "Um homem tem amantes em diferentes bairros do Rio de Janeiro e descobre que todas estão grávidas ao mesmo tempo. Uma comédia urbana sobre os dilemas masculinos.",
    elenco: ["Murilo Benício", "Drica Moraes", "Ana Paula Arósio"]
  },
  {
    rank: 69, titulo: "Pequeno Dicionário Amoroso", ano: 1997,
    diretor: "Sandra Werneck", genero: "comedia",
    nota: 7.4, duracao: 89,
    sinopse: "Laura descobre que o namorado vai se casar com outra e decide virar a mesa. Uma comédia romântica sobre relacionamentos contemporâneos no Rio de Janeiro.",
    elenco: ["Cláudia Abreu", "Daniel Dantas", "Ana Paula Arósio"]
  },
  {
    rank: 70, titulo: "O Sonho de Rose — Dez Anos Depois", ano: 1997,
    diretor: "Jorge Furtado", genero: "drama",
    nota: 7.4, duracao: 73,
    sinopse: "Sequência de 'A História Real de Rose do Gaúcho', acompanhando a família de sem-terra dez anos depois, em uma reflexão sobre promessas não cumpridas.",
    elenco: ["Directed by Jorge Furtado"]
  },
  {
    rank: 71, titulo: "Cão sem Dono", ano: 2007,
    diretor: "Beto Brant e Renato Ciasca", genero: "drama",
    nota: 7.4, duracao: 95,
    sinopse: "Após ser abandonado pela namorada, Victor vive um mês de depressão e reencontros que o forçam a repensar suas prioridades. Um retrato da masculinidade contemporânea.",
    elenco: ["Júlio Andrade", "Leandra Leal", "Cássia Kis"]
  },
  {
    rank: 72, titulo: "Nina", ano: 2004,
    diretor: "Heitor Dhalia", genero: "crime",
    nota: 7.4, duracao: 95,
    sinopse: "Nina é uma estudante de artes que passa seus dias vagando pela cidade e suas noites vendendo seu corpo para sobreviver. Um noir baiano denso e sensorial.",
    elenco: ["Guta Stresser", "Gustavo Machado", "Marco Ricca"]
  },
  {
    rank: 73, titulo: "Era uma Vez Eu, Verônica", ano: 2012,
    diretor: "Marcelo Gomes", genero: "drama",
    nota: 7.4, duracao: 88,
    sinopse: "Verônica, médica recém-formada no Recife, tenta equilibrar sua vida profissional com a relação de cuidado com o pai, enquanto busca prazer e identidade.",
    elenco: ["Hermila Guedes", "W.J. Solha", "Cláudia Mello"]
  },
  {
    rank: 74, titulo: "Amores Possíveis", ano: 2001,
    diretor: "Sandra Werneck", genero: "comedia",
    nota: 7.3, duracao: 90,
    sinopse: "Em três histórias paralelas, o mesmo homem vive realidades alternativas dependendo da escolha que fez no passado. Uma comédia romântica sobre destino e coincidência.",
    elenco: ["Dan Stulbach", "Carolina Ferraz", "Júlia Lemmertz"]
  },
  {
    rank: 75, titulo: "A Concepção", ano: 2005,
    diretor: "José Eduardo Belmonte", genero: "comedia",
    nota: 7.3, duracao: 92,
    sinopse: "Uma mulher que não suporta crianças descobre estar grávida. Sua busca por uma saída para a situação resulta em situações cada vez mais absurdas.",
    elenco: ["Cláudia Abreu", "Caco Ciocler", "Duda Mamberti"]
  },
  {
    rank: 76, titulo: "Cine Holliúdy", ano: 2013,
    diretor: "Halder Gomes", genero: "comedia",
    nota: 7.3, duracao: 90,
    sinopse: "Francisgleydisson leva o cinema ao interior do Ceará nos anos 70. Uma comédia carinhosa sobre cultura popular, sonhos grandes e meios pequenos.",
    elenco: ["Edmilson Filho", "Nill Marcondes", "Carlos Marcelo"]
  },
  {
    rank: 77, titulo: "Gonzaga: De Pai para Filho", ano: 2012,
    diretor: "Breno Silveira", genero: "drama",
    nota: 7.3, duracao: 118,
    sinopse: "A história da relação entre Luiz Gonzaga e seu filho Gonzaguinha, dois artistas que viveram o conflito entre herança e identidade na música brasileira.",
    elenco: ["Chambinho do Acordeon", "TPaixão", "Paula Burlamaqui"]
  },
  {
    rank: 78, titulo: "Cafundó", ano: 2005,
    diretor: "Paulo Betti e Clóvis Bueno", genero: "drama",
    nota: 7.3, duracao: 99,
    sinopse: "João de Camargo, ex-escravo do interior paulista no fim do século XIX, é guiado por um espírito e funda um local de cura que se torna centro de peregrinação.",
    elenco: ["Lazaro Ramos", "Dira Paes", "Stenio Garcia"]
  },
  {
    rank: 79, titulo: "Um Show de Verão", ano: 1990,
    diretor: "Roberto Talma", genero: "comedia",
    nota: 7.3, duracao: 80,
    sinopse: "Nos anos dourados do Cassino da Urca, jovens artistas sonham com a fama enquanto o Brasil vive a era Vargas. Uma comédia nostálgica e musical.",
    elenco: ["Marcos Nanini", "Cássia Kis", "Andrea Beltrão"]
  },
  {
    rank: 80, titulo: "Aparecida: O Milagre", ano: 2011,
    diretor: "Tande Bressane", genero: "drama",
    nota: 7.2, duracao: 110,
    sinopse: "A história do descobrimento da imagem de Nossa Senhora Aparecida no Rio Paraíba em 1717 e como ela se tornou a padroeira do Brasil.",
    elenco: ["Tônia Carrero", "Mônica Martelli", "Alexandre Borges"]
  },
  {
    rank: 81, titulo: "Uma Vida em Segredo", ano: 2002,
    diretor: "Suzana Amaral", genero: "drama",
    nota: 7.2, duracao: 89,
    sinopse: "Biela, uma jovem do interior do Brasil, vai morar com parentes na cidade e enfrenta a dificuldade de se adaptar ao mundo urbano enquanto preserva sua essência.",
    elenco: ["Sabrina Greve", "Rya Volkova", "Marcélia Cartaxo"]
  },
  {
    rank: 82, titulo: "A Cor do Crime", ano: 2007,
    diretor: "Joel Zito Araújo", genero: "drama",
    nota: 7.2, duracao: 91,
    sinopse: "Um thriller policial que expõe o racismo no sistema judiciário brasileiro, quando um homem negro é suspeito de um crime que não cometeu.",
    elenco: ["Luís Miranda", "Buza Ferraz", "Camila Amado"]
  },
  {
    rank: 83, titulo: "O Carteiro e o Cantor", ano: 1994,
    diretor: "Massimo Troisi / Michael Radford", genero: "drama",
    nota: 7.2, duracao: 109,
    sinopse: "Mario Ruoppolo torna-se amigo e carteiro de Pablo Neruda exilado na ilha italiana, aprendendo sobre poesia e amor. Coprodução com participação brasileira.",
    elenco: ["Massimo Troisi", "Philippe Noiret", "Maria Grazia Cucinotta"]
  },
  {
    rank: 84, titulo: "Chega de Saudade", ano: 2007,
    diretor: "Laís Bodanzky", genero: "comedia",
    nota: 7.2, duracao: 96,
    sinopse: "Em um salão de baile de São Paulo onde idosos dançam forró, os encontros, as histórias e os romances de várias personagens se entrelaçam em uma noite.",
    elenco: ["Stepan Nercessian", "Emiliano Queiroz", "Berta Zemmel"]
  },
  {
    rank: 85, titulo: "Turistas", ano: 2009,
    diretor: "Alê Abreu", genero: "animacao",
    nota: 7.2, duracao: 70,
    sinopse: "Uma animação que acompanha turistas estrangeiros descobrindo o Brasil, em uma obra que mistura humor, crítica social e beleza visual.",
    elenco: []
  },
  {
    rank: 86, titulo: "Boa Sorte, Meu Amor", ano: 2014,
    diretor: "Daniel Aragão", genero: "drama",
    nota: 7.1, duracao: 84,
    sinopse: "Jonas, soropositivo, tem medo de contar ao namorado. Um drama intimista sobre amor, silêncio e coragem em uma relação homossexual contemporânea.",
    elenco: ["Jesuita Barbosa", "Rafael Queiroz", "Felipe Frazão"]
  },
  {
    rank: 87, titulo: "Corações Sujos", ano: 2011,
    diretor: "Vicente Ferraz", genero: "drama",
    nota: 7.1, duracao: 107,
    sinopse: "No pós-guerra, membros fanáticos da colônia japonesa no Brasil não acreditam na derrota do Japão e perseguem os compatriotas que aceitam a rendição.",
    elenco: ["Kei Fujiwara", "Celso Frateschi", "Flávio Bauraqui"]
  },
  {
    rank: 88, titulo: "Saneamento Básico", ano: 2007,
    diretor: "Jorge Furtado", genero: "comedia",
    nota: 7.1, duracao: 100,
    sinopse: "Uma comunidade rural precisa de verbas para saneamento básico e descobre que só consegue a verba se produzir um filme de ficção. Uma comédia sobre burocracia e cinema.",
    elenco: ["Wagner Moura", "Camila Pitanga", "Fabrício Boliveira"]
  },
  {
    rank: 89, titulo: "Quando eu Era Vivo", ano: 2014,
    diretor: "Marco Dutra", genero: "drama",
    nota: 7.1, duracao: 90,
    sinopse: "Bernardo vai morar com o ex-padrasto após a morte da mãe. Uma atmosfera de estranheza e tensão vai se instaurando na nova convivência.",
    elenco: ["Paulo Miklos", "Tavinho Teixeira", "Helena Albergaria"]
  },
  {
    rank: 90, titulo: "Boca a Boca", ano: 1995,
    diretor: "Daniel Filho", genero: "comedia",
    nota: 7.1, duracao: 95,
    sinopse: "Victor, um galã de telenovelas, decide mudar de vida e trabalha secretamente em um disk-sexo, mantendo a dupla identidade escondida de família e fãs.",
    elenco: ["Murilo Benício", "Ana Paula Arósio", "Pedro Cardoso"]
  },
  {
    rank: 91, titulo: "A Odisseia de Kazuo Watanabe", ano: 2015,
    diretor: "Rogério Sganzerla", genero: "drama",
    nota: 7.0, duracao: 80,
    sinopse: "Um nipo-brasileiro viaja pelo Brasil em busca das raízes de sua identidade dupla, em uma odisseia contemporânea sobre pertencimento.",
    elenco: []
  },
  {
    rank: 92, titulo: "Se Eu Fosse Você", ano: 2006,
    diretor: "Daniel Filho", genero: "comedia",
    nota: 7.0, duracao: 100,
    sinopse: "Um casal vive uma troca de corpos e passa a encarar a vida do outro. A comédia mais vista da história do cinema brasileiro.",
    elenco: ["Tony Ramos", "Glória Pires", "Luana Piovani"]
  },
  {
    rank: 93, titulo: "Um Céu de Estrelas", ano: 1996,
    diretor: "Tata Amaral", genero: "drama",
    nota: 7.0, duracao: 90,
    sinopse: "Dalva faz as malas para fugir do marido violento Vitor. Quando ele chega e a mantém refém, uma situação extrema começa a se desenrolar.",
    elenco: ["Dira Paes", "Antônio Abujamra", "Chico Diaz"]
  },
  {
    rank: 94, titulo: "Lua de Outubro", ano: 2020,
    diretor: "Karen Akerman e Miguel Antunes Ramos", genero: "drama",
    nota: 7.0, duracao: 82,
    sinopse: "Manuela está às vésperas de casar. Mas à medida que o casamento se aproxima, suas dúvidas sobre o noivo, a vida e suas escolhas se intensificam.",
    elenco: ["Giulia Fiedler", "Marcelo Médici", "Belize Pombal"]
  },
  {
    rank: 95, titulo: "O Menino e o Mundo", ano: 2013,
    diretor: "Alê Abreu", genero: "animacao",
    nota: 9.0, duracao: 84,
    sinopse: "Cuca sai de sua aldeia para encontrar seu pai que foi para a grande cidade. Uma animação brasileira vencedora do Annie Award, poética e politicamente engajada.",
    elenco: []
  },
  {
    rank: 96, titulo: "Vai que Cola: O Filme", ano: 2015,
    diretor: "César Rodrigues", genero: "comedia",
    nota: 6.9, duracao: 100,
    sinopse: "Os moradores do Hotel Casablanca entram em uma aventura para salvar o lugar onde vivem, em versão cinematográfica da série de sucesso do Multishow.",
    elenco: ["Camila Morgado", "Cacau Protásio", "Lúcio Mauro Filho"]
  },
  {
    rank: 97, titulo: "Minha Mãe é uma Peça", ano: 2013,
    diretor: "André Pellenz", genero: "comedia",
    nota: 6.9, duracao: 82,
    sinopse: "Dona Hermínia, mãe dramática e controladora, decide viajar sozinha após os filhos a decepcionarem. Uma das maiores bilheterias do cinema nacional.",
    elenco: ["Paulo Gustavo", "Rodrigo Pandolfo", "Mariana Xavier"]
  },
  {
    rank: 98, titulo: "Trash", ano: 2014,
    diretor: "Stephen Daldry", genero: "aventura",
    nota: 7.5, duracao: 114,
    sinopse: "Três garotos de uma favela carioca encontram uma carteira no lixão e se tornam alvos da polícia corrupta, em um thriller de ação filmado no Brasil.",
    elenco: ["Rickson Tevez", "Eduardo Luis", "Gabriel Weinstein"]
  },
  {
    rank: 99, titulo: "Hoje eu Quero Voltar Sozinho", ano: 2014,
    diretor: "Daniel Ribeiro", genero: "drama",
    nota: 7.8, duracao: 95,
    sinopse: "Leonardo, cego de 15 anos, descobre seus sentimentos pelo novo colega Gabriel. Uma história de amor adolescente sensível e universal.",
    elenco: ["Ghilherme Lobo", "Fabio Audi", "Tess Amorim"]
  },
  {
    rank: 100, titulo: "Alvorada", ano: 2022,
    diretor: "Anna Muylaert e Lô Politi", genero: "drama",
    nota: 7.6, duracao: 92,
    sinopse: "Uma família de sem-terra acampa em frente ao Palácio da Alvorada no dia em que Lula assume a presidência pela segunda vez, esperando ser recebida.",
    elenco: ["Dira Paes", "Sandra Dani", "Chico Diaz"]
  }
];
