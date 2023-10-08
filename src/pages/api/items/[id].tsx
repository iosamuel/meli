import { MELI } from "@/resources";
import fetchMeli from "@/services/meli";
import { getCategories } from "@/services/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item>
) {
  const id = req.query.id as string;
  const item = await fetchMeli(`${MELI.ITEM}/${id}`);
  const { plain_text } = await fetchMeli(`${MELI.ITEM}/${id}/description`);

  const categories = await getCategories(item.category_id);

  return res.status(200).json({
    author: {
      name: "Samuel",
      lastname: "Burbano",
    },
    categories,
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: Math.floor((item.price - Math.floor(item.price)) * 100),
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: plain_text,
    },
  });
}
