#TODO Testar
FROM alpine:3.5

# Instalando o Mysql
RUN apk add --update mysql mysql-client && rm -f /var/cache/apk/*

# Copiando arquivos de configuração, schemas/dados do mysql casa do codigo
COPY resources/my.cnf /etc/mysql/my.cnf
COPY resources/*.sql /schema/

# Configurando usuário root
RUN /usr/bin/mysql_install_db --user=root
RUN /etc/init.d/mysql start && rc-update add mysql default
RUN /usr/bin/mysqladmin -u root password 'root'

# Criando banco de desenvolvimento e teste
RUN mysql --user=root --password=root -e "create database casadocodigo;"
RUN mysql --user=root --password=root -e "create database casadocodigo_teste;"

# Carregando banco de dados inicial
RUN mysql --username=root --password=root casadocodigo < /schema/cdc.sql
RUN mysql --username=root --password=root casadocodigo_teste < /schema/cdc_teste.sql

# Concluindo configuração do servidoooooo
RUN /etc/init.d/mysql start

EXPOSE 3306

ENTRYPOINT /usr/bin/mysqld --user=root --console