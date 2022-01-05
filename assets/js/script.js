function mostrar(e) {
    if (e.classList.contains("fa-sun")) { //se tem lua
        e.classList.remove("fa-sun"); //remove classe icone lua
        e.classList.add("fa-cloud-moon"); //coloca classedo sol
        e.style.color = "rgb(10, 10, 10)";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';
        document.querySelector('#clock1').style.color = 'rgb(99, 99, 99)';
        document.querySelector('#clock').style.color = 'rgb(99, 99, 99)';
        document.querySelector('#copyright').style.color = 'rgb(99, 99, 99)';


        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(100%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(100%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(100%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(100%)';
        }

    } else { //senão
        e.classList.remove("fa-cloud-moon"); //remove classe icone lua
        e.classList.add("fa-sun"); //coloca classedo sol
        e.style.color = "#FFFF00";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';
        document.querySelector('#clock1').style.color = '#fff';
        document.querySelector('#clock').style.color = '#fff';
        document.querySelector('#copyright').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }

}
