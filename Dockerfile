FROM node:10-alpine

LABEL company="Cencosud"
LABEL aplicacion="app-monitoramento"
LABEL version="1.0"
LABEL sector="SAP Retail"
LABEL leader="Kamilla Doria da Silveira"
LABEL author="Edson Marques Alves Filho"
LABEL email="Edson.AlvesFilho@cencosud.com.br"

RUN mkdir /monitoramento

# Create app directory
WORKDIR /monitoramento

# App
ADD . /monitoramento

ENV LANG=pt_BR.UTF-8
ENV LANGUAGE=pt_BR:pt:en
ENV TZ=America/Maceio

# Install app dependencies
RUN cd /monitoramento

# COPY /home/rosbrasil/node_modules
# RUN npm install -g

EXPOSE  3000

CMD [ "npm", "start" ]

