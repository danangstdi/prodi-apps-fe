export const getWebConfig = async () => {
  const res = await fetch(`http://prodi-apps.test/api/v2/website-config`);

  if (!res.ok) {
    return false
  }

  return res.json();
}