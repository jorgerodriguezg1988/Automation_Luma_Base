Feature: Iniciar sesión en la plataforma
  Como usuario final
  Quiero poder iniciar sesión en mi cuenta
  Para acceder a mis funcionalidades personalizadas.

  @HU_QCA-18-IniciarSesion
  Scenario: Verificar que el usuario puede iniciar sesión exitosamente
    Given Que el usuario ingresa a la pagina web
    And Navega a la página de iniciar sesión desde el home
    When Escribe su correo y contraseña
    Then Debería confirmar ingreso a My Account
