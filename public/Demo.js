const canvas = document.createElement("div");
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.background = "#aaaaaa";

const demo = document.createElement("div");

const skins = [];
const cheeks = [];
const lines = [];
const lineFills = [];
const eyes = [];

const client = new XMLHttpRequest();
client.open('GET', 'textures/T1.svg');
client.onreadystatechange = () =>
{
	demo.innerHTML = client.responseText;

	if(document.getElementById("g12") != null)
	{
		skins.push(document.getElementById("path58"));
		skins.push(document.getElementById("path350"));
		skins.push(document.getElementById("path374"));
		skins.push(document.getElementById("path26"));

		cheeks.push(document.getElementById("path170"));
		cheeks.push(document.getElementById("path382"));
		cheeks.push(document.getElementById("path178"));

		lines.push(document.getElementById("path54"));
		lines.push(document.getElementById("path30"));
		lines.push(document.getElementById("path354"));
		lines.push(document.getElementById("path358"));
		lines.push(document.getElementById("path362"));
		lines.push(document.getElementById("path366"));
		lines.push(document.getElementById("path338"));
		lines.push(document.getElementById("path342"));
		lines.push(document.getElementById("path334"));
		lines.push(document.getElementById("path302"));
		lines.push(document.getElementById("path330"));
		lines.push(document.getElementById("path346"));
		lines.push(document.getElementById("path326"));
		lines.push(document.getElementById("path310"));
		lines.push(document.getElementById("path142"));
		lines.push(document.getElementById("path146"));
		lines.push(document.getElementById("path138"));
		lines.push(document.getElementById("path150"));
		lines.push(document.getElementById("path154"));
		lines.push(document.getElementById("path158"));
		lines.push(document.getElementById("path162"));
		lines.push(document.getElementById("path166"));
		lines.push(document.getElementById("path182"));
		lines.push(document.getElementById("path174"));

		lineFills.push(document.getElementById("path378"));
		lineFills.push(document.getElementById("path202"));
		lineFills.push(document.getElementById("path206"));
		lineFills.push(document.getElementById("path190"));
		lineFills.push(document.getElementById("path194"));
		lineFills.push(document.getElementById("path198"));
		lineFills.push(document.getElementById("path134"));
		lineFills.push(document.getElementById("path122"));
		lineFills.push(document.getElementById("path186"));
		lineFills.push(document.getElementById("path102"));
		lineFills.push(document.getElementById("path130"));
		lineFills.push(document.getElementById("path110"));
		lineFills.push(document.getElementById("path106"));
		lineFills.push(document.getElementById("path118"));
		lineFills.push(document.getElementById("path114"));
		lineFills.push(document.getElementById("path238"));
		lineFills.push(document.getElementById("path242"));
		lineFills.push(document.getElementById("path246"));
		lineFills.push(document.getElementById("path250"));
		lineFills.push(document.getElementById("path46"));
		lineFills.push(document.getElementById("path34"));
		lineFills.push(document.getElementById("path254"));
		lineFills.push(document.getElementById("path38"));
		lineFills.push(document.getElementById("path258"));
		lineFills.push(document.getElementById("path262"));
		lineFills.push(document.getElementById("path266"));
		lineFills.push(document.getElementById("path270"));
		lineFills.push(document.getElementById("path314"));
		lineFills.push(document.getElementById("path318"));
		lineFills.push(document.getElementById("path322"));
		lineFills.push(document.getElementById("path282"));
		lineFills.push(document.getElementById("path278"));
		lineFills.push(document.getElementById("path274"));
		lineFills.push(document.getElementById("path286"));
		lineFills.push(document.getElementById("path290"));
		lineFills.push(document.getElementById("path294"));
		lineFills.push(document.getElementById("path298"));
		lineFills.push(document.getElementById("path306"));

		eyes.push(document.getElementById("path90"));
		eyes.push(document.getElementById("path74"));
		eyes.push(document.getElementById("path386"));

		document.getElementById("path78").style.fill = "#ffffff";
		document.getElementById("path78").style["fill-opacity"] = 0.6;
		document.getElementById("path82").style.fill = "#ffffff";
		document.getElementById("path82").style["fill-opacity"] = 0.6;
		document.getElementById("path94").style.fill = "#ffffff";
		document.getElementById("path94").style["fill-opacity"] = 0.6;
		document.getElementById("path98").style.fill = "#ffffff";
		document.getElementById("path98").style["fill-opacity"] = 0.6;
	}
}
client.send();

canvas.appendChild(demo);
document.body.appendChild(canvas);

const changeColor = () =>
{
	let randColor;
	if(document.getElementById("g12") != null)
	{
		randColor = Math.floor(Math.random()*0xffffff).toString(16);
		document.getElementById("tspan388").innerHTML = randColor;
		for(let i = 0; i < skins.length; i++){
			skins[i].style.fill = "#"+randColor;
		}

		randColor = Math.floor(Math.random()*0xffffff).toString(16);
		document.getElementById("tspan392").innerHTML = randColor;
		for(let i = 0; i < cheeks.length; i++){
			cheeks[i].style.fill = "#"+randColor;
		}

		randColor = Math.floor(Math.random()*0xffffff).toString(16);
		document.getElementById("tspan390").innerHTML = randColor;
		for(let i = 0; i < lines.length; i++){
			lines[i].style.stroke = "#"+randColor;
		}
		for(let i = 0; i < lineFills.length; i++){
			lineFills[i].style.fill = "#"+randColor;
		}


		randColor = Math.floor(Math.random()*0xffffff).toString(16);
		document.getElementById("tspan394").innerHTML = randColor;
		for(let i = 0; i < eyes.length; i++){
			eyes[i].style.fill = "#"+randColor;
		}
	}
}

document.addEventListener('keydown', (e) => {
	if(e.code == "Space"){ changeColor(); }
});
