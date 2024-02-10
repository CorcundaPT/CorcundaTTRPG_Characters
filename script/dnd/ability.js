function modCalculate(str, dex, con, int, wis, cha) {
    // Calculate abiltiy modifier
    var strMod = Math.floor(( str - 10 ) / 2);
    var dexMod = Math.floor(( dex - 10 ) / 2);
    var conMod = Math.floor(( con - 10 ) / 2);
    var intMod = Math.floor(( int - 10 ) / 2);
    var wisMod = Math.floor(( wis - 10 ) / 2);
    var chaMod = Math.floor(( cha - 10 ) / 2);

    // Output abiltiy score and ability modifier
    document.getElementById('abilityStr').innerHTML = str + ' [' + strMod + ']';
    document.getElementById('abilityDex').innerHTML = dex + ' [' + dexMod + ']';
    document.getElementById('abilityCon').innerHTML = con + ' [' + conMod + ']';
    document.getElementById('abilityInt').innerHTML = int + ' [' + intMod + ']';
    document.getElementById('abilityWis').innerHTML = wis + ' [' + wisMod + ']';
    document.getElementById('abilityCha').innerHTML = cha + ' [' + chaMod + ']';

    // ACABAR DE CALCULAR O MODIFIERS E COLOCA-LOS NOS SITIOS CORRETOS JUNTAMENTE COM O SCORE
}