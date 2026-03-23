export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  if (!res.ok) {
    throw new Error(`${res.status} - ${res.statusText}. ${data.message}`);
  }

  return data;
};
