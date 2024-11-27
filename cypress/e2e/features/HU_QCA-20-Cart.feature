Feature: Gestión del carrito de compras
  Como usuario final
  Quiero poder agregar productos al carrito
  Para poder revisar mi compra antes de realizar el pago.

@HU_QCA-20-AgregarProductosAlCarrito
Scenario: Verificar que se agregan productos al carrito correctamente
  Given Que el usuario ingresa a la pagina web
  When Agrega un producto al carrito desde el Home
  And Navega a la PLP y agrega otro producto al carrito
  And Navega a la PDP y agrega un producto más al carrito
  Then Debería ver los productos agregados en el carrito
