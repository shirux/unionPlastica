# Intermediario
Este proyecto nace de la necesidad de poder generar una conexión entre un software ERP contable (Novasoft empresarial) y un servidor que expone un APIRest para la recepción de datos (Baterias WIllard).

En este archivo se encuentra todo el detalle tecnico del desarrollo, los requerimientos para su funcionamiento e instalación, asi como el proceso paso por paso de este ultimo.
Adicional, encontrará secciones correspondientes a la explicación de su funcionamiento, asi como las ejecuciones en cada caso de error.

## FUNCIONAMIENTO
TODO

## FLUJO DE ERRORES
TODO

## DETALLE TECNICO
En esta sección se lista el lenguaje de programación y las librerias y/o dependencias que este proyecto usa para su correcto funcionamiento.

### Lenguaje de programación
- NodeJS v14.16.1

### Librerias y dependencias
- Axios v0.21.1 (Conexiones)
- dotenv v8.2.0 (Parametrizacion)
- form-data v4.0.0 (Formulario de envio)

## REQUERIMIENTOS
Para poder instalar este aplicativo, se requiere lo siguiente:
- Git
- NodeJS > v14.16.1

## INSTALACIÓN
Genere una carpeta dentro de su computadora en donde se descargara el proyecto. Puede ubicarse en la ruta que usted desee.

Navegue a esta carpeta en su consola de comandos. Puede usar el siguiente ejemplo:
```bash 
cd C:\YourUser\YourPath\YourNewFolder
```

Una vez ubicado en esta nueva carpeta, ejecutar el comando de git para clonar el repositorio. 
```bash 
git clone https://github.com/shirux/unionPlastica
```
Esto le descargará todos los archivos necesarios para continuar con la instalación.

Una vez descargados los archivos, proceda a instalar las dependencias con el siguiente comando (ejecutado sobre el root del programa)
```bash
npm install
```

Genere el archivo ***.env*** a partir del archivo ***.env.example*** y actualice cada variable para una correcta parametrización. A continuación una sección dummy de como deberia verse el archivo:
```bash
# Dev and Prod URL on server side
DEV_URL=https://dev.yourUrl.com:3000/api
PROD_URL=https://prod.yourUrl.com/api
```
**NOTA: Las carpetas que se especifican en el archivo de parametrización deben existir, pues el programa no crea estas carpetas (Aunque si crea algunos archivos)**

Para ejecutar el programa, se debe correr el siguiente comando sobre el folder raiz del proyecto:
```bash
node index.js
```