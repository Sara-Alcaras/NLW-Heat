const LinksSocialMedia = {
  github: 'Sara-Alcaras',
  linkedin: 'saraalcaras',
  instagram: 's4mus'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` /* pega a variavel e troca pelo valor que está guardando*/

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) // fetch = entra na url acima e pega as informações
    .then(response => response.json()) // then: o retorno vai para dentro dele, informa que a resposta é um arquivo json
    .then(data => {
      // armazena a resposta em json
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/* camelCase 
       PascalCase 
       snake_case 
       
      document.getElementById('userName').userName.
      textContent = 'Samuel' pega o id do nome github e troca o nome 

      ARROW FUNCTIONS - forma mais rapida de pegar os argumentos de uma função, elimina a necessidade de criar uma função (argumento => )
      vira uma função anonima

    */
