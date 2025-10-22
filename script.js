const quizData = [
	{
		question:
			"Que tipo de organismo é capaz de produzir seu próprio alimento por meio da fotossíntese?",
		options: ["Minerais", "Fungos", "Plantas e Algas", "Vírus"],
		answer: "Plantas e Algas",
	},
	{
		question: "Como se chama o processo de transformação de gás em líquido?",
		options: ["Fusão", "Vaporização", "Liquefação", "Solidificação"],
		answer: "Liquefação",
	},
	{
		question: "Que órgão humano é responsável por bombear o sangue pelo corpo?",
		options: ["Pâncreas", "Estômago", "Rins", "Coração"],
		answer: "Coração",
	},
	{
		question:
			"Qual é a fonte primária de energia para quase toda a vida na Terra?",
		options: [
			"Energia Eólica",
			"Energia Solar",
			"Energia elétrica",
			"Energia nuclear",
		],
		answer: "Energia Solar",
	},
	{
		question: "O que é a biodiversidade?",
		options: [
			"Variedade de Biologias",
			"Variedade de Bioquímicos",
			"Variedade de Biocombustíveis",
			"Variedade de seres vivos, ecossistemas e genes",
		],
		answer: "Variedade de seres vivos, ecossistemas e genes",
	},
	{
		question: "Qual é a principal função do sistema respiratório?",
		options: [
			"Absorver nutrientes dos alimentos",
			"Absorver oxigênio e eliminar dióxido de carbono",
			"Absorver dióxido de carbono e eliminar oxigênio",
			"Absorver água e eliminar sais",
		],
		answer: "Absorver oxigênio e eliminar dióxido de carbono",
	},
	{
		question: "Qual é a camada mais externa da Terra?",
		options: ["Litosfera", "Hidrosfera", "Troposfera", "Atmosfera"],
		answer: "Atmosfera",
	},
	{
		question:
			"Qual planeta do sistema solar é conhecido como “planeta vermelho”?",
		options: ["Terra", "Marte", "Vênus", "Júpiter"],
		answer: "Marte",
	},
	{
		question: "Como se chama o processo de “alimentação” das plantas?",
		options: ["Fotossíntese", "Respiração", "Transpiração", "Germinação"],
		answer: "Fotossíntese",
	},
	{
		question: "Qual é o maior órgão do corpo humano?",
		options: ["Fígado", "Coração", "Pele", "Pulmões"],
		answer: "Pele",
	},
	{
		question: "Quantos litros de sangue tem no corpo do ser humano?",
		options: ["3 a 4 litros", "5 a 6 litros", "7 a 8 litros", "9 a 10 litros"],
		answer: "5 a 6 litros",
	},
	{
		question: "Qual é o principal gás responsável pelo efeito estufa?",
		options: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hidrogênio"],
		answer: "Dióxido de Carbono",
	},
	{
		question: "Qual é a energia obtida pelo vento?",
		options: [
			"Energia Solar",
			"Energia Eólica",
			"Energia Hidrelétrica",
			"Energia Geotérmica",
		],
		answer: "Energia Eólica",
	},
	{
		question: "Qual é o nome do processo pelo qual as plantas perdem água?",
		options: ["Transpiração", "Respiração", "Fotossíntese", "Germinação"],
		answer: "Transpiração",
	},
	{
		question: "Quanto tempo demora para a luz do sol chegar no planeta terra?",
		options: ["8 minutos", "5 minutos", "12 minutos", "15 minutos"],
		answer: "8 minutos",
	},
	{
		question: "Qual a fórmula química da água?",
		options: ["CO2", "H2O", "O2", "NaCl"],
		answer: "H2O",
	},
	{
		question: "Qual é o maior planeta do sistema solar?",
		options: ["Terra", "Saturno", "Júpiter", "Marte"],
		answer: "Júpiter",
	},
	{
		question: "Qual é o principal componente do ar que respiramos?",
		options: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hidrogênio"],
		answer: "Nitrogênio",
	},
	{
		question: "Qual é a unidade básica da vida?",
		options: ["Átomo", "Molécula", "Célula", "Tecido"],
		answer: "Célula",
	},
	{
		question:
			"Como se chama o processo de mudança do estado sólido para o estado gasoso?",
		options: ["Fusão", "Sublimação", "Condensação", "Solidificação"],
		answer: "Sublimação",
	},
];

const questionElement = document.getElementById("pergunta");
const optionsElement = document.getElementById("opcoes");
const submitButton = document.getElementById("enviar");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
	const question = quizData[currentQuestion];
	questionElement.innerText = question.question;

	optionsElement.innerHTML = "";
	question.options.forEach((option) => {
		const button = document.createElement("li");
		button.innerText = option;
		optionsElement.appendChild(button);
		button.addEventListener("click", selectAnswer);
	});
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const answer = quizData[currentQuestion].answer;

	if (selectedButton.innerText === answer) {
		score++;
	}

	currentQuestion++;

	if (currentQuestion < quizData.length) {
		showQuestion();
	} else {
		showResult();
	}
}

function showResult() {
	quiz.innerHTML = `
      <h1>Você terminou o Quiz!</h1>
      <p class="ponthus">Sua pontuação: ${score}/${quizData.length}</p>
	  <button id="enviar" onclick="location.reload()">Reiniciar Quiz</button>
    `;
}

showQuestion();
