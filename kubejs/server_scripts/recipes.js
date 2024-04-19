/*
    Recipes
*/

ServerEvents.recipes(event => {
    // Adding recipes //

    // Removing recipes //
    // From The Shadows
    event.remove({output: 'fromtheshadows:thirst_for_blood'})

    // Alex's Mobs
    event.remove({ output: 'alexsmobs:hemolymph_blaster'})
    event.remove({ output: 'alexsmobs:blood_sprayer'})

    // Modifing recipes //

    console.log('Heya, recipes!')
})