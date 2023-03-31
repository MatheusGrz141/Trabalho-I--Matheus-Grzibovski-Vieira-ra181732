class Model{
    constructor(stickers,quantidade,texto){
        this.stickers =stickers;
        this.quantidade =quantidade;
        this.texto =texto;
    }
    get getStickers(){
        return this.stickers;
    }
    get getQuantidade(){
        return this.quantidade;
    }
    get getTexto(){
        return this.texto;
    }
}