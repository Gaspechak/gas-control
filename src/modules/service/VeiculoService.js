import { insert, getAll, update, remove } from "../data/VeiculoDAO"

const handleInsert = async (veiculo) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await insert(veiculo)
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const handleGetAll = async () => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await getAll()
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const handleUpdate = async (veiculo) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await update(veiculo)
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const handleRemove = async (id) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        result.data = await remove(id)
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

export { handleInsert, handleGetAll, handleUpdate, handleRemove }