window.onload = function() {
    setInterval(function () {
        var target_date = parseInt(new Date("06/11/2024 23:59:59").getTime());
        var dias, horas, minutos, segundos;

        var current_date = parseInt(new Date().getTime());
        var segundos_f = (target_date - current_date) / 1000;

        var distance = target_date - current_date;

        dias = parseInt(segundos_f / 86400);

        document.getElementById('contagemDias').innerHTML = dias;
        document.getElementById('contagemDiasMobile').innerHTML = dias;

    }, 1000);

    function zoomHover()  {
        const btnLinks = document.querySelectorAll(".btnLink");
        for(let btnLink of btnLinks) {
            btnLink.addEventListener("mouseover", function(){
                btnLink.style.fontSize = "18px";
            });
            btnLink.addEventListener("mouseout", function(){
                btnLink.style.fontSize = "16px";
            });
        } ;
    };

    zoomHover();

    // tira click de a inativo
    const cliques = document.querySelectorAll("a");
    for (let clique of cliques) {
        if (clique.getAttribute("href") == "#") {
            clique.addEventListener("click", function(e){
                e.preventDefault();
            });
        };
    };
    // tira click de a inativo
};