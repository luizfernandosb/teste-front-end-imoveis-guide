const profiles = [
  {
    name: "Luiz Fernando",
    points: "1.000",
    phone: "(11) 2121-0000",
    picture: "images/profile1.png",
  },
  {
    name: "Elienai Mirian",
    points: "1.000",
    phone: "(32) 3233-0000",
    picture: "images/profile2.png",
  },
];

const profilesContainer = document.querySelector(".profiles");

profiles.forEach((profileData) => {
  const profileElement = document.createElement("div");
  profileElement.className = "profile";
  profileElement.innerHTML = `   <div class="image-profile">
  <img src="${profileData.picture}" alt="" class="profile-bg" />
  <img src="${profileData.picture}" alt="" class="profile-picture" />
</div>
<div class="data">
  <p class="name">${profileData.name}</p>
  <p class="points">${profileData.points} pontos</p>
  <p class="tel" onclick="showPhone('${profileData.phone}', this)">
    Ver telefone
  </p>
</div>`;
  profilesContainer.appendChild(profileElement);
});

// mostrar telefone
function showPhone(phone, element) {
  element.textContent = phone;
}

function CPFmask(input) {
  // remove tudo que não for digito
  let value = input.value.replace(/\D/g, "");

  // mascara CPF
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  input.value = value;
}
function phoneMask(input) {
  // Remove tudo que não for dígito
  let value = input.value.replace(/\D/g, "");

  // Aplica a máscara para números de telefone com 8 ou 9 dígitos
  if (value.length <= 10) {
    // Máscara para números no formato (00) 0000-0000
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  } else if (value.length <= 11) {
    // Máscara para números no formato (00) 00000-0000
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }

  // Atualiza o valor do input
  input.value = value;
}


function sendMessage() {
  const cpf = document.querySelector(".cpf");
  const numberphone = document.querySelector(".number-tel");
  const message = document.querySelector(".message");

  cpf.value = ``;
  numberphone.value = ``;
  message.value = ``;

  alert("Botão Clicado.");
}

// calcula regra de 3
document.querySelector(".calc-btn").addEventListener("click", () => {
  alert('Botão Calcular clicado.')
})

function ruleOfThree() {
  const firstValue = document.querySelector(".first-value").value;
  const secondValue = document.querySelector(".second-value").value;
  const thirdValue = document.querySelector(".third-value").value;
  const result = document.querySelector(".result");
  

  // converte os valores para number
  const firstNumber = parseFloat(firstValue);
  const secondNumber = parseFloat(secondValue);
  const thirdNumber = parseFloat(thirdValue);

  // verificação se são numeros validos
  if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
    const floatResult = parseFloat((secondNumber * thirdNumber) / firstNumber);
    result.value = floatResult.toFixed(2);
  } else {
    result.textContent = "Por favor, insira valores válidos.";
  }
}

// eventos para atualizar os valores em tempo real
document.querySelector(".first-value").addEventListener("input", ruleOfThree);
document.querySelector(".second-value").addEventListener("input", ruleOfThree);
document.querySelector(".third-value").addEventListener("input", ruleOfThree);

// canvas
document.getElementById("download-btn").addEventListener("click", function () {
  html2canvas(document.getElementById("house")).then(function (canvas) {
    
    var imgData = canvas.toDataURL("image/png");

   
    var link = document.createElement("a");
    link.href = imgData;
    link.download = "imagem.png";

    
    link.click();
  });
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("open-modal");
var span = document.getElementsByClassName("close")[0];
var modalImage = document.getElementById("modal-image");
var imageSrc = document.querySelector(".image-modal img").src;

// abre modal
btn.onclick = function () {
  modal.style.display = "block";
  modalImage.src = imageSrc;
};

// fecha modal
span.onclick = function () {
  modal.style.display = "none";
};

// fecha o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const menuHamburger = document.querySelector(".menu-hamburger");

const nav = document.querySelector(".navbar");

menuHamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
