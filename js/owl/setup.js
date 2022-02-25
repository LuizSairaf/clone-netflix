$('.owl-carousel').owlCarousel({
    loop:true,//PERMITE A MOVIMENTAÇÃO DO CARROSEL EM LOOP QUANDO SEU VALOR FOR TRUE.
              //CASO SEU VALOR SEJA FALSO(FALSE), A MOVIMENTAÇÃO SE TORNA FINITA AO 
              //ARRASTAR PARA ESQUEDA OU DIREITA.  

    margin:10,//MARGEM ENTRE UMA CAIXA E OUTRA DO CARROSEL

    nav:true,//SETAS DE NAVEGAÇÃO QUANDO VALOR VERDADEIRO(TRUE)
             //CASO CONTRÁRIO, NÃO APARECERÁ AS SETAS
             
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})