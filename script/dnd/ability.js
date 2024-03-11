function modCalculate(level, str, dex, con, int, wis, cha) {
    // Calculate Proficiency
    var proficiency = Math.ceil(level/4) + 1;

    // Output proficiency
    document.getElementById('proficiency').innerHTML = '+' + proficiency;

    // Calculate abiltiy modifier
    var strMod = Math.floor(( str - 10 ) / 2);
    var dexMod = Math.floor(( dex - 10 ) / 2);
    var conMod = Math.floor(( con - 10 ) / 2);
    var intMod = Math.floor(( int - 10 ) / 2);
    var wisMod = Math.floor(( wis - 10 ) / 2);
    var chaMod = Math.floor(( cha - 10 ) / 2);

    // Output proficiency
    if (dexMod > 0) { var initiative = '+' + dexMod; } else { var initiative = dexMod};
    document.getElementById('initiative').innerHTML = initiative;

    // Output abiltiy score and ability modifier
    if (dexMod > 0) { var abilityStr = '+' + strMod; } else { var abilityStr = strMod};
    document.getElementById('abilityStr').innerHTML = str + ' [' + abilityStr + ']';
    if (dexMod > 0) { var abilityDex = '+' + dexMod; } else { var abilityDex = dexMod};
    document.getElementById('abilityDex').innerHTML = dex + ' [' + abilityDex + ']';
    if (dexMod > 0) { var abilityCon = '+' + conMod; } else { var abilityCon = conMod};
    document.getElementById('abilityCon').innerHTML = con + ' [' + abilityCon + ']';
    if (dexMod > 0) { var abilityInt = '+' + intMod; } else { var abilityInt = intMod};
    document.getElementById('abilityInt').innerHTML = int + ' [' + abilityInt + ']';
    if (dexMod > 0) { var abilityWis = '+' + wisMod; } else { var abilityWis = wisMod};
    document.getElementById('abilityWis').innerHTML = wis + ' [' + abilityWis + ']';
    if (dexMod > 0) { var abilityCha = '+' + chaMod; } else { var abilityCha = chaMod};
    document.getElementById('abilityCha').innerHTML = cha + ' [' + abilityCha + ']';

    // Funcion to calculate skill proficiency
    function proficiencyCheck(skill) {
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
    if (dexMod > 0) { var abilityAthletics = '+' + athletics; } else { var abilityAthletics = athletics};
    document.getElementById('abilityAthletics').innerHTML = '[' + abilityAthletics + ']';
    // Dex Skills output
    if (dexMod > 0) { var abilityAcrobatics = '+' + acrobatics; } else { var abilityAcrobatics = acrobatics};
    document.getElementById('abilityAcrobatics').innerHTML = '[' + abilityAcrobatics + ']';
    if (dexMod > 0) { var abilitySleightOfHands = '+' + sleightOfHands; } else { var abilitySleightOfHands = sleightOfHands};
    document.getElementById('abilitySleightOfHands').innerHTML = '[' + abilitySleightOfHands + ']';
    if (dexMod > 0) { var abilityStealth = '+' + stealth; } else { var abilityStealth = stealth};
    document.getElementById('abilityStealth').innerHTML = '[' + abilityStealth + ']';
    // Int Skills output
    if (dexMod > 0) { var abilityArcana = '+' + arcana; } else { var abilityArcana = arcana};
    document.getElementById('abilityArcana').innerHTML = '[' + abilityArcana + ']';
    if (dexMod > 0) { var abilityHistory = '+' + history; } else { var abilityHistory = history};
    document.getElementById('abilityHistory').innerHTML = '[' + abilityHistory + ']';
    if (dexMod > 0) { var abilityInvestigation = '+' + investigation; } else { var abilityInvestigation = investigation};
    document.getElementById('abilityInvestigation').innerHTML = '[' + abilityInvestigation + ']';
    if (dexMod > 0) { var abilityNature = '+' + nature; } else { var abilityNature = nature};
    document.getElementById('abilityNature').innerHTML = '[' + abilityNature + ']';
    if (dexMod > 0) { var abilityReligion = '+' + religion; } else { var abilityReligion = religion};
    document.getElementById('abilityReligion').innerHTML = '[' + abilityReligion + ']';
    // Wis Skills output
    if (dexMod > 0) { var abilityAnimalHandling = '+' + animalHandling; } else { var abilityAnimalHandling = animalHandling};
    document.getElementById('abilityAnimalHandling').innerHTML = '[' + abilityAnimalHandling + ']';
    if (dexMod > 0) { var abilityInsight = '+' + insight; } else { var abilityInsight = insight};
    document.getElementById('abilityInsight').innerHTML = '[' + abilityInsight + ']';
    if (dexMod > 0) { var abilityMedicine = '+' + medicine; } else { var abilityMedicine = medicine};
    document.getElementById('abilityMedicine').innerHTML = '[' + abilityMedicine + ']';
    if (dexMod > 0) { var abilityPerception = '+' + perception; } else { var abilityPerception = perception};
    document.getElementById('abilityPerception').innerHTML = '[' + abilityPerception + ']';
    if (dexMod > 0) { var abilitySurvival = '+' + survival; } else { var abilitySurvival = survival};
    document.getElementById('abilitySurvival').innerHTML = '[' + abilitySurvival + ']';
    // Cha Skills output
    if (dexMod > 0) { var abilityDeception = '+' + deception; } else { var abilityDeception = deception};
    document.getElementById('abilityDeception').innerHTML = '[' + abilityDeception + ']';
    if (dexMod > 0) { var abilityIntimidation = '+' + intimidation; } else { var abilityIntimidation = intimidation};
    document.getElementById('abilityIntimidation').innerHTML = '[' + abilityIntimidation + ']';
    if (dexMod > 0) { var abilityPerformance = '+' + performance; } else { var abilityPerformance = performance};
    document.getElementById('abilityPerformance').innerHTML = '[' + abilityPerformance + ']';
    if (dexMod > 0) { var abilityPersuasion = '+' + persuasion; } else { var abilityPersuasion = persuasion};
    document.getElementById('abilityPersuasion').innerHTML = '[' + abilityPersuasion + ']';

    // ACABAR DE CALCULAR O MODIFIERS E COLOCA-LOS NOS SITIOS CORRETOS JUNTAMENTE COM O SCORE
}