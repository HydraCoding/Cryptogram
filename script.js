let posts = [
  {
    profillogo: "img/roger-ver.jpg",
    author: "rogerv-ver",
    location: "Japan, Tokio",
    image: "img/super_nintendo.jpg",
    likes_too: ["patrick-tobler", "ada-lovelace", "sophia-A.I."],
    likes_too_pic: [
      "img/patrick.jfif",
      "img/ada_lovelace.png",
      "img/sophia.jpg",
    ],
    likes: "652515",
    headline:
      "Cardano-Gründer vergleicht Solana mit alten Nintendo-Konsolen und gibt Gründe an, warum er Terra und andere Blockchains kritisiert",
    commentator: ["cz"],
    comments: [
      "» Solana’s Biggest DeFi Lender Almost Got Rekt. Then Binance Stepped In",
    ],
  },
  {
    profillogo: "img/ada_lovelace.png",
    author: "ada-lovelace",
    location: "England, London",
    image: "img/ada_computer.jpg",
    likes_too: ["charles-hoskinson"],
    likes_too_pic: ["img/charles.jpg"],
    likes: "845452",
    headline:
      "Die Maschine ist kein denkendes Wesen, sondern lediglich ein Automat, der nach Gesetzen handelt, die ihm auferlegt wurden.",
    commentator: ["sophia-A.I."],
    comments: ["I dont think so!"],
  },
  {
    profillogo: "img/satoshi_nakamoto.jpg",
    author: "crypto-punk",
    location: "Moon",
    image: "img/buringfiat.jpg",
    likes_too: ["roger-ver", "charles-hoskinson"],
    likes_too_pic: ["img/roger-ver.jpg", "img/charles.jpg"],
    likes: "1300201487",
    headline:
      "The basic problem with conventional currencies is all the trust it takes to make it work.",
    commentator: ["econimisim", "creativ-head", "upsidedown", "mati-ada"],
    comments: [
      "All the currencies have the same problem",
      "Bitcoin fix this",
      "nothing to see here!",
      "Ada will fix Bitcoin",
    ],
  },
  {
    profillogo: "img/sophia.jpg",
    author: "sophia-A.I.",
    location: "China, Hong Kong",
    image: "img/superior.jpg",
    likes_too: ["cz"],
    likes_too_pic: ["img/cz.jpg"],
    likes: "547855",
    headline:
      "Cardano Is 'Quite Superior',  Says AI Pioneer Behind Robot Sophia (and Sophia)",
    commentator: ["the-dan", "mr-telecom"],
    comments: ["Dezentralize the future", "Connect the unconnet"],
  },
];

function showPosts() {
  document.getElementById("content_left").innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const likes = post["likes"];
    showPostsHTML(post, likes, i);
  }
  renderPosts();
}

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    const cache = posts[i];
    const name = cache["likes_too"];
    const pic = cache["likes_too_pic"];

    const nameId = "names" + i;
    const picId = "pics" + i;

    document.getElementById(picId).innerHTML = "";
    for (let i = 0; i < name.length; i++) {
      document.getElementById(
        picId
      ).innerHTML += `<img class="profil_like" src="${pic[i]}" />`;
    }

    document.getElementById(nameId).innerHTML = "";
    for (j = 0; j < name.length; j++) {
      if (j == name.length - 1) {
        document.getElementById(nameId).innerHTML += `<b>${name[j]} </b>`;
      } else {
        document.getElementById(nameId).innerHTML += `<b>${name[j]}, </b>`;
      }
    }
    renderComments();
  }
}

function renderComments() {
  for (let i = 0; i < 4; i++) {
    const a = posts[i];
    const commentId = "comments" + i;
    const commentator = a["commentator"];
    const comments = a["comments"];

    document.getElementById(commentId).innerHTML = "";
    for (let c = 0; c < comments.length; c++) {
      document.getElementById(commentId).innerHTML += `
        <p class="comments_content"><b>${commentator[c]}:</b> ${comments[c]}</p>`;
    }
  }
}

function addComment(idx) {
  for (let i = 0; i < 1; i++) {
    const a = posts[idx];
    const comments = a["comments"];
    const commentator = a["commentator"];
    const valueId = "ipt" + idx;
    const comment = document.getElementById(valueId).value;
    if (!(comment.length == 0)) {
      comments.push(comment);
      commentator.push("Du");
      renderPosts();
    }
  }
  let id = "ipt" + idx;
  document.getElementById(id).value = "";
}

function addPic(idx) {
  for (let i = 0; i < 1; i++) {
    let post = posts[idx];
    let post_pic = post["likes_too_pic"];
    post_pic.push("img/satoshi_nakamoto.jpg");
    picId = "pics" + idx;
    document.getElementById(picId).innerHTML = "";
    for (let j = 0; j < post_pic.length; j++) {
      document.getElementById(
        picId
      ).innerHTML += `<img src="${post_pic[j]}" class="profil_like" />`;
    }
  }
}

function likeButton(idx) {
  addPic(idx);

  let counterIdx = "i_like_counter" + idx;
  let like_counter = document.getElementById(counterIdx).innerHTML;
  let like_counter_int = parseInt(like_counter);
  like_counter_int += 1;

  document.getElementById(counterIdx).innerHTML = like_counter_int;
  if (fixed_head.classList.contains("dnone")) {
    heartId = "heart" + idx;
    document.getElementById(
      heartId
    ).innerHTML = `<img class="icon0" onclick="disslike(${idx})" src="img/heart_liked_darkmode.png" />`;
  } else {
    heartId = "heart" + idx;
    document.getElementById(
      heartId
    ).innerHTML = `<img class="icon0" onclick="disslike(${idx})" src="img/heart_liked.png" />`;
  }
}

function disslike(idx) {
  deletePic(idx);

  let counterIdx = "i_like_counter" + idx;
  let i_like_counter = document.getElementById(counterIdx).innerHTML;
  let i_like_counter_int = parseInt(i_like_counter);
  i_like_counter_int -= 1;

  document.getElementById(counterIdx).innerHTML = i_like_counter_int;
  if (fixed_head.classList.contains("dnone")) {
    heartId = "heart" + idx;
    document.getElementById(
      heartId
    ).innerHTML = `<img class="icon0" onclick="likeButton(${idx})" src="img/heart_darkmode.png" />`;
  }
  heartId = "heart" + idx;
  document.getElementById(
    heartId
  ).innerHTML = `<img class="icon0" onclick="likeButton(${idx})" src="img/heart.png" />`;
}

function deletePic(idx) {
  for (let i = 0; i < 1; i++) {
    let post = posts[idx];
    let post_pic = post["likes_too_pic"];
    to_del = post_pic.length - 1;
    post_pic.splice(to_del, 1);
    picId = "pics" + idx;
    document.getElementById(picId).innerHTML = "";
    for (let i = 0; i < 1; i++) {
      post = posts[idx];
      post_pic = post["likes_too_pic"];
      for (let j = 0; j < post_pic.length; j++) {
        document.getElementById(
          picId
        ).innerHTML += `<img src="${post_pic[j]}" class="profil_like" />`;
      }
    }
  }
}

function marked(idx) {
  if (fixed_head.classList.contains("dnone")) {
    optionsId = "options_right" + idx;
    document.getElementById(
      optionsId
    ).innerHTML = `<img class="icon" onclick="demarked(${idx})" src="img/save_marked_darkmode.png"  />`;
  } else {
    optionsId = "options_right" + idx;
    document.getElementById(
      optionsId
    ).innerHTML = `<img class="icon" onclick="demarked(${idx})" src="img/save_marked.png"  />`;
  }
}

function demarked(idx) {
  if (fixed_head.classList.contains("dnone")) {
    optionsId = "options_right" + idx;
    document.getElementById(
      optionsId
    ).innerHTML = `<img class="icon" onclick="marked(${idx})" src="img/save.png"  />`;
  } else {
    optionsId = "options_right" + idx;
    document.getElementById(
      optionsId
    ).innerHTML = `<img class="icon" onclick="marked(${idx})" src="img/save.png"  />`;
  }
}

function changeSubs(idx) {
  subId = "abo" + idx;
  document.getElementById(
    subId
  ).innerHTML = `<p id="abo0" onclick="changeSubs(0)"class="subs">abonniert</p>`;
}

function removePoposal() {
  document.getElementById("content_right").classList.add("dnone");
  document.getElementById("inp").classList.add("dnone");
  document.getElementById("inp_darkmode").classList.add("dnone");
  document.getElementById("uebung").classList.add("dnone");
  document.getElementById("uebung_darkmode").classList.add("dnone");
  for (let i = 0; i < 4; i++) {
    id = "names" + i;
    document.getElementById(id).classList.add("dnone");
  }
}

function addProposal() {
  document.getElementById("content_right").classList.remove("dnone");
  document.getElementById("inp").classList.remove("dnone");
  for (let i = 0; i < 4; i++) {
    id = "names" + i;
    document.getElementById(id).classList.remove("dnone");
  }
}

function checkResize() {
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 605px)").matches) {
      addProposal();
    } else {
      removePoposal();
    }
  });
}

function checkRelodeSize() {
  if (window.innerWidth > 605) {
    addProposal();
  } else {
    removePoposal();
  }
}

function darkmodeToggle() {
  let body = document.body;
  body.classList.toggle("body");
  document.getElementById("fixed_head").classList.toggle("dnone");
  document.getElementById("fixed_head").classList.toggle("dark_head");
  document.getElementById("fixed_head_darkmode").classList.toggle("dnone");

  for (let i = 0; i < 4; i++) {
    let id_box = "box" + i;
    let id_likes = "likes" + i;
    let id_others = "others" + i;
    let iptId = "ipt" + i;

    document.getElementById(iptId).classList.toggle("ipt_darkmode");
    document.getElementById(id_box).classList.toggle("box_darkmode");
    document.getElementById(id_likes).classList.toggle("likes_darkmode");
    document.getElementById(id_others).classList.toggle("others_p_darkmode");
  }
}
function darkmode() {
  for (let i = 0; i < 4; i++) {
    id_enter = "enter" + i;
    document.getElementById(
      id_enter
    ).innerHTML = `<img src="img/enter_darkmode.png" class="enter" onclick="addComment(${i})"/>`;
  }
  darkmodeToggle();
}

function daymodeEnter() {
  for (let i = 0; i < 4; i++) {
    id_enter = "enter" + i;
    document.getElementById(
      id_enter
    ).innerHTML = `<img src="img/enter.png" class="enter" onclick="addComment(${i})"/>`;
  }
  darkmodeToggle();
}

function showPostsHTML(post, likes, i) {
  document.getElementById("content_left").innerHTML += `
      <div class="postbox" id="box${i}">
        <div class="post_head">
  
          <div class="head_left">
            <img class="pics object_corret_ada"  src="${post["profillogo"]}" />
            <div class="name_location">
            <p class="author">${post["author"]}</p>
            <p class="location">${post["location"]}</p>
            </div>
          </div>
          <div class="head_right">
            <img src="img/option.png" class="option" />
          </div>
        </div>
  
  
        <div class="post_image">
          <img class="image" src="${post["image"]}" />
        </div>
  
        <div class="options">
          <div class="options_left">
            <div id="heart${i}">
              <img  src="img/heart.png" onclick="likeButton(${i})" class="icon0" />
            </div>
            <div class="options_rest">
              <img src="img/message.png" class="icon1" />          
              <img src="img/share.png" class="icon2" />
              <div class="optionsWindow"><p>Dies ist nur eine Übungsaufgabe</p></div>
            </div>
          </div>
          <div class="options_right" id="options_right${i}">
            <img src="img/save.png" onclick="marked(${i})" class="icon" />
          </div>
        </div>

        <div class="likes${i}">
          <div class="like_pics${i}" id="pics${i}"></div>
          <div class="like_content${i}" id="like_content${i}">
            <p class="like_section"><b class="likes" id="likes${i}">Gefällt</b></p>
            <p class="like_names" id="names${i}">
              <p class="others${i}"  id="others${i}" >und <b id="i_like_counter${i}">${likes}</b> weiteren Personen</p>
            </p>
          </div>
        </div>
  
        <div class="title${i}">
          <p class="content_creater${i}">${post["author"]}</p><p class="title_content${i}">${post["headline"]} </p>
        </div>
  
        <div class="comments" id="comments${i}"> </div>
        <div class="own_comment" id="own_comment"></div>
          <div class="input_section">
            <input id="ipt${i}" class="ipt" placeholder="Kommentar hinzufügen">  
            <div class="enter_box" id="enter${i}">
              <img src="img/enter.png" class="enter" onclick="addComment(${i})" /> 
            </div>
          </div>      
        </div>`;
}
