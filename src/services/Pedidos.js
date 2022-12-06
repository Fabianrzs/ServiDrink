const tienda = document.getElementById('tienda')

form.addEventListener("submit", e => {
  if (tienda.value.length < 4) {
    e.preventDefault()
    alert("Nombre muy corto");
  }
})
