import { MELI } from "@/resources";
import fetchMeli from "@/services/meli";
import { getCategories } from "@/services/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Items>
) {
  const q = req.query.q as string;
  const { results, available_filters } = await fetchMeli(MELI.SEARCH, { q });

  const categories = await getCategoriesFromFilters(available_filters);
  const items = results.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: Math.floor((item.price - Math.floor(item.price)) * 100),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));

  res.status(200).json({
    author: {
      name: "Samuel",
      lastname: "Burbano",
    },
    categories,
    items: items.slice(0, 4),
  });
}

async function getCategoriesFromFilters(available_filters: any[]) {
  const categories = available_filters.find(
    (f: any) => f.id === "category"
  )?.values;

  let categoryWithMoreResultsId = null;

  if (categories) {
    const categoryWithMoreResults = Math.max(
      ...categories.map((c: any) => c.results)
    );

    categoryWithMoreResultsId = categories.find(
      (v: any) => v.results === categoryWithMoreResults
    ).id;
  }

  if (categoryWithMoreResultsId) {
    return getCategories(categoryWithMoreResultsId);
  }

  return null;
}
