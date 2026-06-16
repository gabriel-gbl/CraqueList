console.log("JS carregou!");


const formCadastro = document.querySelector("#ContainerFormCad");

function getUsuarios(){
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

console.log(getUsuarios());

function Cadastro(){

    formCadastro.addEventListener("submit", function(e){
        e.preventDefault();

        console.log(getUsuarios());
        const Dados = new FormData(this);
        const nome = Dados.get("nome");
        const email = Dados.get("email");
        const senha = Dados.get("senha");

        const usuarios = getUsuarios();

        if( !nome || !email || !senha ){
            confirm("Preencha todos os campos!");
            return
        }

        if( !email.includes("@") || !email.includes(".")){
            confirm("Digite um email válido!");
            return;
        }

        if (senha.length < 6){
            confirm("A senha deve contêr no mínimo 6 caracteres!");
            return
        }
    
        if(usuarios.find(user => user.email === email)) {
            alert("Email já cadastrado!");
            window.location.href = "./pages/login.html";
            console.log(getUsuarios());
            return;
        }


        usuarios.push({ nome , email , senha });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        confirm("Email cadastrado com Sucesso!");
        window.location.href = "./pages/login.html";
        console.log(getUsuarios());
        
    });

}
Cadastro()
