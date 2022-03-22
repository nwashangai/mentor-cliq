export default (req, res) => {
  if (req.method === "POST") {
    res.status(200).json({ message: "success" });
  } else {
    res.status(401).json({ message: "Not found" });
  }
};
