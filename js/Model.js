class Model{
    constructor(opcaoSelecionada,quantidade,texto){
        this.opcaoSelecionada =opcaoSelecionada ;
        this.quantidade =quantidade;
        this.texto =texto;
        
    }  
    get getOpcaoSelecionada(){
        return this.opcaoSelecionada;
    }
    get getQuantidade(){
        return this.quantidade;
    }
    get getTexto(){
        return this.texto;
    }
}