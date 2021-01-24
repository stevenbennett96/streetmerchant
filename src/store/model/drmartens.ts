import { Store } from './store';

export const DrMartens: Store = {
    currency: '£',
    labels: {
        inStock: {
            container: '.stock-inStock.product-size',
            text: ['8'],
        },
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url:
                'https://www.drmartens.com/uk/en_gb/p/26205001',
        },
    ],
    name: 'drmartens',
};