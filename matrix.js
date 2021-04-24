var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// the characters
var gurmukhi = "੧੨੩੪੫੬੭੮੯੦ੳਅਰਤਯਪਸਦਗਹਜਕਲਙੜਚਵਬਨਮੲਥਫਸ਼ਧਘਝਖਲ਼ੜ੍ਹਛਭਣ"
var sanskrit = "१२३४५६७८९अरतयपसदगहजकलङषचवबनमआथय़फशधघझखळक्षछभणऒ"
var hanzi = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑呂"
var katakana = "゠クタハムヰアケチヒモヲィコッャンイツヤウゥサフュヵテユヶェショワエトヘヨォスラヱオナリカセニホル・ヌレーキソネロヽノマヮミ"
var hex = "ABCDEF01234567890"

// converting the string into an array of single characters
var characters = (hanzi + katakana + sanskrit + gurmukhi + hex).split("");
var font_size = 12;
var columns = c.width/font_size;    // number of columns for the rain

// an array of drops - one per column
var drops = [];

for (var x = 0; x < columns; x++)
    drops[x] = 1;

// drawing the characters
function draw() {
  
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0f0"; 
    ctx.font = font_size + "px arial";

    // looping over drops
    for (var i = 0; i < drops.length; i++) {
        // a random character to print
        var text = characters[Math.floor(Math.random() * characters.length)];
        // x = i * font_size, y = value of drops[i] * font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // sending the drop back to the top randomly after it has crossed the screen
        // adding randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        // Incrementing Y coordinate
        drops[i]++;
    }
}
setInterval(draw, 33);
