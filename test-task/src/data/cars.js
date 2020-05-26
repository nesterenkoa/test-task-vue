import moment from 'moment';

export default [
  {
    id: 1,
    image: 'https://bmw.kharkov.ua/files/images/units/big/bmw-x2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
    price: 350,
    number: 12345,
    model: 'BMW-X2',
    transmission: 'automatic',
    color: 'yellow',
    orders: [
      {
        id: '0',
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        status: 'reserved'
      },
      {
        id: '1',
        startDate: moment().add(10, 'days'),
        endDate: moment().add(15, 'days'),
        status: 'completed'
      }
    ]
  },
  {
    id: 2,
    image: 'https://bmw.kharkov.ua/files/images/units/big/WB_bmw-x4.png',
    title: 'Item - 2',
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore i  beatae vitae dicta sunt explicabo.',
    price: 270,
    number: 14975,
    model: 'BMW-X4',
    transmission: 'automatic',
    color: 'red',
    orders: [
      {
        id: '2',
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        status: 'reserved'
      },
      {
        id: '3',
        startDate: moment().add(10, 'days'),
        endDate: moment().add(15, 'days'),
        status: 'completed'
      }
    ]
  },
  {
    id: 3,
    image: 'https://bmw.kharkov.ua/files/images/units/big/j1_bmw-x3.png',
    title: 'Item - 3',
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore i  beatae vitae dicta sunt explicabo.',
    price: 500,
    number: 19975,
    model: 'BMW-X3',
    transmission: 'automatic',
    color: 'blue',
    orders: [
      {
        id: '4',
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        status: 'reserved'
      },
      {
        id: '5',
        startDate: moment().add(10, 'days'),
        endDate: moment().add(15, 'days'),
        status: 'completed'
      }
    ]
  },
  {
    id: 4,
    image: 'https://bmw.kharkov.ua/files/images/units/big/bmw-x7.png',
    title: 'Item - 4',
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore i  beatae vitae dicta sunt explicabo.',
    price: 230,
    number: 17975,
    model: 'BMW-X7',
    transmission: 'automatic',
    color: 'black',
    orders: [
      {
        id: '6',
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        status: 'reserved'
      },
      {
        id: '7',
        startDate: moment().add(13, 'days'),
        endDate: moment().add(5, 'days'),
        status: 'completed'
      }
    ]
  },
  {
    id: 5,
    image: 'https://bmw.kharkov.ua/files/images/units/big/bmw-x5.png',
    title: 'Item -52',
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore i  beatae vitae dicta sunt explicabo.',
    price: 698,
    number: 87475,
    model: 'BMW-X5',
    transmission: 'automatic',
    color: 'brown',
    orders: [
      {
        id: '8',
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        status: 'reserved'
      },
      {
        id: '9',
        startDate: moment().add(8, 'days'),
        endDate: moment().add(11, 'days'),
        status: 'completed'
      }
    ]
  },
  {
    id: 6,
    image: 'https://bmw.kharkov.ua/files/images/units/big/bmw-x6.png',
    title: 'Item -52',
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore i  beatae vitae dicta sunt explicabo.',
    price: 698,
    number: 87475,
    model: 'BMW-X6',
    transmission: 'automatic',
    color: 'brown',
    orders: [
      {
        id: '10',
        startDate: moment(),
        endDate: moment().add(1, 'days'),
        status: 'reserved'
      },
      {
        id: '11',
        startDate: moment().add(10, 'days'),
        endDate: moment().add(15, 'days'),
        status: 'completed'
      }
    ]
  }
];
