export interface IIdProps {
	id: string
}

export interface IPageWithIDProps {
	params: Promise<IIdProps>
}
