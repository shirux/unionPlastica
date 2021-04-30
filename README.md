# Intermediario
Este proyecto nace de la necesidad de poder generar una conexión entre un software ERP contable (Novasoft empresarial) y un servidor que expone un APIRest para la recepción de datos (Baterias WIllard).

En este archivo se encuentra todo el detalle tecnico del desarrollo, los requerimientos para su funcionamiento e instalación, asi como el proceso paso por paso de este ultimo.
Adicional, encontrará secciones correspondientes a la explicación de su funcionamiento, asi como las ejecuciones en cada caso de error.

## FUNCIONAMIENTO
Entendiendo que la finalidad del software es poder automatizar un proceso interno del negocio, el funcionamiento es completamente transparente tanto para el ERP como para las mismas personas que lo operan.

Este será llamado desde el software contable como un paso adicional y se ejecutará en el fondo, sin interrumpir el trabajo de la persona que está operando.

A continuación se describe el hilo principal del software en caso de éxito (procesos y subprocesos):

- Autenticación
- Entrada log de autenticación
- Búsqueda de archivos a enviar en folder:
    - Envío del archivo (Por cada archivo encontrado en el folder)
    - Entrada de log por envío de archivo
    - Reubicación de archivo a diferente carpeta 
    - Entrada de log por reubicación de archivo
Registro de resultado

Si durante la ejecución del hilo principal ocurre un error o excepción, se ejecutará el siguiente hilo:

- Personalización del error
- Registro de log error
- Registro de resultado

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