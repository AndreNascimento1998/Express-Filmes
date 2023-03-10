import livros from "../models/Livro.js";

class livroController {

    static listarLivros = (req, res) => {
        livros.find()
            .populate("autor")
            .exec((err, livro) => {
                res.status(200).json(livro);
            })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
            if(err){
                res.status(400).send({message: `${err.message} - id do livro não localizado`})
            }else {
                res.status(200).send(livro);
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha cadastrar o livro`})
            }else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro foi atualizado com sucesso!'});
            }else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'livro removido com sucesso !'});
            }else {
                res.status(500).send({message: err.message});
            }
        })
    }
}

export default livroController;