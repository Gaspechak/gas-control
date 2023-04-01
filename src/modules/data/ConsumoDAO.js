import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

const insert = async (consumo) => await db.consumo.create({ data: consumo })

const getAll = async () => await db.consumo.findMany()

const update = async (consumo) => await db.consumo.update(
    { where: { id: consumo.id }, data: consumo }
)

const remove = async (id) => await db.consumo.delete({ where: { id: id } })

export { insert, getAll, update, remove }