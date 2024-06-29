export const getSingleArticle = async (params) => {
  const res = await fetch(`http://prodi-apps.test/api/v2/article/${params}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}