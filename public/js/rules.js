//Regras de resposta do chatbot

// INICIO
const ESTRUTURA = {
    "inicio": {
      mensagem: "Olá! Sou o assistente virtual. Como posso ajudar?",
      opcoes: [
        { texto: "Sobre", proximoNo: "sobre" },
        { texto: "Produtos disponíveis", proximoNo: "produtos" },
        { texto: "Ajuda", proximoNo: "ajuda" }
      ]
    },
  
    // SOBRE
    "sobre": {
      mensagem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      opcoes: [
        { texto: "Voltar", proximoNo: "inicio" } 
      ]
    },
  
    //produtos
    "produtos": {
        mensagem: "Esses são os produtos disponíveis no momento:",
        opcoes: [
          { texto: "Produto 1", proximoNo: "produto_1" },
          { texto: "Produto 2", proximoNo: "produto_2" },
          { texto: "Produto 3", proximoNo: "produto_3" },
          { texto: "Voltar", proximoNo: "inicio" }
        ]
      },
            "produto_1": {
                mensagem: "Detalhes do Produto 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                opcoes: [
                { texto: "Voltar", proximoNo: "produtos" } 
                ]
            },
            "produto_2": {
                mensagem: "Detalhes do Produto 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                opcoes: [
                { texto: "Voltar", proximoNo: "produtos" } 
                ]
            },
            "produto_3": {
                mensagem: "Detalhes do Produto 3: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                opcoes: [
                { texto: "Voltar", proximoNo: "produtos" } 
                ]
            },
            
    //AJUDA
    "ajuda": {
        mensagem: "Qual é a sua dúvida?",
        opcoes: [
          { texto: "Contato", proximoNo: "contato" },
          { texto: "Endereço", proximoNo: "endereco" },
          { texto: "Outras", proximoNo: "outras" },
          { texto: "Voltar", proximoNo: "inicio" }
        ]
      },
            "contato": {
                mensagem: "Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo email",
                opcoes: [
                { texto: "Voltar", proximoNo: "ajuda" } 
                ]
            },
            "endereco": {
                mensagem: "Nosso endereço é Rua Exemplo, 123, Cidade, Estado.",
                opcoes: [
                { texto: "Voltar", proximoNo: "ajuda" } 
                ]
            },
            "outras": {
                mensagem: "Você pode falar com uma atendente por aqui: linkexemplo.com",
                opcoes: [
                { texto: "Voltar", proximoNo: "ajuda" } 
                ]
            },
    
  }
  export default ESTRUTURA;