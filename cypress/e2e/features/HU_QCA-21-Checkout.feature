Feature: Proceso de Checkout
  Como usuario final
  Quiero realizar el proceso de compra
  Para completar la compra de mis productos.

  @HU_QCA-21-Checkout
  Scenario: Completar el proceso de compra desde el inicio hasta el checkout
    Given Que el usuario ingresa a la pagina web
    When El usuario navega a la página de inicio de sesión desde el home
    And El usuario ingresa su correo y contraseña
    And El usuario agrega un producto al carrito desde el Home
    And El usuario navega al carrito
    And El usuario procede al checkout desde el carrito
    Then El usuario debería estar en la página de checkout
