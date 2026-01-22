
import { Car, BlogPost } from './types';

export const FEATURED_CARS: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'M5 Competition',
    year: 2023,
    price: 124900,
    specs: '4.4L V8 Twin-Turbo',
    mileage: '12,400 KM',
    transmission: 'Automático',
    fuelType: 'Gasolina',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU06qCd8lIpgZgExXRzRnzrez5BRIBLfZ2pbt8WrHLxlLAtNSaCEjhWWZTOBj7kYNPVwn1wylLCTS4psw9Gw_pu7b_CZhb3blNM8Uw2CcUz_WSiEN49WcuyvG0QHi2E-1izZQ17AqOowv7JyBrSlVstYvr_iZ0QLinXP-NwF8utKJbpebTShnAf3AhE7TPZLlwbDFyfYk_Nq0LuuKQeHg9Dg6SGodOTiHQ7OkgwUVsxz03JlzW8DY5yYQnfDW966sbUJ-_fegXkS6M',
    tag: 'NUEVO INGRESO',
    tagColor: 'bg-primary'
  },
  {
    id: '2',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2022,
    price: 142500,
    specs: 'Flat-6 Twin-Turbo',
    mileage: '5,800 KM',
    transmission: 'PDK',
    fuelType: 'Gasolina',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc2jWcrhztMdF_A0NVOK1kDwKLpH9T3h26JOYsGmSNE6ITSEQx4b7YzBx8-2F0zvxNkQ9TwmVpGNj1H-nqFV4k1LQhaxf10tMcJJEqUuCGUL6i83-GJBzjOp9153UbwpauhrkAGck__sdtUoYOX0cLAjLnxmTPlw5ZxoNa3mNKakQ_eD0pex-gh8EDlmvtb5Y_qL1PmvnUAsRVNGiDkcwbZlE46NLTMH7wrrF-wFkJ8g2dKgbUdCnOR4mZzhIFbLJA28kDZWA3DCqf',
    tag: 'IMPORTADO',
    tagColor: 'bg-green-500'
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'RS6 Avant',
    year: 2021,
    price: 118000,
    specs: 'V8 TFSI Quattro',
    mileage: '28,000 KM',
    transmission: 'Automático',
    fuelType: 'Híbrido',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKz_QJh05k9cKEOiDgt1B6c7cP2EBTbnCogSRNaLdiJm18-W-IMUkATFfCTy23vH5qK7ZYk-tmb12O1yGcuHTUOm0S2fC37-N6XrmZl3ga0SlOmsJEAElPOk_BM5KrqDozTcO8V87gQ2vg86DfP3dVOahVe1Cp9hg2rsu7PQLyiSUteSk9J-bu1xaW3O3TnkUa0ykCVocniFUCQ2lJ9VATsKGHHgJ1ZHv2jDB4YvwTjajpw9UGYh0ALw4vuz3yL9Ml4dXOYxHNjikO'
  }
];

export const LATEST_NEWS: BlogPost[] = [
  {
    id: '1',
    category: 'Tendencias',
    readTime: '5 min lectura',
    title: 'El futuro de los autos eléctricos en 2024',
    excerpt: 'Analizamos las nuevas tecnologías de baterías que están revolucionando el mercado de lujo...',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQEPJ-JeiWj7wg4wX3GjB987L7s2YNpJCgP_vUcZL3GyROEuntC3EnnScU2snjVF1NANG_Ex7fJSVAbR9e1rwVJbkpCuteipxSUtj723AY3d7GthhuqniMNBAwlO9n_-5B-gggWQNTcFmeDNrDquEHUQvspOUT3Mv1O8mWXopmrxCd1aQ7A3ki0EOL6eXyGcxSrsUVEGSc5LvASYVI5YiZT8eKf5LvM4CvfZbXyAPASJbF3gyOtWPQYTBMaaYlJXDniwS2UTXzLyoD'
  },
  {
    id: '2',
    category: 'Guías',
    readTime: '8 min lectura',
    title: 'Cómo mantener el valor de reventa de tu premium',
    excerpt: 'Pequeños detalles que marcan la diferencia al momento de valuar tu vehículo de gama alta...',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOmIHaciMEyAte-Uv3HFyD_HAtzauFzeRPtfxMCOoAaSHDXDvBIHT_8vV_pfDcfiGVk6ZYHOxmUYGXRwK40LhkfLq6pwKbifnmYgUnEuca25NEe9wYOiwDPiyAf5PZ5vCItwuGVRz1OUWYnzaVO7dfEDWjshchCNnuGWEcPACUo5gpW5Zlrgsmtz9ugMU2Ow8Lkeg94cT4WOsMe1pvIVoAp8HE6XOaPfbffy52M7hfx9AS8_CzWtl7IN62LBmzCJqAKVfMTqNdFsKn'
  },
  {
    id: '3',
    category: 'Importación',
    readTime: '6 min lectura',
    title: 'Guía definitiva para importar desde Alemania',
    excerpt: 'Todo lo que necesitas saber sobre trámites, impuestos y logística de transporte marítimo...',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFoQYVw9HQ0Y4GdUuNoJo-0Ehx5adoW32l99SYOYakWJe_zePVBpELAIvcwak5SmZLuie3N3qJgzLLnkDQSshyQagxUh_ZjZrBWX03wLaOhhbpJZq0-uX4_IcrolwyX_mgVuDH2M9kLOVxJzBVyioCnhlZSqD1LqKUVL_1uL8e6IZtPNTUMsFN0sLEJo-VW9mRtZs6uopHKHDgKArKef5A_LHc2O8EMsARloNFaLOONU_cS4JiHbnA-0K0whI8cXDB8_hADIN2pACi'
  }
];
