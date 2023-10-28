import { goto } from "$app/navigation";

export const navigate = (route: string) => {
	goto(`/${route}`, { replaceState: false });
};