import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

const insert = async (veiculo) => await db.veiculo.create({ data: veiculo })

const getAll = async () => await db.veiculo.findMany()

const update = async (veiculo) => await db.veiculo.update(
    { where: { id: veiculo.id }, data: veiculo }
)

const remove = async (id) => await db.veiculo.delete({ where: { id: id } })

export { insert, getAll, update, remove }