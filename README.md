# Todo

[x] Criar navbar no bottom da tela.
    [x] Tela de carrinho de compras.
    [ ] Tela com dados do cliente.
[x] Iniciar a criação de carrinho no Pinia.
    [x] Permitir editar o carrinho.
    [x] Deleção de item do carrinho.
[ ] Criando pedido no Pinia.
    [x] Criar botão para finalizar o pedido.
    [ ] Criar pedido no Pinia.
        [x] Criar StoreOrder.
        [x] Front.
            [x] Visualização do pedido antes de enviar.
            [x] Tela de seleção se é delivery ou retirada.
            [x] Informe/confirme seus dados.
            [x] Forma de pagamento.
            [x] Pedido criado com sucesso.
        [x] Criando pedidono Pinia:
            [x] Colocar itens do carrinho no Pinia.
            [x] Definições se é delivery ou não.
            [x] Gravar endereço.
            [x] Forma de pagamento.
            [x] Ao concluir criar um item pedido com status "Enviado ao estabelecimento".
        [ ] Tela de pedidos.
            [x] Estilizar Card de pedido n tela de pedidos.
            [x] Lógica para aparecer o ícone de acordo com o método de retirada.
            [x] Aparecer o status do pedido no Card.
            [-] Expor detalhes do pedido no modal.
[ ] Utilização do localStorage.
    [ ] Carrinho no localStorage.
        [ ] Fazer a criação do carrinho no localStorage.
        [ ] Editar carrinho do localStorage.
        [ ] Deletar item do carrinho localStorage.
    [ ] Criar pedido no localStorage.

## Back-End

> Backenbd consiste em functions lâmbdas na AWS e a API de produção está no endereço:
> https://j8l4hqvv0c.execute-api.us-east-1.amazonaws.com/Prod/api/

Para rodar entrar na pasta do projeto de Presentation( solution da API realmente =>  src/my_store_API ) projeto basta rodar: dotnet lambda deploy-serverless
