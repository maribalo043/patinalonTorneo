
// Definición de la clase Equipo
class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.partidosGanados = 0;
        this.partidosPerdidos = 0;
        this.partidosEmpatados = 0;
        this.golesAFavor = 0;
        this.golesEnContra = 0;
        this.jugadores = [];
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }
}

// Definición de la clase Jugador
class Jugador {
    constructor(nombre, goles) {
        this.nombre = nombre;
        this.goles = goles;
    }
}

// Definición de la clase Partido
class Partido {
    constructor(equipo1, equipo2, resultado, hora, pista, finalizado) {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.resultado = resultado;
        this.pista = pista;
        this.hora = hora;
        this.finalizado = finalizado;
        if (this.hora !== "99:99" && this.resultado != null && this.finalizado) {
            this.actualizarResultados();
        }
    }

    actualizarResultados() {
        var [golesEquipo1, golesEquipo2] = this.resultado.split('-').map(Number);
        this.equipo1.golesAFavor += golesEquipo1;
        this.equipo1.golesEnContra += golesEquipo2;
        this.equipo2.golesAFavor += golesEquipo2;
        this.equipo2.golesEnContra += golesEquipo1;
    }
}

// Crear instancias de equipos, jugadores y partidos
var equipo1 = new Equipo("Equipo 1");
var equipo2 = new Equipo("Equipo 2");
var equipo3 = new Equipo("Equipo 3");
var equipo4 = new Equipo("Equipo 4");
var equipo5 = new Equipo("Equipo 5");
var equipo6 = new Equipo("Equipo 6");

// Equipo 1
var jugador1Equipo1 = new Jugador("Marco", 0);
var jugador2Equipo1 = new Jugador("Aine", 0);
var jugador3Equipo1 = new Jugador("Nela", 0);
var jugador4Equipo1 = new Jugador("Enol", 0);
var jugador5Equipo1 = new Jugador("Pelayo", 0);
var jugador6Equipo1 = new Jugador("Olaya", 0);
var jugador7Equipo1 = new Jugador("Diego", 0);

// Equipo 2
var jugador1Equipo2 = new Jugador("Arian", 0);
var jugador2Equipo2 = new Jugador("Miguel Amores", 0);
var jugador3Equipo2 = new Jugador("Carencias", 1);
var jugador4Equipo2 = new Jugador("Claudia", 0);
var jugador5Equipo2 = new Jugador("Manu", 0);
var jugador6Equipo2 = new Jugador("Marcos PJ", 2);

// Equipo 3
var jugador1Equipo3 = new Jugador("Chus", 0);
var jugador2Equipo3 = new Jugador("Yago", 2);
var jugador3Equipo3 = new Jugador("Gemma", 0);
var jugador4Equipo3 = new Jugador("Fernan", 1);
var jugador5Equipo3 = new Jugador("Carlos", 2);
var jugador6Equipo3 = new Jugador("Patri", 1);

// Equipo 4
var jugador1Equipo4 = new Jugador("Irene", 0);
var jugador2Equipo4 = new Jugador("Javi", 0);
var jugador3Equipo4 = new Jugador("Ruben", 0);
var jugador4Equipo4 = new Jugador("Mario", 1);
var jugador5Equipo4 = new Jugador("Alba", 0);

// Equipo 5
var jugador1Equipo5 = new Jugador("Carmelo", 0);
var jugador2Equipo5 = new Jugador("Sofia", 0);
var jugador3Equipo5 = new Jugador("Jose Ramón", 0);
var jugador4Equipo5 = new Jugador("Hector", 0);
var jugador5Equipo5 = new Jugador("Yefri", 0);

// Equipo 6
var jugador1Equipo6 = new Jugador("Marcos", 0);
var jugador2Equipo6 = new Jugador("Carla", 0);
var jugador3Equipo6 = new Jugador("Aitor", 0);
var jugador4Equipo6 = new Jugador("Martín", 0);
var jugador5Equipo6 = new Jugador("Lúa", 0);


// Partidos del Lunes
var partido1Lunes = new Partido(equipo1, equipo2, "0-3", "Lunes 20:10", "La felguera", false);
var partido2Lunes = new Partido(equipo3, equipo4, "6-1", "Lunes 20:30", "La felguera", false);
var partido3Lunes = new Partido(equipo5, equipo6, "0-0", "Lunes 20:50", "La felguera", false);
var partido4Lunes = new Partido(equipo1, equipo3, "0-0", "Lunes 21:10", "La felguera", false);
var partido5Lunes = new Partido(equipo2, equipo6, "0-0", "Lunes 21:30", "La felguera", false);
var partido6Lunes = new Partido(equipo4, equipo5, "0-0", "Lunes 21:50", "La felguera", false);
var partido7Lunes = new Partido(equipo1, equipo6, "0-0", "Lunes 22:10", "La felguera", false);

// Partidos del Miércoles
var partido1Miercoles = new Partido(equipo2, equipo4, "0-0", "Miércoles 19:30", "La felguera", false);
var partido2Miercoles = new Partido(equipo5, equipo3, "0-0", "Miércoles 19:30", "La felguera", false);
var partido3Miercoles = new Partido(equipo1, equipo4, "0-0", "Miércoles 20:10", "La felguera", false);
var partido4Miercoles = new Partido(equipo6, equipo3, "0-0", "Miércoles 20:30", "La felguera", false);
var partido5Miercoles = new Partido(equipo2, equipo5, "0-0", "Miércoles 20:50", "La felguera", false);
var partido6Miercoles = new Partido(equipo4, equipo6, "0-0", "Miércoles 21:10", "La felguera", false);
var partido7Miercoles = new Partido(equipo2, equipo3, "0-0", "Miércoles 21:30", "La felguera", false);
var partido8Miercoles = new Partido(equipo1, equipo5, "0-0", "Miércoles 21:50", "La felguera", false);

// Definir la lista de jugadores
var jugadores = [
    jugador1Equipo1, jugador2Equipo1, jugador3Equipo1, jugador4Equipo1, jugador5Equipo1, jugador6Equipo1, jugador7Equipo1,
    jugador1Equipo2, jugador2Equipo2, jugador3Equipo2, jugador4Equipo2, jugador5Equipo2, jugador6Equipo2,
    jugador1Equipo3, jugador2Equipo3, jugador3Equipo3, jugador4Equipo3, jugador5Equipo3, jugador6Equipo3,
    jugador1Equipo4, jugador2Equipo4, jugador3Equipo4, jugador4Equipo4, jugador5Equipo4,
    jugador1Equipo5, jugador2Equipo5, jugador3Equipo5, jugador4Equipo5, jugador5Equipo5,
    jugador1Equipo6, jugador2Equipo6, jugador3Equipo6, jugador4Equipo6, jugador5Equipo6
];




// Definir la variable partidos y agregar los partidos relevantes
var partidos = [
    partido1Lunes, partido2Lunes, partido3Lunes, partido4Lunes, partido5Lunes, partido6Lunes, partido7Lunes,
    partido1Miercoles, partido2Miercoles, partido3Miercoles, partido4Miercoles, partido5Miercoles, partido6Miercoles, partido7Miercoles, partido8Miercoles
];


// Función para actualizar los puntos de los equipos
// Función para actualizar los puntos de los equipos
function actualizarPuntos() {
    // Iterar sobre todos los partidos
    partidos.forEach(partido => {
        if (partido.finalizado) { // Solo actualizar si el partido está finalizado
            // Dividir el resultado en goles de cada equipo
            var [golesEquipo1, golesEquipo2] = partido.resultado.split('-').map(Number);

            // Actualizar los resultados para cada equipo del partido
            partido.equipo1.puntos += (golesEquipo1 > golesEquipo2) ? 3 : (golesEquipo1 < golesEquipo2) ? 0 : 1;
            partido.equipo2.puntos += (golesEquipo2 > golesEquipo1) ? 3 : (golesEquipo2 < golesEquipo1) ? 0 : 1;

            // Actualizar los resultados para cada equipo del partido
            if (partido.equipo1.golesAFavor != null && partido.equipo1.golesEnContra != null && partido.equipo2.golesAFavor != null && partido.equipo2.golesEnContra != null) {
                partido.equipo1.golesAFavor += golesEquipo1;
                partido.equipo1.golesEnContra += golesEquipo2;
                partido.equipo2.golesAFavor += golesEquipo2;
                partido.equipo2.golesEnContra += golesEquipo1;
            }
        }
    });
}


function actualizarResultados(golesAFavor, golesEnContra) {
    // Calcular puntos del partido
    if (golesAFavor > golesEnContra) {
        this.puntos += 3;
        this.partidosGanados++;
    } else if (golesAFavor < golesEnContra) {
        this.partidosPerdidos++;
    } else {
        this.puntos++;
        this.partidosEmpatados++;
    }
}

// Función para ordenar los equipos por puntos y diferencia de goles
function ordenarEquiposPorPuntosYDiferencia(equipos) {
    equipos.sort((equipoA, equipoB) => {
        if (equipoB.puntos !== equipoA.puntos) {
            return equipoB.puntos - equipoA.puntos;
        } else {
            return (equipoB.golesAFavor - equipoB.golesEnContra) - (equipoA.golesAFavor - equipoA.golesEnContra);
        }
    });
}
// Función para mostrar los partidos en la tabla superior del HTML
function mostrarPartidosEnTabla() {
    var tbodyPartidos = document.getElementById('cuerpoGrupo');

    // Iterar sobre cada partido y agregarlo a la tabla
    partidos.forEach(partido => {
        var row = tbodyPartidos.insertRow();
        var cellEquipo1 = row.insertCell(0);
        var cellResultado = row.insertCell(1);
        var cellEquipo2 = row.insertCell(2);
        var cellHora = row.insertCell(3);
        var cellPista = row.insertCell(4);
        var cellAplazamiento = row.insertCell(5);

        cellEquipo1.innerHTML = partido.equipo1.nombre;
        cellResultado.innerHTML = partido.resultado;
        cellEquipo2.innerHTML = partido.equipo2.nombre;
        cellHora.innerHTML = partido.hora;
        cellPista.innerHTML = partido.pista;
        cellAplazamiento.innerHTML = 'No';
    });
}

// Función para mostrar los equipos ordenados en la segunda tabla del HTML
function mostrarEquiposOrdenadosEnTabla() {
    var tbodyClasificacion = document.getElementById('cuerpoClasif');

    // Ordenar equipos
    ordenarEquiposPorPuntosYDiferencia([equipo1, equipo2, equipo3, equipo4, equipo5, equipo6]);

    // Iterar sobre cada equipo y agregarlo a la tabla
    [equipo1, equipo2, equipo3, equipo4, equipo5, equipo6].forEach(equipo => {
        var row = tbodyClasificacion.insertRow();
        var cellNombre = row.insertCell(0);
        var cellPuntos = row.insertCell(1);
        var cellGolesAFavor = row.insertCell(2);
        var cellGolesEnContra = row.insertCell(3);
        var cellPartidosGanados = row.insertCell(4);
        var cellPartidosPerdidos = row.insertCell(5);
        var cellPartidosEmpatados = row.insertCell(6);

        cellNombre.innerHTML = equipo.nombre;
        cellPuntos.innerHTML = equipo.puntos;
        cellGolesAFavor.innerHTML = equipo.golesAFavor;
        cellGolesEnContra.innerHTML = equipo.golesEnContra;
        cellPartidosGanados.innerHTML = equipo.partidosGanados;
        cellPartidosPerdidos.innerHTML = equipo.partidosPerdidos;
        cellPartidosEmpatados.innerHTML = equipo.partidosEmpatados;
    });
}

// Función para mostrar los goles de los jugadores en la tabla
function mostrarGolesDeJugadores() {
    console.log('toy en metodo')
    // Esperar a que el DOM esté completamente cargado
    console.log('toy en el document')
    var tablaGolesJugadores = document.getElementById("tablaGolesJugadores");
    console.log('toy fuera')
    // Verificar si el elemento se encontró
    if (tablaGolesJugadores) {
        console.log('toy dentro')
        // Limpiar tabla
        tablaGolesJugadores.innerHTML = '';

        // Ordenar jugadores por número de goles
        jugadores.sort((a, b) => b.goles - a.goles);

        // Iterar sobre cada jugador y agregar los goles a la tabla
        jugadores.forEach(jugador => {
            console.log(jugador)
            var row = tablaGolesJugadores.insertRow();
            var cellNombre = row.insertCell(0);
            var cellGoles = row.insertCell(1);

            cellNombre.textContent = jugador.nombre;
            cellGoles.textContent = jugador.goles;
        });
    } else {
        console.error("No se encontró el elemento con el ID 'tablaGolesJugadores'.");
    }
}

// Al cargar la página, actualizar los puntos, mostrar los partidos y mostrar los goles de los jugadores en las tablas del HTML
window.addEventListener('load', function () {
        mostrarGolesDeJugadores();
        actualizarPuntos();
        mostrarPartidosEnTabla();
        mostrarEquiposOrdenadosEnTabla();
});


