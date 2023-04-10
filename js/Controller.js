class Controller{ 
    constructor(){
        
        this.bind()
    }
    bind(){
        document.querySelector("#Diminuir").addEventListener('click' , () =>{
            this.diminuir();
        })
        document.querySelector("#Adicionar").addEventListener('click' , () =>{
            this.adicionar();
        })
        document.querySelector("#Enviar").addEventListener('click' , () =>{
            this.enviar();
        })
        
        this.retivarRadios();
        this.verificarInputZero(); 
        this.init()
        
    }
    retivarRadios() {
        document.querySelectorAll('.sticker').forEach((check) => {
            
            check.addEventListener('click', () => {
                document.querySelectorAll('.check').forEach((check) => {
                    
                    check.classList.remove('erro');
                    
                });
                this.habilitarEnviar();
                document.querySelector("#mensagem").innerHTML = '';
            });
            
        });
    } 
    adicionar(){
        let valor = parseInt(document.querySelector('#quantidade').value) 
        valor ++;
        document.querySelector('#quantidade').value=parseInt(valor)
        document.querySelector("#mensagem").innerHTML = '';
        
        if( valor >= 0){
            document.querySelector("#quantidade").classList.remove("erro");
            this.habilitarEnviar();
            document.querySelector("#Diminuir").disabled = false;
            document.querySelector("#Diminuir").classList.remove("desabilitado");
        }
        
    }
    diminuir(){
        let valor = parseInt(document.querySelector('#quantidade').value )
        valor --;
        
        if( valor > 0){
            
            this.habilitarEnviar();
            document.querySelector("#Diminuir").classList.remove("desabilitado");
            document.querySelector('#quantidade').value=parseInt(valor);
            
        }else { 
            
            document.querySelector("#Diminuir").disabled = true;
            document.querySelector("#Diminuir").classList.add("desabilitado"); 
            document.querySelector('#quantidade').value=parseInt(0);
            document.querySelector('#quantidade').classList.add('erro')
        }
    }
    verificarInputZero(){
        
        let myNumberInput = document.getElementById("quantidade");
        myNumberInput.addEventListener("input", function() {
            if (this.value <= 0) {
                this.value = 0; 
                document.querySelector("#Diminuir").disabled = true;
                document.querySelector("#Diminuir").classList.add("desabilitado");
                document.querySelector('#quantidade').classList.add('erro')
            } 
        }); 
    } 
    enviar(){
        let texto =document.querySelector("#textArea").value;
        let qtd = parseInt(document.querySelector('#quantidade').value);
        const opcoes = document.getElementsByName("check");
        
        let opcaoSelecionada;
        
        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked) {
                
                opcaoSelecionada = opcoes[i].value;
                break;
            }
        }
        if(document.querySelector("#quantidade").value == 0 && opcaoSelecionada == undefined){
            
            document.querySelector("#quantidade").classList.add("erro");
            this.desabilitarEnviar();
            document.querySelector(".check").classList.add("erro");
            document.querySelectorAll('.check').forEach((check) => {
                check.classList.add('erro')
            });
            this.retornaTemplateErro(opcaoSelecionada, qtd, texto);     
        }
        else if(opcaoSelecionada == undefined){
            
            document.querySelectorAll('.check').forEach((check) => {
                check.classList.add('erro')
            });
            document.querySelector(".check").classList.add("erro");
            this.desabilitarEnviar();
            this.retornaTemplateErro(opcaoSelecionada, qtd, texto); 
            
        }
        else if(document.querySelector("#quantidade").value == 0){
            
            document.querySelector("#quantidade").classList.add("erro");
            this.desabilitarEnviar();
            this.retornaTemplateErro(opcaoSelecionada, qtd, texto); 
        }
        
        else{
            let novoModel = new Model(opcaoSelecionada,qtd,texto );
            let novaView = new View(novoModel)
            document.querySelector("#mensagem").innerHTML =novaView.template(); 
            this.init();
        }  
    }
    init(){
        document.querySelector("#textArea").value = ""  
        document.querySelector('#quantidade').value= 0
        document.querySelector("#Diminuir").disabled = true;
        document.querySelector("#Diminuir").classList.add("desabilitado");
        
        const opcoes = document.getElementsByName("check");
        for (let i = 0; i < opcoes.length; i++) {
            opcoes[i].checked = false;
        }
        
    }
    desabilitarEnviar() {
        
        document.querySelector("#Enviar").disabled = true;
        document.querySelector("#Enviar").classList.add("desabilitado");
    }
    habilitarEnviar() {
        
        document.querySelector("#Enviar").disabled = false;
        document.querySelector("#Enviar").classList.remove("desabilitado");
    }
    retornaTemplateErro(opcaoSelecionada, qtd, texto) {
        
        let novoModel = new Model(opcaoSelecionada, qtd, texto);
        let novaView = new View(novoModel);
        document.querySelector("#mensagem").innerHTML = novaView.templateErro();
    }
}



