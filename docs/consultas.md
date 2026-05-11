# Consultas e Extração de Dados - Hotel Corinthians

## Objetivo

As consultas foram desenvolvidas para auxiliar a gestão do hotel na visualização de informações importantes da operação.

Foram utilizadas consultas simples e agregações utilizando MongoDB.

---

# Consultas Desenvolvidas

## Quartos com características específicas

Consulta utilizada para localizar quartos com determinados recursos.

### Exemplo:
- banheira
- vista para o mar
- luxo

```javascript
db.quartos.find({
  caracteristicas: "banheira"
})
```

---

# Hóspedes com mais de uma reserva

Consulta utilizada para identificar clientes frequentes.

```javascript
db.reservas.aggregate([
  {
    $group: {
      _id: "$hospedeId",
      totalReservas: { $sum: 1 }
    }
  },
  {
    $match: {
      totalReservas: { $gt: 1 }
    }
  }
])
```

---

# Faturamento total do hotel

Consulta responsável por calcular o faturamento geral.

```javascript
db.pagamentos.aggregate([
  {
    $group: {
      _id: null,
      faturamento: {
        $sum: "$valor"
      }
    }
  }
])
```

---

# Faturamento por período

Consulta utilizada para calcular faturamento mensal.

```javascript
db.pagamentos.aggregate([
  {
    $group: {
      _id: {
        mes: { $month: "$dataPagamento" },
        ano: { $year: "$dataPagamento" }
      },
      total: {
        $sum: "$valor"
      }
    }
  }
])
```

---

# Períodos de maior ocupação

Consulta utilizada para identificar meses com maior quantidade de reservas.

```javascript
db.reservas.aggregate([
  {
    $group: {
      _id: {
        mes: { $month: "$dataEntrada" }
      },
      reservas: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      reservas: -1
    }
  }
])
```

---

# Média das avaliações

Consulta utilizada para calcular a média de notas dos quartos.

```javascript
db.avaliacoes.aggregate([
  {
    $group: {
      _id: "$quartoId",
      mediaNotas: {
        $avg: "$nota"
      }
    }
  }
])
```

---

# Objetivo das Consultas

As consultas desenvolvidas ajudam a administração do hotel em decisões relacionadas a:
- ocupação
- faturamento
- experiência do cliente
- popularidade dos quartos
- frequência de hóspedes

---

# Considerações Finais

A utilização do MongoDB permitiu criar consultas flexíveis e eficientes, utilizando documentos, arrays e agregações para geração de informações estratégicas.