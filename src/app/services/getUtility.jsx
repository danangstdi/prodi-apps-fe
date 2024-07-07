export const getUtility = async (param) => {
  const getParam = param ? param : '';
  const res = await fetch(`http://prodi-apps.test/api/v2/utility${getParam}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}