type data = {
	id: string;
};

export async function load({ params }): Promise<data> {
	const id = params.slug;
	return { id };
}
