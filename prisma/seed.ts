import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const listLucas = [
    // "Lucas Chicoski dos Santos",
    // "Brenda Miurim",
    "Alda",
    "Alencar Dorneles",
    "Amilton Dorneles",
    "Ana Beatriz Fonseca",
    "Ana Clara Dorneles",
    "Andressa dos Santos",
    "Beatriz Garcia",
    "Bernardo Dorneles",
    "Bernardo Santos Moreira",
    "Bruna Chicoski dos Santos",
    "Christiane Dos Santos",
    "Dayane Lima Silva",
    "Doriedson Dorneles",
    "Edna Moreira",
    "Eduarda Cardoso",
    "Eduardo Cardoso",
    "Eduardo dos Santos",
    "Emanuely Dorneles",
    "Emily dos Santos",
    "Gabriely Dorneles",
    "George Moreno",
    "Giovana Krauzer Kumm",
    "Gustavo Moraes",
    "Igor Dorneles",
    "Isabela Dorneles",
    "Isadora Dorneles",
    "Jassiara Dorneles",
    "João Pedro Dorneles",
    "Jose Carlos dos Santos",
    "Jucirlene Dorneles",
    "Júlia (Murilo)",
    "Juliana Dorneles",
    "Leonardo Eliziário",
    "Marcilene Chicoski dos Santos",
    "Marcos Moreira",
    "Maria Auxiliadora dos Santos",
    "Maria Eduarda dos Santos",
    "Marilúcia Cardoso",
    "Milto (Alda)",
    "Murilo Louzada",
    "Paulo Dorneles",
    "Ramon Fonseca",
    "Reinaldo Filho dos Santos",
    "Reinaldo Neto Fonseca",
    "Rita Santana dos Santos",
    "Rodrigo Dos Santos",
    "Rodrigo Geike", //Esposa
    "Rose Dos Santos",
    "Silvana Dorneles",
    "Vitor Dorneles",
    "Yuri Tinti",

]

const listBrenda = [
    "Alexandre Lemos",
    "Alice Fernandes ",
    "Amilton Alpoim",
    "Ana Alpoim",
    "Ana Karolina ",
    "Arlece Lemos",
    "Betania Miurim",
    "Bruna Dalfior",
    "Cremilda Repossi",
    "Done Dalfior",
    "Dove Repossi",
    "Evelyn Vieira",
    "Fernando Repossi",
    "Ingridh Nunes",
    "Janaina",
    "João Dalfior",
    "Joyce Oliveira",
    "Jubertina Repossi",
    "Judith Dalfior",
    "Katia Fornaciari",
    "Larissa Miurim",
    "Leticia",
    "Lillian",
    "Luana Lemos",
    "Maria Clara",
    "Maria Dalfior",
    "Nemesio  Fornaciari",
    "Nila Repossi",
    "Pedrão",
    "Pedro Dalfior",
    "Pollyana",
    "Ramon Miurim",
    "Raquel Scardini",
    "Robinho",
    "Romulo ",
    "Rosa Miurim",
    "Rose Dalfior",
    "Rosilene Miurim",
    "Sebastião Repossi",
    "Selma Oliveira",
    "Suri Dalfior",
    "Tales Miurim",
    "Tony Lemos",
    "Vinicius Leite",
    "Zanandra",
]

async function main(list: Array<string>) {
    list.forEach(async (element) => {
        await prisma.guest.create({
            data: {
                name: element,
            }
        })
    })
}


const allList = [
    listLucas,
    listBrenda
]



allList.forEach((element) => {
    main(element)
})


