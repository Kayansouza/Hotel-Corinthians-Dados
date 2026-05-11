db.hospedes.createIndex({ email: 1 })

db.quartos.createIndex({ tipo: 1 })

db.reservas.createIndex({
  dataEntrada: 1,
  dataSaida: 1
})

db.pagamentos.createIndex({
  dataPagamento: 1
})