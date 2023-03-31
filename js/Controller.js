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
      
        
        this.init();
    }
    adicionar(){
        let valor = parseInt(document.querySelector('#quantidade').value) 
        valor ++;
        document.querySelector('#quantidade').value=parseInt(valor)
        
        
        if( valor >= 0){
            
            document.querySelector("#Enviar").disabled = false;
            document.querySelector("#Enviar").classList.remove("erro");
            
            document.querySelector("#Diminuir").disabled = false;
            document.querySelector("#Diminuir").classList.remove("erro");
        }
        
    }
    diminuir(){
        let valor = parseInt(document.querySelector('#quantidade').value )
        valor --;
        
        if( valor > 0){
            document.querySelector("#Enviar").disabled = false;
            document.querySelector("#Enviar").classList.remove("erro");
            
            
            document.querySelector("#Diminuir").classList.remove("erro");
            document.querySelector('#quantidade').value=parseInt(valor);
            
        }else {
            document.querySelector("#Enviar").disabled = true;
            document.querySelector("#Enviar").classList.add("erro");
            
            
            document.querySelector("#Diminuir").disabled = true;
            document.querySelector("#Diminuir").classList.add("erro");
            document.querySelector('#quantidade').value=parseInt(0);
            
        }
    }
    
    enviar(){
        let texto =document.querySelector("#textArea").value;
        let qtd = parseInt(document.querySelector('#quantidade').value);
        let novoModel = new Model('sticker',qtd,texto);
        let novaView = new View(novoModel.getTexto)
        document.querySelector("#mensagem").innerHTML =novaView.template(); 
        this.init()
        
    }
    init(){
        document.querySelector("#textArea").value = ""  
        document.querySelector('#quantidade').value= 0
        document.querySelector("#Diminuir").disabled = true;
        document.querySelector("#Enviar").disabled = true;
        document.querySelector("#Diminuir").classList.add("erro");
        document.querySelector("#Enviar").classList.add("erro");
    }
    
    
    
}

