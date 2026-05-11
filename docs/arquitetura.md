# Arquitetura do Projeto - Hotel Corinthians

## Objetivo

O projeto Hotel Nebula foi desenvolvido utilizando MongoDB com o objetivo de estruturar um sistema de gerenciamento hoteleiro flexível, escalável e preparado para futuras integrações com APIs e dashboards administrativos.

---

# Estrutura do Banco

O banco foi dividido nas seguintes coleções:

- hospedes
- quartos
- reservas
- hospedagens
- pagamentos
- funcionarios
- avaliacoes

Cada coleção possui responsabilidades específicas dentro do sistema.

---

# Decisões de Modelagem

## Uso de referências

Foi utilizado o modelo de referências entre coleções para evitar duplicação de dados e facilitar manutenção.

Exemplo:
- reservas possuem referência para hóspedes e quartos
- pagamentos possuem referência para hospedagens

Essa abordagem melhora consistência e reutilização de dados.

---

## Uso de subdocumentos

Alguns dados foram armazenados como subdocumentos para facilitar leitura e reduzir consultas complexas.

Exemplo:
- serviços consumidos ficam dentro da hospedagem
- endereço fica embutido dentro do documento de hóspede

---

## Avaliações em coleção separada

As avaliações foram armazenadas em uma coleção própria visando maior escalabilidade e melhor desempenho em consultas analíticas.

Isso permite:
- calcular médias
- gerar rankings
- buscar feedbacks rapidamente

---

# Escalabilidade

O MongoDB foi escolhido devido à sua flexibilidade para lidar com:
- documentos dinâmicos
- crescimento de dados
- estruturas aninhadas
- alterações futuras sem necessidade de remodelagem completa

---

# Consultas Analíticas

O projeto também contempla consultas utilizando aggregate para:
- faturamento
- ocupação
- frequência de hóspedes
- média de avaliações

---

# Possíveis Evoluções Futuras

- API REST com Node.js
- autenticação JWT
- dashboard administrativo
- sistema de notificações
- inteligência artificial para previsão de ocupação
- precificação dinâmica

---

# Tecnologias Utilizadas

- MongoDB
- MongoDB Compass
- JavaScript
- Node.js
- GitHub