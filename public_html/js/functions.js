/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


            function allowDrop(ev){
                ev.preventDefault();
            }

            function drag(ev){
                ev.dataTransfer.setData("Text",ev.target.id);
            }

            function drop(ev){
                var data=ev.dataTransfer.getData("Text");
                ev.target.appendChild(document.getElementById(data));
                ev.preventDefault();
            }
            
            function pontuacaoGame(idDivLixeira,lixoID){
                console.log("puntuacaoGame => divLixeira=>"+idDivLixeira+" lixoID=>"+lixoID);
                if(idDivLixeira===0){
                    document.getElementById('pontuacao').innerHTML="0";
                }else if(idDivLixeira>0){
                    console.log("js=>2");
                    if(respostaCorreta(idDivLixeira,lixoID)){
                        console.log("js=>3 pontos=> "+pontuacao);
                        pontuacao += pontValor;
                        console.log("js=>4 pontos=> "+pontuacao);
                        document.getElementById('pontuacao').innerHTML=pontuacao;
                        imgRespCount = 0;
                        imgResp=self.setInterval(
                            function(){
                                console.log("js=>6");
                                exibeRespostaIMG(idDivLixeira,1)
                            },
                            1000
                        );
                        
                    }else{
                        imgRespCount = 0;
                        imgResp=self.setInterval(
                            function(){
                                console.log("js=>13");
                                exibeRespostaIMG(idDivLixeira,0)
                            },
                            1000
                        );
                        
                    }
                }
            }

            function exibeRespostaIMG(idDivLixeira,respCorreta){
                                console.log("js=>7");
                
                if((respCorreta==1)       &&(imgRespCount==0)){
                                console.log("js=>8");
                    document.getElementById('imgCorretoDiv'+idDivLixeira).style.display='block';
                    
                }else if((respCorreta==1) &&(imgRespCount==1)){
                                console.log("js=>9");
                    document.getElementById('imgCorretoDiv'+idDivLixeira).style.display='none';
                    window.clearInterval(imgResp);
                    
                }else if((respCorreta==0) &&(imgRespCount==0)){
                                console.log("js=>10");
                    document.getElementById('imgErradaDiv'+idDivLixeira).style.display='block';
                    
                }else if((respCorreta==0) &&(imgRespCount==1)){
                                console.log("js=>11");
                    document.getElementById('imgErradaDiv'+idDivLixeira).style.display='none';
                    window.clearInterval(imgResp);
                }
                                console.log("js=>12");
                
                imgRespCount += 1;
            
            }

            function respostaCorreta(idDivLixeira,lixoID){
                if(lixoCorreto[lixoID]==idDivLixeira){
                    return true;
                }else{
                    return false;
                }
                
            }
            
            function getNextRandom(idDivLixeira){
                console.log("js=>0 pontos=> "+pontuacao);
                var maxRandom   = lixoID.length,
                    randomCount = lixoIDUsado.length,
                    idArray     = getRandom(maxRandom);
//                if(randomCount <= maxRandom){
                if(randomCount <= 5){
                    if(lixoIDUsado[idArray]!=="indefined"){
                        idArray   = getRandom(maxRandom);
                    }
                    console.log("js=>1 pontos=> "+pontuacao);
                    pontuacaoGame(idDivLixeira,idArray);
                    console.log("js=>5");
                    setLixoUsado(idArray);
                    document.getElementById('lixoID'+randomCount).innerHTML=lixoID[idArray];
                }else{
                    resetLixoUsado();
                }
            }
            
            function getRandom(maxRandom){
                return (Math.floor(Math.random() * maxRandom));
            }
            
            function setLixoUsado(idLixo){
                lixoIDUsado.push(idLixo);
            }
            
            function resetLixoUsado(){ 
                var msg = ""
                document.getElementById('telaGame').style.display='none';
                document.getElementById('fimGame').style.display='block';
                
                if(pontuacao >= 30){
                    msg = "parabêns "+nickname+", sua pontuação foi de "+pontuacao;
                }else{
                    msg = "xiiii... tente novamente! seus pontos foram =>"+pontuacao;
                }
                document.getElementById('span_pontos').innerHtml=msg;
//                shake(2);
//                reseta variaveis???
                lixoIDUsado = new Array();
                lixoID      = new Array();
            }

            function shake(n){
                if(window.moveBy){
                    console.log("js=>treme-treme");
                    for (i = 10; i > 0; i--){
                        for (j = n; j > 0; j--){
                    console.log("js=>1treme-treme");
                            window.moveBy(0,i);
                    console.log("js=>2treme-treme");
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                            window.moveBy(0,i);
                            window.moveBy(i,0);
                            window.moveBy(0,-i);
                            window.moveBy(-i,0);
                        }
                    }
               }
            }

            function novoGame(){
                document.getElementById('aberturaGame').style.display='none';
                
                if(confirm("Deseja ver o tutorial?")){
                    document.getElementById('tutorialGame').style.display='block';
                }else{
                    document.getElementById('telaGame').style.display='block';
                }
                nickname = document.getElementById('nickname').value;
            }

            function novoGame1(){
                document.getElementById('msgGame1').style.display='block';
                document.getElementById('novoGame').style.display='none';
                document.getElementById('aberturaGame').style.display='none';
            }

            function novoGame2(){
                document.getElementById('msgGame1').style.display='none';
                document.getElementById('aberturaGame').style.display='none';
                document.getElementById('tutorialGame').style.display='block';
            }

            function novoGame3(){
                document.getElementById('msgGame1').style.display='none';
                document.getElementById('aberturaGame').style.display='none';
                document.getElementById('telaGame').style.display='block';
            }

            function inicializarNovoGame(){
                document.getElementById('tutorialGame').style.display='none';
                document.getElementById('telaGame').style.display='block';
                
            }

            window.onload = function(){
                getNextRandom(0);
                pontuacaoGame(0,0);
            }
