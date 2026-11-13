# 🍻 Sistema de Gestão de Pedidos via QR Code — Geisa Bar (MVP)

## 📋 Sobre o Projeto
Este repositório contém o código-fonte do **Minimum Viable Product (MVP)** desenvolvido como solução tecnológica para otimizar o atendimento operacional do **Geisa Bar**. O sistema substitui anotações manuais por um fluxo de autoatendimento digital acessível e um painel de acompanhamento em tempo real para o balcão, alinhado aos princípios de trabalho decente e eficiência econômica (**ODS 8**).

---

## 🎯 Funcionalidades Principais do MVP

O fluxo do sistema está dividido em três módulos principais:

1. **Cardápio Digital (Acesso via QR Code):**
   * Identificação automática da mesa.
   * Listagem categorizada de bebidas e petiscos com visualização rápida de preços.
2. **Carrinho e Envio de Pedido (Fluxo Central):**
   * Revisão dos itens selecionados e cálculo automático de subtotal.
   * Campo para observações personalizadas do cliente (ex: *"sem gelo"*, *"bem passado"*).
3. **Painel do Balcão com Acessibilidade:**
   * Recebimento instantâneo dos pedidos organizados por mesa.
   * **Redundância Visual:** Indicadores de status operacionais projetados com tripla sinalização (ícone ⏱️ + texto explícito + contraste cromático), garantindo legibilidade em ambientes externos ou com baixa iluminação.

---

## 🛠️ Arquitetura e Boas Práticas de Engenharia

Este projeto aplica práticas rigorosas de engenharia de software durante todo o ciclo de desenvolvimento:
* **Controle de Versão:** Uso de *Feature Branches* (`feature/...`) e padrão de *Conventional Commits* (`feat:`, `fix:`, `docs:`, `style:`).
* **Revisão de Código:** Integração na branch `main` exclusivamente via *Pull Requests* (PR) após auto-revisão técnica.
* **Qualidade e Testes:** Cobertura com testes unitários e de integração automatizados via **GitHub Actions (CI)**.
* **Validação Empírica:** Ciclos iterativos de testes de usabilidade em campo com métricas de taxa de sucesso (100%), tempo de fluxo ($\le 45$s) e escala de satisfação.

---

## 📂 Estrutura de Pastas (Previsão)

```text
├── src/               # Código-fonte da aplicação (Cardápio, Carrinho e Balcão)
├── tests/             # Testes unitários e de integração
├── docs/              # Diagramas UML, protótipos e registros de validação em campo
└── README.md          # Documentação geral do projeto

🚀 Como Executar o Projeto
(Instruções de instalação e execução local serão atualizadas conforme o avanço da implementação na branch principal).

Bash
# Clonar o repositório
git clone [https://github.com/francielebrs-13/sistema-gestao-geisabar-mvp.git](https://github.com/francielebrs-13/sistema-gestao-geisabar-mvp.git)

# Acessar o diretório do projeto
cd sistema-gestao-geisabar-mvp

👩‍💻 Autoria
Desenvolvido por Franciele — Graduanda em Análise e Desenvolvimento de Sistemas (Unipê / Cruzeiro do Sul Virtual).
