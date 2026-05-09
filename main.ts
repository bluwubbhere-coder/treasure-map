namespace SpriteKind {
    export const Text = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
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
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        Title = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Text)
        mySprite.setScale(2, ScaleAnchor.Middle)
        mySprite.setPosition(80, 87)
        mySprite.sayText("Welcome to the legacy of the five families.....", 5000, true)
        pause(5000)
        mySprite.sayText("You are the Ch ", 2500, true)
        pause(2500)
        story.showPlayerChoices("Start", "How To Play", "Quit")
    })
}
let Title: Sprite = null
let mySprite: Sprite = null
startGame()
game.onUpdateInterval(500, function () {
	
})
