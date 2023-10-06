/// <reference types="cypress" />

import DetalhesFatura from '../support/page_objects/faturamento.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta/'),
            cy.fixture('perfil').then(dados => {
                cy.login(dados.usuario, dados.senha)
            })

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.AddProdutos('Abominable Hoodie', 'XS', 'Red', 4 )

        DetalhesFatura.DetalhesFatura('Matheus', 'Gonçalves', 'Mt Tech LTDA', 'Brasil', 'Rua 52 n° 92', 'São Pedro da Aldeia', 'Rio de Janeiro', '28905000', '22988356532', )
    });


})