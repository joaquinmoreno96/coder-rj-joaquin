Basket Shop

Basket Shop - Entrega Final - Watch Video


Descripción
En este proyecto, se realizo una página sobre productos de basquet porque es lo que nos apasiona.

Funcionamiento del código:
Actualmente la app utiliza componentes los cuales tienen una forma de funcionar. Detalle de los mismos:

NavBar = Componente en cual se renderiza la barra de navegación.

ItemListContainer = Componente encargado de renderizar todos nuestros productos, y el cual se modifica a la hora de filtrar por categorías.

ItemList = Componente que hace un map de la base de datos de firebase y en caso de tardanza en el servidor larga un alert de loading.

Item = Componente en el cual se diseño la card de cada item y se ejecuta una función, la cual al llegar al stock del producto no deja que el contador siga avanzando.

ItemDetail = Componente encargado de la card en la cual se detalla un producto en especial.

ItemDetailContainer = Componente que renderiza el ItemDetail.js cuando se hace click sobre la imagen de un producto.

Footer = Los botones tienen el mismo funcionamiento que los de la barra de navegación.

CartProvider = Es donde se desarrolla toda la logica del carrito y funciones varias. Por ejemplo sumar items y calcular el precio total.

CartWidget = Renderiza el icono del carrito junto con un numero indicador de items.

Cart = Realiza el mapeo del carrito ubicandolo en un table que muestra todos los detalles.

#HERRAMIENTAS UTILIZADAS
​
.ReactJS
.Create React App - Se uso para crear la aplicacion, ya que es de facil de aplicar.
.React Router DOM - Utilizado para crear las rutas correspondientes para navegar en la App.
.Firebase's Firestore 8.8.0 - Base de datos en la cual se cargaron los productos y muy sencilla de usar.​
.ChakraUi/icons 1.1.1 - Utilizado para todos los iconos utilizados.
.Chakra-ui/react 1.7.4 - Utilizado para darle style a toda la App.
.Sweetalert 2.1.2 - Alertas que aparecen en la pagina al realizar compra.


#INSTALACION

En la terminal, seleccionar la carpeta donde se almacenará el proyecto. cd mi_carpeta

Clonar el repositorio con el comando: git clone https://github.com/joaquinmoreno96/coder-rj-joaquin

En la carpeta seleccionada se creará una nueva carpeta con el código por lo que deberás moverte a dicha carpeta. cd REACT

Instalar las dependencias necesarias para correr el proyecto. npm install

Al terminar la instalación, ejecutar el comando para iniciar el servidor en la aplicación. npm start

Para terminar el proceso en Windows presionar en la consola: ctrl + C

Autores y reconocimiento
-Moreno Joaquin (Programador y diseñador)

Estado del proyecto
Actualmente se encuentra en la fase final, pero abierto a cualquier ayuda en cuanto a la logica de firebase o diseño.
