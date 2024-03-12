const products = [
  {
    id: 1,
    name: 'Sal Lebre Marinho 1kg',
    href: '#',
    price: 'R$ 2,58',
    imageSrc: 'https://atacadaobr.vtexassets.com/arquivos/ids/268713/g.jpg?v=638379666336300000',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Arroz Cristal 5kg',
    href: '#',
    price: 'R$ 32,90',
    imageSrc: 'https://cristalalimentos.com.br/wp-content/uploads/2016/11/ArrozCristal-5kg.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Feijão Carioca Urbano 1kg',
    href: '#',
    price: 'R$ 11,49',
    imageSrc: 'https://imgprd.martinsatacado.com.br/catalogoimg/27127/01_27127_01.jpg?v=070320244623;ims=1000x',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Açucar Cristal Cristal de Minas 5kg',
    href: '#',
    price: 'R$ 16,99',
    imageSrc: 'https://cdn.awsli.com.br/2500x2500/538/538189/produto/20807178/4b84271b0e.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Omo Lavagem Perfeita 800g',
    href: '#',
    price: 'R$ 16,89',
    imageSrc: 'https://d1rpfggbb8iuri.cloudfront.net/Custom/Content/Products/11/69/1169276_sabao-em-po-800g-omo-lavagem-perfeita_m10_638173995121213998.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Amaciante Downy Brisa de Verão Concentrado',
    href: '#',
    price: 'R$ 11,90',
    imageSrc: 'https://static.paodeacucar.com/img/uploads/1/597/22110597.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Água Sanitária Ypê 2L',
    href: '#',
    price: 'R$ 6,39',
    imageSrc: 'https://superprix.vteximg.com.br/arquivos/ids/198772-600-600/Agua-Sanitaria-Ype-Leve-2L-Pague-18L.jpg?v=637611973516500000',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'Limpador Limpeza Pesada Veja 500ml',
    href: '#',
    price: 'R$ 12,90',
    imageSrc: 'https://protelimp.com.br/wp-content/uploads/limpador-limpeza-pesada-veja-500ml-original.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-gray-200">
      <h1 class="flex h-16 items-center justify-center bg-gray-600 text-white">Produtos</h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-72 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>

      
    </div>
  )
}
