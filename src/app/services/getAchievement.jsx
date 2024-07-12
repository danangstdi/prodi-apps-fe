export const getAchievement = async (param) => {
  const getParam = param ? param : '';
  const res = await fetch(`http://prodi-apps.test/api/v2/achievement${getParam}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}