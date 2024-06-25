export const getArticle = async () => {
  const res = await fetch('http://prodi-apps.test/api/v2/article');

  if (!res.ok) {
    return false
  }

  return res.json();
}