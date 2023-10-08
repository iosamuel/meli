import Breadcrumbs from "@/components/Breadcrumbs";
import ItemsList from "@/components/ItemsList";

export default function Items({ items }: { items: Items }) {
  return (
    <>
      <Breadcrumbs categories={items.categories} />
      <ItemsList items={items} />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { search } = context.query;

  if (!search) {
    return {
      props: {
        items: {
          categories: null,
          items: [],
        },
      },
    };
  }

  const searchQuery = search.replace(/ /g, "+");

  const data = await fetch(
    `${process.env.API_URL}/items?q=${searchQuery}`
  ).then((res) => res.json());

  if (!data.items.length) {
    return {
      props: {
        items: {
          categories: null,
          items: [],
        },
      },
    };
  }

  return {
    props: {
      items: data,
    },
  };
};
