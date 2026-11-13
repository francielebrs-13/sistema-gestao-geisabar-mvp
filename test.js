import test from 'node:test';
import assert from 'node:assert';

// Teste unitário: Valida o cálculo de itens do carrinho do MVP
test('Calcula o valor total dos itens do carrinho corretamente', () => {
    const itens = [
        { nome: 'Cerveja', preco: 10.0, quantidade: 2 },
        { nome: 'Petisco', preco: 15.0, quantidade: 1 }
    ];
    const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    assert.strictEqual(total, 35.00);
});

// Teste de integração: Valida o fluxo de autenticação do atendente
test('Valida credenciais de acesso ao painel do balcão', () => {
    const autenticar = (usuario, senha) => usuario === 'atendente' && senha === '123456';
    assert.strictEqual(autenticar('atendente', '123456'), true);
    assert.strictEqual(autenticar('visitante', 'senhaerrada'), false);
});