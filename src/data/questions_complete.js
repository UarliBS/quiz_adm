const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "A Demonstração do Resultado do Exercício (DRE) é uma das demonstrações financeiras mais cruciais para investidores, analistas e gestores, pois oferece uma visão detalhada do desempenho operacional de uma empresa durante um período específico. Qual das seguintes opções representa corretamente o cálculo do lucro líquido na DRE?",
        options: ["Receitas - Despesas Operacionais - Impostos = Lucro Líquido", "Receitas + Despesas Operacionais + Impostos = Lucro Líquido", "Receitas - Despesas Totais - Impostos = Lucro Líquido", "Receitas + Despesas Totais - Impostos = Lucro Líquido"],
        answer: "Receitas - Despesas Operacionais - Impostos = Lucro Líquido",
        tip: "É uma tag de uma letra apenas",
        justification: "A Demonstração do Resultado do Exercício (DRE) detalha as receitas, despesas e o lucro líquido da empresa durante um período específico. O cálculo do lucro líquido na DRE envolve a subtração das despesas operacionais e dos impostos das receitas.",
      },
      {
        question: "A Demonstração do Fluxo de Caixa (DFC) é crucial para entender como uma empresa gerencia seus recursos financeiros e avalia sua capacidade de pagamento de dívidas. Qual das seguintes atividades se enquadra na seção 'Atividades de Investimento' da DFC?",
        options: ["Pagamento de salários aos funcionários", "Compra de ações de outras empresas", "Pagamento de juros sobre empréstimos", "Recebimento de pagamentos de clientes"],
        answer: "Compra de ações de outras empresas",
        justification: "A Demonstração do Fluxo de Caixa (DFC) é uma ferramenta vital para entender como uma empresa gera e utiliza seu caixa ao longo do tempo. As atividades de investimento na DFC geralmente envolvem a compra e venda de ativos de longo prazo, como ações de outras empresas.",
      },
      {
        question: "A seção 'Atividades Operacionais' na Demonstração do Fluxo de Caixa (DFC) geralmente inclui transações relacionadas às operações centrais da empresa. Qual das seguintes atividades é um exemplo típico que seria encontrado nessa seção?",
        options: ["Compra de ativos fixos como prédios e equipamentos", "Recebimento de empréstimos de instituições financeiras", "Pagamento de dividendos aos acionistas", "Recebimento de receitas de vendas de produtos ou serviços"],
        answer: "Recebimento de receitas de vendas de produtos ou serviços",
        justification: "A seção 'Atividades Operacionais' na Demonstração do Fluxo de Caixa (DFC) abrange as transações relacionadas às operações principais da empresa, como o recebimento de receitas de vendas de produtos ou serviços.",
      },
      {
        question: "A Demonstração do Resultado do Exercício (DRE) apresenta o desempenho financeiro de uma empresa durante um período específico, destacando suas receitas e despesas. Qual das seguintes alternativas representa uma despesa não operacional que não é diretamente relacionada às operações principais da empresa e, portanto, seria encontrada na DRE?",
        options: ["Custos de produção de bens ou serviços", "Juros pagos sobre empréstimos", "Receita de vendas de produtos ou serviços", "Salários dos funcionários"],
        answer: "Juros pagos sobre empréstimos",
        justification: "A Demonstração do Resultado do Exercício (DRE) ajuda a calcular o lucro líquido de uma empresa durante um período específico. O cálculo do lucro líquido na DRE envolve a subtração das despesas operacionais e dos impostos das receitas.",
      },
      {
        question: "A Demonstração do Fluxo de Caixa (DFC) é dividida em três seções principais: 'Atividades Operacionais', 'Atividades de Investimento', e 'Atividades de Financiamento'. Qual dessas seções reflete principalmente as transações relacionadas à geração de caixa pelas operações principais da empresa?",
        options: ["Atividades Operacionais", "Atividades de Investimento", "Atividades de Financiamento", "Atividades de Risco"],
        answer: "Atividades Operacionais",
        justification: "A seção ‘Atividades Operacionais’ na Demonstração do Fluxo de Caixa (DFC) é a seção que reflete principalmente as transações relacionadas à geração de caixa pelas operações principais da empresa. Ela engloba as atividades que são essenciais para o funcionamento cotidiano da empresa, como a venda de produtos ou serviços, o pagamento de fornecedores, o recebimento de pagamentos de clientes e outras transações operacionais. Essa seção demonstra como a empresa gera caixa a partir de suas atividades centrais, o que é fundamental para sua sustentabilidade e crescimento.",
      },
      {
        question: "A Demonstração do Resultado do Exercício (DRE) é uma das principais demonstrações financeiras de uma empresa. Ela fornece informações detalhadas sobre o desempenho financeiro ao longo de um período específico. Qual das seguintes afirmações sobre a DRE está correta?",
        options: ["A DRE mostra o valor total dos ativos da empresa.", "A DRE apresenta informações sobre a variação no caixa disponível da empresa.", "A DRE destaca as atividades de financiamento da empresa.", "A DRE detalha as receitas, despesas e o lucro líquido da empresa durante um período específico."],
        answer: "A DRE detalha as receitas, despesas e o lucro líquido da empresa durante um período específico",
        justification:"A Demonstração do Resultado do Exercício (DRE) detalha as receitas, despesas e o lucro líquido da empresa durante um período específico, sendo o cálculo do lucro líquido feito subtraindo as despesas operacionais e os impostos das receitas.",
      },
      {
        question: ": A Demonstração do Fluxo de Caixa (DFC) é uma ferramenta vital para entender como uma empresa gera e utiliza seu caixa ao longo do tempo. Qual das seguintes atividades normalmente é classificada como 'Atividade de Investimento' na DFC?",
        options: ["Pagamento de salários aos funcionários.", "Compra de ações de outras empresas.", "Pagamento de juros sobre empréstimos.", "Recebimento de pagamento de clientes."],
        answer: "Compra de ações de outras empresas",
        justification: "A seção 'Atividades de Investimento' na Demonstração do Fluxo de Caixa (DFC) abrange as transações relacionadas à compra e venda de ativos de longo prazo, como ações de outras empresas, refletindo investimentos de capital.",
      },
      {
        question: "A seção 'Atividades Operacionai' na Demonstração do Fluxo de Caixa (DFC) abrange as transações relacionadas às operações principais da empresa. Qual das seguintes atividades é um exemplo típico que estaria incluído nessa seção?",
        options: ["Pagamento de dividendos aos acionistas.", "Compra de ativos fixos como máquinas e equipamentos.", "Recebimento de receitas de vendas de produtos ou serviços.", "Emissão de novas ações no mercado."],
        answer: "Recebimento de receitas de vendas de produtos ou serviços.",
        justification: ": A seção 'Atividades Operaciona' na Demonstração do Fluxo de Caixa (DFC) envolve principalmente transações relacionadas às operações principais da empresa, como o recebimento de receitas de vendas de produtos ou serviços.",
      },
      {
        question: "A Demonstração do Resultado do Exercício (DRE) ajuda a calcular o lucro líquido de uma empresa. Qual das seguintes opções representa corretamente o cálculo do lucro líquido na DRE?",
        options: ["Receitas - Despesas Operacionais - Impostos = Lucro Líquido.", "Receitas + Despesas Operacionais + Impostos = Lucro Líquido.", "Receitas - Despesas Totais - Impostos = Lucro Líquido.", "Receitas + Despesas Totais - Impostos = Lucro Líquido."],
        answer: "Receitas - Despesas Operacionais - Impostos = Lucro Líquido.",
        justification:"O lucro líquido na Demonstração do Resultado do Exercício (DRE) é calculado subtraindo-se as despesas operacionais e os impostos das receitas, refletindo o desempenho financeiro da empresa durante o período.",
      },
      {
        question: "A Demonstração do Fluxo de Caixa (DFC) é dividida em três seções principais: 'Atividades Operacionais', 'Atividades de Investimento', e 'Atividades de Financiamento'. Qual dessas seções reflete principalmente as transações relacionadas à captação e pagamento de recursos financeiros?",
        options: ["Atividades Operacionais.", "Atividades de Investimento.", "Atividades de Financiamento.", "Atividades de Risco."],
        answer: "Atividades de Financiamento",
        justification: "A seção 'Atividades de Financiamento' na Demonstração do Fluxo de Caixa (DFC) reflete principalmente as transações relacionadas à captação e pagamento de recursos financeiros, como emissão e recompra de ações e pagamento de dividendos.",
      },
    ],
  // },
  // {
  //   category: "CSS",
  //   questions: [
  //     {
  //       question: "Qual regra altera a cor de um elemento?",
  //       options: ["color", "background-color", "font-size", "transition"],
  //       answer: "color",
  //       tip: "Cor em inglês",
  //     },
  //     {
  //       question: "Para aumentar a fonte de um elemento utilizamos:",
  //       options: ["font", "text-transform", "font-size", "hover"],
  //       answer: "font-size",
  //     },
  //     {
  //       question: "A posição que deixa um elemento fixo é a:",
  //       options: ["static", "absolute", "fixed", "relative"],
  //       answer: "fixed",
  //     },
  //   ],
  // },
  // {
  //   category: "JavaScript",
  //   questions: [
  //     {
  //       question: "O que é Vanilla JavaScript?",
  //       options: [
  //         "JavaScript puro",
  //         "Uma biblioteca JavaScript",
  //         "Um framework JavaScript",
  //         "Um compilador de JavaScript",
  //       ],
  //       answer: "JavaScript puro",
  //     },
  //     {
  //       question: "Com qual instrução declaramos uma constante em JavaScript?",
  //       options: ["const", "let", "var", "define"],
  //       answer: "const",
  //     },
  //     {
  //       question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
  //       options: ["string", "number", "boolean", "float"],
  //       answer: "float",
  //     },
  //     {
  //       question: "Qual dos métodos a seguir seleciona um elemento?",
  //       options: ["querySelector", "parseInt", "sort", "reduce"],
  //       answer: "querySelector",
  //     },
  //     {
  //       question:
  //         "Qual destas propriedades da a quantidade de elementos de um array?",
  //       options: ["qty", "length", "items", "index"],
  //       answer: "length",
  //     },
  //   ],
  },
];

export default data;
