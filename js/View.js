class View{
    constructor(novaView){
        this.novaView = novaView
    }
    template(){
        return `
        <p>Formulário enviado com sucesso!</p>
        
        `
    }
    templateErro(){
        return `
        <p class="erro">Formulário preenchido incorretamente!</p>
        
        `
    }
    
}