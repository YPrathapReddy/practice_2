let animalsList = [
  {
    image:
      "https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg?w=1060&t=st=1701308754~exp=1701309354~hmac=e0d9f40c4f84c629827ff863f4090629f58e7d099ad0651c55e39951f7993162",
    name: "Lion",
    id: 1,
  },
  {
    image:
      "https://img.freepik.com/free-photo/tiger-nature-habitat-tiger-male-walking-head-composition-wildlife-scene-with-danger-animal-hot-summer-rajasthan-india-dry-trees-with-beautiful-indian-tiger-panthera-tigris_475641-1909.jpg?w=1060&t=st=1701308870~exp=1701309470~hmac=fad9a378f63b7c44e0c64bfc7365423964bfd3594bc3ce29c72f71620d3528a3",
    name: "Tiger",
    id: 2,
  },
  {
    image:
      "https://img.freepik.com/free-photo/majestic-elephant-ai-generated-image_268835-6116.jpg?t=st=1701308933~exp=1701312533~hmac=b76c9d4010c5bf735016fbe88c8dc2936b5cf14fe1441f65052bb7bdca518872&w=1060",
    name: "Elephant",
    id: 3,
  },
  {
    image:
      "https://img.freepik.com/free-photo/majestic-grizzly-bear-walking-snowy-forest-generative-ai_188544-40920.jpg?t=st=1701309006~exp=1701312606~hmac=3b0a157cc86239717187532b4106f08d7d47ebf264295986b93aff337d468f2f&w=1380",
    name: "Bear",
    id: 4,
  },
  {
    image:
      "https://img.freepik.com/free-photo/red-deer-nature-habitat-during-deer-rut-european-wildlife_475641-941.jpg?w=1060&t=st=1701331967~exp=1701332567~hmac=38f5783a05dbfd2daf98e19a3ccdbf22b7942da31b80d5dddc5a0d81b29c8927",
    name: "Deer",
    id: 5,
  },
  {
    image:
      "https://img.freepik.com/free-photo/giraffe-grazing-by-tree-middle-african-jungle-samburu-kenya_181624-7336.jpg?w=1060&t=st=1701332057~exp=1701332657~hmac=d1b1bd62213a6450ae66ed7d938ef13f1cc86ec0f0b1cf8420983ecc19646fb0",
    name: "Giraffe",
    id: 6,
  },
  {
    image:
      "https://img.freepik.com/free-photo/small-marsupial-sitting-tree-branch-looking-generated-by-ai_188544-17835.jpg?t=st=1701309187~exp=1701312787~hmac=89b472797d12e45a2e514a7c8435f2c1fefd8ae4640af73b27bed91444411b7c&w=1380",
    name: "Kangaroo",
    id: 7,
  },
  {
    image:
      "https://img.freepik.com/free-photo/gibbon-monkey-sitting-rock-gazing-with-mountains-pushkar-india_181624-2419.jpg?w=1060&t=st=1701309251~exp=1701309851~hmac=cd0a0563cc547fa933e925c57010f383f999cfe1f452c99dd55167591ea490ac",
    name: "Monkey",
    id: 8,
  },
  {
    image:
      "https://img.freepik.com/free-photo/beautiful-shallow-focus-shot-zebra-wild_181624-61525.jpg?w=1060&t=st=1701309311~exp=1701309911~hmac=b0fc033045da11e0f739ee47c46816742d7fd58e5828ff9b14d0014f238395d9",
    name: "Zebra",
    id: 9,
  },
  {
    image:
      "https://img.freepik.com/free-photo/selective-focus-shot-adorable-red-fox-netherlands_181624-37152.jpg?w=900&t=st=1701309348~exp=1701309948~hmac=a52373a9830cbec5d39983b1fad3aba690da8daceb1a83173e0decd19cf02643",
    name: "Fox",
    id: 10,
  },
  {
    image:
      "https://img.freepik.com/free-photo/ai-generated-horses-picture_23-2150650875.jpg?t=st=1701342127~exp=1701345727~hmac=c37d3f2d89aad4b7356f331744b71f99dafbf4b571c4c1dff066af61661755f0&w=1060",
    name: "Horse",
  },
  {
    image:
      "https://img.freepik.com/free-photo/closeup-shot-gorilla-walking-field-covered-greenery_181624-11977.jpg?w=1060&t=st=1701342275~exp=1701342875~hmac=9f523df113e05bac7f86738df0772693741db7175e284cc057f12379d6d36624",
    name: "Gorilla",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-panda-bear-nature_23-2150453045.jpg?t=st=1701342462~exp=1701346062~hmac=9d48cfa0c6c38f5ff8cd52e5d36f28575e661e4173da6305061dc0d4dde39c77&w=1060",
    name: "Panda",
  },
  {
    image:
      "https://img.freepik.com/free-photo/shallow-focus-shot-spotted-hyena-walking-dirt-road-with-blurred-space_181624-24622.jpg?w=1060&t=st=1701342569~exp=1701343169~hmac=c6b11d9a9480fce84bc2b875d171c60ecd4f4fef8381e22282c706c26e806d0b",
    name: "Hyena",
  },
  {
    image:
      "https://img.freepik.com/free-photo/penguin-walking-frozen-beach_181624-50490.jpg?w=1060&t=st=1701342707~exp=1701343307~hmac=57a5e2a7b4a65fd2ba8e1cf9436757149f361366de120c3631e1d06164d6f43c",
    name: "Penguin",
  },
  {
    image:
      "https://img.freepik.com/free-photo/magnificent-rhinoceros-grazing-grass-covered-fields-forest_181624-16176.jpg?w=1060&t=st=1701342780~exp=1701343380~hmac=28b70fa75448400fc840a170ff7b1463428aa36754a43d33fba4b5e60492841b",
    name: "Rhinoceros",
  },
  {
    image:
      "https://img.freepik.com/free-photo/wolf-pack-natural-environment_23-2150526693.jpg?t=st=1701342876~exp=1701346476~hmac=c163bf56cfd3cb475dac3e0c69e5321d2506a520ed10b9b558f84ea63168b1cc&w=1060",
    name: "Wolf",
  },
  {
    image:
      "https://img.freepik.com/free-photo/beautiful-dolphin-swimming_23-2150828814.jpg?t=st=1701342990~exp=1701346590~hmac=44433cc4898e350e7f788d9837dc86e3ce35c03f0f7dd59b631f93f7877e0db1&w=1380",
    name: "Dolphin",
  },
  {
    image:
      "https://img.freepik.com/free-photo/big-black-buffalo-fields-covered-with-tall-grass-captured-african-jungles_181624-35999.jpg?w=1060&t=st=1701343077~exp=1701343677~hmac=384c14bc6bf71c5639eacc4b07c4585b85607b3b61e9d4bb3e562e103cb0f84d",
    name: "African Buffalo",
  },
  {
    image:
      "https://img.freepik.com/free-photo/closeup-portrait-cute-german-shepherd-dog-running-grass_181624-30360.jpg?w=1060&t=st=1701343141~exp=1701343741~hmac=db8b9673d323fa14341e6d7572bd5ea05e5a382d9976fc86a4d38356ddbf282a",
    name: "Wild Dog",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-wild-parrot_23-2150793445.jpg?t=st=1701409557~exp=1701413157~hmac=14266fd738ee6d981c1583098588569a435c84cad3b04af7331496e19c59a92a&w=1380",
    name: "Parrot",
  },
  {
    image:
      "https://img.freepik.com/free-photo/bald-eagle-perched-majestically-tree-branch-generative-ai_188544-8795.jpg?w=1380&t=st=1701409620~exp=1701410220~hmac=279e87fa71ad9dde3481ab0d9e06a2092832b2176555a1b868b8e5e995acddfe",
    name: "Eagle",
  },
  {
    image:
      "https://img.freepik.com/free-photo/cute-surprised-western-screech-owl-perched-tree-branch-with-green-leaves-forest_181624-15591.jpg?w=1060&t=st=1701409717~exp=1701410317~hmac=b27f630e254ccbc74a23d85a0963a5314fba36fbdc76eb26910eb14c579d9163",
    name: "Owl",
  },
  {
    image:
      "https://img.freepik.com/free-photo/common-pigeon-ground-single-bird-wading-park_181624-54987.jpg?w=1060&t=st=1701409786~exp=1701410386~hmac=ea63c4f15d8d494baeadae30618adb496d10621a57d1bc2bfcce7d9234c6c19c",
    name: "Pigeon",
  },
  {
    image:
      "https://img.freepik.com/free-photo/majestic-peacock-displays-vibrant-multi-colored-feather-pattern-generated-by-ai_188544-34731.jpg?t=st=1701409887~exp=1701413487~hmac=cbc8d6188a86e5dfd9fa42774646d0bcee701f2875ea41aed8abb24fdeb7f1cf&w=1380",
    name: "Peacock",
  },
  {
    image:
      "https://img.freepik.com/free-photo/closeup-shot-duck-near-pond-zoo_181624-51048.jpg?w=1060&t=st=1701409939~exp=1701410539~hmac=2c06c513aea57e49d881d1a115bd0c1b6af02023a6ed006eae7cc14d98b69490",
    name: "Duck",
  },
  {
    image:
      "https://img.freepik.com/free-photo/closeup-chicken-walking-middle-field_181624-58614.jpg?w=1060&t=st=1701410020~exp=1701410620~hmac=2793c0bc787c8e36c580d6f2a1190e3b1835691327efa5fc92cac4271a14a470",
    name: "Hen",
  },
  {
    image:
      "https://img.freepik.com/free-photo/brown-cow-green-grass-field_181624-35622.jpg?w=1060&t=st=1701410107~exp=1701410707~hmac=99a01b7097f5a652f4d862c545956b44396e507ac2ee24f48250dfe62a79b290",
    name: "Cow",
  },
  {
    image:
      "https://img.freepik.com/free-photo/underwater-turtle-swimming-tranquil-multi-colored-coral-reef-generated-by-artificial-intelligence_188544-110267.jpg?t=st=1701410199~exp=1701413799~hmac=69e1b46a7ca179cf8afd6b0c73bf0d2e8a866879b8718b7808c48271161c4620&w=1380",
    name: "Turtle",
  },
  {
    image:
      "https://img.freepik.com/free-photo/3d-golden-fish-studio_23-2150702247.jpg?t=st=1701348150~exp=1701351750~hmac=15fde9eaf2adfa68294926cec60e53b55a0ebd92affbbabd5aec715c1056f1fc&w=1060",
    name: "Fish",
  },
  {
    image:
      "https://img.freepik.com/free-photo/closeup-shot-bee-flying-pollinate-white-flowers_181624-47951.jpg?w=1060&t=st=1701410389~exp=1701410989~hmac=729d65c2d4b1a9bac8905ae90f5e9999fe08f23429e105567bb8136e28e7c575",
    name: "Bee",
  },
  {
    image:
      "https://img.freepik.com/free-photo/ant-colony-teamwork-leaf-food-generated-by-ai_188544-38659.jpg?t=st=1701410450~exp=1701414050~hmac=fba3ee7a9ef5a4b94d57a50ba758435b8d0b59054eaccd6ae189501b519fbc75&w=1380",
    name: "Ant",
  },
  {
    image:
      "https://img.freepik.com/free-photo/multi-colored-coral-reef-teeming-with-sea-life-generated-by-ai_188544-39283.jpg?w=1380&t=st=1701410532~exp=1701411132~hmac=198e35197605bc45db1aa97a178a4984ef3f1b20041323baaed2539b340502ec",
    name: "Octopus",
  },
];
let score = 0;
let wrong = 0;
let shownList = [];

let choosingAnswerEl = document.getElementById("choosingAnswer");
let animalImageEl = document.getElementById("animalImage");
let firstOptionEl = document.getElementById("firstOption");
let secondOptionEl = document.getElementById("secondOption");
let thirdOptionEl = document.getElementById("thirdOption");
let forthOptionEl = document.getElementById("forthOption");

let firstOptionContentEl = document.getElementById("firstOptionContent");
let secondOptionContentEl = document.getElementById("secondOptionContent");
let thirdOptionContentEl = document.getElementById("thirdOptionContent");
let forthOptionContentEl = document.getElementById("forthOptionContent");

let submitBtnEl = document.getElementById("submitBtn");
let playAgainBtnEl = document.getElementById("playAgainBtn");
let scoreBtnEl = document.getElementById("scoreBtn");
scoreBtnEl.textContent = "Correct = " + score;
let incorrectBtnEl = document.getElementById("incorrectBtn");
incorrectBtnEl.textContent = "Incorrect = " + wrong;

let animalListLength = animalsList.length;

function gettingFourOptions(fourOptions) {
  let bgContanerEl = document.getElementById("bgContaner");
  let fourOptionsLength = fourOptions.length;
  let animalFirstOption = Math.ceil(Math.random() * fourOptionsLength) - 1;
  let animalSecondOption = Math.ceil(Math.random() * fourOptionsLength) - 1;
  let animalThirdOption = Math.ceil(Math.random() * fourOptionsLength) - 1;
  let animalForthOption = Math.ceil(Math.random() * fourOptionsLength) - 1;
  if (
    animalFirstOption !== animalSecondOption &&
    animalFirstOption !== animalThirdOption &&
    animalFirstOption !== animalForthOption &&
    animalSecondOption !== animalThirdOption &&
    animalSecondOption !== animalForthOption &&
    animalThirdOption !== animalForthOption
  ) {
    firstOptionContentEl.textContent =
      animalsList[fourOptions[animalFirstOption]].name;
    secondOptionContentEl.textContent =
      animalsList[fourOptions[animalSecondOption]].name;
    thirdOptionContentEl.textContent =
      animalsList[fourOptions[animalThirdOption]].name;
    forthOptionContentEl.textContent =
      animalsList[fourOptions[animalForthOption]].name;

    firstOptionEl.value = animalsList[fourOptions[animalFirstOption]].name;
    secondOptionEl.value = animalsList[fourOptions[animalSecondOption]].name;
    thirdOptionEl.value = animalsList[fourOptions[animalThirdOption]].name;
    forthOptionEl.value = animalsList[fourOptions[animalForthOption]].name;
  } else {
    gettingFourOptions(fourOptions);
  }
  bgContanerEl.classList.remove("d-none");
}
let animalRandomCorrect;
let resultEl;

function getOptions() {
  resultEl = document.getElementById("result");
  animalRandomCorrect = Math.ceil(Math.random() * animalListLength) - 1;

  let animalFirst = Math.ceil(Math.random() * animalListLength) - 1;
  let animalSecond = Math.ceil(Math.random() * animalListLength) - 1;
  let animalThird = Math.ceil(Math.random() * animalListLength) - 1;
  if (
    animalRandomCorrect !== animalFirst &&
    animalRandomCorrect !== animalSecond &&
    animalRandomCorrect !== animalThird &&
    animalFirst !== animalSecond &&
    animalFirst !== animalThird &&
    animalSecond !== animalThird
  ) {
    let fourOptions = [
      animalRandomCorrect,
      animalFirst,
      animalSecond,
      animalThird,
    ];
    let imageincludes = animalsList[animalRandomCorrect].image;
    let imageincludesInList = shownList.includes(imageincludes);
    if (shownList.length === animalListLength) {
      shownList = [];
    }
    if (imageincludesInList === true) {
      getOptions();
    } else {
      animalImageEl.src = animalsList[animalRandomCorrect].image;
      shownList.push(animalsList[animalRandomCorrect].image);
      console.log(shownList.length);
      gettingFourOptions(fourOptions);
    }
  } else {
    getOptions();
  }
}
getOptions();

playAgainBtnEl.onclick = function () {
  getOptions();
  resultEl.textContent = "";
  firstOptionEl.checked = false;
  secondOptionEl.checked = false;
  thirdOptionEl.checked = false;
  forthOptionEl.checked = false;
  userAnswer = "";
  // choosingAnswerEl.classList.remove("d-none");
  submitBtnEl.classList.remove("d-none");
};

submitBtnEl.onclick = function () {
  if (userAnswer !== "") {
    let correctAnswer = animalsList[animalRandomCorrect].name;
    if (userAnswer === correctAnswer) {
      // console.log("yes, u got it")
      resultEl.classList.remove("d-none");
      resultEl.textContent = "Congrajulation you got it!";
      resultEl.classList.add("correct", "mt-3");
      resultEl.classList.remove("incorrect");
      resultEl.classList.remove("notchoosen");
      // choosingAnswerEl.classList.add("d-none");
      score = score + 1;
      scoreBtnEl.textContent = "Correct = " + score;
      submitBtnEl.classList.add("d-none");
    } else {
      // console.log("sorry")
      resultEl.classList.add("incorrect", "mt-3");
      resultEl.classList.remove("d-none");
      resultEl.classList.remove("notchoosen");
      resultEl.classList.remove("correct");
      resultEl.textContent = "Incorrect Answer! and answer is " + correctAnswer;
      // choosingAnswerEl.classList.add("d-none");
      wrong = wrong + 1;
      incorrectBtnEl.textContent = "Incorrect = " + wrong;
      submitBtnEl.classList.add("d-none");
    }
  } else {
    resultEl.classList.remove("d-none");
    resultEl.classList.remove("correct");
    resultEl.classList.remove("incorrect");
    resultEl.classList.add("notchoosen", "mt-3");
    resultEl.textContent = "Please choose option";
  }
};
let userAnswer = "";
firstOptionEl.addEventListener("change", function (event) {
  userAnswer = event.target.value;
  console.log(userAnswer);
});
secondOptionEl.addEventListener("change", function (event) {
  userAnswer = event.target.value;
  console.log(userAnswer);
});
thirdOptionEl.addEventListener("change", function (event) {
  userAnswer = event.target.value;
  console.log(userAnswer);
});
forthOptionEl.addEventListener("change", function (event) {
  userAnswer = event.target.value;
  console.log(userAnswer);
});
