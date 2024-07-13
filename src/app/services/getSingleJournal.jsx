export const getSingleJournal = async (params) => {
  const res = await fetch(`${process.env.SERVER}api/v2/journal/${params}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}