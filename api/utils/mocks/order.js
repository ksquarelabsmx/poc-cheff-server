const orderMocks = {
  orders: [
    {
      id: "1",
      total: 45,
      camaron_tortas_total: 1,
      camaron_tortas_price: 20,
      poc_chuc_tortas_total: 1,
      poc_chuc_tortas_price: 25,
      event: {
        id: "1",
        created_at: 1000000000
      },
      owner: {
        id: "1",
        name: "Juan Perez"
      }
    }
  ]
}

module.exports = orderMocks;
