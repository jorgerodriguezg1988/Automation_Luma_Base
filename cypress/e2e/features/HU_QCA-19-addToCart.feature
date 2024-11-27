Feature: Agregar productos al carrito
  Como usuario final
  Quiero poder agregar productos al carrito
  Para poder proceder con mi compra.

  @HU_QCA-19-AgregarAlCarrito
  Scenario: Verificar que el usuario puede agregar productos al carrito desde diferentes páginas
    Given Que el usuario ingresa a la pagina web
    When El usuario agrega un producto al carrito desde el Home
    And El usuario va a la página de lista de productos PLP
    And El usuario agrega un producto al carrito desde la PLP 
    And El usuario agrega un producto al carrito desde la PDP
    Then El carrito debe tener los productos agregados
