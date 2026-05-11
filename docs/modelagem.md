# Modelagem do Banco - Hotel Corinthians

## Objetivo da Modelagem

A modelagem do projeto Hotel Nebula foi desenvolvida utilizando MongoDB, seguindo o modelo não relacional baseado em documentos.

O objetivo principal foi criar uma estrutura flexível, escalável e capaz de representar diferentes situações do ambiente hoteleiro, como reservas, hospedagens, pagamentos, avaliações e serviços adicionais.

---

# Coleções Principais

O banco foi dividido nas seguintes coleções:

- hospedes
- quartos
- reservas
- hospedagens
- pagamentos
- funcionarios
- avaliacoes

Cada coleção possui responsabilidade específica dentro do sistema.

---

# Estrutura das Coleções

## hospedes

Responsável pelo armazenamento das informações dos clientes.

### Principais campos:
- nome
- email
- telefone
- cpf
- endereco
- dataCadastro

---

## quartos

Armazena os dados dos quartos disponíveis no hotel.

### Principais campos:
- numero
- tipo
- capacidade
- precoDiaria
- status
- caracteristicas

---

## reservas

Representa as reservas realizadas pelos hóspedes.

### Principais campos:
- hospedeId
- quartoId
- dataEntrada
- dataSaida
- status

---

## hospedagens

Responsável pelo controle da estadia do hóspede.

### Principais campos:
- reservaId
- checkIn
- checkOut
- servicosConsumidos
- observacoes

---

## pagamentos

Controla os pagamentos relacionados às hospedagens.

### Principais campos:
- hospedagemId
- valor
- metodo
- status
- dataPagamento

---

## funcionarios

Armazena os dados dos profissionais do hotel.

### Principais campos:
- nome
- cargo
- turno
- salario

---

## avaliacoes

Guarda avaliações e comentários realizados pelos hóspedes.

### Principais campos:
- hospedeId
- quartoId
- nota
- comentario
- data

---

# Decisões de Modelagem

## Uso de referências

Foi utilizado o modelo de referências entre coleções para evitar duplicação excessiva de dados.

Exemplos:
- reservas referenciam hóspedes e quartos
- pagamentos referenciam hospedagens

---

## Uso de subdocumentos

Alguns dados foram armazenados como subdocumentos para facilitar leitura e organização.

Exemplos:
- endereço do hóspede
- serviços consumidos durante hospedagem

---

## Arrays

Foram utilizados arrays para representar listas dinâmicas.

Exemplo:
- características dos quartos
- serviços consumidos

---

# Escalabilidade

O MongoDB permite crescimento flexível da estrutura sem necessidade de alterações complexas no banco, facilitando futuras evoluções do sistema.

---

# Possíveis Evoluções Futuras

- integração com API REST
- autenticação de usuários
- sistema de notificações
- dashboards administrativos
- inteligência artificial para previsão de ocupação