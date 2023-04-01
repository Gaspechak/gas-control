import { NextResponse } from 'next/server';
import { handleInsert, handleGetAll, handleUpdate, handleRemove } from '../../../modules/service/VeiculoService'

export async function POST(request) {
    const body = await request.json();
    const result = await handleInsert(body)
    return NextResponse.json(result.data, { status: result.status })
}

export async function GET() {
    const result = await handleGetAll()
    return NextResponse.json(result.data, { status: result.status })
}

export async function PUT(request) {
    const body = await request.json();
    const result = await handleUpdate(body)
    return NextResponse.json(result.data, { status: result.status })
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get('id'))
    const result = await handleRemove(id)
    return NextResponse.json(result.data, { status: result.status })
}