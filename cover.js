var app = document.getElementById('typewriter');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Dear Staci,')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I hope you have a great birthday!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I often think how life put us and Lesbia in 21a together')
    .pauseFor(2500)
    .deleteAll()
    .typeString('The best takeaways I\'ll have from college will be the fun memories we made')
    .pauseFor(2500)
    .deleteAll()
    .typeString('You\'re smart, ambitious, but best of all an amazing friend')
    .pauseFor(2500)
    .deleteAll()
    .typeString('You\'ve impacted me, and many others, in so many ways')
    .pauseFor(2500)
    .deleteAll()
    .typeString('One thing was realizing there\'s so much more to life than school')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Life really is about those you surround yourself with')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Friends to share lighthearted laughs and the deepest convos :D')
    .pauseFor(2500)
    .deleteAll()
    .typeString('My only regret is that we had shared more of college together :(')
    .pauseFor(2500)
    .deleteAll()
    .typeString('But we have many, many years in the future for adventures')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m super excited :D')
    .start();


setTimeout(() => {
    document.getElementById("cover").style.display = "none"
 }, 120000);
