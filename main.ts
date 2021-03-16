sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.powerDown.play()
    Urchin.destroy()
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    coin.setPosition(randint(0, 160), randint(0, 120))
})
let Urchin: Sprite = null
let coin: Sprite = null
scene.setBackgroundColor(9)
let Fish = sprites.create(assets.image`Fish`, SpriteKind.Player)
controller.moveSprite(Fish)
info.setLife(3)
info.setScore(0)
coin = sprites.create(assets.image`coin_asset`, SpriteKind.Food)
coin.setPosition(randint(0, 160), randint(0, 120))
scene.centerCameraAt(0, 0)
let invincibilityPeriod = 0
tiles.setTilemap(tilemap`OceanTileMap`)
game.onUpdate(function () {
    Fish.setImage(assets.image`Fish`)
    if (Fish.vx > 0) {
        Fish.image.flipX()
    }
})
forever(function () {
    scene.cameraFollowSprite(Fish)
})
game.onUpdateInterval(randint(1000, 4000), function () {
    Urchin = sprites.createProjectileFromSide(assets.image`Urchin`, randint(0, 160), randint(0, 120))
})
