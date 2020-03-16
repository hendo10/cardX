let nbaPlayerRef = ref.child("nbaPlayers")

let newPlayerRef = nbaPlayerRef.push();
newPlayerRef.set({
  firstName: "Zion",
  lastName: "Williamson"
})

nbaPlayerRef.push().set({
  firstName: "Ja",
  lastName: "Morant"
})
