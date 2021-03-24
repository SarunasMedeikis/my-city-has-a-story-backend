function createUser(req, res) {
  const models = { some: "data", pork: "buns" };

  res.status(200).json({ models });
}

function profile(req, res) {
  res.status(200).json({ profile: "profile here" });
}

module.exports = { createUser, profile };
