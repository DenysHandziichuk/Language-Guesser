const languageLogos = {
  "1c": "",
  "abnf": "",
  "accesslog": "",
  "actionscript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/actionscripta/actionscripta-original.svg",
  "ada": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ada/ada-original.svg",
  "apache": "",
  "applescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/applescript/applescript-original.svg",
  "arduino": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  "armasm": "",
  "asciidoc": "",
  "asm6502": "",
  "aspnet": "",
  "autohotkey": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autohotkey/autohotkey-original.svg",
  "bash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "basic": "",
  "c": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "cal": "",
  "capnproto": "",
  "ceylon": "",
  "clojure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
  "coffeescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg",
  "cpp": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "crystal": "",
  "csharp": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "d": "",
  "dart": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  "delphi": "",
  "diff": "",
  "django": "",
  "dockerfile": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "elixir": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  "elm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-original.svg",
  "erb": "",
  "erlang": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg",
  "fsharp": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg",
  "go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "groovy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
  "haskell": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
  "html": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "http": "",
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "json": "",
  "julia": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
  "kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "latex": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
  "less": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-original.svg",
  "lisp": "",
  "lua": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
  "makefile": "",
  "markdown": "",
  "matlab": "",
  "nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  "nim": "",
  "objectivec": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-original.svg",
  "ocaml": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg",
  "perl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
  "php": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "plaintext": "",
  "powershell": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
  "prolog": "",
  "protobuf": "",
  "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "r": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  "ruby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "rust": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  "scala": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  "shell": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "sql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "swift": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "vala": "",
  "vbnet": "",
  "vim": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  "xml": "",
  "yaml": ""
};


function detectLanguage() {
    const code = document.getElementById('textarea').value;
    const result = hljs.highlightAuto(code);
    const lang = result.language || "Unknown";


    const highlightedCode = document.getElementById("highlightedCode");
    highlightedCode.innerHTML = result.value;
    highlightedCode.className = lang;
  
    document.getElementById("langName").textContent = lang;

    const logo = languageLogos[lang.toLowerCase()];
    const langImage = document.getElementById("langImage");

  if (logo) {
    langImage.src = logo;
    langImage.style.display = "inline-block";
  } else {
    langImage.style.display = "none";
  }

  document.getElementById("modal").style.display = "flex";
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
