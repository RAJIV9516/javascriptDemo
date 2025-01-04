async function dataFetching(){
    let showdata = document.querySelector('#showdata')
    let url =""
    let r = await fetch(url)
    let a = await r.json()
    let fdata = a.map((e)=>`
    <tr>
      <td> ${e.id}</td>
      <td> ${e.title}</td>
    </tr>
    `).join("")
    showdata.innerHTML = data
}
dataFetching()