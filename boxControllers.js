module.exports = {
  async listarCategorias(req, res) {
    const categoriasFalsas = [
      { id: "uuid-1", nome: "Alimentação", icone: "utensils" },
      { id: "uuid-2", nome: "Vestuário", icone: "shirt" }
    ];
    return res.status(200).json(categoriasFalsas);
  },
  async listarBoxes(req, res) {
    const boxesFalsos = [
      {
        id: "box-123",
        nome: "Pastelaria Camaçari",
        numeroBox: "B-12",
        categoria: "Alimentação"
      }
    ];
    return res.status(200).json(boxesFalsos);
  },
  async criarBox(req, res) {
    const novoBox = {
      id: "box-999",
      ...req.body,
      status: "CADASTRADO"
    };
    return res.status(201).json({
      mensagem: "Box cadastrado com sucesso!",
      box: novoBox
    });
  }
};