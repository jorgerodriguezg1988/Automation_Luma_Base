Feature: Crear una nueva cuenta
  Como usuario final
  Quiero poder registrarme en la plataforma
  Para tener acceso a mi cuenta y sus funcionalidades.

  @HU_QCA-17-CrearCuenta
  Scenario: Verificar que se crea de forma exitosa la cuenta de usuario
   Given Que el usuario ingresa a la pagina web
   And Navega a la página de crear cuenta desde el home
   When Diligencia el formulario de registro
   Then Debería confirmar ingreso a My Account