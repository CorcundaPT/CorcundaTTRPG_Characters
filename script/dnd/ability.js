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

    // Funcion to calculate skill proficiency
    function proficiencyCheck(skill) {
        var proficiency = 2;
        if ( document.getElementById(skill).innerHTML === '0' ) {var proficiencyValue = 0 * proficiency};
        if ( document.getElementById(skill).innerHTML === '1' ) {var proficiencyValue = 1 * proficiency};
        if ( document.getElementById(skill).innerHTML === '2' ) {var proficiencyValue = 2 * proficiency};

        return proficiencyValue
    }

    // Str Skills calculate
    var athletics = strMod + proficiencyCheck('abilityAthletics');
    // Dex Skills calculate
    var acrobatics = dexMod + proficiencyCheck('abilityAcrobatics');
    var sleightOfHands = dexMod + proficiencyCheck('abilitySleightOfHands');
    var stealth = dexMod + proficiencyCheck('abilityStealth');
    // Int Skills calculate
    var arcana = intMod + proficiencyCheck('abilityArcana');
    var history = intMod + proficiencyCheck('abilityHistory');
    var investigation = intMod + proficiencyCheck('abilityInvestigation');
    var nature = intMod + proficiencyCheck('abilityNature');
    var religion = intMod + proficiencyCheck('abilityReligion');
    // Wis Skills calculate
    var animalHandling = wisMod + proficiencyCheck('abilityAnimalHandling');
    var insight = wisMod + proficiencyCheck('abilityInsight');
    var medicine = wisMod + proficiencyCheck('abilityMedicine');
    var perception = wisMod + proficiencyCheck('abilityPerception');
    var survival = wisMod + proficiencyCheck('abilitySurvival');
    // Cha Skills calculate
    var deception = chaMod + proficiencyCheck('abilityDeception');
    var intimidation = chaMod + proficiencyCheck('abilityIntimidation');
    var performance = chaMod + proficiencyCheck('abilityPerformance');
    var persuasion = chaMod + proficiencyCheck('abilityPersuasion');

    // Str Skills output
    document.getElementById('abilityAthletics').innerHTML = '[' + athletics + ']';
    // Dex Skills output
    document.getElementById('abilityAcrobatics').innerHTML = '[' + acrobatics + ']';
    document.getElementById('abilitySleightOfHands').innerHTML = '[' + sleightOfHands + ']';
    document.getElementById('abilityStealth').innerHTML = '[' + stealth + ']';
    // Int Skills output
    document.getElementById('abilityArcana').innerHTML = '[' + arcana + ']';
    document.getElementById('abilityHistory').innerHTML = '[' + history + ']';
    document.getElementById('abilityInvestigation').innerHTML = '[' + investigation + ']';
    document.getElementById('abilityNature').innerHTML = '[' + nature + ']';
    document.getElementById('abilityReligion').innerHTML = '[' + religion + ']';
    // Wis Skills output
    document.getElementById('abilityAnimalHandling').innerHTML = '[' + animalHandling + ']';
    document.getElementById('abilityInsight').innerHTML = '[' + insight + ']';
    document.getElementById('abilityMedicine').innerHTML = '[' + medicine + ']';
    document.getElementById('abilityPerception').innerHTML = '[' + perception + ']';
    document.getElementById('abilitySurvival').innerHTML = '[' + survival + ']';
    // Cha Skills output
    document.getElementById('abilityDeception').innerHTML = '[' + deception + ']';
    document.getElementById('abilityIntimidation').innerHTML = '[' + intimidation + ']';
    document.getElementById('abilityPerformance').innerHTML = '[' + performance + ']';
    document.getElementById('abilityPersuasion').innerHTML = '[' + persuasion + ']';

    // ACABAR DE CALCULAR O MODIFIERS E COLOCA-LOS NOS SITIOS CORRETOS JUNTAMENTE COM O SCORE
}