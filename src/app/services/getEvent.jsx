export const getEvent = async (param) => {
  const getParam = param ? param : '';
  const res = await fetch(`${process.env.SERVER}api/v2/event${getParam}`);

  if (!res.ok) {
    return false
  }

  return res.json();
}