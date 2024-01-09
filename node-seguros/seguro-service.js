const { SEGUROS } = require("./in-memory-db");

exports.salvarSeguro = (req, res) => {
  const seguros = req.body;

  if (Array.isArray(seguros)) {
    for (seguro of seguros) {
      SEGUROS.push(seguro);
    }
  } else {
    SEGUROS.push(seguros);
  }

  res.status(200).json({ message: "Seguro adicionado com sucesso!" });
};

exports.listarSeguros = (req, res) => {
  res.status(200).json(SEGUROS);
};
