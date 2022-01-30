export const index = async (req, res) => {
  return res.json({
    title: "FullStack Alkemy Challenge",
    author: "Agustín Tornielli",
    status: "Online",
  });
};
