export const getWebConfig = async () => {
  const res = await fetch(`${process.env.SERVER}api/v2/website-config`);

  if (!res.ok) {
    return false
  }

  return res.json();
}