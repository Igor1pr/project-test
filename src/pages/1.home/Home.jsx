const Home = () => {
  return (
    <div>

      <h1 class="flex h-16 items-center justify-center bg-gray-600 text-white">Home</h1>

      <div className="flex flex-col items-center">

        <div class="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://media.istockphoto.com/id/1299861504/pt/foto/kaliningrad-russia-pasta-on-supermarket-shelves.jpg?s=612x612&w=0&k=20&c=XCabHZjj2bpkFTrS7MM007JWkU5ROAfHZw4kfnY1C04=" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Produtos</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Veja a lista de produtos, filtre como quiser e veja a disponibilidade.</p>
            <a href="/products" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver Produtos
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ marginBottom: '5rem' }}>
          <a href="#">
            <img class="rounded-t-lg" src="https://amapa.ind.br/instalacoes/imagens-tipo/instalacoes-armazenagens/prateleiras-para-supermercado.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comprar</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Monte a sua lista de compras e ganhe tempo com a melhor rota.</p>
            <a href="/buy" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Começar compra
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home