
export interface Author {
    id?: number
    name: string
}

export interface LibraryResponse<T> {
    data: T
}