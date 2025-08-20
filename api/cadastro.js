export default function handler(req, res) {
    if (req.method === "POST") {
        const { nome, email } = req.body;
        res.status(200).json({ mensagem: `Cadastro realizado com sucesso para` });
    } else {
        res.status(405).json({ mensagem: "Método não permitido" });
    }
}
