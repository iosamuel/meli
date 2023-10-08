import { MELI } from "@/resources";
import fetchMeli from "./meli";

export async function getCategories(id: string) {
  const { path_from_root } = await fetchMeli(`${MELI.CATEGORY}/${id}`);

  return path_from_root.map((c: any) => c.name);
}
