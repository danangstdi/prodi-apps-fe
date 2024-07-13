export const getSingleArticle = async (params) => {
  const res = await fetch(`${process.env.SERVER}api/v2/article/${params}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}