document.write('<p>Estadisticas centro medico ñuñoa</p>');
//le cambiaria la ortografia pero estoy con teclado gringo

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

// punto 2
radiologia.shift();
radiologia.pop();

var textoRadiologia = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (var i = 0; i < radiologia.length; i++) {
    textoRadiologia += `<tr>
            <td>${radiologia[i].hora}</td>
            <td>${radiologia[i].especialista}</td>
            <td>${radiologia[i].paciente}</td>
            <td>${radiologia[i].rut}</td>
            <td>${radiologia[i].prevision}</td>
        </tr>`;
}
document.getElementById("tabla-1").innerHTML = textoRadiologia;


var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
    ];

//agregar las horas
traumatologia.push(
    {
      hora: "09:00",
      especialista: "RENÉ POBLETE",
      paciente: "ANA GELLONAL",
      rut: "13123329-7",
      prevision: "ISAPRE",
    },
    {
      hora: "09:30",
      especialista: "MARIA SOLAR",
      paciente: "RAMIRO ANDRADE",
      rut: "12221451-K",
      prevision: "FONASA",
    },
    {
      hora: "10:00",
      especialista: "RAUL LOYOLA",
      paciente: "CARMEN ISLA",
      rut: "10112348-3",
      prevision: "ISAPRE",
    },
    {
      hora: "10:30",
      especialista: "ANTONIO LARENAS",
      paciente: "PABLO LOAYZA",
      rut: "13453234-1",
      prevision: "ISAPRE",
    },
    {
      hora: "12:00",
      especialista: "MATIAS ARAVENA",
      paciente: "SUSANA POBLETE",
      rut: "14345656-6",
      prevision: "FONASA",
    }
  );



var textoTraumatologia = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
for (var i = 0; i < traumatologia.length; i++) {
    textoTraumatologia += `<tr>
            <td>${traumatologia[i].hora}</td>
            <td>${traumatologia[i].especialista}</td>
            <td>${traumatologia[i].paciente}</td>
            <td>${traumatologia[i].rut}</td>
            <td>${traumatologia[i].prevision}</td>
        </tr>`;
}
document.getElementById("tabla-2").innerHTML = textoTraumatologia;

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//punto3
var dentalHtml = document.querySelector("#dental");
// Agregar la lista de consultas de Dental a una etiqueta <p>
for (var i = 0; i < dental.length; i++) {
    dentalHtml.innerHTML += `<p>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}</p>`;
}

//punto 4

var pacientesRadiologia = radiologia.map(function(lista) {
    return lista.paciente;
});
var pacientesTraumatologia = traumatologia.map(function(lista) {
    return lista.paciente;
});
var pacientesDental = dental.map(function(lista) {
    return lista.paciente;
});

var todosLosPacientes = pacientesRadiologia.concat(pacientesTraumatologia, pacientesDental);

var pacientesHtml = document.querySelector("#total-pacientes");


for (var i = 0; i < todosLosPacientes.length; i++) {
    pacientesHtml.innerHTML += `<p>${todosLosPacientes[i]}</p>`;
}

//punto 5 no me funciono con map
var isapreDental = dental.filter(function(lista) {
    return lista.prevision === 'ISAPRE';
});

var isapreDentalHtml = document.querySelector("#pacientes-isapre");
for (var i = 0; i < isapreDental.length; i++) {
    isapreDentalHtml.innerHTML += `<p>${isapreDental[i].paciente} - ${isapreDental[i].prevision}</p>`;
}

//punto 6 ya me enrede demasiado
var fonasaTraumatologia = traumatologia.filter(function(lista) {
    return lista.prevision === 'FONASA';
});
var fonasaTraumatologiaHtml = document.querySelector("#pacientes-fonasa");
for (var i = 0; i < fonasaTraumatologia.length; i++) {
    fonasaTraumatologiaHtml.innerHTML += `<p>${fonasaTraumatologia[i].paciente} - ${fonasaTraumatologia[i].prevision}</p>`;
}

//no se si esto se deja

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);

//no entendi mucho, lo hice muy rapido y busque algunas cosas por internet, no tengo mucho tiempo ahora, queria cambiarme de jornada pero no me dejaron, no se si es mejor o peor, pero a veces debo concentrarme en el trabajo y por estar en clases trabajo mucho mas lento que el resto y eso de nota. no me gustaria que no me dejaran en la practica porque estuve en clases. en la tarde despues estoy muy cansada y a veces la grabacion se sube super tarde, y el video es muuuuuuuuuuuuuuuuy pesado, se me pega el pc y el celular c muere, no me gusta como andan las cosas la verdad. debo levantarme en 6 horas, buenas noches!!