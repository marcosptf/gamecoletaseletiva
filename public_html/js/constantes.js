/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

            var lixoIDUsado = new Array(),
                lixoID      = new Array(),
                lixoCorreto = new Array(),
                nickname    = "",
                imgResp     = 0,
                imgRespCount= 0,
                pontuacao   = 0,
                lixoIDAtual = 0,
                pontValor   = 10;
            
            lixoCorreto[0]  = 5;
            lixoCorreto[1]  = 4;
            lixoCorreto[2]  = 3;
            lixoCorreto[3]  = 1;
            lixoCorreto[4]  = 3;
            lixoCorreto[5]  = 4;
            lixoCorreto[6]  = 4;
            lixoCorreto[7]  = 3;
            lixoCorreto[8]  = 4;
            lixoCorreto[9]  = 5;
            lixoCorreto[10] = 5;
            lixoCorreto[11] = 5;
            lixoCorreto[12] = 3;
            lixoCorreto[13] = 3;
            lixoCorreto[14] = 2;
            lixoCorreto[15] = 4;
            lixoCorreto[16] = 1;
            lixoCorreto[17] = 5;
            lixoCorreto[18] = 5;
            lixoCorreto[19] = 4;
            lixoCorreto[20] = 1;
            lixoCorreto[21] = 6;
            lixoCorreto[22] = 6;
            lixoCorreto[23] = 6;
            lixoCorreto[24] = 6;
            lixoCorreto[25] = 6;
            lixoCorreto[26] = 6;
            lixoCorreto[27] = 6;
            lixoCorreto[28] = 6;
            lixoCorreto[29] = 6;
            lixoCorreto[30] = 6;
            lixoCorreto[31] = 6;
            lixoCorreto[32] = 6;
            lixoCorreto[33] = 6;
            lixoCorreto[34] = 6;
            lixoCorreto[35] = 6;
            lixoCorreto[36] = 6;
            lixoCorreto[37] = 6;
            lixoCorreto[38] = 6;
            lixoCorreto[39] = 6;
            lixoCorreto[40] = 6;
            
            lixoID[0]       = "casca de Banana";
            lixoID[1]       = "isqueiro usado";
            lixoID[2]       = "folha de papel";
            lixoID[3]       = "pilhas de radio";
            lixoID[4]       = "papel aluminio";
            lixoID[5]       = "caneta usada";
            lixoID[6]       = "cartão de crédito vencido";
            lixoID[7]       = "caixa de pasta de dente";
            lixoID[8]       = "escova de dente usada";
            lixoID[9]       = "palito de dente";
            lixoID[10]      = "curativo";
            lixoID[11]      = "chiclete usado";
            lixoID[12]      = "bituca de cigarro";
            lixoID[13]      = "papel de bala";
            lixoID[14]      = "garafa de cachaça vazia";
            lixoID[15]      = "pacote de salgadinho";
            lixoID[16]      = "ferro de passar usado";
            lixoID[17]      = "resto de alimentos";
            lixoID[18]      = "roupas velhas";
            lixoID[19]      = "monitores CRT";
            lixoID[20]      = "bicicleta velha";
/*            lixoID[21]      = "chiclete usado";
            lixoID[22]      = "bituca de cigarro";
            lixoID[23]      = "pacote de salgadinho";
            lixoID[24]      = "garafa de cachaça vazia";
            lixoID[25]      = "pacote de salgadinho";
            lixoID[26]      = "pacote de salgadinho1";
            lixoID[27]      = "pacote de salgadinho2";
            lixoID[28]      = "pacote de salgadinho3";
            lixoID[29]      = "pacote de salgadinho4";
            lixoID[30]      = "pacote de salgadinho5";
            lixoID[30]      = "curativo";
            lixoID[31]      = "chiclete usado";
            lixoID[32]      = "bituca de cigarro";
            lixoID[33]      = "papel de bala";
            lixoID[34]      = "garafa de cachaça vazia";
            lixoID[35]      = "pacote de salgadinho";
            lixoID[36]      = "pacote de salgadinho1";
            lixoID[37]      = "pacote de salgadinho2";
            lixoID[38]      = "pacote de salgadinho3";
            lixoID[39]      = "pacote de salgadinho4";
            lixoID[40]      = "pacote de salgadinho5";
*/
