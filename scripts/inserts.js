use hotel_corinthians_dados

db.hospedes.insertOne({
  nome: "Carlos Henrique",
  email: "carlos@email.com",
  telefone: "(11)99999-9999",
  cpf: "12345678900",
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  },
  dataCadastro: new Date()
})

db.quartos.insertOne({
  numero: 301,
  tipo: "Luxo",
  capacidade: 3,
  precoDiaria: 450,
  status: "Disponível",

  caracteristicas: [
    "vista para o mar",
    "banheira",
    "wifi"
  ]
})