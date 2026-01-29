const fetchPostAsText = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  const cleanTitle = data.title.trim();
  const cleanBody = data.body.replace(/\n+/g, " ").trim();

  return `${cleanTitle} - ${cleanBody}`;
};

module.exports = { fetchPostAsText };
