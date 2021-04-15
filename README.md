# Intermediario
Este proyecto nace de la necesidad de poder generar una conexión entre un software ERP contable (Novasoft empresarial) y un servidor que expone un APIRest para la recepción de datos (Baterias WIllard).

En este archivo se encuentra todo el detalle tecnico del desarrollo, los requerimientos para su funcionamiento e instalación, asi como el proceso paso por paso de este ultimo.

## DETALLE TECNICO


## REQUERIMIENTOS
Para poder instalar este aplicativo, se requiere lo siguiente:
- Git
- NodeJS > v14.16.1

## INSTALACION
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

Genere el archivo .env a partir del archivo .env.example y actualice cada variable para una correcta parametrización. A continuación una sección dummy de como deberia verse el archivo:
```bash
# Dev and Prod URL on server side
DEV_URL=https://dev.yourUrl.com:3000/api
PROD_URL=https://prod.yourUrl.com/api
```










## 