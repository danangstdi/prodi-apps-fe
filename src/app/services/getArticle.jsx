export const getArticle = async (param) => {
  const getParam = param ? param : '';
  const res = await fetch(`http://prodi-apps.test/api/v2/article${getParam}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}