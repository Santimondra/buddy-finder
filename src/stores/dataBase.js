"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var DataBase = (function () {
    function DataBase() {
        this.users = [
            {
                "nombreCompleto": "Alejandro Montealegre",
                "nombre": "Alejandro",
                "segundoNombre": "",
                "apellido": "Montealegre",
                "genero": "m",
                "foto": "./assets/img/perfiles/alejandro_montealegre.jpg",
                "cedula": 1107520857,
                "temperatura": 0,
                "frutas": 8,
                "tipo": 5,
                "espacio": 4,
                "cafe": 0,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Alejandro Salazar",
                "nombre": "Alejandro",
                "segundoNombre": "",
                "apellido": "Salazar",
                "genero": "m",
                "foto": "./assets/img/perfiles/alejandro_salazar.jpg",
                "cedula": 1113697695,
                "temperatura": 5,
                "frutas": 8,
                "tipo": 3,
                "espacio": 1,
                "cafe": 3,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Aleksandro Londoño",
                "nombre": "Aleksandro",
                "segundoNombre": "",
                "apellido": "Londoño",
                "genero": "m",
                "foto": "./assets/img/perfiles/aleksandro_londoño.jpg",
                "cedula": 10000646,
                "temperatura": 5,
                "frutas": 6,
                "tipo": 6,
                "espacio": 3,
                "cafe": 8,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Andres Esponja",
                "nombre": "Andres",
                "segundoNombre": "",
                "apellido": "Esponja",
                "genero": "m",
                "foto": "./assets/img/perfiles/andres_esponja.jpg",
                "cedula": 1127793699,
                "temperatura": 5,
                "frutas": 9,
                "tipo": 8,
                "espacio": 1,
                "cafe": 6,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Andres Garcia",
                "nombre": "Andres",
                "segundoNombre": "",
                "apellido": "Garcia",
                "genero": "m",
                "foto": "./assets/img/perfiles/andres_garcia.jpg",
                "cedula": 1144202182,
                "temperatura": 2,
                "frutas": 3,
                "tipo": 5,
                "espacio": 1,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Andres Zabaleta",
                "nombre": "Andres",
                "segundoNombre": "",
                "apellido": "Zabaleta",
                "genero": "m",
                "foto": "./assets/img/perfiles/andres_zabaleta.jpg",
                "cedula": 103067426,
                "temperatura": 5,
                "frutas": 10,
                "tipo": 7,
                "espacio": 2,
                "cafe": 4,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Arturo Gomez",
                "nombre": "Arturo",
                "segundoNombre": "",
                "apellido": "Gomez",
                "genero": "m",
                "foto": "./assets/img/perfiles/arturo_gomez.jpg",
                "cedula": 1144193856,
                "temperatura": 10,
                "frutas": 1,
                "tipo": 2,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Camila Guzman",
                "nombre": "Camila",
                "segundoNombre": "",
                "apellido": "Guzman",
                "genero": "f",
                "foto": "./assets/img/perfiles/camila_guzman.jpg",
                "cedula": 1151951116,
                "temperatura": 5,
                "frutas": 0,
                "tipo": 3,
                "espacio": 3,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Camilo Murillo",
                "nombre": "Camilo",
                "segundoNombre": "",
                "apellido": "Murillo",
                "genero": "m",
                "foto": "./assets/img/perfiles/camilo_murillo.jpg",
                "cedula": 1112968351,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 0,
                "espacio": 0,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Camilo Rivillas",
                "nombre": "Camilo",
                "segundoNombre": "",
                "apellido": "Rivillas",
                "genero": "m",
                "foto": "./assets/img/perfiles/camilo_rivillas.jpg",
                "cedula": 43234931,
                "temperatura": 5,
                "frutas": 9,
                "tipo": 8,
                "espacio": 3,
                "cafe": 2,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Camilo Tobar",
                "nombre": "Camilo",
                "segundoNombre": "",
                "apellido": "Tobar",
                "genero": "m",
                "foto": "./assets/img/perfiles/camilo_tobar.jpg",
                "cedula": 1144102623,
                "temperatura": 1,
                "frutas": 2,
                "tipo": 2,
                "espacio": 7,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Carlos Castilla",
                "nombre": "Carlos",
                "segundoNombre": "",
                "apellido": "Castilla",
                "genero": "m",
                "foto": "./assets/img/perfiles/carlos_castilla.jpg",
                "cedula": 1144090493,
                "temperatura": 0,
                "frutas": 5,
                "tipo": 5,
                "espacio": 0,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Carolina Escobar",
                "nombre": "Carolina",
                "segundoNombre": "",
                "apellido": "Escobar",
                "genero": "f",
                "foto": "./assets/img/perfiles/carolina_escobar.jpg",
                "cedula": 1144096601,
                "temperatura": 2,
                "frutas": 7,
                "tipo": 3,
                "espacio": 3,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Cesar Dominguez",
                "nombre": "Cesar",
                "segundoNombre": "",
                "apellido": "Dominguez",
                "genero": "m",
                "foto": "./assets/img/perfiles/cesar_dominguez.jpg",
                "cedula": 1114456656,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 10,
                "espacio": 6,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Christian Arias",
                "nombre": "Christian",
                "segundoNombre": "",
                "apellido": "Arias",
                "genero": "m",
                "foto": "./assets/img/perfiles/christian_arias.jpg",
                "cedula": 1144052529,
                "temperatura": 0,
                "frutas": 5,
                "tipo": 6,
                "espacio": 3,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Christopher Bravo",
                "nombre": "Christopher",
                "segundoNombre": "",
                "apellido": "Bravo",
                "genero": "m",
                "foto": "./assets/img/perfiles/christopher_bravo.jpg",
                "cedula": 31291477,
                "temperatura": 0,
                "frutas": 5,
                "tipo": 5,
                "espacio": 5,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Claudia Montaña",
                "nombre": "Claudia",
                "segundoNombre": "",
                "apellido": "Montaña",
                "genero": "f",
                "foto": "./assets/img/perfiles/claudia_montaña.jpg",
                "cedula": 66835029,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 5,
                "espacio": 9,
                "cafe": 0,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Cristian Guevara",
                "nombre": "Cristian",
                "segundoNombre": "",
                "apellido": "Guevara",
                "genero": "m",
                "foto": "./assets/img/perfiles/cristian_guevara.jpg",
                "cedula": 1143865250,
                "temperatura": 3,
                "frutas": 2,
                "tipo": 2,
                "espacio": 5,
                "cafe": 0,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Cristian Rodriguez",
                "nombre": "Cristian",
                "segundoNombre": "",
                "apellido": "Rodriguez",
                "genero": "m",
                "foto": "./assets/img/perfiles/cristian_rodriguez.jpg",
                "cedula": 1115092256,
                "temperatura": 1,
                "frutas": 9,
                "tipo": 2,
                "espacio": 1,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Daniel Rabia",
                "nombre": "Daniel",
                "segundoNombre": "",
                "apellido": "Rabia",
                "genero": "m",
                "foto": "./assets/img/perfiles/daniel_rabia.jpg",
                "cedula": 1032493506,
                "temperatura": 5,
                "frutas": 3,
                "tipo": 8,
                "espacio": 3,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Daniel Steven Rojas",
                "nombre": "Daniel",
                "segundoNombre": "Steven",
                "apellido": "Rojas",
                "genero": "m",
                "foto": "./assets/img/perfiles/daniel_steven_rojas.jpg",
                "cedula": 1107523973,
                "temperatura": 0,
                "frutas": 5,
                "tipo": 6,
                "espacio": 3,
                "cafe": 6,
                "similarity": 0,
            },
            {
                "nombreCompleto": "David Bernal",
                "nombre": "David",
                "segundoNombre": "",
                "apellido": "Bernal",
                "genero": "m",
                "foto": "./assets/img/perfiles/david_bernal.jpg",
                "cedula": 1144070528,
                "temperatura": 3,
                "frutas": 10,
                "tipo": 10,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Dawer Tabares",
                "nombre": "Dawer",
                "segundoNombre": "",
                "apellido": "Tabares",
                "genero": "m",
                "foto": "./assets/img/perfiles/dawer_tabares.jpg",
                "cedula": 1143949290,
                "temperatura": 5,
                "frutas": 5,
                "tipo": 5,
                "espacio": 5,
                "cafe": 0,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Dayana Torres",
                "nombre": "Dayana",
                "segundoNombre": "",
                "apellido": "Torres",
                "genero": "f",
                "foto": "./assets/img/perfiles/dayana_torres.jpg",
                "cedula": 1143985792,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 7,
                "espacio": 0,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Diana Flores",
                "nombre": "Diana",
                "segundoNombre": "",
                "apellido": "Flores",
                "genero": "f",
                "foto": "./assets/img/perfiles/diana_flores.jpg",
                "cedula": 1144203431,
                "temperatura": 5,
                "frutas": 7,
                "tipo": 5,
                "espacio": 0,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Diego Zuñiga",
                "nombre": "Diego",
                "segundoNombre": "",
                "apellido": "Zuñiga",
                "genero": "m",
                "foto": "./assets/img/perfiles/diego_zuñiga.jpg",
                "cedula": 1144100780,
                "temperatura": 4,
                "frutas": 5,
                "tipo": 10,
                "espacio": 9,
                "cafe": 6,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Estefania Montaña",
                "nombre": "Estefania",
                "segundoNombre": "",
                "apellido": "Montaña",
                "genero": "f",
                "foto": "./assets/img/perfiles/estefania_montaña.jpg",
                "cedula": 1144104330,
                "temperatura": 0,
                "frutas": 0,
                "tipo": 0,
                "espacio": 1,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Ilian Londoño",
                "nombre": "Ilian",
                "segundoNombre": "",
                "apellido": "Londoño",
                "genero": "m",
                "foto": "./assets/img/perfiles/ilian_londoño.jpg",
                "cedula": 1112627628,
                "temperatura": 0,
                "frutas": 8,
                "tipo": 6,
                "espacio": 2,
                "cafe": 8,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Isabella Jordan",
                "nombre": "Isabella",
                "segundoNombre": "",
                "apellido": "Jordan",
                "genero": "f",
                "foto": "./assets/img/perfiles/isabella_jordan.jpg",
                "cedula": 1144100607,
                "temperatura": 0,
                "frutas": 4,
                "tipo": 7,
                "espacio": 6,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Isabella Murillo",
                "nombre": "Isabella",
                "segundoNombre": "",
                "apellido": "Murillo",
                "genero": "f",
                "foto": "./assets/img/perfiles/isabella_murillo.jpg",
                "cedula": 1112970287,
                "temperatura": 0,
                "frutas": 6,
                "tipo": 0,
                "espacio": 0,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Isabella Peña",
                "nombre": "Isabella",
                "segundoNombre": "",
                "apellido": "Peña",
                "genero": "f",
                "foto": "./assets/img/perfiles/isabella_peña.jpg",
                "cedula": 1107098227,
                "temperatura": 3,
                "frutas": 7,
                "tipo": 3,
                "espacio": 4,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Jaime Montaña",
                "nombre": "Jaime",
                "segundoNombre": "",
                "apellido": "Montaña",
                "genero": "m",
                "foto": "./assets/img/perfiles/jaime_montaña.jpg",
                "cedula": 16727804,
                "temperatura": 2,
                "frutas": 10,
                "tipo": 4,
                "espacio": 0,
                "cafe": 8,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Jessica Rendon",
                "nombre": "Jessica",
                "segundoNombre": "",
                "apellido": "Rendon",
                "genero": "f",
                "foto": "./assets/img/perfiles/jessica_rendon.jpg",
                "cedula": 1234191789,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 6,
                "espacio": 9,
                "cafe": 6,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Jhonatan Rios",
                "nombre": "Jhonatan",
                "segundoNombre": "",
                "apellido": "Rios",
                "genero": "m",
                "foto": "./assets/img/perfiles/jhonatan_rios.jpg",
                "cedula": 1143869029,
                "temperatura": 0,
                "frutas": 8,
                "tipo": 5,
                "espacio": 5,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Joan Cardona",
                "nombre": "Joan",
                "segundoNombre": "",
                "apellido": "Cardona",
                "genero": "m",
                "foto": "./assets/img/perfiles/joan_cardona.jpg",
                "cedula": 1112102447,
                "temperatura": 5,
                "frutas": 10,
                "tipo": 0,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Jorge Andres Cano",
                "nombre": "Jorge",
                "segundoNombre": "Andres",
                "apellido": "Cano",
                "genero": "m",
                "foto": "./assets/img/perfiles/jorge_andres_cano.jpg",
                "cedula": 1115063363,
                "temperatura": 0,
                "frutas": 7,
                "tipo": 0,
                "espacio": 3,
                "cafe": 9,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Jose Alejandro Ossa",
                "nombre": "Jose",
                "segundoNombre": "Alejandro",
                "apellido": "Ossa",
                "genero": "m",
                "foto": "./assets/img/perfiles/jose_alejandro_ossa.jpg",
                "cedula": 1115089824,
                "temperatura": 0,
                "frutas": 8,
                "tipo": 3,
                "espacio": 2,
                "cafe": 2,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Juan Antonio Pazmiño",
                "nombre": "Juan",
                "segundoNombre": "Antonio",
                "apellido": "Pazmiño",
                "genero": "m",
                "foto": "./assets/img/perfiles/juan_antonio_pazmiño.jpg",
                "cedula": 1151956783,
                "temperatura": 7,
                "frutas": 2,
                "tipo": 5,
                "espacio": 4,
                "cafe": 0,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Juan David Perez",
                "nombre": "Juan",
                "segundoNombre": "David",
                "apellido": "Perez",
                "genero": "m",
                "foto": "./assets/img/perfiles/juan_david_perez.jpg",
                "cedula": 1144095821,
                "temperatura": 1,
                "frutas": 1,
                "tipo": 9,
                "espacio": 2,
                "cafe": 4,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Juan Sebastian Lopez",
                "nombre": "Juan",
                "segundoNombre": "Sebastian",
                "apellido": "Lopez",
                "genero": "m",
                "foto": "./assets/img/perfiles/juan_sebastian_lopez.jpg",
                "cedula": 1107530989,
                "temperatura": 0,
                "frutas": 0,
                "tipo": 5,
                "espacio": 0,
                "cafe": 3,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Juliana Llano",
                "nombre": "Juliana",
                "segundoNombre": "",
                "apellido": "Llano",
                "genero": "f",
                "foto": "./assets/img/perfiles/juliana_llano.jpg",
                "cedula": 1113698930,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 5,
                "espacio": 1,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Juliana Rosas",
                "nombre": "Juliana",
                "segundoNombre": "",
                "apellido": "Rosas",
                "genero": "f",
                "foto": "./assets/img/perfiles/juliana_rosas.jpg",
                "cedula": 1006110896,
                "temperatura": 5,
                "frutas": 6,
                "tipo": 6,
                "espacio": 2,
                "cafe": 8,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Julio Echeverry",
                "nombre": "Julio",
                "segundoNombre": "",
                "apellido": "Echeverry",
                "genero": "m",
                "foto": "./assets/img/perfiles/julio_echeverry.jpg",
                "cedula": 1151962076,
                "temperatura": 0,
                "frutas": 4,
                "tipo": 5,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Karen Caicedo",
                "nombre": "Karen",
                "segundoNombre": "",
                "apellido": "Caicedo",
                "genero": "f",
                "foto": "./assets/img/perfiles/karen_caicedo.jpg",
                "cedula": 1144075106,
                "temperatura": 5,
                "frutas": 10,
                "tipo": 5,
                "espacio": 6,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Laura Oggioni",
                "nombre": "Laura",
                "segundoNombre": "",
                "apellido": "Oggioni",
                "genero": "f",
                "foto": "./assets/img/perfiles/laura_oggioni.jpg",
                "cedula": 1144095614,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 0,
                "espacio": 3,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Libia Guevara",
                "nombre": "Libia",
                "segundoNombre": "",
                "apellido": "Guevara",
                "genero": "f",
                "foto": "./assets/img/perfiles/libia_guevara.jpg",
                "cedula": 66847758,
                "temperatura": 1,
                "frutas": 10,
                "tipo": 1,
                "espacio": 2,
                "cafe": 6,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Luisa Marmolejo",
                "nombre": "Luisa",
                "segundoNombre": "",
                "apellido": "Marmolejo",
                "genero": "f",
                "foto": "./assets/img/perfiles/luisa_marmolejo.jpg",
                "cedula": 1144103928,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 5,
                "espacio": 6,
                "cafe": 2,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Manuela Epe",
                "nombre": "Manuela",
                "segundoNombre": "",
                "apellido": "Epe",
                "genero": "f",
                "foto": "./assets/img/perfiles/manuela_epe.jpg",
                "cedula": 1144091759,
                "temperatura": 1,
                "frutas": 9,
                "tipo": 1,
                "espacio": 3,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Marcela Lubo",
                "nombre": "Marcela",
                "segundoNombre": "",
                "apellido": "Lubo",
                "genero": "f",
                "foto": "./assets/img/perfiles/marcela_lubo.jpg",
                "cedula": 1107046853,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 0,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Maria Camila Morales",
                "nombre": "Maria",
                "segundoNombre": "Camila",
                "apellido": "Morales",
                "genero": "f",
                "foto": "./assets/img/perfiles/maria_camila_morales.jpg",
                "cedula": 1143869888,
                "temperatura": 5,
                "frutas": 8,
                "tipo": 2,
                "espacio": 6,
                "cafe": 9,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Maria Eugenia Bolaños",
                "nombre": "Maria",
                "segundoNombre": "Eugenia",
                "apellido": "Bolaños",
                "genero": "f",
                "foto": "./assets/img/perfiles/maria_eugenia_bolaños.jpg",
                "cedula": 31167303,
                "temperatura": 5,
                "frutas": 5,
                "tipo": 5,
                "espacio": 0,
                "cafe": 4,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Maria Isabel Hernandez",
                "nombre": "Maria",
                "segundoNombre": "Isabel",
                "apellido": "Hernandez",
                "genero": "f",
                "foto": "./assets/img/perfiles/maria_isabel_hernandez.jpg",
                "cedula": 1144109007,
                "temperatura": 5,
                "frutas": 9,
                "tipo": 7,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Michelle Marulanda",
                "nombre": "Michelle",
                "segundoNombre": "",
                "apellido": "Marulanda",
                "genero": "f",
                "foto": "./assets/img/perfiles/michelle_marulanda.jpg",
                "cedula": 1144097173,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 5,
                "espacio": 0,
                "cafe": 3,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Miguel Santiago Murillo",
                "nombre": "Miguel",
                "segundoNombre": "Santiago",
                "apellido": "Murillo",
                "genero": "m",
                "foto": "./assets/img/perfiles/miguel_santiago_murillo.jpg",
                "cedula": 14650263,
                "temperatura": 0,
                "frutas": 9,
                "tipo": 0,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Natalia Atehortua",
                "nombre": "Natalia",
                "segundoNombre": "",
                "apellido": "Atehortua",
                "genero": "f",
                "foto": "./assets/img/perfiles/natalia_atehortua.jpg",
                "cedula": 1234192072,
                "temperatura": 5,
                "frutas": 0,
                "tipo": 6,
                "espacio": 3,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Natalia Guzman",
                "nombre": "Natalia",
                "segundoNombre": "",
                "apellido": "Guzman",
                "genero": "f",
                "foto": "./assets/img/perfiles/natalia_guzman.jpg",
                "cedula": 1143871236,
                "temperatura": 3,
                "frutas": 0,
                "tipo": 2,
                "espacio": 3,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Nicolas Martinez",
                "nombre": "Nicolas",
                "segundoNombre": "",
                "apellido": "Martinez",
                "genero": "m",
                "foto": "./assets/img/perfiles/nicolas_martinez.jpg",
                "cedula": 1143876267,
                "temperatura": 4,
                "frutas": 3,
                "tipo": 5,
                "espacio": 3,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Oscar hoyos",
                "nombre": "Oscar",
                "segundoNombre": "",
                "apellido": "hoyos",
                "genero": "m",
                "foto": "./assets/img/perfiles/oscar_hoyos.jpg",
                "cedula": 1144201747,
                "temperatura": 0,
                "frutas": 5,
                "tipo": 3,
                "espacio": 0,
                "cafe": 9,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Paula Andrea Hurtado",
                "nombre": "Paula",
                "segundoNombre": "Andrea",
                "apellido": "Hurtado",
                "genero": "f",
                "foto": "./assets/img/perfiles/paula_andrea_hurtado.jpg",
                "cedula": 1144105282,
                "temperatura": 2,
                "frutas": 9,
                "tipo": 5,
                "espacio": 3,
                "cafe": 8,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Paula Garcia",
                "nombre": "Paula",
                "segundoNombre": "",
                "apellido": "Garcia",
                "genero": "f",
                "foto": "./assets/img/perfiles/paula_garcia.jpg",
                "cedula": 1151964908,
                "temperatura": 2,
                "frutas": 4,
                "tipo": 6,
                "espacio": 2,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Paula Muñoz",
                "nombre": "Paula",
                "segundoNombre": "",
                "apellido": "Muñoz",
                "genero": "f",
                "foto": "./assets/img/perfiles/paula_muñoz.jpg",
                "cedula": 1115092298,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 5,
                "espacio": 3,
                "cafe": 9,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Paulo Rosas",
                "nombre": "Paulo",
                "segundoNombre": "",
                "apellido": "Rosas",
                "genero": "m",
                "foto": "./assets/img/perfiles/paulo_rosas.jpg",
                "cedula": 1143847613,
                "temperatura": 0,
                "frutas": 9,
                "tipo": 5,
                "espacio": 0,
                "cafe": 3,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Samuell Rosas",
                "nombre": "Samuell",
                "segundoNombre": "",
                "apellido": "Rosas",
                "genero": "m",
                "foto": "./assets/img/perfiles/samuell_rosas.jpg",
                "cedula": 1143873144,
                "temperatura": 2,
                "frutas": 6,
                "tipo": 5,
                "espacio": 3,
                "cafe": 2,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Santiago Mondragon",
                "nombre": "Santiago",
                "segundoNombre": "",
                "apellido": "Mondragon",
                "genero": "m",
                "foto": "./assets/img/perfiles/santiago_mondragon.jpg",
                "cedula": 1143866880,
                "temperatura": 0,
                "frutas": 5,
                "tipo": 8,
                "espacio": 2,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Santiago Murillo",
                "nombre": "Santiago",
                "segundoNombre": "",
                "apellido": "Murillo",
                "genero": "m",
                "foto": "./assets/img/perfiles/santiago_murillo.jpg",
                "cedula": 1112967335,
                "temperatura": 7,
                "frutas": 6,
                "tipo": 7,
                "espacio": 6,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Sebastian Restrepo",
                "nombre": "Sebastian",
                "segundoNombre": "",
                "apellido": "Restrepo",
                "genero": "m",
                "foto": "./assets/img/perfiles/sebastian_restrepo.jpg",
                "cedula": 1144103496,
                "temperatura": 0,
                "frutas": 9,
                "tipo": 0,
                "espacio": 2,
                "cafe": 5,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Simon Algo",
                "nombre": "Simon",
                "segundoNombre": "",
                "apellido": "Algo",
                "genero": "m",
                "foto": "./assets/img/perfiles/simon_algo.jpg",
                "cedula": 1107077587,
                "temperatura": 5,
                "frutas": 10,
                "tipo": 5,
                "espacio": 0,
                "cafe": 4,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Sofia Guzman",
                "nombre": "Sofia",
                "segundoNombre": "",
                "apellido": "Guzman",
                "genero": "f",
                "foto": "./assets/img/perfiles/sofia_guzman.jpg",
                "cedula": 1143880369,
                "temperatura": 3,
                "frutas": 8,
                "tipo": 6,
                "espacio": 2,
                "cafe": 3,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Tatiana Hoyos",
                "nombre": "Tatiana",
                "segundoNombre": "",
                "apellido": "Hoyos",
                "genero": "f",
                "foto": "./assets/img/perfiles/tatiana_hoyos.jpg",
                "cedula": 1143936849,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 0,
                "espacio": 3,
                "cafe": 10,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Valentina Cardona",
                "nombre": "Valentina",
                "segundoNombre": "",
                "apellido": "Cardona",
                "genero": "f",
                "foto": "./assets/img/perfiles/valentina_cardona.jpg",
                "cedula": 1143872321,
                "temperatura": 0,
                "frutas": 0,
                "tipo": 0,
                "espacio": 0,
                "cafe": 7,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Valeria Ramirez",
                "nombre": "Valeria",
                "segundoNombre": "",
                "apellido": "Ramirez",
                "genero": "f",
                "foto": "./assets/img/perfiles/valeria_ramirez.jpg",
                "cedula": 1144094770,
                "temperatura": 0,
                "frutas": 8,
                "tipo": 5,
                "espacio": 2,
                "cafe": 4,
                "similarity": 0,
            },
            {
                "nombreCompleto": "Vanessa Castillo",
                "nombre": "Vanessa",
                "segundoNombre": "",
                "apellido": "Castillo",
                "genero": "f",
                "foto": "./assets/img/perfiles/vanessa_castillo.jpg",
                "cedula": 1144091513,
                "temperatura": 0,
                "frutas": 10,
                "tipo": 5,
                "espacio": 5,
                "cafe": 10,
                "similarity": 0,
            }
        ];
    }
    __decorate([
        mobx_1.observable
    ], DataBase.prototype, "users", void 0);
    return DataBase;
}());
exports.dataBase = new DataBase();
//# sourceMappingURL=dataBase.js.map