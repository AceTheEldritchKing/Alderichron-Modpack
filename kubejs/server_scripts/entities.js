/*
    Entities
*/

// Ender Dragon spellcasting
EntityJSEvents.addGoalSelectors('minecraft:ender_dragon', event => {
    // Spells
    let atk_spells = [Spell.of('irons_spellbooks:black_hole'), Spell.of('irons_spellbooks:starfall'), Spell.of('irons_spellbooks:magic_missile')]
    let def_spells = [Spell.of('irons_spellbooks:evasion')]
    let mov_spells = []
    let sup_spells = [Spell.of('irons_spellbooks:raise_dead'), Spell.of('irons_spellbooks:charge')]

    event.arbitraryGoal(0, (e) => {
        return new WizardAttackGoal(e, 1, 60)
        .setSpells(
            atk_spells, // Attack
            def_spells, // Defense
            mov_spells, // Movement
            sup_spells // Support
        )
    })
})

/*
const $MobsLevelingEvents = Java.loadClass('daripher.autoleveling.event.MobsLevelingEvents');

EntityJSEvents.addGoalSelectors('minecraft:creeper', e => {
    //random chance to be spellcasting + min level requirement
    if (Math.random() > 0.5 && $MobsLevelingEvents.getLevel(e.entity) > 10) {
        let atk_spells = [Spell.of('irons_spellbooks:lob_creeper'), Spell.of('irons_spellbooks:chain_creeper')]
        let def_spells = []
        let mov_spells = []
        let sup_spells = []

        //if the creeper is charged, give it electrical spells
        if (entity.nbt.getInt("powered") == 1) {
            atk_spells = [Spell.of('irons_spellbooks:ascension'), Spell.of('irons_spellbooks:electrocute'), Spell.of('irons_spellbooks:shockwave'), Spell.of('irons_spellbooks:lightning_lance'), Spell.of('irons_spellbooks:thunderstorm'), Spell.of('irons_spellbooks:ball_lightning')]
            sup_spells.push(Spell.of('irons_spellbooks:charge'))
        }

        e.arbitraryGoal(0, (entity) => {
            return new WizardAttackGoal(entity, 1, 60).setSpells(
                atk_spells, // Attack
                def_spells, // Defense
                mov_spells, // Movement
                sup_spells // Support
            ) // Parameters are the entity, movement speed modifier, and cast interval
        })
    }
})*/