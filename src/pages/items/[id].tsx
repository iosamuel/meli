import Breadcrumbs from "@/components/Breadcrumbs";
import ItemDetails from "@/components/ItemDetails";

export default function ItemDetail({ item }: { item: Item }) {
  return (
    <>
      <Breadcrumbs categories={item.categories} />
      <ItemDetails item={item.item} />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  const data = await fetch(`${process.env.API_URL}/items/${id}`).then((res) =>
    res.json()
  );

  return {
    props: {
      item: data,
    },
  };
};
