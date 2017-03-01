var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

function initialFun() {
  var bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;
  var contMain = document.getElementsByClassName('grow')[0];
  contMain.style.height = (windowHeight - 1) + 'px';
  var carousel = document.getElementById('myCarousel');
  carousel.style.height = (windowHeight*0.60) + 'px';
  var contDTP = document.getElementsByClassName('contDTP')[0];
  contDTP.style.height = (windowHeight*0.40) + 'px';
  var itemProRec1 = document.getElementById('itemProRec1');
  itemProRec1.style.height = (bodyWidth*0.50) + 'px';
  itemProRec1.style.width = (bodyWidth*0.50) + 'px';
  var itemProRec2 = document.getElementById('itemProRec2');
  itemProRec2.style.height = (bodyWidth*0.25) + 'px';
  itemProRec2.style.width = (bodyWidth*0.50) + 'px';
  var itemProRec3 = document.getElementById('itemProRec3');
  itemProRec3.style.height = (bodyWidth*0.25) + 'px';
  itemProRec3.style.width = (bodyWidth*0.50) + 'px';
  var itemProRec4 = document.getElementById('itemProRec4');
  itemProRec4.style.height = (bodyWidth*0.25) + 'px';
  itemProRec4.style.width = (bodyWidth*0.25) + 'px';
  var itemProRec5 = document.getElementById('itemProRec5');
  itemProRec5.style.height = (bodyWidth*0.25) + 'px';
  itemProRec5.style.width = (bodyWidth*0.25) + 'px';
  var itemProRec6 = document.getElementById('itemProRec6');
  itemProRec6.style.height = (bodyWidth*0.25) + 'px';
  itemProRec6.style.width = (bodyWidth*0.25) + 'px';
  var itemProRec7 = document.getElementById('itemProRec7');
  itemProRec7.style.height = (bodyWidth*0.25) + 'px';
  itemProRec7.style.width = (bodyWidth*0.25) + 'px';
  var mLeft = document.getElementById('contacto').getBoundingClientRect();
  var mRight = document.getElementById('logoMenu').getBoundingClientRect();
  var titlePro = document.getElementById('titleProRec');
  titlePro.style.right = (bodyWidth - mLeft.right) + 'px';
  var titleClientes = document.getElementById('titleClientes');
  titleClientes.style.right = (bodyWidth - mLeft.right) + 'px';
  var titleContacto = document.getElementById('titleContacto');
  titleContacto.style.left = (mRight.left) + 'px';
}

function initialFunProyectos() {
  var bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;
  var contMain = document.getElementsByClassName('grow')[0];
  contMain.style.height = (windowHeight - 1) + 'px';
  var bannerTop = document.getElementsByClassName('bannerTop')[0];
  bannerTop.style.height = (windowHeight*0.60) + 'px';
  var retoProyectos = document.getElementsByClassName('retoProyectos')[0];
  retoProyectos.style.height = (windowHeight*0.40) + 'px';
  var imgRetoProyectos = document.getElementById('imgReto');
  imgRetoProyectos.style.width = ((windowWidth - 1024)/2) + 1024 + 'px';
  var contRetoProyectos = document.getElementsByClassName('contRetoProyectos')[0];
  contRetoProyectos.style.width = ((windowWidth - 1041)/2) + 1024 + 'px';
  var otrosProyectos = document.getElementsByClassName('otrosProyectosPro')[0];
  var otrosProyectosDiv = otrosProyectos.getElementsByTagName('div');
  for (var i = 0; i < otrosProyectosDiv.length; i++) {
    otrosProyectosDiv[i].style.width = ((windowWidth-17)/4) + 'px';
    otrosProyectosDiv[i].style.height = ((windowWidth-17)/4) + 'px';
  }
}

function initialFunProyectos2 () {
  var bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;
  var contMain = document.getElementsByClassName('grow')[0];
  contMain.style.height = (windowHeight - 1) + 'px';
  var contTituloProyectos = document.getElementsByClassName('contTituloProyectos')[0];
  contTituloProyectos.style.width = ((windowWidth - 1041)/2) + 1024 + 'px';
  var itemProyectos = document.getElementsByClassName('itemProyectos');
  for (var i = 0; i < itemProyectos.length; i++) {
    itemProyectos[i].style.width = ((windowWidth-17)/3) + 'px';
    itemProyectos[i].style.height = ((windowWidth-17)/3) + 'px';
  }
}

function initialFunProyectos3 () {
  var bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;
  var contMain = document.getElementsByClassName('grow')[0];
  contMain.style.height = (windowHeight - 1) + 'px';
  var contTituloNosotros = document.getElementsByClassName('contTituloNosotros')[0];
  contTituloNosotros.style.width = ((windowWidth - 1041)/2) + 1024 + 'px';
  var itemNosotros = document.getElementsByClassName('itemNosotros');
  for (var i = 0; i < itemNosotros.length; i++) {
    itemNosotros[i].style.width = ((windowWidth-17)/3) + 'px';
    itemNosotros[i].style.height = ((windowWidth-17)/3) + 'px';
  }
}

function filtrar(tipo) {
  var campoFiltro = document.getElementById('filtroElegido');
  campoFiltro.innerHTML = tipo;
  var itemsProyectos = document.getElementsByClassName('itemsProyectos')[0];
  var web = itemsProyectos.getElementsByClassName('web');
  var apps = itemsProyectos.getElementsByClassName('apps');
  if (tipo == "web") {
    for (var i = 0; i < apps.length; i++) {
      apps[i].style.display = 'none';
    }
  }
  if (tipo == "apps") {
    for (var i = 0; i < web.length; i++) {
      web[i].style.display = 'none';
    }
  }
}

function mostrarCategorias() {
  var menu = document.getElementById('categoriasProyectos');
  if (menu.style.display == 'block') {
    menu.style.opacity = '0';
    setTimeout(function(){
      menu.style.display = 'none'
    }, 1000)
  }
  else {
    menu.style.display = 'block';
    setTimeout(function(){
      menu.style.opacity = '1';
    }, 100)
  }
}
