let allowedUUIDS = [
    "dc8c39647b294e03ae9ed13ebd65dd29",
    "594a8c9b58cb48ca9c7a53b693d3fd62"
]

module.exports = {hidden: function(featureManager){
    return !allowedUUIDS.includes(Player.getUUID().toString().replace(/-/g, ""))
}}