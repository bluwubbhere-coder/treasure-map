namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const yapper = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mira,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c f f . 
        . f f c c c c c c c c f f . 
        . f f c c c c c c f f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . . e f f f f f f f f 4 e . 
        . . 4 f 3 3 3 3 3 e d d 4 . 
        . . e f f f f f f e e 4 . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f f c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f f c c c c c c f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f e . . 
        . 4 d d e 3 3 3 3 3 f 4 . . 
        . . 4 e e f f f f f f e . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.yapper, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.yapper, effects.spray, 1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 1000)
})
function startGame () {
    story.startCutscene(function () {
        screenTransitions.startTransition(screenTransitions.Dissolve, 1500, false, false)
        scene.setBackgroundImage(img`
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff
            ccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccfffcccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccffcccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeecccccccccccccffffffffffc
            ffffffccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcceeeeeeeeeccccfceecebeeecccccccccccfffffffffff
            ccccffffcccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeccccceebbbbbeeeeeeeeeeeeeeebeeecccccccccccffffffffcc
            cccffffffffffffffccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeefebbbbbbbbeeeeeeeeeeeeeebeeeeeccccccccccccccccccf
            ffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceccccccebbbeeeeeebbeeebbbbbebbbbbbbbbbbbbeeebebbeeeeebeeeeccccccccccccccccccc
            fffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbebeeeeeeeeeeeccccccccccccccccccc
            fffffffcccccccccecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbeeeeeeeeeeeeeccccccccccccccccccc
            fffffffccccccccceccccccccccccccccccccccccccccccceeeeeeeeeecccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeceeeeeeeeeeeccccccccccccccccccc
            fffffffcccecceccccccccccccccccccfcccfcccceeeeeebbbbbbebbbbbeccccccccebeecceebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeecceeebbeeeeeccccccccccccccccccc
            fffffffcceecceccccccccccccffcecccceeeeeeeeebbbbbbbbbbbbbbbbbbeecccebbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbeecceccceeeeeeccccccccccccccccccc
            cffffffcceeccecccffceeccceeeeebeebbbbeebbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeccccceccccbbbeeccccccccccffffff
            cffffffcceeccecceeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbecccccccccbcccccbbbccccccccccccccc
            fffffffcceeccecceeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbddbdbbddbbbddddddbbbbbbbbbbbbbddddbbbbbbbbbdbbbbbbbbbeccccccebeeebbbbbcccbbeccccccccccccc
            fffffffcceeceecceeeeeeeebbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbddddddbddddddddddddbddbbbdddddddddddbbbbbbbbbbbbbbbbbbecccceebbbbebbbbbbbbccbbbcccccccccccf
            fffffffcceeceeeceeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbdbddddddddddddddddddddddddddbbbbddddddddddbddddbbbbbbbbbbbbccceeebbbbbebbbbddddbbcbbbccccccccccc
            ffcffffcccccceeceebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbddddddddddddddddddddddddddbdbbbbbdddddddddbdbbbddbbbbbbbbbbcccceebbeebbeebbbbddbddbcbbecccccccccc
            fffffffcccccceecebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbddddddddddddddddddddddddbbddddddddddddddbbdddddbbbbbbbbeccceebbbeccbeebbddddbbddbbbbcccccccfff
            fffffffccecceeecebbbbbbbbbbbbbcbbbbbbbbbbbbbbbbddbddddddbbbbbbddddddddddddefbddddddcbdddbbddbbbbbbbddddddddddddddddddbbbcccebbbbbecccbeebdddbdddddbbbcccccfffff
            ffffffceeeeeeeecebbbbbbbbeffcecbbbbbbbbbbeebbdddddddddddbbddddddbbdddddddbebbdecfcecdddbbbdbbbccccbdddddddddddddddddbbbecccbbbbbebecfbeebddbbdddddbbbbccccccccc
            ffffffceeeeeeeecbbbbbbbbbbbcbbcbbbbbbbbbbebdddddddddddddddbdddddbbdddddddebdddddcddcddddbdbbbbcdddbedddddddddddddddddbbccccbbbbbbbeccceebbbbdddddddbbbcffffffff
            ffffffceeeeeeeeebbbbbbbbbbbcbbfcebbccbbbbebddbccbbccddbbbdbcebdbedddbeccefceddddcddfcedbccbbbbcdddbbebbebccbdddddddddbbcccebbdbbbbbbcfcecbbbdddddddbbbecffffccc
            cfffffceeeeeeeeebbbbbbbbbbbfbbfbebceecdddcdddfeceeecdceefbcbbfdebdddcbdeeeedddddcddfbcbceecdbbcccbbeeeeefecedddddddddbbcccebbdbbbbbbbcfcebcbddddddbbbbeffffffff
            ffffffceeeeeeeeebbbbbbbbbbbcbbcbbefeebdddcdddfeedcdcbcddccbddebcdddbcdbcbbedddddcdbcdbefeebdbbcbddbebccbfccddddddddddbbcccbbbbdbbbbbbecfeebbbbbbdddbbbeffffffff
            cfffffceeeeeeeeebbbbbbbbbbbcbbcbbeecccdddcbbdcccccbcbcbecbccbdfcddddcccbdbcdddddcdbcdbeeceebbbcdddebdccdccccdddddddddbccccbbdbddbbbeccfebecccbbddddbbbeccccffff
            cfffffeeeeeeeeeebbbbbbbbbbbbbbbbbbdbbddddeeccdbbdbcccbebbddbddcdddddddddddedddddbbbbdbbdbebdddedddebdbbddbbddddddddddbccccbbbbbbeeebbbcfccbbdddddddbbbeccccccff
            ffffffeeeeeeeeeebbbbbbbbbdbbdddddddddddddddddddddddbbddddddddcbdddddddddddddddddddddddddddbddddddddddddddddddddddddddbbcccebbbbdbbbbbcccffcbdddddddbbbccccfffcf
            ffffffeeeeeeeeeebbbbbbbbbddddddddddddddddddddddddbdcbdddddddbcdddddddddddddddddddddddddddddbbddddddddddddddddddddddddbbcccebbbbbbbbbbcbeccfcbddddddbeecccccccff
            ffffffeeeeeeeeeebbbbbbbbbddddddddddddddddddddddddccbdddddddddbdddddddddddddddddddddddddddbbbdddddddddddddddddddddddddbbccccbbdbbbbbbebbbccfcbbdddddbeeccccccccc
            ffffffeeeeeeeeebbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddbccccebbbbdbbbebbbcbcfbdbbbddbecfffffffff
            ffffffeeeeeeeeebbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbcccebbdbbbbbbbbbebbccbbbddbeeeecccccccc
            ffffffeeeeeeeeebbbbbbdddddddddddddddddddddddddddddddccccbddddddddddddbcdddddddddddddddddddddddddddddddddddddddddddddddbbccccebbbbbebbbbbbbbccfcbddbeeccccffffff
            ffffffeeeeeeeeebbbbbddddddddddddddddddddddddddddddddcdddddddddddddddbbcdbddddddddddddddddddddddddddddddddddddddddddddddbbccccbbbbbbebbbbbbbbccbdbbeeccccccccccc
            ffffffeeeeeeeeebbbbdddddddddddddddddddddddddddddddddcddddddddddddddbebcbbdbbdddbdddddddddddddddddddddddddddddddddddddddbbccccebbbbbbbbbbbbbbbbbbbeecccccccccccc
            ffffffeeeeeeeeebbbddddddddddddddddddddddddddddddddddfebdbcccdcccccddebcdebcccdcccdddddddddddddddddddddddddddddddddddddddbbccccebebbbbbbbbbbbbbbbeecccccccfffffc
            fffffceeeeeeeeebbbbbddddddddddddddddddddddddddddddddfbbbcbdcdcdcccbbcbcbccfccbccbddddddddddddddddddddddddddddddddddddddddbbccccebebbbbbbbebbbbeeecffffffcffffff
            fffffceeeeeeeeebbdbbddddddddddddddddddddddddddddddddcdddcddcdcdeebcbcbcbcbcdbbbbceddddddddddddddddddddddddddddddddddddddddbbbcccceeeebbbbebeeeeecccffffffffffff
            fffffceeeeeeeeebbdbbdddddddddddddddddddddddddddddddbedddccccdcdbbdcbbbcbbdcccbcccbddddddddddddddddddddddddddddddddddddddddddbbccccceeeeeeeeeeceeecccfffffffffff
            fffffceeeeeeeeebbbbbddddddddddddddddddddddddddddddddbddddddddddddddbdbbbdddddddbdddddddddddddddddddddddddddddddddddddddddddddbbbbcccccccccceebbeeeeecffffffffff
            fffffceeeeeeeeebdddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbeeeeeecccffffff
            fffffceeeeeeeeebbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbeeeeeecccfcfff
            fffffeeeeeeeeeebbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbeeeeeeeecccfccc
            fffffeeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbeebbeeeeeecffff
            fffffeeeeeeeeeebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbebbbeeeeeecfff
            fffffeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdbbbdbbbbbebbbbbbbeecfff
            fffffeeeeeeeeebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbebbbbbbbeeecff
            fffffeeeeeeeeebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddbbbbebbbbbbbeeeeff
            fffffeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddbbbbbbbbbbbbbbeeff
            fffffeeeeeeeeebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddbbbbbbbbbbbbbbbbeff
            fffffeeeeeeeeebbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddbbdddbbbbbbbbbbbbbbbbbeff
            fffffeeeeeeeeebbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddddbbdbbbbbbbbbbbbbbbbbbbeff
            fffffeeeeeeeeebbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbeff
            ffffceeeeeeeeebbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbeff
            ffffceeeeeeeeebbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddbbbbbbbbbbbbbbbbbbdbbbbdddddddddddddddddddddddddddddddddddddbbbbbbbebbbbbbbbbeff
            ffffceeeeeeeeebbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddbbbbbeebbbbbbbbbfff
            ffffceeeeeeeeebbbbddddddddddddddddddddddddddddddddddddddddddddddddbbddddddbdbddddbbbbbbbbbbbbbbbbbbdbbddddddddddddddddddddddddddddddddddddddbbbbbbebbbbbbbbbcff
            ffffceeeeeeeeebbbbbbddddddddddddddddddddddddddddddddddddddddddddbbbbbddbddddddddbdbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddbbbbbbeebbbbbbbbcff
            ffffceeeeeeeeebbbbbbddddddddddddddddddddddddddddddddddddddbdddddbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbdbbbdddddddddddddddddddddddddddddbbbbbbbbeecbbbbbbbbfff
            ffffceeeeeceeebbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddbbbbbbbbecbbbbbbbbfcf
            ffffeeeeeeeeeebbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddbbdbbbbbbeecbbbbbbbefff
            ffffeeeeeeeeeebbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbddbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbeecebbbbbbcfff
            ffffeeeeeeeeeebbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddbdddbbbbbbbbbbbbbbbbbddddddddddddddddddbbddbdddbbbbbbbbbbbbbeebbbbbbbcfff
            ffffeeeeeeeeebbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddbbbbbbbbbbbbbdbbddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbcfff
            ffffeeeeeeeeebbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbebbbbbbbefff
            ffffeeeeeeeeebbbbbbbbbddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbebbbbbbbefff
            ffffeeeeeeecebbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbefff
            ffffeeeeeeecebbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbfff
            ffffeeeeecccebbbbbbbddbbbdddddddddddddddddddddddddddddddddddddddbddddddbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbbbbbbbbbbfff
            ffffeeeeeeecebbbbbbbddbbbddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbdddddddddbbbbbbbbbbbbbbfff
            ffffeeeeeeeeebbbbbbddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddbbbbbbbbbdddddddddddbbbbbbbbbbbbcff
            fffceeeeeeeeebbbbdddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbdddddddddddddbbbbbbbbdddddddddddbbbbbbbbbbbbcff
            fffceeeceeeeebbbbbbdddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbddddddddddbbbbbbbbbbbbbcff
            fffceeeeeeeeebbbbbddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddbdbbddddddddddbbbbbbbbbbbbeff
            fffceeeeeeeeebbbddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbdbddddddddddddddddddddbbbbbbbdbddddddddddddddddddddbdbbbddddddddbbbbbebbbbbbbeff
            fffceeeeeeeeebbdddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddbbbbbebbbbbbbeff
            fffceeeeeeeeebbdddddddddddddddbddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbdddddddbbbbebbbbbbbbcf
            fffceeeeeeeeebdddddddddddddddddddddddddddddddddddddddddbbddbbbbbbbbbbbbbbbbbbbbbddddbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbddbbdddbbbbebbbbbbbbef
            fffceeeeeeeeebbddddddddddddddddddddddddddddddddddddddddbbddbbbdbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddbbdddbbbbebbbbbbbbef
            fffeeeeeeeeeebbdddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddbbbbbbebbbbbbbbef
            fffeeeeeeeeeebbdddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbebbbbbbbbef
            fffeeeeeeeccebbdddddddddddddddddddddddbbbdddbddddddddddddddddddddbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbebbbbbbbbbc
            fffeeeeeeeeeebbbbbddddddddddddddddddddbbbdddbdddddddddddbbbbdddddbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbef
            fffeeeeeeeeebbbbddddddddddddddddddddddddddddddbbdbbbdddddbdddddbdbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddbbdddbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbec
            fffeeeeeeeeeebbbddddddddddddddddddddddddddddbbddddbbdddddddddddbbdbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddbbddbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbec
            fffeeeeeeeeeebbbddddddddddddddddddddddddddddbbdddddbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbe
            fffeeeeeeeeeebbbdddddddddddddddddddddddddddddddddddddddbbdddddbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbe
            fffeeeeeeeeebbbbdddddddddddddddddddddddddddddddddddddddbbbddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbeebbe
            fffeeeeeeeeebbbddddddddddddddddddddddddddddddddddddddddbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbdddddbdbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbeeee
            fffeeeceeeeeeeeebdddddddddddddddddddddddddddddddddddddbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbeeeeeeeeeee
            ffceeeeeeeeeeeeeebddddddddddddddddddddddddddddddddddddbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebeeeeeeeeeeec
            ffceceeeeeeeeeeeeebdddddddddddddddddddddddddddddddddddddbbbbdddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbeebeeeeeeeeeeceebbbeec
            ffcceeeeeeeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeecebbbbbee
            ffcceeeeeeeeeeeeeeeebdddddddddddddddddddddddddddddddddddbbdbdddddddbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbeeebeeeeeecebbbbbee
            ffcceeeeeeeeeeeeeeeebddbbbdddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbeeebeeeeeeceebbbeec
            ffcbeeeeeeeeeeeeeeeeebbddbddddddddddddddddddddddddddddddddddbbddbbbbbbbbbbbbbbbbbbbdbdddddddddddddddddbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbeebbbeeeeeceebbbeec
            ffceeeeeeeecceeeeeeeebbbbbbbbbbbbbddddddddddddddddddddddbddbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbbdddbdbddbbbbbbbbbbbbbbbbbbbbbbbbbbbebbeeeeeceebbbbec
            fffeeeeeeeecceeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeee
            fffeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbeec
            fffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccbbbbbbbbbbeeeceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbeec
            fffceeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeecedddbddddddddddbbbbcccbbcbbbbbbbbccceeeeeeeeeeeeeeeeeebbbbbbbbbbbbbddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeebbbbbeec
            ffffeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbddddbdddddbbbeceeeeeeeeeeeeeeeeeeeeeeeebbbbbbdbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbeec
            ffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeeeeeeeeeeebbbbbeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeccbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbebeeeeeeeeeeeeebbbbbbec
            fffffceeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeecccccccccccfffffffffcccccccceeeeeebbceeeeeeeeeeeeeeeeeeecccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbeec
            ffffffceeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeceeeeeeecccccccccccffccceeeeeeeeeeeeeeeeeeeeeeeeeccebdbbbbbbbbbbbbbbbbbbbbbbbeebbbbbeeeeebbbbbbbbbbbbbbbeec
            ffffffffcceeeeeecceeeeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbeec
            ffffffffffccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeecccceecccccccccebbbbbbbeeeebbbbbbbbeebbbbbbeebbbbbbbbbbbbbbbbbbbbbbeeff
            ffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeecceeeeeeeeeeeccebbbbbbeeeebbbbbbbbbbbbbbbebeebbbbbbbbbbbbbbbbbbbeebeecf
            ffffffffffceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecebbbeeeebbbbbbbbbbbbbbebbbebebbbbbbbbbbbbbbbbbbbbbeeeeec
            fffffffffffeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebeeeeeeeeeeeeeeeeeeeeeeeeceeeeecccccccfebbbbbeebbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeec
            fffffffffffcceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbdbbbbbeeeeeeeeccfffccccccccccceeeeeeeeeeeeeeeeeecccebbbbbbeebbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbeeecfcc
            ffffffffffffceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbecfceccccffffffcfccccccccfffffffcccccccffceebbbbbbbbbbbbebbbbbbbbeeebbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbeeeefff
            ffffffffffffcceeeebebbbbbbbbbbbbbbbeeeeecccccccccccccccccccccccccccccccccccccccccccccfceeebbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbebeeeebbbbbbbbbbbbbbbeeeeeeffc
            ffffffffffffccceeebebbbbbbbbbeccccffcccccccccccccccccccccccccccccccccccccccccccccccccfceeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbeebbbeebbbbbbbbbbbbeeeeeeeecffc
            ffffffffffffcccceebbbbbbbeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccfceeeebbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbeebbbbbebbbbbbbbbbbbeeeeeeeccffc
            fffffffffffffccccceeeecccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccfcceeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbeebbbbbbbbbbbbbbbbeeeeeeccfffffe
            ffffffffffffffcfffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccceeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbeeeeeeecccccccffe
            `)
        mySprite = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Player)
        mySprite.setScale(2, ScaleAnchor.Middle)
        mySprite.setPosition(80, 87)
        story.spriteSayText(mySprite, "Welcome to the legacy of the five families.....")
        story.spriteSayText(mySprite, "You play as Mira, the last descendant of the House of Innovation.")
        sprites.destroy(mySprite)
        story.showPlayerChoices("Start", "How To Play", "Quit")
        if (story.checkLastAnswer("Start")) {
            cutscene1()
        } else if (story.checkLastAnswer("How To Play")) {
            game.showLongText("Use the joystick to move, A to interact with objects and.... ", DialogLayout.Bottom)
            game.showLongText("B for.....", DialogLayout.Bottom)
            cutscene1()
        } else if (story.checkLastAnswer("Quit")) {
            game.gameOver(false)
        } else {
        	
        }
    })
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mira,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    500,
    false
    )
})
function obstacle1 () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    game.showLongText("Your journey now begins.....", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`level`)
    Mira = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Mira, tiles.getTileLocation(0, 0))
    controller.moveSprite(Mira, 50, 50)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mira,
    [img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f e e d d d f . . . 
        . . . f 4 d d e 4 e f . . . 
        . . . f e d d e 3 3 f . . . 
        . . f f f e e f 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `],
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mira,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d 4 e f e . 
        . f e f f b b b e d d 4 e . 
        . e 4 f b 3 3 3 e d d e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . e f e 4 d d d d d f f . . 
        . e 4 d d e b b b f f e f . 
        . . e d d e 3 3 b e f 4 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    false
    )
})
function cutscene1 () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    story.setSoundEnabled(true)
    story.startCutscene(function () {
        screenTransitions.startTransition(screenTransitions.WavyVertical, 1000, false)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
            9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
            999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
            999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
            999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
            99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
            99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
            9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
            9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
            699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
            999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
            696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
            69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
            6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
            9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
            9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
            999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
            999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
            999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
            999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
            666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
            666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
            6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
            66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
            666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
            666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
            b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
            b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
            bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
            444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
            44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
            444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
            4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
            4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
            4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
            4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
            4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
            4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
            4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
            4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
            44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
            44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
            44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
            44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
            6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
            4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
            4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
            4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
            4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
            444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
            fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
            effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
            beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
            dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
            ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
            efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
            ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
            ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
            ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
            fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
            ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
            fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
            fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
            ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
            fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
            ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
            bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
            bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
            bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
            bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
            bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
            bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
            bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
            ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
            ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
            cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
            cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
            bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
            bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
            bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
            bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
            bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
            bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
            cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
            bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
            bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
            ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
            cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
            cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
            ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
            bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
            bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
            bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
            ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
            bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
            dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
            d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
            ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
            4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
            dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
            `)
        Mira = sprites.create(img`
            . . . . . . . c c . . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . c c c 5 5 5 c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f . . . 
            . . f f e e b f e e e f . . . . 
            . . f f f b 1 f b b e f . . . . 
            . . . f f b b b b b b f . . . . 
            . . . e e f e e e e f . . . . . 
            . . . e b b e b b 5 f . . . . . 
            . . . e b b e 5 5 5 5 f . . . . 
            . . . . e e 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Player)
        Mira.setScale(1.5, ScaleAnchor.Middle)
        Mira.setPosition(21, 96)
        mySprite2 = sprites.create(img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `, SpriteKind.yapper)
        mySprite2.setScale(1.5, ScaleAnchor.Middle)
        mySprite2.setPosition(129, 96)
        pause(1500)
        story.spriteSayText(mySprite2, "Mira... I have been waiting for you..", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(Mira, "Who..", 14, 1, story.TextSpeed.Slow)
        story.spriteSayText(Mira, "Who are you?", 14, 1, story.TextSpeed.Normal)
        story.spriteSayText(mySprite2, "Your mission is much more important than me...", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(mySprite2, "Once.... 5 legendary families together created mathematical seals to secure a country...", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(mySprite2, "But a virus called THE NULL GLITCH corrupted the city, breaking the seals and scattering their fragments across the coordinate grid.", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(mySprite2, "Solve all the puzzles and save the world...", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(mySprite2, "Your mission starts alone...", 15, 1, story.TextSpeed.Normal)
        story.spriteSayText(Mira, "But I don't understand....", 14, 1, story.TextSpeed.Slow)
        mySprite3 = sprites.create(img`
            . . . . . . . . c c c c . . . . 
            . . . . c c c c c c c c c . . . 
            . . . c f c c a a a a c a c . . 
            . . c c f f f f a a a c a a c . 
            . . c c a f f c a a f f f a a c 
            . . c c a a a a b c f f f a a c 
            . c c c c a c c b a f c a a c c 
            c a f f c c c a b b 6 b b b c c 
            c a f f f f c c c 6 b b b a a c 
            c a a c f f c a 6 6 b b b a a c 
            c c b a a a a b 6 b b a b b a . 
            . c c b b b b b b b a c c b a . 
            . . c c c b c c c b a a b c . . 
            . . . . c b a c c b b b c . . . 
            . . . . c b b a a 6 b c . . . . 
            . . . . . . b 6 6 c c . . . . . 
            `, SpriteKind.Projectile)
        mySprite3.setPosition(0, 0)
        story.spriteMoveToLocation(mySprite3, 129, 96, 150)
        scene.cameraShake(8, 1000)
        pause(1500)
        story.spriteSayText(Mira, "What just happened?", 14, 1, story.TextSpeed.Normal)
        pause(500)
        obstacle1()
    })
}
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Mira: Sprite = null
obstacle1()
