# EcommerceAfirme
Reto Digital NAO Afirme

https://ecommerceafirme.onrender.com/

Tabla de Contenido
- [SPRINT 1](#sprint-1)
- [SPRINT 2](#sprint-2)
- [SPRINT 3](#sprint-3)

# SPRINT 1

El objetivo del sprint 1 es realizar el entregable del backlog, del roadmap y generar la solucion del portal de ecommerce en base al diseño propuesto.

### BACKLOG

##### Historias de Usuario
![image](https://github.com/user-attachments/assets/e5676653-31e7-4cd1-8beb-912b1f1dda23)

##### Lista de Requerimientos
![image](https://github.com/user-attachments/assets/1c0fb5eb-4d42-4425-94e0-98b1e543a32f)

##### Lista Priorizada
![image](https://github.com/user-attachments/assets/a1332bf0-27a6-42d4-99f7-c5d4412438b7)

### ROADMAP
![Roadmap - sprint 1](https://github.com/user-attachments/assets/2b88848c-0b63-470e-9107-4c7b8c6f1462)

### DISEÑO
![image](https://github.com/user-attachments/assets/10fe151d-0816-4ca5-964a-80c2ebbbfe78)

### DEPLOYMENT
https://ecommerceafirme.onrender.com/

### ARQUITECTURA

![image](https://github.com/user-attachments/assets/0180bc19-301e-49e0-9c9b-aabb84f1a90c)

Como parte de la arquitectura de la solución, se genera la estructura en la cual se enlistan los componentes comunes, los componentes específicos para cada contenido y los componentes de vistas generales.

Adicional, se generan los arhivos json para simular el consumo de datos y se generan librerías de utilerías así como servicios que permitan operar la aplicación de manera mas independiente y estructurado dependiendo el contexto.

---


# SPRINT 2

El objetivo del sprint 2 es implementar la navegación de la aplicación mediante el routing, y generar un formulario que permita registar usuarios en la aplicación, la cual eesta funcionalidad debe de utilizar Redux para el manejo de estados.

### BACKLOG

##### Historias de Usuario
![image](https://github.com/user-attachments/assets/059dd337-1430-4a36-b180-e848090b4b5c)


##### Lista de Requerimientos
![image](https://github.com/user-attachments/assets/55ff63ea-5e4e-4d4d-b23b-b77b2ba6e46f)

##### Lista Priorizada
![image](https://github.com/user-attachments/assets/fb4e91c8-840b-4692-b7e7-4e9f270f2a0e)

### ROADMAP
![Roadmap](https://github.com/user-attachments/assets/0f12479c-9046-46af-9da3-bec8e02c4544)

### DISEÑO
![image](https://github.com/user-attachments/assets/2617807e-9d33-48d0-b15d-af99dbfd5f6c)

![image](https://github.com/user-attachments/assets/3b0b8437-4906-460a-9359-dd099240fce9)

![image](https://github.com/user-attachments/assets/84b2bf94-b8c5-40a3-864f-bfbe2c561648)

### ARQUITECTURA

![image](https://github.com/user-attachments/assets/aa31254a-924e-49ed-82ef-82ea53f40c03)

Para implementar Redux se utiliza la libería de Redux Tooklit para facilitar la creacion de actions y reducers, así como configuración. Se utilizan los archivos de slices y store para manejar el state y se integra en el componente de RegisterUser.jsx

Como estrategia se genera un rootReducer para facilitar el import de los slices y se integra el dispatch para registrar un usuario y almacenarlo en una colección en memoria en el store.

Los datos de los usuarios registrados se obtienen del mediante el selector del state, de esta forma se actualizan los registros en la tabla conforme se van registrando nuevos usuarios.

Dentro del formulario de registro se utilizan las librerías de Formik y Yup para manipular el formulario.

---


# SPRINT 3

El objetivo del sprint 3 es implementar los casos de prueba en la aplicación, así como generar un reporte de las pruebas de los principales componentes de la aplicacion. De igual manera se deberá de desplegar la aplicación en un servicio de host para acceder al portal desde internet.

Reporte de Pruebas
https://ecommerceafirme.onrender.com/test-report/report.html

### BACKLOG

##### Lista Priorizada
![image](https://github.com/user-attachments/assets/0a6f5858-fc1e-4722-b389-faf87c22bffd)

### ROADMAP
![Copia de Copia de Concerned Entity Transportation companies](https://github.com/user-attachments/assets/1414f0a0-86d0-464e-98e2-b7dec631bfdb)

### ARQUITECTURA

![image](https://github.com/user-attachments/assets/abe24f70-7a39-4558-9804-ccf1be698e4e)

Como parte de la arquitectura para los test cases, se utiliza la liberaría de React Test Library, en conjunto con Jest y se generan los test cases para los principales componentes de la aplicación (Sidebar, Dashboard y Registro de Usuarios).

Para el reporte de test cases se configuró para que se exporte en formato HTML usando la librería jest-html-reporters y se guardan automáticamente al folder de public de la aplicación.

Reporte de Pruebas
https://ecommerceafirme.onrender.com/test-report/report.html

![image](https://github.com/user-attachments/assets/33453339-3cfa-41b3-99dd-570accb29c56)


