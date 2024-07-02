export const getSingleJournal = async (params) => {
  const res = await fetch(`http://prodi-apps.test/api/v2/journal/${params}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}